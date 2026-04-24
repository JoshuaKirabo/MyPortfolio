"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });

    let lastAosRefresh = 0;
    lenis.on("scroll", () => {
      const now = performance.now();
      if (now - lastAosRefresh > 120) {
        lastAosRefresh = now;
        const aos = (window as Window & { AOS?: { refreshHard: () => void } }).AOS;
        if (aos?.refreshHard) {
          aos.refreshHard();
        }
      }
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
