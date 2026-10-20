"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

// Owner of each step; the step labels come from the UI strings (t.trace.flow)
const OWNERS = ["BA", "BA", "Tester", "Tester", "BA + Tester"];

export default function TraceabilityStrip() {
  const t = useT();
  const FLOW = t.trace.flow.map((label, i) => ({ label, owner: OWNERS[i] }));
  return (
    <div className="w-full p-5 sm:p-6 rounded-3xl glass-panel border border-[#4ADE80]/20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 mb-4">
        <h3 className="text-base font-bold text-white">{t.trace.title}</h3>
        <p className="text-xs text-slate-400">
          {t.trace.subtitle}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch gap-2">
        {FLOW.map((node, i) => (
          <Fragment key={i}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex-1 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2 px-3.5 py-3 rounded-xl bg-[#0B1110]/80 border border-white/5"
            >
              <span className="text-sm text-slate-200 leading-snug">{node.label}</span>
              <span className="shrink-0 text-[10px] font-mono text-[#4ADE80]">{node.owner}</span>
            </motion.div>
            {i < FLOW.length - 1 && (
              <ArrowRight className="hidden md:block self-center shrink-0 w-4 h-4 text-[#4ADE80]/60" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
