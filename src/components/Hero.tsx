import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { HeroAurora } from "./effects/HeroAurora";
import { HeroBlob } from "./effects/HeroBlob";
import { MagneticLink } from "./effects/MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="corner-ticks relative pt-32 pb-32 px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      <HeroAurora />
      <div className="absolute inset-0 bg-aurora pointer-events-none opacity-80" />
      <HeroBlob />

      <div className="relative max-w-7xl mx-auto mb-10 flex items-center justify-between text-xs font-medium tracking-wide text-muted-foreground">
        <span>2026</span>
        <span>PILOT ALI // ДИЗАЙН · САЙТЫ · ИИ</span>
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
              Беру 1–2 новых проекта в месяц
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
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
        >
          Помогаю бизнесу быстро получить нужный результат: сайт, лендинг, презентацию, CRM или
          ИИ-помощника — от идеи до версии, которую можно{" "}
          <span className="text-foreground italic">показать клиентам и опробовать</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hero-spec-strip"
        >
          {[
            { label: "Сайты и лендинги", value: "быстрый старт" },
            { label: "Презентации и дизайн", value: "Gamma, Figma" },
            { label: "ИИ-помощники", value: "и автоматизация рутины" },
            { label: "Проверка результата", value: "тестирую перед показом" },
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
              Связаться{" "}
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticLink>
            <MagneticLink
              href="#index"
              className="btn-cta-secondary items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium"
            >
              Смотреть примеры работ
            </MagneticLink>
          </div>

          <p className="accent-italic max-w-md text-lg leading-relaxed text-foreground/90 border-l-2 border-spark/40 pl-4">
            «Я не обещаю "ИИ, который решит всё". Разбираюсь в задаче, собираю рабочий инструмент
            под неё и проверяю, что он работает — прежде чем показать вам.»
            <span className="font-sans not-italic block mt-2 text-sm font-medium text-accent">
              — Pilot Ali
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
