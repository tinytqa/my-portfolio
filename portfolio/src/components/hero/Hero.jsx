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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-accent/30 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_4px_14px_rgba(4,120,87,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-stone-700">{PERSONAL_INFO.role}</span>
            <span className="text-accent font-semibold">Open to work</span>
          </motion.div>

          {/* Main Title with Staggered Character Reveal */}
          <TextReveal text="Hi, I'm Quỳnh Anh" className="mb-4" />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-stone-700 font-light leading-relaxed max-w-xl mb-6"
          >
            {t.hero.taglinePre}{" "}
            <span className="text-stone-800 font-normal">{t.hero.taglineMid}</span> {t.hero.taglineAnd}{" "}
            <span className="text-accent font-medium drop-shadow-[0_4px_14px_rgba(4,120,87,0.15)]">
              {t.hero.taglineEnd}
            </span>
            .
          </motion.p>

          {/* Bio Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
            className="text-sm sm:text-base text-stone-600 font-normal max-w-lg mb-8 leading-relaxed"
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
              <div key={i} className="px-3 py-2.5 rounded-xl bg-surface/80 border border-accent/15">
                <dt className="sr-only">{h.label}</dt>
                <dd className="text-xl font-extrabold text-accent">{h.value}</dd>
                <dd className="text-[11px] text-stone-600 leading-tight mt-0.5">{h.label}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Core Tech Stack Section */}
          <div className="w-full space-y-2 mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-2 text-xs font-mono text-stone-600 uppercase tracking-wider"
            >
              <Terminal className="w-3.5 h-3.5 text-accent" />
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
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-accent text-on-accent font-semibold text-sm hover:bg-accent-soft transition-all duration-300 shadow-[0_4px_14px_rgba(4,120,87,0.15)] hover:shadow-[0_4px_14px_rgba(4,120,87,0.15)]"
            >
              <span>{t.hero.ctaExperience}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </TabLink>

            <TabLink
              href="/contact"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full glass-panel text-stone-800 hover:text-accent font-medium text-sm border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>{t.hero.ctaContact}</span>
            </TabLink>

            {PERSONAL_INFO.contact.cv && (
              <a
                href={PERSONAL_INFO.contact.cv}
                download
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-700 hover:text-accent transition-colors"
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
