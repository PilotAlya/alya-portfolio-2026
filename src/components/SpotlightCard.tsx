import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";

export function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
}

export function spotlightClass(className?: string, variant: "default" | "flat" | "subtle" = "default") {
  return cn(
    "spotlight-card",
    variant === "flat" && "spotlight-card--flat",
    variant === "subtle" && "spotlight-card--subtle",
    className,
  );
}

export const spotlightAttrs = {
  "data-cursor-hover": true,
  onMouseMove: onSpotlightMove,
} as const;

export function CornerMarks() {
  return (
    <>
      <span aria-hidden className="corner-mark corner-mark--tl" />
      <span aria-hidden className="corner-mark corner-mark--tr" />
      <span aria-hidden className="corner-mark corner-mark--bl" />
      <span aria-hidden className="corner-mark corner-mark--br" />
    </>
  );
}
