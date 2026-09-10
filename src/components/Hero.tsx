import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { HeroMask } from "./effects/HeroMask";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] pt-28 pb-16 lg:pb-24 px-6 lg:px-8 overflow-x-clip overflow-y-visible scroll-mt-24 corner-ticks"
    >
      <div className="absolute inset-0 bg-blueprint bg-blueprint--fade pointer-events-none" aria-hidden />
      <HeroMask />

      <div className="relative z-[1] max-w-7xl mx-auto mb-10 flex items-start justify-between gap-6">
        <p className="lab-caption max-w-[14ch] leading-relaxed">
          Design Lab
          <br />
          Pilot Ali · 2026
        </p>
        <p className="lab-caption text-right max-w-[18ch] leading-relaxed hidden sm:block">
          Figma · Cursor
          <br />
          vibe-coding → демо
        </p>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-[1] max-w-7xl mx-auto space-y-7 lg:space-y-9"
      >
        <h1 className="hero-title font-display">
          ALBINA
          <br />
          AKBAROVA
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 max-w-[36rem] font-normal leading-relaxed">
          Дизайнер, который доводит макет до{" "}
          <span className="spot-orange font-semibold">рабочей версии</span>. Лендинги, презентации,
          веб — глаз в Figma, сборка через{" "}
          <span className="spot-lime font-semibold">vibe-coding</span>.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
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
        </div>
      </motion.div>
    </section>
  );
}
