"use client";

import { CheckCircle2, ClipboardList, ShieldCheck } from "lucide-react";
import { useT } from "@/lib/i18n";

const ICONS = { ba: ClipboardList, qa: ShieldCheck };

export default function CapabilityCard({ capability }) {
  const t = useT();
  const { id, eyebrow, title, summary, skills, tools } = capability;
  const Icon = ICONS[id] ?? ClipboardList;

  return (
    <div className="relative h-full flex flex-col p-6 sm:p-7 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-500 overflow-hidden group">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#4ADE80]/10 rounded-full blur-2xl group-hover:bg-[#4ADE80]/20 transition-all duration-500 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">
            {eyebrow}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight mt-1">{title}</h3>
        </div>
        <div className="shrink-0 w-10 h-10 rounded-2xl bg-[#0B1110] border border-[#4ADE80]/30 flex items-center justify-center text-[#4ADE80] group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <p className="relative z-10 text-sm text-slate-300 leading-relaxed mb-5">{summary}</p>

      {/* Skills with evidence */}
      <ul className="relative z-10 space-y-3 mb-6">
        {skills.map((skill) => (
          <li key={skill.name} className="flex gap-3">
            <CheckCircle2 className="shrink-0 w-4 h-4 mt-0.5 text-[#4ADE80]" />
            <div className="flex-1">
              <p className="text-sm text-slate-200 leading-snug">{skill.name}</p>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {skill.evidence.map((ev) => (
                  <span
                    key={ev}
                    className="inline-flex items-center h-5 px-2 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[10px] font-medium leading-none text-[#86EFAC]"
                  >
                    {ev}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Tools */}
      <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
        <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
          {t.capability.tools}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-0.5 rounded-md bg-[#121816] border border-[#4ADE80]/20 text-[11px] font-mono text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
