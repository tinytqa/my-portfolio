"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Lightbulb } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

// Colour bullet tags by discipline so BA vs testing work is scannable
const TAG_GROUPS = {
  ba: ["BA", "Khảo sát", "Giao tiếp", "Tài liệu", "Elicitation", "Communication", "Docs"],
  test: ["Kiểm thử", "QA", "Testing"],
};

function tagStyle(tag) {
  if (TAG_GROUPS.ba.includes(tag)) return "bg-[#4ADE80]/10 text-[#86EFAC] border-[#4ADE80]/30";
  if (TAG_GROUPS.test.includes(tag)) return "bg-sky-400/10 text-sky-300 border-sky-400/30";
  return "bg-amber-400/10 text-amber-200 border-amber-400/30"; // API, CSDL
}

function Learnings({ items, scope }) {
  const t = useT();
  return (
    <div className="mb-3 p-3.5 sm:p-4 rounded-2xl bg-[#4ADE80]/[0.06] border border-[#4ADE80]/20">
      <p className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#4ADE80] mb-2">
        <Lightbulb className="w-3.5 h-3.5" />
        {t.experience.learned}{scope && <span className="text-slate-500 normal-case tracking-normal"> · {scope}</span>}
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.title}>
            <p className="text-sm font-semibold text-slate-100 leading-snug mb-1">{item.title}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
            {item.steps && (
              <ol className="mt-2 space-y-1.5">
                {item.steps.map((step, i) => (
                  <li key={step} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#0B1110] border border-[#4ADE80]/30 flex items-center justify-center text-[10px] font-mono text-[#4ADE80]">
                      {i + 1}
                    </span>
                    <span className="flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            )}
            {item.outcome && (
              <p className="mt-2 pl-3 border-l-2 border-[#4ADE80]/40 text-sm text-slate-400 leading-relaxed italic">
                {item.outcome}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  const { EXPERIENCES } = useContent();
  const t = useT();
  return (
    <ol className="relative space-y-8 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[#4ADE80]/60 before:via-[#4ADE80]/20 before:to-transparent">
      {EXPERIENCES.map((exp, i) => (
        <motion.li
          key={exp.period}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          className="relative pl-12"
        >
          {/* Timeline node */}
          <span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0B1110] border border-[#4ADE80]/50 flex items-center justify-center text-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.25)]">
            <Briefcase className="w-3.5 h-3.5" />
          </span>

          <div className="p-5 sm:p-6 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/45">
            {/* Role header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-[#86EFAC]">
                  {exp.company}
                  {exp.note && <span className="text-slate-400"> · {exp.note}</span>}
                </p>
              </div>
              <span className="shrink-0 self-start px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#4ADE80]/10 text-[#86EFAC] border border-[#4ADE80]/30">
                {exp.period}
              </span>
            </div>

            {exp.training && (
              <div className="flex gap-3 p-3.5 mb-4 rounded-2xl bg-[#0B1110]/70 border border-white/5 text-sm text-slate-300 leading-relaxed">
                <GraduationCap className="shrink-0 w-4 h-4 mt-0.5 text-[#4ADE80]" />
                <p>
                  <span className="font-semibold text-slate-100">{t.experience.training} </span>
                  {exp.training}
                </p>
              </div>
            )}

            {/* Projects */}
            <div className="space-y-4">
              {exp.projects.map((project) => (
                <div key={project.name} className="p-4 rounded-2xl bg-[#0B1110]/70 border border-white/5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-100">{project.name}</h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      {project.domain}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-3">
                    {project.bullets.map((b) => (
                      <li key={b.text} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <span
                          className={`shrink-0 self-start mt-[3px] inline-flex items-center justify-center gap-1.5 w-[84px] h-5 rounded-full border text-[10px] font-semibold uppercase tracking-wide leading-none ${tagStyle(b.tag)}`}
                        >
                          <span className="w-1 h-1 rounded-full bg-current opacity-80" />
                          {b.tag}
                        </span>
                        <span className="flex-1">{b.text}</span>
                      </li>
                    ))}
                  </ul>

                  {project.learnings && <Learnings items={project.learnings} />}

                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-[#121816] border border-[#4ADE80]/15 text-[10px] font-mono text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Lessons that span the whole internship */}
            {exp.learnings && (
              <div className="mt-4">
                <Learnings items={exp.learnings} scope={t.experience.wholeInternship} />
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
