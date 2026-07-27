import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ComponentPropsWithoutRef, type MouseEvent, type ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

function useMagnetic(strength: number) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, onMove, onLeave };
}

export function MagneticLink({
  children,
  className,
  strength = 0.3,
  ...props
}: ComponentPropsWithoutRef<"a"> & MagneticProps) {
  const { ref, springX, springY, onMove, onLeave } = useMagnetic(strength);

  return (
    <motion.a
      ref={ref as React.Ref<HTMLAnchorElement>}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor-hover
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  ...props
}: ComponentPropsWithoutRef<"button"> & MagneticProps) {
  const { ref, springX, springY, onMove, onLeave } = useMagnetic(strength);

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor-hover
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
