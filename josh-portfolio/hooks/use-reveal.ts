"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Adds the `reveal` class on mount and toggles `is-visible` when the
 * element enters the viewport. Supports an optional stagger delay.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  delay = 0,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        } else {
          el.classList.remove("is-visible");
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
