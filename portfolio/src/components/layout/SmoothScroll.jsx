"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Fallback gap below the fixed navbar when the target has no scroll-margin-top
const NAV_OFFSET = 88;

/**
 * SmoothScroll component powered by Lenis and seamlessly synchronized with GSAP ScrollTrigger
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin on client
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const lenisInstance = lenisRef.current?.lenis;

      if (lenisInstance) {
        // Sync Lenis scroll events with GSAP ScrollTrigger
        lenisInstance.on("scroll", ScrollTrigger.update);
      }

      // Drive Lenis through GSAP ticker for frame-perfect animation synchronicity
      const updateTicker = (time) => {
        lenisRef.current?.lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(updateTicker);
        if (lenisInstance) {
          lenisInstance.off("scroll", ScrollTrigger.update);
        }
      };
    }
  }, []);

  // Each navbar tab is its own page: start it at the top. Lenis keeps its own scroll
  // position, so Next.js's scroll-to-top on navigation alone is not enough.
  useEffect(() => {
    if (window.location.hash) return;
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  // In-page anchor links (#experience, #contact…).
  // Native hash jumps get overwritten by Lenis while it is still easing a previous scroll,
  // so we take over: cancel the native jump, let Lenis scroll there, then update the URL.
  useEffect(() => {
    const scrollToHash = (hash, immediate = false) => {
      const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
      const lenis = lenisRef.current?.lenis;
      if (!target) return false;
      // Respect each target's own scroll-margin-top (Tailwind scroll-mt-*), like native anchors do
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || NAV_OFFSET;
      if (lenis) {
        lenis.scrollTo(target, { offset: -margin, immediate, force: true });
      } else {
        target.scrollIntoView({ block: "start" });
      }
      return true;
    };

    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (hash === "#" || !scrollToHash(hash)) return;
      event.preventDefault();
      if (window.location.hash !== hash) history.pushState(null, "", hash);
    };

    // Back/forward between hashes
    const onPopState = () => scrollToHash(window.location.hash);

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);

    // Opening the page directly with a hash: wait for layout (fonts, images) to settle
    let timer;
    if (window.location.hash) {
      timer = setTimeout(() => scrollToHash(window.location.hash, true), 300);
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false}
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
