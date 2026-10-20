"use client";

import { ArrowUpRight, CheckCircle2, Target, User, Users } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function ProjectCard({ project }) {
  const t = useT();
  const { name, category, solo, purpose, summary, highlights, tags, link } = project;
  const OwnerIcon = solo ? User : Users;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-full flex flex-col p-5 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-colors"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center h-5 px-2 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[10px] font-semibold leading-none text-[#86EFAC]">
            {category}
          </span>
          <span className="inline-flex items-center gap-1 h-5 px-2 rounded-full bg-[#121816] border border-white/10 text-[10px] leading-none text-slate-400">
            <OwnerIcon className="w-3 h-3" />
            {solo ? t.projects.solo : t.projects.team}
          </span>
        </div>
        <ArrowUpRight className="shrink-0 w-4 h-4 text-slate-500 group-hover:text-[#4ADE80] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>

      <h3 className="text-base font-bold text-white group-hover:text-[#4ADE80] transition-colors mb-2">{name}</h3>

      {purpose && (
        <div className="flex gap-2 p-3 mb-3 rounded-2xl bg-[#4ADE80]/[0.06] border border-[#4ADE80]/15">
          <Target className="shrink-0 w-3.5 h-3.5 mt-0.5 text-[#4ADE80]" />
          <p className="text-[13px] text-slate-200 leading-snug">
            <span className="font-semibold text-[#86EFAC]">{t.projects.purpose} </span>
            {purpose}
          </p>
        </div>
      )}

      <p className="text-sm text-slate-400 leading-relaxed mb-4">{summary}</p>

      {highlights && (
        <ul className="space-y-1.5 mb-4">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2 text-[13px] text-slate-300 leading-snug">
              <CheckCircle2 className="shrink-0 w-3.5 h-3.5 mt-0.5 text-[#4ADE80]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-[#121816] border border-[#4ADE80]/15 text-[10px] font-mono text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
