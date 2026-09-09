import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { HeroBlob } from "./effects/HeroBlob";
import { MagneticLink } from "./effects/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-32 pb-24 lg:pb-32 px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      <HeroBlob />

      <div className="relative max-w-7xl mx-auto mb-10 flex items-center justify-between text-xs font-medium tracking-wide text-muted-foreground">
        <span>2026</span>
        <span>PILOT ALI // ДИЗАЙН · FIGMA · VIBE-CODING</span>
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 pl-3 pr-5 py-1.5 rounded-full glass-panel">
            <span className="relative flex size-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "var(--lime)" }}
              />
              <span
                className="relative inline-flex rounded-full size-2"
                style={{ backgroundColor: "var(--lime)" }}
              />
            </span>
            <span className="text-sm font-medium text-foreground">
              Дизайн · лендинги · презентации · сборка до демо
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title font-black tracking-tight font-display max-w-full"
        >
          ALBINA
          <br />
          <span className="text-gradient-chrome">AKBAROVA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          Дизайнер, который{" "}
          <span className="accent-italic text-foreground">доводит макет до рабочей версии</span>.
          Лендинги, презентации, веб-интерфейсы — от композиции в Figma и Photoshop до живого демо
          через vibe-coding. Не оставляю картинкой в папке.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hero-spec-strip"
        >
          {[
            { label: "Дизайн", value: "диплом · Figma · Photoshop" },
            { label: "Сборка", value: "vibe-coding · Cursor" },
            { label: "Для кого", value: "заказ и роли в продукте" },
            { label: "Формат", value: "от идеи до рабочей версии" },
          ].map((spec) => (
            <div key={spec.label}>
              <div className="hero-spec-strip__label">{spec.label}</div>
              <div className="hero-spec-strip__value">{spec.value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          <div className="flex flex-wrap gap-3">
            <MagneticLink
              href="#contact"
              className="btn-spark group items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold"
            >
              Обсудить задачу или роль{" "}
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticLink>
            <MagneticLink
              href="#work"
              className="btn-cta-secondary items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium"
            >
              Смотреть работы
            </MagneticLink>
          </div>

          <p className="accent-italic max-w-md text-lg leading-relaxed text-foreground/90 border-l-2 border-spark/40 pl-4">
            «Сначала глаз и композиция. Потом vibe-coding, чтобы макет стал ссылкой, которой можно
            пользоваться — и проверка на людях до сдачи.»
            <span className="font-sans not-italic block mt-2 text-sm font-medium text-accent">
              — Pilot Ali
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
