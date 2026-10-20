"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import SkillBadges from "./SkillBadges";
import PhotoStack from "./PhotoStack";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";
import TabLink from "@/components/layout/TabLink";

export default function Hero() {
  const { HIGHLIGHTS, PERSONAL_INFO } = useContent();
  const t = useT();
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-40 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text Content & Skills */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121816]/90 border border-[#4ADE80]/30 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(74,222,128,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]"></span>
            </span>
            <span className="text-slate-300">{PERSONAL_INFO.role}</span>
            <span className="text-[#4ADE80] font-semibold">Open to work</span>
          </motion.div>

          {/* Main Title with Staggered Character Reveal */}
          <TextReveal text="Hi, I'm Quỳnh Anh" className="mb-4" />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-xl mb-6"
          >
            {t.hero.taglinePre}{" "}
            <span className="text-slate-200 font-normal">{t.hero.taglineMid}</span> {t.hero.taglineAnd}{" "}
            <span className="text-[#4ADE80] font-medium drop-shadow-[0_0_12px_rgba(74,222,128,0.4)]">
              {t.hero.taglineEnd}
            </span>
            .
          </motion.p>

          {/* Bio Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            className="text-sm sm:text-base text-slate-400 font-normal max-w-lg mb-8 leading-relaxed"
          >
            {t.hero.bio}
          </motion.p>

          {/* Key numbers */}
          <motion.dl
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mb-8"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="px-3 py-2.5 rounded-xl bg-[#121816]/80 border border-[#4ADE80]/15">
                <dt className="sr-only">{h.label}</dt>
                <dd className="text-xl font-extrabold text-[#4ADE80]">{h.value}</dd>
                <dd className="text-[11px] text-slate-400 leading-tight mt-0.5">{h.label}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Core Tech Stack Section */}
          <div className="w-full space-y-2 mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider"
            >
              <Terminal className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>{t.hero.coreSkills}</span>
            </motion.div>
            <SkillBadges />
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <TabLink
              href="/experience"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#4ADE80] text-[#0B1110] font-semibold text-sm hover:bg-[#86EFAC] transition-all duration-300 shadow-[0_0_25px_rgba(74,222,128,0.4)] hover:shadow-[0_0_35px_rgba(74,222,128,0.6)]"
            >
              <span>{t.hero.ctaExperience}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </TabLink>

            <TabLink
              href="/contact"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full glass-panel text-slate-200 hover:text-[#4ADE80] font-medium text-sm border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-[#4ADE80]" />
              <span>{t.hero.ctaContact}</span>
            </TabLink>

            {PERSONAL_INFO.contact.cv && (
              <a
                href={PERSONAL_INFO.contact.cv}
                download
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-[#4ADE80] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t.hero.ctaCv}</span>
              </a>
            )}
          </motion.div>
        </div>

        {/* Right Column: Personal Photo Stack */}
        <div className="lg:col-span-5 flex items-center justify-center relative w-full pt-6 lg:pt-0">
          <PhotoStack />
        </div>
      </div>

    </section>
  );
}
