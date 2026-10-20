"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ icon: Icon, eyebrow, title, highlight, description }) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121816] border border-[#4ADE80]/30 text-xs font-mono mb-4 text-[#4ADE80]"
      >
        <Icon className="w-3.5 h-3.5" />
        <span>{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
      >
        {title}{" "}
        <span className="bg-gradient-to-r from-[#4ADE80] to-[#10B981] bg-clip-text text-transparent">
          {highlight}
        </span>
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-400 max-w-xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
