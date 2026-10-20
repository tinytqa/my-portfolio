"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, GraduationCap, Hourglass } from "lucide-react";
import { useContent } from "@/lib/i18n";

/** What I'm learning now (automation testing) + a placeholder for the projects that will come from it. */
export default function AutomationLearningCard() {
  const { AUTOMATION_LEARNING: a } = useContent();
  const { platform, name, link } = a.course;
  const course = name ? `${platform} · ${name}` : platform;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-5 gap-5"
    >
      {/* Currently learning */}
      <div className="md:col-span-3 p-6 rounded-3xl glass-panel border border-[#4ADE80]/20">
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">{a.status}</span>
        </div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-2">
          <Bot className="w-5 h-5 text-[#4ADE80]" />
          {a.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{a.body}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121816] border border-[#4ADE80]/25 hover:border-[#4ADE80]/50 text-xs font-mono text-slate-300 hover:text-[#4ADE80] transition-colors"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            {course}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121816] border border-[#4ADE80]/25 text-xs font-mono text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-[#4ADE80]" />
            {course}
          </span>
        )}
      </div>

      {/* Projects placeholder */}
      <div className="md:col-span-2 relative flex flex-col items-center justify-center text-center p-6 rounded-3xl border border-dashed border-[#4ADE80]/30 bg-[#0B1110]/40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(74, 222, 128, 0.4) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(74, 222, 128, 0.4) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <span className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[10px] font-mono uppercase tracking-widest text-[#86EFAC] mb-3">
          <Hourglass className="w-3 h-3" />
          {a.soonBadge}
        </span>
        <p className="relative text-base font-semibold text-slate-100 mb-1">{a.soonTitle}</p>
        <p className="relative text-xs text-slate-400 max-w-[240px] leading-relaxed">{a.soonBody}</p>
      </div>
    </motion.div>
  );
}
