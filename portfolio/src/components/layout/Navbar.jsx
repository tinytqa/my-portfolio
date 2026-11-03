"use client";

import TabLink from "./TabLink";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useContent, useLang, useT, LANGS } from "@/lib/i18n";
import { BadgeCheck, Moon, Sun } from "lucide-react";

// The inline script in layout.js applies the saved theme before paint; this only flips it
function toggleTheme() {
  const root = document.documentElement;
  const dark = root.dataset.theme !== "dark";
  if (dark) root.dataset.theme = "dark";
  else delete root.dataset.theme;
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
}

export default function Navbar() {
  const { PERSONAL_INFO, NAV_LINKS } = useContent();
  const { lang, setLang } = useLang();
  const t = useT();
  const pathname = usePathname();

  // Each tab is its own page; the current one is highlighted
  const navLinks = NAV_LINKS.map((link) => {
    const active = pathname === link.href;
    return (
      <TabLink
        key={link.href}
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={`shrink-0 px-3 xl:px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
          active
            ? "bg-accent text-on-accent font-semibold"
            : "text-stone-700 hover:text-accent hover:bg-accent/10"
        }`}
      >
        {link.label}
      </TabLink>
    );
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center gap-3 px-4 py-4 md:py-6 pointer-events-none"
    >
      <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        {/* Brand / Logo */}
        <TabLink
          href="/"
          aria-label={`${PERSONAL_INFO.fullName} — ${t.nav.home}`}
          className="shrink-0 flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full glass-pill border border-accent/20 hover:border-accent/50 transition-all duration-300 group"
        >
          {/* "QA": the initials of Quỳnh Anh, and Quality Assurance */}
          <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-on-accent text-xs font-extrabold tracking-tight shadow-[0_4px_14px_rgba(4,120,87,0.15)] group-hover:scale-105 transition-transform">
            QA
          </span>
          <span className="whitespace-nowrap font-semibold text-sm tracking-wide text-stone-900 group-hover:text-accent transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </TabLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 px-2 xl:px-3 py-1.5 rounded-full glass-pill border border-accent/15">
          {navLinks}
        </nav>

        <div className="shrink-0 flex items-center gap-2">
        {/* Language switch */}
        <div
          role="group"
          aria-label={t.nav.switchTo}
          className="flex items-center p-1 rounded-full glass-pill border border-accent/20 text-[11px] font-mono font-semibold"
        >
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`h-7 px-2.5 rounded-full uppercase transition-colors cursor-pointer ${
                lang === code ? "bg-accent text-on-accent" : "text-stone-600 hover:text-accent"
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Theme switch */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={t.nav.toggleTheme}
          title={t.nav.toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full glass-pill border border-accent/20 text-stone-600 hover:text-accent transition-colors cursor-pointer"
        >
          <Moon className="w-4 h-4 dark:hidden" />
          <Sun className="w-4 h-4 hidden dark:block" />
        </button>

        {/* Live Status indicator — only the dot while the desktop nav needs the room */}
        <div
          title={PERSONAL_INFO.status}
          aria-label={PERSONAL_INFO.status}
          className="hidden sm:flex items-center gap-2 px-3 lg:px-2.5 2xl:px-3.5 py-2 lg:py-2.5 2xl:py-2 rounded-full glass-pill border border-accent/20 text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-stone-700 font-mono whitespace-nowrap hidden sm:inline lg:hidden 2xl:inline text-[11px]">
            {PERSONAL_INFO.status}
          </span>
          <BadgeCheck className="w-3 h-3 text-accent hidden sm:inline lg:hidden 2xl:inline" />
        </div>
        </div>
      </div>

      {/* Mobile / tablet navigation — scrolls horizontally */}
      <nav className="lg:hidden w-full max-w-5xl mx-auto pointer-events-auto">
        <div className="flex gap-1 p-1.5 max-w-full w-fit mx-auto overflow-x-auto rounded-full glass-pill border border-accent/15">
          {navLinks}
        </div>
      </nav>
    </motion.header>
  );
}
