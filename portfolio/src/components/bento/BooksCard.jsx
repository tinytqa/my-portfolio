"use client";

import Image from "next/image";
import { BookOpen, Lightbulb, Quote, Sparkles } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

export default function BooksCard() {
  const { BOOKS, FICTION_BOOKS } = useContent();
  const t = useT();

  return (
    <div className="relative p-6 sm:p-7 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-500 overflow-hidden">
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#4ADE80]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex items-center gap-2 mb-1">
        <BookOpen className="w-4 h-4 text-[#4ADE80]" />
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">{t.reading.eyebrow}</span>
      </div>
      <h3 className="relative text-xl font-bold text-white tracking-tight mb-2">{t.reading.title}</h3>
      <p className="relative text-sm text-slate-400 leading-relaxed mb-6">{t.reading.body}</p>

      {BOOKS.length === 0 ? (
        <p className="relative text-sm text-slate-500 italic">{t.reading.empty}</p>
      ) : (
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
          {BOOKS.map((book) => (
            <article
              key={book.title}
              className="flex gap-4 p-4 rounded-2xl bg-[#0B1110]/70 border border-white/5 hover:border-[#4ADE80]/30 transition-colors"
            >
              {/* Cover, or a plain spine when there is no image */}
              <div className="shrink-0 self-start relative w-20 sm:w-24 aspect-[2/3] rounded-lg overflow-hidden border border-[#4ADE80]/20 bg-gradient-to-br from-[#121816] to-[#064E3B]/60">
                {book.cover ? (
                  <Image src={book.cover} alt={book.title} fill sizes="96px" className="object-cover" />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center p-2 text-center text-[11px] font-semibold leading-tight text-[#86EFAC]">
                    {book.title}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <h4 className="text-base font-bold text-white leading-snug">{book.title}</h4>
                {book.author && <p className="text-xs text-slate-400 mt-0.5">{book.author}</p>}
                {book.quote && (
                  <blockquote className="relative mt-3 pl-3 border-l-2 border-[#4ADE80]/60">
                    <Quote className="absolute -top-1 right-0 w-4 h-4 text-[#4ADE80]/30" />
                    <p className="pr-5 text-[13px] italic text-slate-200 leading-relaxed">“{book.quote}”</p>
                  </blockquote>
                )}
                {book.takeaways?.length > 0 && (
                  <>
                    <p className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#4ADE80] mt-3 mb-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      {t.reading.learned}
                    </p>
                    <ul className="space-y-1.5">
                      {book.takeaways.map((item) => (
                        <li key={item} className="flex gap-2 text-[13px] text-slate-300 leading-snug">
                          <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Stories read for fun: covers only */}
      {FICTION_BOOKS.length > 0 && (
        <div className="relative mt-8 pt-6 border-t border-white/5">
          <p className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">
            <Sparkles className="w-3.5 h-3.5" />
            {t.reading.fiction}
          </p>
          <p className="text-sm text-slate-400 mt-1 mb-4">{t.reading.fictionNote}</p>
          <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {FICTION_BOOKS.map((book) => (
              <li key={book.title} className="group">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-[#4ADE80]/20 group-hover:border-[#4ADE80]/50 transition-colors">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 30vw, 160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-200 leading-snug">{book.title}</p>
                <p className="text-[11px] text-slate-500">{book.author}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
