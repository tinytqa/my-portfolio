"use client";

import { useState } from "react";
import Image from "next/image";
import { Activity, ArrowUpRight, Images } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";
import GalleryModal from "@/components/hero/GalleryModal";

export default function LifeCard() {
  const { ALBUMS, STRAVA } = useContent();
  const t = useT();
  const [openAlbum, setOpenAlbum] = useState(null);
  const hobbies = ALBUMS.filter((a) => a.id !== "me");

  return (
    <div className="relative h-full flex flex-col p-6 sm:p-7 rounded-3xl glass-panel border border-[#4ADE80]/20 hover:border-[#4ADE80]/50 transition-all duration-500 overflow-hidden">
      <span className="text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">
        {t.life.eyebrow}
      </span>
      <h3 className="text-xl font-bold text-white tracking-tight mt-1 mb-2">{t.life.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-5">
        {t.life.body}
      </p>

      <div className="grid grid-cols-3 gap-3 mt-auto">
        {hobbies.map((album) => (
          <button
            key={album.id}
            type="button"
            onClick={() => setOpenAlbum(album.id)}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#4ADE80]/15 hover:border-[#4ADE80]/50 transition-colors cursor-pointer"
          >
            <Image
              src={album.photos[0]}
              alt={album.label}
              fill
              sizes="(max-width: 768px) 30vw, 160px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-left">
              <span className="block text-xs font-semibold text-white">{album.label}</span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-[#86EFAC]">
                <Images className="w-3 h-3" />
                {album.photos.length} {t.gallery.photos}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Strava training log */}
      <div className="mt-5 pt-5 border-t border-white/5">
        <div className="flex items-center justify-between gap-3 mb-3">
          <p className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#4ADE80]">
            <Activity className="w-3.5 h-3.5" />
            {t.life.log}
          </p>
          <a
            href={STRAVA.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FC4C02]/10 border border-[#FC4C02]/40 text-xs font-semibold text-[#FF8A5B] hover:bg-[#FC4C02]/20 transition-colors"
          >
            {t.life.strava} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
        {STRAVA.widgets.length > 0 && (
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
        )}
      </div>

      <GalleryModal albumId={openAlbum} onAlbumChange={setOpenAlbum} onClose={() => setOpenAlbum(null)} />
    </div>
  );
}
