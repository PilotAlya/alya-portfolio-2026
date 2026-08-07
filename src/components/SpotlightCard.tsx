import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";

export function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  el.style.setProperty("--spotlight-x", `${x}px`);
  el.style.setProperty("--spotlight-y", `${y}px`);

  if (el.classList.contains("bento-card")) {
    const tiltX = ((x / rect.width) - 0.5) * 7;
    const tiltY = ((y / rect.height) - 0.5) * -5;
    el.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
  }
}

export function onSpotlightLeave(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.setProperty("--tilt-x", "0deg");
  el.style.setProperty("--tilt-y", "0deg");
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
  onMouseLeave: onSpotlightLeave,
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
