"use client";

import { Code2, Download, Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

export default function ContactCard() {
  const { PERSONAL_INFO } = useContent();
  const t = useT();
  const { email, phone, linkedin, github, cv } = PERSONAL_INFO.contact;

  // Only render the channels that have been filled in; email gets the main button instead
  const channels = [
    phone && { icon: Phone, title: t.contact.phone, label: phone, href: `tel:${phone.replace(/\s/g, "")}` },
    linkedin && { icon: UserRound, title: "LinkedIn", label: "LinkedIn", href: linkedin },
    github && { icon: Code2, title: "GitHub", label: github.replace(/^https?:\/\/(www\.)?github\.com\//, ""), href: github },
    { icon: MapPin, title: t.contact.location, label: PERSONAL_INFO.location },
  ].filter(Boolean);

  return (
    <div
      id="contact"
      className="relative max-w-4xl mx-auto px-6 py-12 sm:px-12 sm:py-16 rounded-[2rem] glass-panel border border-[#4ADE80]/30 overflow-hidden text-center"
    >
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#4ADE80]/15 rounded-full blur-3xl pointer-events-none" />

      <span className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121816] border border-[#4ADE80]/30 text-xs font-mono text-[#4ADE80]">
        <Send className="w-3.5 h-3.5" />
        {t.contact.eyebrow}
      </span>
      <h2 className="relative text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-5 mb-4">
        {t.contact.title}
      </h2>
      <p className="relative text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
        {t.contact.bodyPre} <span className="text-slate-200">Business Analyst / Tester</span>.{" "}
        {t.contact.bodyPost}
      </p>

      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 max-w-full px-6 py-3.5 rounded-full bg-[#4ADE80] text-[#0B1110] font-semibold text-sm hover:bg-[#86EFAC] transition-all shadow-[0_0_25px_rgba(74,222,128,0.35)]"
          >
            <Mail className="shrink-0 w-4 h-4" />
            <span className="truncate">{email}</span>
          </a>
        )}
        {cv && (
          <a
            href={cv}
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-pill border border-[#4ADE80]/40 text-sm font-semibold text-[#86EFAC] hover:border-[#4ADE80] hover:text-[#4ADE80] transition-all"
          >
            <Download className="w-4 h-4" />
            {t.contact.cv}
          </a>
        )}
      </div>

      <ul className={`relative grid grid-cols-1 gap-3 mt-10 text-left ${channels.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {channels.map(({ icon: Icon, title, label, href }) => {
          const body = (
            <>
              <span className="shrink-0 w-10 h-10 rounded-xl bg-[#4ADE80]/10 border border-[#4ADE80]/20 flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#4ADE80]" />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500">{title}</span>
                <span className="block text-sm text-slate-200 truncate">{label}</span>
              </span>
            </>
          );
          const className = "flex items-center gap-3 p-4 rounded-2xl bg-[#0B1110]/70 border border-white/5";
          return (
            <li key={title}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`${className} hover:border-[#4ADE80]/40 transition-colors`}
                >
                  {body}
                </a>
              ) : (
                <div className={className}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
