"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookMarked, CheckCircle2, FileText, FlaskConical } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

const ITTO_LABELS = ["Inputs", "Tools & Techniques", "Outputs"];

function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="px-2 py-0.5 rounded-md border bg-surface border-stone-200 text-[11px] text-stone-700">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function TrainingSection() {
  const { BA_TRAINING } = useContent();
  const t = useT();
  const ITTO = ITTO_LABELS.map((label, i) => ({ label, hint: t.training.itto[i] }));
  const { org, standard, framework, practice, case: practiceCase, learnings } = BA_TRAINING;

  return (
    <div className="space-y-6">
      {/* Programme overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-3xl glass-panel border border-accent/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookMarked className="w-5 h-5 text-accent" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-accent">{org}</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">{t.training.heading}</h3>
            <dl className="space-y-1.5 text-sm">
              <div className="flex gap-2">
                <dt className="text-stone-500 w-24 shrink-0">{t.training.standard}</dt>
                <dd className="text-stone-800">{standard}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-stone-500 w-24 shrink-0">{t.training.framework}</dt>
                <dd className="text-stone-800">{framework}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-stone-500 w-24 shrink-0">{t.training.practice}</dt>
                <dd className="text-stone-800">{practice}</dd>
              </div>
            </dl>
          </div>

          {/* ITTO flow */}
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            {ITTO.map((node, i) => (
              <Fragment key={node.label}>
                <div className="flex-1 px-3 py-3 rounded-xl bg-page/80 border border-accent/20 text-center">
                  <p className="text-sm font-semibold text-accent-soft">{node.label}</p>
                  <p className="text-[11px] text-stone-600 mt-0.5">{node.hint}</p>
                </div>
                {i < ITTO.length - 1 && (
                  <ArrowRight className="hidden sm:block self-center shrink-0 w-4 h-4 text-accent/60" />
                )}
              </Fragment>
            ))}
          </div>
        </div>

      </motion.div>

      {/* Practice case, step by step */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-3xl glass-panel border border-accent/20"
      >
        <div className="flex items-center gap-2 mb-2">
          <FlaskConical className="w-5 h-5 text-accent" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-accent">{t.training.caseEyebrow}</span>
        </div>
        <h3 className="text-xl font-bold text-stone-900 mb-3">{practiceCase.name}</h3>
        <div className="p-4 rounded-2xl bg-page/70 border border-stone-200 mb-3">
          <p className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-1">{t.training.context}</p>
          <p className="text-sm text-stone-700 leading-relaxed">{practiceCase.context}</p>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed max-w-3xl mb-6">{practiceCase.summary}</p>

        {/* Key numbers */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {practiceCase.numbers.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse px-4 py-3 rounded-2xl bg-page/70 border border-stone-200">
              <dt className="text-[11px] text-stone-600 leading-tight mt-0.5">{label}</dt>
              <dd className="text-2xl font-extrabold text-accent">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Steps */}
        <ol className="relative space-y-4 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-accent/20">
          {practiceCase.steps.map((step, i) => (
            <li key={step.title} className="relative pl-12">
              <span className="absolute left-0 top-0 w-8 h-8 rounded-xl bg-surface border border-accent/40 flex items-center justify-center text-xs font-mono font-semibold text-accent">
                {i + 1}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">{step.phase}</span>
              <h4 className="text-base font-bold text-stone-900 leading-snug mb-2">{step.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-page/70 border border-stone-200">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-1">{t.training.did}</p>
                  <p className="text-sm text-stone-700 leading-relaxed">{step.did}</p>
                </div>
                <div className="flex gap-2 p-3 rounded-2xl bg-accent/[0.06] border border-accent/15">
                  <CheckCircle2 className="shrink-0 w-4 h-4 mt-0.5 text-accent" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-accent-soft mb-1">{t.training.result}</p>
                    <p className="text-sm text-stone-800 leading-relaxed">{step.result}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Deliverables */}
        <div className="mt-8 pt-5 border-t border-stone-200">
          <p className="flex items-center gap-2 text-sm font-semibold text-stone-900 mb-3">
            <FileText className="w-4 h-4 text-accent" />
            {t.training.deliverables}
          </p>
          <Chips items={practiceCase.deliverables} />
        </div>
      </motion.div>

      {/* What I learned */}
      <h3 className="pt-4 text-lg font-bold text-stone-900">{t.training.lessons}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learnings.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
            className="flex flex-col p-5 sm:p-6 rounded-3xl glass-panel border border-accent/20 hover:border-accent/45 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-xs font-mono font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">{item.phase}</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-snug mb-2">{item.title}</h4>
            <p className="text-sm text-stone-700 leading-relaxed mb-4">{item.detail}</p>

            <div className="mt-auto">
              <Chips items={item.tags} />
            </div>
          </motion.article>
        ))}
      </div>

    </div>
  );
}
