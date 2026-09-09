import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { HeroObjects } from "./effects/HeroObjects";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] pt-28 pb-20 lg:pb-28 px-6 lg:px-8 overflow-hidden scroll-mt-24 corner-ticks"
    >
      <div className="absolute inset-0 bg-blueprint bg-blueprint--fade pointer-events-none" aria-hidden />
      <HeroObjects />

      <div className="relative max-w-7xl mx-auto mb-12 flex items-start justify-between gap-6">
        <p className="lab-caption max-w-[14ch] leading-relaxed">
          Design Lab
          <br />
          Pilot Ali · 2026
        </p>
        <p className="lab-caption text-right max-w-[22ch] leading-relaxed">
          Figma · Cursor
          <br />
          vibe-coding → демо
        </p>
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto space-y-8 lg:space-y-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lab-caption flex items-center gap-3"
        >
          От макета до рабочей версии
          <span className="lab-dot" aria-hidden />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title font-display"
        >
          ALBINA
          <br />
          AKBAROVA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl font-normal leading-relaxed"
        >
          Дизайнер, который доводит макет до рабочей версии. Лендинги, презентации, веб — глаз в
          Figma, сборка через vibe-coding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <a
            href="#contact"
            className="btn-spark group inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold"
          >
            Обсудить задачу или роль{" "}
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#work"
            className="btn-cta-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm font-medium"
          >
            Смотреть работы
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
