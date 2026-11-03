"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Presentation, Route } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function TeachingSection() {
  const { TEACHING } = useContent();
  const t = useT();
  const { role, center, period, intro, stats, courses, transferable } = TEACHING;

  return (
    <div className="space-y-6">
      {/* Role overview */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="relative p-6 sm:p-8 rounded-3xl glass-panel border border-accent/20 hover:border-accent/45 overflow-hidden"
      >
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-11 h-11 rounded-2xl bg-page border border-accent/30 flex items-center justify-center text-accent">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900">{role}</h3>
              <p className="text-sm text-accent-soft">{center}</p>
            </div>
          </div>
          <span className="shrink-0 self-start px-2.5 py-1 rounded-full text-[11px] font-mono bg-accent/10 text-accent-soft border border-accent/30">
            {period}
          </span>
        </div>

        <p className="relative text-sm sm:text-base text-stone-700 leading-relaxed max-w-3xl mb-6">{intro}</p>

        <dl className="relative grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-3 rounded-2xl bg-page/70 border border-accent/15">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-xl sm:text-2xl font-extrabold text-accent">{s.value}</dd>
              <dd className="text-xs text-stone-600 mt-0.5">{s.label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      {/* Courses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.name}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-5 sm:p-6 rounded-3xl glass-panel border border-accent/20 hover:border-accent/45"
          >
            <BookOpen className="w-5 h-5 text-accent mb-3" />
            <h4 className="text-base font-bold text-stone-900">{course.name}</h4>
            <p className="text-[11px] font-mono uppercase tracking-wider text-accent-soft mt-1 mb-2">
              {course.audience}
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">{course.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Transferable skills */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-3xl glass-panel border border-accent/25"
      >
        <div className="flex items-center gap-2 mb-1">
          <Route className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-bold text-stone-900">{t.teaching.transferTitle}</h3>
        </div>
        <p className="text-sm text-stone-600 mb-6">
          {t.teaching.transferSubtitle}
        </p>

        {/* Column headings (desktop) */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-4 px-4 mb-2 text-[10px] font-mono uppercase tracking-wider text-stone-500">
          <span>{t.teaching.inClass}</span>
          <span className="w-4" />
          <span>{t.teaching.atWork}</span>
        </div>

        <ul className="space-y-2.5">
          {transferable.map((item, i) => (
            <motion.li
              key={item.work}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-center gap-1.5 md:gap-4 px-4 py-3 rounded-2xl bg-page/70 border border-stone-200 hover:border-accent/35 transition-colors"
            >
              <span className="text-sm text-stone-700">{item.teaching}</span>
              <ArrowRight className="hidden md:block w-4 h-4 text-accent/60 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
              <span className="text-sm font-medium text-accent-soft">
                <span className="md:hidden text-accent/60 mr-1.5">→</span>
                {item.work}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
