"use client";

import { Smile } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

// Fixed tilts so server and client render the same stickers
const TILTS = [-3, 2, -1.5, 3, -2.5, 1.5, -1, 2.5];

// Sticker looks, cycled per word
const STYLES = [
  "bg-[#4ADE80] text-[#0B1110] border-[#4ADE80]",
  "bg-[#0B1110]/80 text-[#86EFAC] border-[#4ADE80]/40",
  "bg-[#86EFAC]/15 text-white border-[#86EFAC]/30",
];

export default function PersonalityCard() {
  const { PERSONALITY } = useContent();
  const t = useT();
  let n = 0; // running index so the tilt/style pattern continues across groups

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-500 overflow-hidden">
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#4ADE80]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex items-center gap-2 mb-1">
        <Smile className="w-4 h-4 text-[#4ADE80]" />
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">{t.personality.eyebrow}</span>
      </div>
      <h3 className="relative text-2xl font-bold text-white tracking-tight mb-2">{t.personality.title}</h3>
      <p className="relative text-sm text-slate-400 leading-relaxed mb-6">{t.personality.body}</p>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {PERSONALITY.map((group) => (
          <div key={group.id}>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">{t.personality[group.id]}</p>
            <ul className="flex flex-wrap gap-3">
              {group.words.map(({ emoji, label }) => {
                const i = n++;
                return (
                  <li
                    key={label}
                    style={{ "--tilt": `${TILTS[i % TILTS.length]}deg` }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold shadow-[0_6px_18px_rgba(0,0,0,0.35)] cursor-default select-none transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] [transform:rotate(var(--tilt))] hover:[transform:rotate(0deg)_scale(1.1)] ${
                      STYLES[i % STYLES.length]
                    }`}
                  >
                    <span aria-hidden="true">{emoji}</span>
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
