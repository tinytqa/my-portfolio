"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";
import ProjectCard from "./ProjectCard";

const ALL = -1; // filter value for “all categories”; otherwise an index into PROJECT_CATEGORIES

export default function ProjectGallery() {
  const { PERSONAL_INFO, PROJECT_CATEGORIES, PROJECTS } = useContent();
  const t = useT();
  const [filter, setFilter] = useState(ALL);
  const filters = [ALL, ...PROJECT_CATEGORIES.map((_, i) => i)];
  const inCategory = (f) => (f === ALL ? PROJECTS : PROJECTS.filter((p) => p.category === PROJECT_CATEGORIES[f]));
  const visible = inCategory(filter);
  const labelOf = (f) => (f === ALL ? t.projects.all : PROJECT_CATEGORIES[f]);

  return (
    <div>
      {/* Filter bar + GitHub link */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div role="tablist" className="flex gap-1.5 overflow-x-auto pb-1">
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`relative shrink-0 px-3.5 py-1.5 rounded-full text-sm transition-colors cursor-pointer ${
                  active ? "text-[#0B1110] font-semibold" : "text-slate-300 hover:text-[#4ADE80] bg-[#121816]/70 border border-white/5"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-[#4ADE80]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {labelOf(f)} <span className="opacity-60 text-xs">{inCategory(f).length}</span>
                </span>
              </button>
            );
          })}
        </div>
        <a
          href={PERSONAL_INFO.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#4ADE80] transition-colors"
        >
          <Code2 className="w-3.5 h-3.5" />
          {t.projects.viewAll} <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.link}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
