"use client";

import { motion, useMotionValue, useMotionValueEvent, useSpring } from "motion/react";
import {
  useCallback,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const cardEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Softer spring = spotlight eases toward cursor (NextStep-style). */
const spotlightSpring = { stiffness: 48, damping: 22, mass: 0.65 };

/** Match SVG rx/ry to Tailwind rounded-[44px] (~radius minus stroke inset). */
const STROKE_INSET = 1.25;
const RECT_RX = 44 - STROKE_INSET;

export type CardBrandAccent = {
  strokeBottom: string;
  strokeMid: string;
  strokeTop: string;
  glowStrong: string;
  glowSoft: string;
};

function syncSpotlightVars(
  el: HTMLElement | null,
  xPct: number,
  yPct: number,
) {
  if (!el) return;
  el.style.setProperty("--spot-x", `${xPct}%`);
  el.style.setProperty("--spot-y", `${yPct}%`);
}

export default function ProjectCardGlow({
  children,
  className = "",
  brand,
}: {
  children: ReactNode;
  className?: string;
  brand: CardBrandAccent;
}) {
  const [hovered, setHovered] = useState(false);
  const uid = useId().replace(/:/g, "");
  const gradId = `proj-card-${uid}`;
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const smoothX = useSpring(mouseX, spotlightSpring);
  const smoothY = useSpring(mouseY, spotlightSpring);

  useMotionValueEvent(smoothX, "change", (latest) => {
    syncSpotlightVars(spotlightRef.current, latest, smoothY.get());
  });
  useMotionValueEvent(smoothY, "change", (latest) => {
    syncSpotlightVars(spotlightRef.current, smoothX.get(), latest);
  });

  useLayoutEffect(() => {
    syncSpotlightVars(spotlightRef.current, smoothX.get(), smoothY.get());
  }, [hovered, smoothX, smoothY]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      mouseX.set(((e.clientX - r.left) / r.width) * 100);
      mouseY.set(((e.clientY - r.top) / r.height) * 100);
    },
    [mouseX, mouseY],
  );

  const shellShadow: CSSProperties = {
    boxShadow: hovered
      ? `0 18px 46px rgba(0,0,0,0.42), 0 0 0 1px rgba(255,255,255,0.06), 0 0 22px -8px ${brand.glowStrong}`
      : "0 14px 34px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.04)",
  };

  const spotlightStyle = {
    backgroundImage: `radial-gradient(42% 42% at var(--spot-x, 50%) var(--spot-y, 50%), ${brand.glowStrong} 0%, ${brand.glowSoft} 38%, transparent 62%)`,
  } as const;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => {
        setHovered(false);
        mouseX.set(50);
        mouseY.set(50);
      }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4, transition: { duration: 0.45, ease: cardEase } }}
      style={shellShadow}
      className={`group/card relative w-full overflow-visible rounded-[44px] transition-[box-shadow] duration-300 ease-out ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[44px]"
      >
        <motion.div
          className="absolute inset-0 rounded-[44px]"
          style={{
            background: `radial-gradient(72% 90% at 50% 100%, ${brand.glowStrong} 0%, ${brand.glowSoft} 38%, transparent 68%)`,
            transformOrigin: "50% 100%",
          }}
          initial={false}
          animate={{ opacity: hovered ? 0.55 : 0, scaleY: hovered ? 1 : 0.5 }}
          transition={{ duration: 1.05, ease: cardEase }}
        />
      </div>

      <svg
        className="pointer-events-none absolute inset-0 z-[4] h-full w-full overflow-visible bg-transparent"
        aria-hidden
      >
        <defs>
          <linearGradient
            id={`${gradId}-stroke`}
            x1="50%"
            y1="100%"
            x2="50%"
            y2="0%"
          >
            <stop offset="0%" stopColor={brand.strokeBottom} stopOpacity="0.92" />
            <stop offset="42%" stopColor={brand.strokeMid} stopOpacity="0.72" />
            <stop offset="100%" stopColor={brand.strokeTop} stopOpacity="0.48" />
          </linearGradient>
        </defs>
        <g
          style={{
            transform: "rotate(180deg)",
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
          }}
        >
          <motion.rect
            x={STROKE_INSET}
            y={STROKE_INSET}
            width="calc(100% - 2.5px)"
            height="calc(100% - 2.5px)"
            rx={RECT_RX}
            ry={RECT_RX}
            fill="none"
            stroke={`url(#${gradId}-stroke)`}
            strokeWidth={1.5}
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            strokeDasharray="1"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 1 }}
            animate={{ strokeDashoffset: hovered ? 0 : 1 }}
            transition={{ duration: 1.05, ease: cardEase }}
          />
        </g>
      </svg>

      <div className="relative z-[1] overflow-hidden rounded-[44px]">
        <div
          ref={spotlightRef}
          aria-hidden
          className={`pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300 ease-out ${
            hovered ? "opacity-[0.42]" : "opacity-0"
          }`}
          style={spotlightStyle}
        />
        <div className="relative z-[2]">{children}</div>
      </div>
    </motion.div>
  );
}
