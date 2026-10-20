"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { ClipboardCheck, Database, FileText, MessagesSquare, Workflow, Wrench } from "lucide-react";

// Mirrors the CV: BA skills first, then testing, then tooling
const SKILLS = [
  {
    name: "Elicitation",
    role: "Làm rõ yêu cầu với khách hàng",
    icon: MessagesSquare,
  },
  {
    name: "Documentation",
    role: "BRD · SRS · FRD · RSD",
    icon: FileText,
  },
  {
    name: "Modeling",
    role: "Use Case · BPMN · UML · ERD",
    icon: Workflow,
  },
  {
    name: "Test Design",
    role: "Test case · Functional · Re-test",
    icon: ClipboardCheck,
  },
  {
    name: "API & SQL Testing",
    role: "API · Đối soát dữ liệu",
    icon: Database,
  },
  {
    name: "Tools",
    role: "Jira · Confluence · Draw.io",
    icon: Wrench,
  },
];

export default function SkillBadges() {
  const t = useT();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3"
    >
      {SKILLS.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.04,
              boxShadow: "0 0 20px -3px rgba(74, 222, 128, 0.4)",
              transition: { duration: 0.2 },
            }}
            className="group relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#121816]/80 backdrop-blur-md border border-[#4ADE80]/20 hover:border-[#4ADE80]/60 transition-colors duration-300 cursor-default"
          >
            {/* Subtle glow background on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4ADE80]/10 to-[#10B981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 w-6 h-6 rounded-lg bg-[#0B1110] border border-[#4ADE80]/30 flex items-center justify-center text-[#4ADE80] group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-3.5 h-3.5" />
            </div>

            <div className="relative z-10 flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-100 group-hover:text-[#4ADE80] transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                {t.hero.skillRoles[i] ?? skill.role}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
