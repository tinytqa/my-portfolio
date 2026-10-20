"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe, Trophy } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

const ROLE_STYLE = {
  BA: "bg-[#4ADE80]/10 text-[#86EFAC] border-[#4ADE80]/30",
  Tester: "bg-sky-400/10 text-sky-300 border-sky-400/30",
  "Ghi nhận": "bg-amber-400/10 text-amber-200 border-amber-400/30",
  Recognition: "bg-amber-400/10 text-amber-200 border-amber-400/30",
};

export default function FeaturedProject() {
  const { FEATURED_PROJECT } = useContent();
  const t = useT();
  const { name, award, tagline, problem, journey, features, tech, proves, link, demo, certificate } = FEATURED_PROJECT;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative p-6 sm:p-8 rounded-3xl glass-panel border border-amber-400/30 hover:border-amber-400/50 overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#4ADE80]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-amber-400/10 border border-amber-400/40 text-xs font-semibold text-amber-200">
            <Trophy className="w-3.5 h-3.5" />
            {award}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{name}</h3>
          <p className="text-sm sm:text-base text-slate-300 mt-1.5 max-w-2xl">{tagline}</p>
        </div>
        <div className="shrink-0 flex flex-col items-start sm:items-end gap-3 w-full sm:w-60">
          {certificate && (
            <a
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.featured.viewCert}
              className="group block w-full"
            >
              <div className="relative aspect-[1285/910] rounded-xl overflow-hidden border border-amber-400/40 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.35)] group-hover:border-amber-300 transition-colors">
                <Image
                  src={certificate.image}
                  alt={certificate.caption}
                  fill
                  sizes="(max-width: 640px) 90vw, 240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-1.5 flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-amber-200 transition-colors sm:justify-end">
                {certificate.caption} <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          )}
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4ADE80] text-[#0B1110] text-sm font-semibold hover:bg-[#86EFAC] shadow-[0_0_20px_rgba(74,222,128,0.35)] transition-colors"
              >
                <Globe className="w-4 h-4" />
                {t.featured.tryDemo}
              </a>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#121816] border border-white/10 text-sm text-slate-200 hover:text-[#4ADE80] hover:border-[#4ADE80]/40 transition-colors"
            >
              GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Problem */}
      <div className="relative p-4 mb-6 rounded-2xl bg-[#0B1110]/80 border border-white/5">
        <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">{t.featured.problem}</p>
        <p className="text-sm text-slate-300 leading-relaxed">{problem}</p>
      </div>

      {/* User journey */}
      <p className="relative text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">{t.featured.journey}</p>
      <div className="relative flex flex-col md:flex-row md:items-stretch gap-2 mb-6">
        {journey.map((j, i) => (
          <Fragment key={j.step}>
            <div className="flex-1 px-3 py-3 rounded-xl bg-[#0B1110]/80 border border-[#4ADE80]/15">
              <p className="text-sm font-semibold text-[#86EFAC]">
                <span className="font-mono text-[11px] text-slate-500 mr-1.5">{i + 1}</span>
                {j.step}
              </p>
              <p className="text-xs text-slate-400 mt-0.5 leading-snug">{j.detail}</p>
            </div>
            {i < journey.length - 1 && (
              <ArrowRight className="hidden md:block self-center shrink-0 w-4 h-4 text-[#4ADE80]/60" />
            )}
          </Fragment>
        ))}
      </div>

      {/* What it proves */}
      <p className="relative text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
        {t.featured.proves}
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {proves.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="p-4 rounded-2xl bg-[#0B1110]/80 border border-white/5 hover:border-[#4ADE80]/30 transition-colors"
          >
            <span
              className={`inline-flex items-center h-5 px-2 mb-2 rounded-full border text-[10px] font-semibold uppercase tracking-wide leading-none ${ROLE_STYLE[p.role]}`}
            >
              {p.role}
            </span>
            <p className="text-sm font-semibold text-slate-100 mb-1 leading-snug">{p.title}</p>
            <p className="text-xs text-slate-400 leading-relaxed">{p.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Features + tech */}
      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 pt-5 border-t border-white/5">
        <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-slate-300 leading-snug">
              <CheckCircle2 className="shrink-0 w-4 h-4 mt-0.5 text-[#4ADE80]" />
              {f}
            </li>
          ))}
        </ul>
        <div className="lg:col-span-2 flex flex-wrap content-start gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md bg-[#121816] border border-[#4ADE80]/20 text-[11px] font-mono text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
