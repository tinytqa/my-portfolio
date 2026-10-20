"use client";

import { useState } from "react";
import Image from "next/image";
import { Activity, ArrowUpRight, Bike, Images, Waves } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";
import GalleryModal from "@/components/hero/GalleryModal";

// Lucide has no jump rope icon: two handles with the rope hanging between them
function JumpRope({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="4" height="7" rx="2" />
      <rect x="16" y="2" width="4" height="7" rx="2" />
      <path d="M6 9 C6 24, 18 24, 18 9" />
    </svg>
  );
}

const HOBBY_ICONS = { cycling: Bike, swimming: Waves, jumprope: JumpRope };

export default function LifeCard() {
  const { ALBUMS, OTHER_HOBBIES, STRAVA } = useContent();
  const t = useT();
  const [openAlbum, setOpenAlbum] = useState(null);
  const hobbies = ALBUMS.filter((a) => a.id !== "me");

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-500 overflow-hidden">
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#4ADE80]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Story, other hobbies and Strava */}
        <div className="lg:col-span-2 flex flex-col">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">
            {t.life.eyebrow}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight mt-1 mb-3">{t.life.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{t.life.body}</p>

          {OTHER_HOBBIES.length > 0 && (
            <div className="mt-6">
              <p className="text-xs text-slate-400 mb-2">{t.life.alsoLike}</p>
              <div className="flex flex-wrap gap-2">
                {OTHER_HOBBIES.map(({ id, label }) => {
                  const Icon = HOBBY_ICONS[id] ?? Activity;
                  return (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4ADE80]/[0.06] border border-[#4ADE80]/20 text-xs font-medium text-[#86EFAC]"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <a
            href={STRAVA.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-6 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FC4C02]/10 border border-[#FC4C02]/40 text-xs font-semibold text-[#FF8A5B] hover:bg-[#FC4C02]/20 transition-colors"
          >
            <Activity className="w-3.5 h-3.5" />
            {t.life.strava} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Photo albums */}
        <div className="lg:col-span-3 grid grid-cols-3 gap-3">
          {hobbies.map((album, i) => (
            <button
              key={album.id}
              type="button"
              onClick={() => setOpenAlbum(album.id)}
              className={`group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#4ADE80]/15 hover:border-[#4ADE80]/50 transition-colors cursor-pointer ${
                i % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <Image
                src={album.photos[0]}
                alt={album.label}
                fill
                sizes="(max-width: 1024px) 30vw, 240px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-left">
                <span className="block text-sm font-semibold text-white">{album.label}</span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-[#86EFAC]">
                  <Images className="w-3 h-3" />
                  {album.photos.length} {t.gallery.photos}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Strava embeds, when configured */}
      {STRAVA.widgets.length > 0 && (
        <div className="relative mt-10 pt-6 border-t border-white/5">
          <p className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#4ADE80] mb-3">
            <Activity className="w-3.5 h-3.5" />
            {t.life.log}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STRAVA.widgets.map((w) => (
              <iframe
                key={w.src}
                src={w.src}
                title={w.title}
                height={w.height}
                loading="lazy"
                className="w-full rounded-xl border border-white/10 bg-white"
              />
            ))}
          </div>
        </div>
      )}

      <GalleryModal albumId={openAlbum} onAlbumChange={setOpenAlbum} onClose={() => setOpenAlbum(null)} />
    </div>
  );
}
