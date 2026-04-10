"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    let dbgScrollCount = 0;
    let dbgRefreshCount = 0;
    let inRefresh = false;

    // #region agent log
    fetch("http://127.0.0.1:7421/ingest/1dbb9d1a-8860-4a0e-92ae-0ac0d34b6c10", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "edb67c" },
      body: JSON.stringify({
        sessionId: "edb67c",
        runId: "run1",
        hypothesisId: "H1",
        location: "components/smooth-scroll.tsx:10",
        message: "SmoothScroll effect entered",
        data: { href: window.location.href },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // #region agent log
      fetch("http://127.0.0.1:7421/ingest/1dbb9d1a-8860-4a0e-92ae-0ac0d34b6c10", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "edb67c" },
        body: JSON.stringify({
          sessionId: "edb67c",
          runId: "run1",
          hypothesisId: "H4",
          location: "components/smooth-scroll.tsx:28",
          message: "Reduced motion enabled, exiting smooth scroll",
          data: {},
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1,
    });

    // Keep AOS in sync without dispatching recursive "scroll" events.
    let lastAosRefresh = 0;
    lenis.on("scroll", () => {
      if (dbgScrollCount < 5) {
        dbgScrollCount += 1;
        // #region agent log
        fetch("http://127.0.0.1:7421/ingest/1dbb9d1a-8860-4a0e-92ae-0ac0d34b6c10", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "edb67c" },
          body: JSON.stringify({
            sessionId: "edb67c",
            runId: "run1",
            hypothesisId: "H2",
            location: "components/smooth-scroll.tsx:50",
            message: "Lenis scroll callback fired",
            data: { dbgScrollCount },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
      }
      const now = performance.now();
      if (now - lastAosRefresh > 120) {
        lastAosRefresh = now;
        const aos = (window as Window & { AOS?: { refreshHard: () => void } }).AOS;
        if (aos?.refreshHard) {
          if (dbgRefreshCount < 5) {
            dbgRefreshCount += 1;
            // #region agent log
            fetch("http://127.0.0.1:7421/ingest/1dbb9d1a-8860-4a0e-92ae-0ac0d34b6c10", {
              method: "POST",
              headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "edb67c" },
              body: JSON.stringify({
                sessionId: "edb67c",
                runId: "run1",
                hypothesisId: "H3",
                location: "components/smooth-scroll.tsx:69",
                message: "About to call AOS.refreshHard",
                data: { inRefresh, dbgRefreshCount },
                timestamp: Date.now(),
              }),
            }).catch(() => {});
            // #endregion
          }
          inRefresh = true;
          aos.refreshHard();
          inRefresh = false;
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
      // #region agent log
      fetch("http://127.0.0.1:7421/ingest/1dbb9d1a-8860-4a0e-92ae-0ac0d34b6c10", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "edb67c" },
        body: JSON.stringify({
          sessionId: "edb67c",
          runId: "run1",
          hypothesisId: "H1",
          location: "components/smooth-scroll.tsx:95",
          message: "SmoothScroll cleanup",
          data: {},
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
