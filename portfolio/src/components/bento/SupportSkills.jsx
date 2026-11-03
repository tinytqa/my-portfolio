"use client";

import { motion } from "framer-motion";
import { Languages, MessageCircle, Sparkles, Workflow } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

const ICONS = { language: Languages, ai: Sparkles, talk: MessageCircle, process: Workflow };

export default function SupportSkills() {
  const { SUPPORT_SKILLS } = useContent();
  const t = useT();
  return (
    <div className="p-5 sm:p-6 rounded-3xl glass-panel border border-accent/20">
      <h3 className="text-base font-bold text-stone-900 mb-4">{t.support.title}</h3>
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
              className="p-4 rounded-2xl bg-page/80 border border-stone-200 hover:border-accent/35 transition-colors"
            >
              <Icon className="w-4 h-4 text-accent mb-2" />
              <p className="text-sm font-semibold text-stone-900 mb-1">{item.title}</p>
              <p className="text-xs text-stone-600 leading-relaxed">{item.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
