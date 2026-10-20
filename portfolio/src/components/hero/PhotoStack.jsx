"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Images } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";
import GalleryModal from "./GalleryModal";

// Resting / hovered layout for each stacked card (back → front)
const LAYOUT = [
  { rest: { x: "-14%", y: "4%", rotate: -10 }, open: { x: "-46%", y: "6%", rotate: -14 } },
  { rest: { x: "14%", y: "3%", rotate: 9 }, open: { x: "46%", y: "4%", rotate: 13 } },
  { rest: { x: "-5%", y: "-3%", rotate: -4 }, open: { x: "-16%", y: "-8%", rotate: -5 } },
  { rest: { x: "0%", y: "0%", rotate: 2 }, open: { x: "6%", y: "-2%", rotate: 1 } },
];

const SPRING = { type: "spring", stiffness: 160, damping: 22 };

// The stack is a preserve-3d context, where browsers order cards by depth and ignore z-index.
// Cards on the same plane z-fight where they overlap (flicker while tilting), so give each its own depth.
const DEPTH_STEP = 4;
const HOVER_DEPTH = 40;

export default function PhotoStack() {
  const { ALBUMS } = useContent();
  const t = useT();
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(null);

  // Album covers: "me" sits on top, the others fan out behind it
  const cards = [...ALBUMS.slice(1), ALBUMS[0]].slice(-LAYOUT.length);
  const total = ALBUMS.reduce((n, a) => n + a.photos.length, 0);

  // Subtle mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 25, stiffness: 120 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 120 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[400px] lg:max-w-[440px] aspect-square mx-auto flex items-center justify-center select-none"
        style={{ perspective: 1000 }}
      >
        {/* Soft ambient glow */}
        <motion.div
          animate={{ opacity: hovered ? 0.55 : 0.35, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-72 h-72 rounded-full blur-[90px] bg-gradient-to-tr from-[#10B981] via-[#4ADE80] to-[#86EFAC] pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-[58%] aspect-[3/4]"
        >
          {cards.map((album, i) => {
            const isFront = i === cards.length - 1;
            return (
              <motion.button
                key={album.id}
                type="button"
                onClick={() => setOpenAlbum(album.id)}
                aria-label={`${t.gallery.openAlbum} ${album.label}`}
                initial={false}
                animate={{ ...(hovered ? LAYOUT[i].open : LAYOUT[i].rest), z: i * DEPTH_STEP }}
                whileHover={{ scale: 1.02, z: HOVER_DEPTH, zIndex: 20 }}
                transition={SPRING}
                style={{ zIndex: i }}
                className="absolute inset-0 rounded-2xl p-2 pb-9 bg-[#121816] border border-[#4ADE80]/25 shadow-[0_18px_45px_-12px_rgba(0,0,0,0.7)] hover:border-[#4ADE80]/60 hover:shadow-[0_0_30px_rgba(74,222,128,0.25)] transition-[border-color,box-shadow] duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#4ADE80]"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
                  <Image
                    src={album.photos[0]}
                    alt={album.label}
                    fill
                    sizes="(max-width: 1024px) 60vw, 260px"
                    preload={isFront}
                    className="object-cover"
                  />
                </div>
                <span className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-200">{album.label}</span>
                  <span className="text-[#4ADE80]">{album.photos.length} {t.gallery.photos}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Call-to-action pill */}
        <motion.button
          type="button"
          onClick={() => setOpenAlbum(ALBUMS[0].id)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-0 sm:bottom-2 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#4ADE80]/30 text-xs font-mono text-slate-200 hover:text-[#4ADE80] whitespace-nowrap cursor-pointer"
        >
          <Images className="w-3.5 h-3.5 text-[#4ADE80]" />
          {t.gallery.viewGallery} · <span className="text-[#4ADE80]">{total} {t.gallery.photos}</span>
        </motion.button>
      </div>

      <GalleryModal
        albumId={openAlbum}
        onAlbumChange={setOpenAlbum}
        onClose={() => setOpenAlbum(null)}
      />
    </>
  );
}
