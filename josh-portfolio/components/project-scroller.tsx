"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Symmetric ease — avoids the “snap” at t=0 that ease-out has on button-driven scrolls */
function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2;
}

export default function ProjectScroller({ children }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollRafRef = useRef<number>(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  useEffect(
    () => () => {
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    },
    [],
  );

  const animateScrollTo = useCallback((el: HTMLElement, targetLeft: number) => {
    if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);

    const start = el.scrollLeft;
    const delta = targetLeft - start;
    if (Math.abs(delta) < 0.5) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.scrollLeft = targetLeft;
      return;
    }

    const distance = Math.abs(delta);
    /* Longer, distance-scaled window reads smoother than the previous 480–820ms ease-out */
    const duration = Math.min(1250, Math.max(580, distance * 0.92));
    const t0 = performance.now();

    const step = (now: number) => {
      const elapsed = now - t0;
      const t = Math.min(1, elapsed / duration);
      el.scrollLeft = start + delta * easeInOutQuint(t);
      if (t < 1) {
        scrollRafRef.current = requestAnimationFrame(step);
      } else {
        scrollRafRef.current = 0;
      }
    };
    scrollRafRef.current = requestAnimationFrame(step);
  }, []);

  const scrollToAdjacentCard = useCallback(
    (dir: 1 | -1) => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const track = scroller.firstElementChild;
      if (!track || !(track instanceof HTMLElement)) return;
      const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-project-card]"));
      if (cards.length === 0) return;

      const before = scroller.scrollLeft;
      let target = before;

      if (dir === 1) {
        for (const c of cards) {
          const left = c.offsetLeft;
          if (left > before + 2) {
            target = left;
            break;
          }
        }
      } else {
        for (let i = cards.length - 1; i >= 0; i--) {
          const c = cards[i]!;
          const left = c.offsetLeft;
          if (left < before - 2) {
            target = left;
            break;
          }
        }
      }

      const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      target = Math.max(0, Math.min(maxScroll, Math.round(target)));

      animateScrollTo(scroller, target);
    },
    [animateScrollTo],
  );

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      <div className="flex shrink-0 items-center">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => scrollToAdjacentCard(-1)}
          disabled={!canPrev}
          className="project-scroller-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="project-scroller min-w-0 flex-1 overflow-x-auto"
      >
        <div className="flex min-w-max gap-6 pt-8 pb-10 pr-2 sm:pr-4">
          {children}
        </div>
      </div>

      <div className="flex shrink-0 items-center">
        <button
          type="button"
          aria-label="Next project"
          onClick={() => scrollToAdjacentCard(1)}
          disabled={!canNext}
          className="project-scroller-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
