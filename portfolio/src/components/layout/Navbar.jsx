"use client";

import TabLink from "./TabLink";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useContent, useLang, useT, LANGS } from "@/lib/i18n";
import { BadgeCheck } from "lucide-react";

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
        className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
          active
            ? "bg-[#4ADE80] text-[#0B1110] font-semibold"
            : "text-slate-300 hover:text-[#4ADE80] hover:bg-[#4ADE80]/10"
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
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand / Logo */}
        <TabLink
          href="/"
          aria-label={`${PERSONAL_INFO.fullName} — ${t.nav.home}`}
          className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full glass-pill border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-300 group"
        >
          {/* "QA": the initials of Quỳnh Anh, and Quality Assurance */}
          <span className="w-8 h-8 rounded-full bg-[#4ADE80] flex items-center justify-center text-[#0B1110] text-xs font-extrabold tracking-tight shadow-[0_0_14px_rgba(74,222,128,0.45)] group-hover:scale-105 transition-transform">
            QA
          </span>
          <span className="font-semibold text-sm tracking-wide text-slate-100 group-hover:text-[#4ADE80] transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </TabLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-pill border border-[#4ADE80]/15">
          {navLinks}
        </nav>

        <div className="flex items-center gap-2">
        {/* Language switch */}
        <div
          role="group"
          aria-label={t.nav.switchTo}
          className="flex items-center p-1 rounded-full glass-pill border border-[#4ADE80]/20 text-[11px] font-mono font-semibold"
        >
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`h-7 px-2.5 rounded-full uppercase transition-colors cursor-pointer ${
                lang === code ? "bg-[#4ADE80] text-[#0B1110]" : "text-slate-400 hover:text-[#4ADE80]"
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Live Status indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full glass-pill border border-[#4ADE80]/20 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
          </span>
          <span className="text-slate-300 font-mono hidden sm:inline text-[11px]">
            {PERSONAL_INFO.status}
          </span>
          <BadgeCheck className="w-3 h-3 text-[#4ADE80] hidden sm:inline" />
        </div>
        </div>
      </div>

      {/* Mobile / tablet navigation — scrolls horizontally */}
      <nav className="lg:hidden w-full max-w-5xl mx-auto pointer-events-auto">
        <div className="flex gap-1 p-1.5 max-w-full w-fit mx-auto overflow-x-auto rounded-full glass-pill border border-[#4ADE80]/15">
          {navLinks}
        </div>
      </nav>
    </motion.header>
  );
}
