"use client";

import { motion } from "framer-motion";
import { Plus, Sparkles, Compass, Lightbulb } from "lucide-react";

export default function ReservedCard() {
  return (
    <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl glass-panel border border-dashed border-accent/30 hover:border-accent/60 transition-all duration-500 overflow-hidden group">
      {/* Background blueprint grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--color-accent) 40%, transparent) 1px, transparent 1px),
                            linear-gradient(to bottom, color-mix(in srgb, var(--color-accent) 40%, transparent) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating subtle ambient glow */}
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-stone-400 group-hover:bg-accent transition-colors" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 group-hover:text-accent transition-colors">
              Slot #02 • Incubation
            </span>
          </div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
            Concept Lab
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Không gian lưu trữ ý tưởng mới
          </p>
        </div>

        <div className="w-10 h-10 rounded-2xl bg-page border border-stone-200 group-hover:border-accent/40 flex items-center justify-center text-stone-600 group-hover:text-accent group-hover:scale-105 transition-all duration-300">
          <Lightbulb className="w-5 h-5" />
        </div>
      </div>

      {/* Center Interactive Reserved Blueprint */}
      <div className="relative z-10 my-6 py-6 px-4 rounded-2xl bg-page/50 border border-stone-200 flex flex-col items-center justify-center text-center">
        {/* Animated Plus / Seed Icon */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 90 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-14 h-14 rounded-2xl bg-surface border border-accent/30 flex items-center justify-center text-accent shadow-[0_4px_14px_rgba(4,120,87,0.15)] mb-3 cursor-pointer group-hover:border-accent/60 group-hover:shadow-[0_4px_14px_rgba(4,120,87,0.15)] transition-all"
        >
          <Plus className="w-6 h-6" />
        </motion.div>

        <span className="text-xs font-semibold text-stone-800 tracking-wide mb-1">
          Khu vực đang ươm mầm (Reserved)
        </span>
        <p className="text-[11px] text-stone-600 max-w-[220px] leading-relaxed">
          Sẵn sàng để Quỳnh Anh bổ sung thêm sở thích, bài viết hoặc module cá nhân sau này.
        </p>
      </div>

      {/* Bottom Footer Info */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-stone-200 text-[11px] font-mono text-stone-600">
        <span className="flex items-center gap-1.5 text-stone-600">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          Digital Garden Seedling
        </span>
        <span className="text-stone-600 group-hover:text-accent-soft transition-colors">
          Ready to customize
        </span>
      </div>
    </div>
  );
}
