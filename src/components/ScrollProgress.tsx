import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 inset-x-0 h-[2px] bg-accent origin-left z-[60] pointer-events-none shadow-[0_0_12px_color-mix(in_oklab,var(--color-accent)_60%,transparent)]"
      style={{ scaleX }}
    />
  );
}
