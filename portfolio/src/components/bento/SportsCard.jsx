"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Flame, Zap, Award } from "lucide-react";

// Weekly activity data for running & badminton sessions
const ACTIVITY_DATA = [
  { day: "Mon", running: 65, badminton: 85, label: "6.2km Run + Smash Drills" },
  { day: "Tue", running: 40, badminton: 30, label: "Recovery Jog" },
  { day: "Wed", running: 80, badminton: 95, label: "Double Match 3 Sets" },
  { day: "Thu", running: 50, badminton: 45, label: "Endurance Training" },
  { day: "Fri", running: 90, badminton: 100, label: "Tournament Sparring" },
  { day: "Sat", running: 75, badminton: 60, label: "10km Morning Run" },
  { day: "Sun", running: 30, badminton: 40, label: "Rest & Stretch" },
];

export default function SportsCard() {
  const [activeBar, setActiveBar] = useState(null);

  return (
    <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-500 overflow-hidden group">
      {/* Ambient background mint glow on hover */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#4ADE80]/15 rounded-full blur-2xl group-hover:bg-[#4ADE80]/25 transition-all duration-500 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">
              Sports & Health
            </span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            Weekly Activity
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Strava tracking • Running & Badminton
          </p>
        </div>

        {/* Badminton Shuttlecock Custom SVG Icon */}
        <div className="w-10 h-10 rounded-2xl bg-[#0B1110] border border-[#4ADE80]/30 flex items-center justify-center text-[#4ADE80] group-hover:scale-110 group-hover:border-[#4ADE80]/70 group-hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300">
          <svg
            className="w-5 h-5 text-[#4ADE80]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Shuttlecock cork */}
            <circle cx="12" cy="18" r="3" fill="#4ADE80" fillOpacity="0.25" />
            {/* Feathers */}
            <path d="M12 15 L7 5 L17 5 Z" />
            <line x1="7" y1="5" x2="17" y2="5" />
            <line x1="8.5" y1="9" x2="15.5" y2="9" />
            <line x1="10" y1="12" x2="14" y2="12" />
          </svg>
        </div>
      </div>

      {/* Mini Equalizer Bar Chart */}
      <div className="relative z-10 my-4">
        <div className="flex items-end justify-between gap-2 h-28 pt-4 px-1 border-b border-white/5 pb-2">
          {ACTIVITY_DATA.map((item, index) => {
            const isHovered = activeBar === index;
            const avgHeight = (item.running + item.badminton) / 2;

            return (
              <div
                key={item.day}
                onMouseEnter={() => setActiveBar(index)}
                onMouseLeave={() => setActiveBar(null)}
                className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer group/bar relative"
              >
                {/* Tooltip on bar hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#0B1110] border border-[#4ADE80]/50 text-[10px] font-mono text-[#86EFAC] shadow-lg z-30 pointer-events-none"
                  >
                    {item.label}
                  </motion.div>
                )}

                {/* Double Bar (Running + Badminton) */}
                <div className="w-full flex items-end justify-center gap-1 h-full">
                  {/* Badminton Bar (Primary Mint Glow) */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.badminton}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`w-2.5 sm:w-3 rounded-t-full transition-all duration-300 ${
                      isHovered
                        ? "bg-[#4ADE80] shadow-[0_0_16px_#4ADE80]"
                        : "bg-gradient-to-t from-[#10B981]/50 to-[#4ADE80]/90 group-hover:to-[#4ADE80]"
                    }`}
                  />

                  {/* Running Bar (Accent Emerald) */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.running}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08 + 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`w-1.5 sm:w-2 rounded-t-full transition-all duration-300 ${
                      isHovered
                        ? "bg-[#86EFAC] shadow-[0_0_12px_#86EFAC]"
                        : "bg-gradient-to-t from-[#064E3B]/60 to-[#10B981]/60"
                    }`}
                  />
                </div>

                {/* Day label */}
                <span
                  className={`text-[10px] font-mono transition-colors ${
                    isHovered ? "text-[#4ADE80] font-semibold" : "text-slate-400"
                  }`}
                >
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2.5 px-1">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
              Badminton
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              Running
            </span>
          </div>
          <span className="text-slate-400 text-[10px]">Hover bars for details</span>
        </div>
      </div>

      {/* Stat Metrics Row */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
        <div className="flex flex-col p-2.5 rounded-xl bg-[#0B1110]/70 border border-[#4ADE80]/15">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <Flame className="w-3 h-3 text-[#4ADE80]" />
            <span>Energy</span>
          </div>
          <span className="text-sm font-bold text-white mt-0.5">2,840</span>
          <span className="text-[9px] text-slate-400 font-mono">kcal/wk</span>
        </div>

        <div className="flex flex-col p-2.5 rounded-xl bg-[#0B1110]/70 border border-[#4ADE80]/15">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <Zap className="w-3 h-3 text-[#86EFAC]" />
            <span>Smash</span>
          </div>
          <span className="text-sm font-bold text-[#86EFAC] mt-0.5">320</span>
          <span className="text-[9px] text-slate-400 font-mono">km/h peak</span>
        </div>

        <div className="flex flex-col p-2.5 rounded-xl bg-[#0B1110]/70 border border-[#4ADE80]/15">
          <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <Award className="w-3 h-3 text-[#4ADE80]" />
            <span>Streak</span>
          </div>
          <span className="text-sm font-bold text-white mt-0.5">18 wks</span>
          <span className="text-[9px] text-slate-400 font-mono">Consistent</span>
        </div>
      </div>
    </div>
  );
}
