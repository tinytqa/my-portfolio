"use client";

import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";
import TabLink from "./TabLink";

/** Page shell for one navbar tab: clears the fixed navbar and links to the previous / next tab. */
export default function SectionPage({ children }) {
  const { NAV_LINKS } = useContent();
  const t = useT();
  const pathname = usePathname();
  const index = NAV_LINKS.findIndex((link) => link.href === pathname);
  const prev = index > 0 ? NAV_LINKS[index - 1] : { label: t.nav.homeLabel, href: "/" };
  const next = NAV_LINKS[index + 1];

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-40 lg:pt-32 pb-16">
      {children}

      <nav aria-label={t.nav.pager} className="mt-16 pt-8 border-t border-[#4ADE80]/10 flex items-center justify-between gap-4">
        <TabLink
          href={prev.href}
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-pill border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 text-sm text-slate-300 hover:text-[#4ADE80] transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>{prev.label}</span>
        </TabLink>
        {next && (
          <TabLink
            href={next.href}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4ADE80] text-[#0B1110] font-semibold text-sm hover:bg-[#86EFAC] transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)]"
          >
            <span>{next.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </TabLink>
        )}
      </nav>
    </div>
  );
}
