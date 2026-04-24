"use client";

import { useEffect } from "react";

function setOrigin(el: HTMLElement, clientX: number, clientY: number) {
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--rx", `${clientX - rect.left}px`);
  el.style.setProperty("--ry", `${clientY - rect.top}px`);
}

const RADIAL_MASK_TARGETS = ".btn-primary, .project-card-cta";

/**
 * Sets --rx / --ry on primary buttons and project card CTAs so radial fills
 * originate from the cursor. One instance in the root layout is enough.
 */
export function BtnPrimaryRadialOrigin() {
  useEffect(() => {
    const onPointerOver = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(RADIAL_MASK_TARGETS);
      if (el instanceof HTMLElement) setOrigin(el, e.clientX, e.clientY);
    };

    const onPointerMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(RADIAL_MASK_TARGETS);
      if (el instanceof HTMLElement) setOrigin(el, e.clientX, e.clientY);
    };

    document.body.addEventListener("pointerover", onPointerOver, true);
    document.body.addEventListener("pointermove", onPointerMove, true);
    return () => {
      document.body.removeEventListener("pointerover", onPointerOver, true);
      document.body.removeEventListener("pointermove", onPointerMove, true);
    };
  }, []);

  return null;
}
