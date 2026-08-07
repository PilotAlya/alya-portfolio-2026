import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CountUpProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  padZero?: number;
  className?: string;
};

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1400,
  padZero,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView) return;

    setValue(0);
    const start = performance.now();
    const tick = (t: number) => {
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = to * eased;
      setValue(decimals > 0 ? parseFloat(next.toFixed(decimals)) : Math.round(next));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, to, duration, decimals]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : padZero
        ? String(value).padStart(padZero, "0")
        : String(value);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
