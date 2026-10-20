"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import * as VI_CONTENT from "@/lib/constants";
import { EN, EN_ALBUM_LABELS } from "@/lib/content-en";
import { ALBUMS } from "@/lib/gallery";
import { UI } from "@/lib/ui-strings";

export const LANGS = ["vi", "en"];
const STORAGE_KEY = "lang";

/**
 * Overlay translated text onto the Vietnamese source.
 * Objects merge by key; arrays of objects merge by index; anything else is replaced.
 */
function mergeContent(base, override) {
  if (override === undefined) return base;
  if (Array.isArray(base) && Array.isArray(override)) {
    const objectArray = base.some((item) => item && typeof item === "object");
    if (!objectArray) return override;
    return base.map((item, i) => mergeContent(item, override[i]));
  }
  if (base && typeof base === "object" && override && typeof override === "object") {
    const out = { ...base };
    for (const key of Object.keys(override)) out[key] = mergeContent(base[key], override[key]);
    return out;
  }
  return override;
}

const CONTENT = {
  vi: { ...VI_CONTENT, ALBUMS },
  en: {
    ...mergeContent({ ...VI_CONTENT }, EN),
    ALBUMS: ALBUMS.map((a) => ({ ...a, label: EN_ALBUM_LABELS[a.id] ?? a.label })),
  },
};

// --- Language store: saved choice → browser language → Vietnamese ---------------------
// Kept outside React so useSyncExternalStore can read it; the server always renders "vi".
const listeners = new Set();
let memoryLang = null; // fallback when localStorage is unavailable (private mode, blocked storage)

function readLang() {
  let saved = memoryLang;
  try {
    saved = localStorage.getItem(STORAGE_KEY) ?? saved;
  } catch {}
  if (LANGS.includes(saved)) return saved;
  return navigator.language?.toLowerCase().startsWith("vi") ? "vi" : "en";
}

function subscribe(callback) {
  listeners.add(callback);
  window.addEventListener("storage", callback); // keep other tabs in sync
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function writeLang(next) {
  memoryLang = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {}
  listeners.forEach((callback) => callback());
}

const LanguageContext = createContext({ lang: "vi", setLang: () => {} });

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "vi");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => writeLang(next), []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Page content (experiences, projects…) in the current language. */
export function useContent() {
  const { lang } = useLang();
  return CONTENT[lang];
}

/** Short interface strings (buttons, labels, section titles) in the current language. */
export function useT() {
  const { lang } = useLang();
  return UI[lang];
}
