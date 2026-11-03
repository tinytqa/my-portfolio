"use client";

import { Award, BadgePercent, FileText, GraduationCap, Rocket, School, Trophy } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

const WHY_ICONS = { scholarship: BadgePercent, fast: Rocket };

export default function CredentialsCard() {
  const { CERTIFICATIONS, EDUCATION } = useContent();
  const t = useT();

  const stats = [
    { label: "GPA", value: EDUCATION.gpa, suffix: "/ 4.0", main: true },
    { label: t.credentials.gpa10, value: EDUCATION.gpa10, suffix: "/ 10" },
    { label: t.credentials.credits, value: EDUCATION.credits },
    { label: t.credentials.duration, value: EDUCATION.duration },
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Education */}
      <div className="relative p-6 sm:p-7 rounded-3xl glass-panel border border-accent/20 hover:border-accent/50 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-36 h-36 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

        {/* School + transcript */}
        <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-accent">{t.credentials.education}</span>
            </div>
            <h3 className="text-xl font-bold text-stone-900">{EDUCATION.school}</h3>
            <p className="text-sm text-stone-700 mt-1">{EDUCATION.degree}</p>
            <p className="text-xs text-stone-600 mt-1">
              {EDUCATION.period} · {EDUCATION.note}
            </p>
          </div>
          {EDUCATION.transcript && (
            <a
              href={EDUCATION.transcript}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-on-accent text-sm font-semibold hover:bg-accent-soft shadow-[0_4px_14px_rgba(4,120,87,0.15)] transition-colors"
            >
              <FileText className="w-4 h-4" />
              {t.credentials.transcript}
            </a>
          )}
        </div>

        {/* Key numbers */}
        <dl className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {stats.map(({ label, value, suffix, main }) => (
            <div key={label} className="px-4 py-3 rounded-2xl bg-page/70 border border-stone-200">
              <dt className="text-[10px] font-mono uppercase tracking-wider text-stone-500">{label}</dt>
              <dd className="mt-0.5">
                <span className={`font-extrabold text-accent ${main ? "text-3xl mint-glow-text" : "text-2xl"}`}>{value}</span>
                {suffix && <span className="text-xs text-stone-600"> {suffix}</span>}
              </dd>
            </div>
          ))}
        </dl>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Why this school */}
          <div>
            <p className="text-sm font-semibold text-stone-900 mb-3">{EDUCATION.whyTitle}</p>
            <ul className="space-y-3">
              {EDUCATION.why.map(({ icon, title, text }) => {
                const Icon = WHY_ICONS[icon] ?? GraduationCap;
                return (
                  <li key={title} className="flex gap-3 p-3.5 rounded-2xl bg-accent/[0.06] border border-accent/15">
                    <Icon className="shrink-0 w-4 h-4 mt-0.5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-accent-soft">{title}</p>
                      <p className="text-[13px] text-stone-700 leading-snug mt-0.5">{text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <p className="text-sm font-semibold text-stone-900 mb-3">{t.credentials.achievements}</p>
            <ul className="space-y-3">
              {EDUCATION.achievements.map(({ title, detail }) => (
                <li key={title} className="flex gap-3 p-3.5 rounded-2xl bg-page/70 border border-stone-200">
                  <Trophy className="shrink-0 w-4 h-4 mt-0.5 text-amber-700" />
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{title}</p>
                    <p className="text-[13px] text-stone-600 leading-snug mt-0.5">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key courses */}
        <div className="relative mt-6 pt-5 border-t border-stone-200">
          <p className="text-sm font-semibold text-stone-900 mb-3">{t.credentials.keyCourses}</p>
          <ul className="flex flex-wrap gap-2">
            {EDUCATION.keyCourses.map(({ name, grade, score }) => (
              <li
                key={name}
                className="inline-flex items-center gap-2 pl-3 pr-1.5 py-1.5 rounded-full bg-surface border border-accent/15 text-xs text-stone-700"
              >
                {name}
                <span className="px-2 py-0.5 rounded-full bg-accent/15 text-[11px] font-mono font-semibold text-accent-soft">
                  {grade} · {score}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* High school (secondary) */}
        {EDUCATION.highSchool && (
          <div className="relative mt-6 pt-5 border-t border-stone-200">
            <div className="flex items-center gap-2 mb-3">
              <School className="w-4 h-4 text-stone-600" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">{t.credentials.highSchool}</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h4 className="text-base font-semibold text-stone-900">{EDUCATION.highSchool.school}</h4>
              <span className="text-xs text-stone-600">{EDUCATION.highSchool.period}</span>
              <span className="text-xs text-stone-600">
                · {t.credentials.hsGpa} <span className="font-mono font-semibold text-accent-soft">{EDUCATION.highSchool.gpa}</span> / 10
              </span>
            </div>
            <p className="text-[13px] text-stone-600 leading-snug mt-1.5 max-w-2xl">{EDUCATION.highSchool.intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
              {EDUCATION.highSchool.achievements.map(({ title, detail }) => (
                <li key={title} className="flex gap-2.5 p-3 rounded-xl bg-page/50 border border-stone-200">
                  <Trophy className="shrink-0 w-3.5 h-3.5 mt-0.5 text-amber-700/80" />
                  <div>
                    <p className="text-[13px] font-semibold text-stone-800">{title}</p>
                    <p className="text-xs text-stone-600 leading-snug mt-0.5">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Certifications */}
      <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-accent/20 hover:border-accent/50">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-accent" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-accent">{t.credentials.certs}</span>
        </div>
        <ul className="divide-y divide-stone-200">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.date + cert.issuer} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <div>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-stone-900 leading-snug hover:text-accent underline decoration-accent/40 underline-offset-4"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-stone-900 leading-snug">{cert.name}</p>
                )}
                {cert.issuer && <p className="text-xs text-stone-600 mt-0.5">{cert.issuer}</p>}
              </div>
              <span className="shrink-0 text-[11px] font-mono text-accent-soft">{cert.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
