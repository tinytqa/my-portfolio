"use client";

import { motion } from "framer-motion";
import { Bot, Quote, SearchCheck } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

export default function AIReviewCard() {
  const { AI_REVIEW } = useContent();
  const t = useT();
  const { eyebrow, title, intro, workflow, checks, principle } = AI_REVIEW;

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl glass-panel border border-accent/25 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: stance + workflow */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-5 h-5 text-accent" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-accent">{eyebrow}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-3">{title}</h3>
          <p className="text-sm text-stone-700 leading-relaxed mb-6">{intro}</p>

          <p className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-3">{t.aiReview.howIWork}</p>
          <ol className="relative space-y-4 before:absolute before:left-[13px] before:top-2 before:bottom-2 before:w-px before:bg-accent/25">
            {workflow.map((w, i) => (
              <li key={w.step} className="relative flex gap-3">
                <span className="relative z-10 shrink-0 w-7 h-7 rounded-full bg-page border border-accent/40 flex items-center justify-center text-xs font-mono text-accent">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-stone-900">{w.step}</p>
                  <p className="text-xs text-stone-600 leading-relaxed mt-0.5">{w.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: review checklist */}
        <div className="lg:col-span-3">
          <p className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-sky-800 mb-3">
            <SearchCheck className="w-3.5 h-3.5" />
            {t.aiReview.checksTitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checks.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="p-4 rounded-2xl bg-page/80 border border-stone-200 hover:border-sky-400/35 transition-colors"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-1">
                  <span className="shrink-0 w-5 h-5 rounded-md bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-[10px] font-mono text-sky-800">
                    {i + 1}
                  </span>
                  {c.title}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">{c.detail}</p>
              </motion.div>
            ))}
          </div>

          <blockquote className="mt-4 flex gap-3 p-4 rounded-2xl bg-accent/[0.06] border border-accent/20">
            <Quote className="shrink-0 w-4 h-4 mt-0.5 text-accent" />
            <p className="text-sm text-stone-800 leading-relaxed italic">{principle}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
