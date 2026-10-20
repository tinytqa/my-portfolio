"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useContent, useT } from "@/lib/i18n";

export default function GalleryModal({ albumId, onAlbumChange, onClose }) {
  const { ALBUMS } = useContent();
  const t = useT();
  const lenis = useLenis();
  const [photoIndex, setPhotoIndex] = useState(null);
  const [direction, setDirection] = useState(0);

  const isOpen = albumId !== null;
  const album = ALBUMS.find((a) => a.id === albumId) ?? ALBUMS[0];
  const photos = album.photos;

  const step = useCallback(
    (delta) => {
      setDirection(delta);
      setPhotoIndex((i) => (i + delta + photos.length) % photos.length);
    },
    [photos.length]
  );

  // Lock page scroll while open
  useEffect(() => {
    if (!isOpen) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  // Keyboard: Esc closes lightbox → modal, arrows navigate
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") photoIndex !== null ? setPhotoIndex(null) : onClose();
      if (photoIndex === null) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, photoIndex, step, onClose]);

  const close = () => {
    setPhotoIndex(null);
    onClose();
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#050807]/80 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.dialogLabel}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-full flex flex-col rounded-3xl glass-panel border border-[#4ADE80]/20 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-[#4ADE80]/10">
              <div className="flex items-center gap-2.5">
                <Images className="w-5 h-5 text-[#4ADE80]" />
                <h2 className="text-lg font-semibold text-slate-100">{t.gallery.title}</h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label={t.gallery.close}
                className="p-2 rounded-full text-slate-400 hover:text-[#4ADE80] hover:bg-[#4ADE80]/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Album tabs */}
            {/* Plain CSS active state: a shared layoutId pill gets mis-measured while the modal
                is still scaling in, and both gallery modals on the page would share it. */}
            <div role="tablist" className="flex items-center gap-2 px-5 sm:px-6 py-3 overflow-x-auto" data-lenis-prevent>
              {ALBUMS.map((a) => {
                const active = a.id === album.id;
                return (
                  <button
                    key={a.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => onAlbumChange(a.id)}
                    className={`shrink-0 inline-flex items-center gap-1.5 h-9 px-4 rounded-full border text-sm leading-none transition-colors duration-200 cursor-pointer ${
                      active
                        ? "bg-[#4ADE80] border-[#4ADE80] text-[#0B1110] font-semibold"
                        : "bg-transparent border-white/10 text-slate-300 hover:text-[#4ADE80] hover:border-[#4ADE80]/40"
                    }`}
                  >
                    {a.label}
                    <span className={`text-xs ${active ? "text-[#0B1110]/60" : "text-slate-500"}`}>{a.photos.length}</span>
                  </button>
                );
              })}
            </div>

            {/* Photo grid */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 pb-6" data-lenis-prevent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                >
                  {photos.map((src, i) => (
                    <motion.button
                      key={src}
                      type="button"
                      onClick={() => {
                        setDirection(0);
                        setPhotoIndex(i);
                      }}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.3 }}
                      className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-black/40 border border-[#4ADE80]/10 hover:border-[#4ADE80]/50 transition-colors cursor-zoom-in"
                    >
                      <Image
                        src={src}
                        alt={`${album.label} ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {photoIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setPhotoIndex(null);
                }}
                className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90"
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={photos[photoIndex]}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -60 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-4 sm:inset-12 pointer-events-none"
                  >
                    <Image
                      src={photos[photoIndex]}
                      alt={`${album.label} ${photoIndex + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <span className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 text-xs font-mono text-slate-300">
                  {album.label} · {photoIndex + 1} / {photos.length}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhotoIndex(null);
                  }}
                  aria-label={t.gallery.closePhoto}
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-black/50 text-slate-200 hover:text-[#4ADE80] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {photos.length > 1 &&
                  [
                    { delta: -1, Icon: ChevronLeft, pos: "left-2 sm:left-4", label: t.gallery.prev },
                    { delta: 1, Icon: ChevronRight, pos: "right-2 sm:right-4", label: t.gallery.next },
                  ].map(({ delta, Icon, pos, label }) => (
                    <button
                      key={delta}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        step(delta);
                      }}
                      aria-label={label}
                      className={`absolute ${pos} top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-white/10 text-slate-200 hover:text-[#4ADE80] hover:border-[#4ADE80]/40 cursor-pointer`}
                    >
                      <Icon className="w-6 h-6" />
                    </button>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
