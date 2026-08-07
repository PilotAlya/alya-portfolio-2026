import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarkupProps = {
  className?: string;
};

/** Messy scribble lines — SENCE-style markup above headlines */
export function ScribbleBurst({ className }: MarkupProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 280 72"
      fill="none"
      className={cn("w-[min(280px,70vw)] h-auto text-spark pointer-events-none", className)}
    >
      <path
        d="M8 48 C 42 12, 78 58, 112 28 S 168 8, 204 36 S 248 52, 272 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M24 62 Q 88 44, 132 54 T 220 40"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M156 18 L 168 8 M 168 8 L 180 20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/** Hand-drawn oval wrapper for primary CTA */
export function HandDrawnOval({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("hand-drawn-oval relative inline-flex", className)}>
      <svg
        aria-hidden
        className="hand-drawn-oval__ring absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M12 30 C 12 12, 38 6, 100 6 C 162 6, 188 12, 188 30 C 188 48, 162 54, 100 54 C 38 54, 12 48, 12 30 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="text-spark"
        />
      </svg>
      {children}
    </span>
  );
}

/** Circle marker — highlight a metric or photo */
export function HandDrawnCircle({ className, size = 120 }: MarkupProps & { size?: number }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={cn("text-spark pointer-events-none", className)}
    >
      <path
        d="M18 62 C 22 28, 52 10, 78 18 C 104 26, 112 52, 98 78 C 84 104, 52 112, 28 96 C 8 82, 14 78, 18 62 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="4 3"
        opacity="0.9"
      />
    </svg>
  );
}

/** Curved arrow with optional label */
export function HandDrawnArrow({
  className,
  label,
  flip,
}: MarkupProps & { label?: string; flip?: boolean }) {
  return (
    <div
      className={cn(
        "inline-flex items-end gap-2 pointer-events-none",
        flip && "flex-row-reverse",
        className,
      )}
    >
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-spark max-w-[8rem] leading-snug">
          {label}
        </span>
      )}
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="text-spark shrink-0">
        <path
          d="M4 26 C 18 8, 28 4, 44 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M36 8 L 44 12 L 38 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Wave connecting stats cards */
export function HandDrawnWave({ className }: MarkupProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 800 24"
      fill="none"
      preserveAspectRatio="none"
      className={cn("w-full h-6 text-foreground/25 dark:text-foreground/35 pointer-events-none", className)}
    >
      <path
        d="M0 12 C 80 2, 160 22, 240 12 S 400 2, 480 12 S 640 22, 720 12 S 760 8, 800 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small star spark — SENCE asterisk accent */
export function SparkStar({ className }: MarkupProps) {
  return (
    <span aria-hidden className={cn("text-spark text-sm leading-none select-none", className)}>
      ✦
    </span>
  );
}
