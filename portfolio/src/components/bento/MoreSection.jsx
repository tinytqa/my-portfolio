"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BookMarked, GraduationCap } from "lucide-react";
import TrainingSection from "./TrainingSection";
import TeachingSection from "./TeachingSection";
import CredentialsCard from "./CredentialsCard";
import { useT } from "@/lib/i18n";

// Add new content here — each entry becomes a tab. Its label/title/description live in
// ui-strings.js under more.<id> (one entry per language).
const TABS = [
  { id: "training", icon: BookMarked, Content: TrainingSection },
  { id: "teaching", icon: GraduationCap, Content: TeachingSection },
  { id: "credentials", icon: Award, Content: CredentialsCard },
];

export default function MoreSection() {
  const t = useT();
  const [activeId, setActiveId] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === activeId);
  const { Content } = tab;
  const text = t.more[tab.id];

  return (
    <div>
      {/* Tab bar — scrolls horizontally when there are many tabs */}
      <div className="flex justify-start sm:justify-center mb-8">
        <div
          role="tablist"
          className="flex gap-1 p-1.5 max-w-full overflow-x-auto rounded-full glass-pill border border-[#4ADE80]/20"
        >
          {TABS.map(({ id, icon: Icon }) => {
            const active = id === activeId;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveId(id)}
                className={`relative shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${
                  active ? "text-[#0B1110] font-semibold" : "text-slate-300 hover:text-[#4ADE80]"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="more-tab"
                    className="absolute inset-0 rounded-full bg-[#4ADE80]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon className="relative w-4 h-4" />
                <span className="relative whitespace-nowrap">{t.more[id].label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{text.title}</h3>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">{text.description}</p>
          </div>
          <Content />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
