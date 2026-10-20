"use client";

import { Code2, Download, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

export default function ContactCard() {
  const { PERSONAL_INFO } = useContent();
  const t = useT();
  const { email, phone, linkedin, github, cv } = PERSONAL_INFO.contact;

  // Only render the channels that have been filled in
  const channels = [
    email && { icon: Mail, label: email, href: `mailto:${email}` },
    phone && { icon: Phone, label: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    linkedin && { icon: UserRound, label: "LinkedIn", href: linkedin },
    github && { icon: Code2, label: github.replace(/^https?:\/\//, ""), href: github },
  ].filter(Boolean);

  return (
    <div
      id="contact"
      className="relative h-full flex flex-col p-6 sm:p-7 rounded-3xl glass-panel border border-[#4ADE80]/30 hover:border-[#4ADE80]/60 transition-all duration-500 overflow-hidden scroll-mt-28"
    >
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4ADE80]/15 rounded-full blur-3xl pointer-events-none" />

      <span className="relative text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">{t.contact.eyebrow}</span>
      <h3 className="relative text-xl font-bold text-white tracking-tight mt-1 mb-2">{t.contact.title}</h3>
      <p className="relative text-sm text-slate-400 leading-relaxed mb-5">
        {t.contact.bodyPre} <span className="text-slate-200">Business Analyst / Tester</span>.{" "}
        {t.contact.bodyPost}
      </p>

      <ul className="relative space-y-2 mb-6">
        {channels.map(({ icon: Icon, label, href }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0B1110]/70 border border-white/5 hover:border-[#4ADE80]/40 text-sm text-slate-200 hover:text-[#4ADE80] transition-all"
            >
              <Icon className="w-4 h-4 text-[#4ADE80]" />
              <span className="truncate">{label}</span>
            </a>
          </li>
        ))}
        <li className="flex items-center gap-3 px-3.5 py-2 text-sm text-slate-400">
          <MapPin className="w-4 h-4 text-[#4ADE80]" />
          {PERSONAL_INFO.location}
        </li>
      </ul>

      {cv && (
        <a
          href={cv}
          download
          className="relative mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#4ADE80] text-[#0B1110] font-semibold text-sm hover:bg-[#86EFAC] transition-all shadow-[0_0_25px_rgba(74,222,128,0.35)]"
        >
          <Download className="w-4 h-4" />
          {t.contact.cv}
        </a>
      )}
    </div>
  );
}
