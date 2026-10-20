"use client";

import { motion } from "framer-motion";
import { Languages, MessageCircle, Sparkles, Workflow } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

const ICONS = { language: Languages, ai: Sparkles, talk: MessageCircle, process: Workflow };

export default function SupportSkills() {
  const { SUPPORT_SKILLS } = useContent();
  const t = useT();
  return (
    <div className="p-5 sm:p-6 rounded-3xl glass-panel border border-[#4ADE80]/20">
      <h3 className="text-base font-bold text-white mb-4">{t.support.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {SUPPORT_SKILLS.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Sparkles;
          return (
            <motion.div
              key={item.icon}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-4 rounded-2xl bg-[#0B1110]/80 border border-white/5 hover:border-[#4ADE80]/35 transition-colors"
            >
              <Icon className="w-4 h-4 text-[#4ADE80] mb-2" />
              <p className="text-sm font-semibold text-slate-100 mb-1">{item.title}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
