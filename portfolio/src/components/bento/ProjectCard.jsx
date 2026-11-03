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
      className="group h-full flex flex-col p-5 rounded-3xl glass-panel border border-accent/20 hover:border-accent/50 transition-colors"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center h-5 px-2 rounded-full bg-accent/10 border border-accent/30 text-[10px] font-semibold leading-none text-accent-soft">
            {category}
          </span>
          <span className="inline-flex items-center gap-1 h-5 px-2 rounded-full bg-surface border border-stone-200 text-[10px] leading-none text-stone-600">
            <OwnerIcon className="w-3 h-3" />
            {solo ? t.projects.solo : t.projects.team}
          </span>
        </div>
        <ArrowUpRight className="shrink-0 w-4 h-4 text-stone-500 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>

      <h3 className="text-base font-bold text-stone-900 group-hover:text-accent transition-colors mb-2">{name}</h3>

      {purpose && (
        <div className="flex gap-2 p-3 mb-3 rounded-2xl bg-accent/[0.06] border border-accent/15">
          <Target className="shrink-0 w-3.5 h-3.5 mt-0.5 text-accent" />
          <p className="text-[13px] text-stone-800 leading-snug">
            <span className="font-semibold text-accent-soft">{t.projects.purpose} </span>
            {purpose}
          </p>
        </div>
      )}

      <p className="text-sm text-stone-600 leading-relaxed mb-4">{summary}</p>

      {highlights && (
        <ul className="space-y-1.5 mb-4">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2 text-[13px] text-stone-700 leading-snug">
              <CheckCircle2 className="shrink-0 w-3.5 h-3.5 mt-0.5 text-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-3 border-t border-stone-200 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-surface border border-accent/15 text-[10px] font-mono text-stone-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
