import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { HeroAurora } from "./effects/HeroAurora";
import { ScribbleBurst } from "./effects/HandDrawn";
import { MagneticLink } from "./effects/MagneticButton";

function HeroCornerTags() {
  return (
    <>
      <div className="absolute top-6 left-6 w-4 h-4 border-l border-t hud-bracket pointer-events-none" />
      <div className="absolute top-6 right-6 w-4 h-4 border-r border-t hud-bracket pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b hud-bracket pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b hud-bracket pointer-events-none" />
      <div className="absolute top-24 left-6 lg:left-10 pointer-events-none z-10">
        <span className="inline-block glass-pill text-accent font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm">
          2026
        </span>
      </div>
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-40 pb-32 px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      <HeroAurora />
      <div className="absolute inset-0 bg-aurora pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-blueprint opacity-35 pointer-events-none" />
      <HeroCornerTags />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-end">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <ScribbleBurst className="opacity-80 -ml-1" />
              <div className="inline-block p-1 border border-border rounded-full glass-panel">
                <div className="flex items-center gap-3 pl-3 pr-5 py-1.5 rounded-full">
                  <span className="relative flex size-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full size-2 bg-accent" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Беру 1–2 новых проекта в месяц
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title font-extrabold tracking-tight font-display max-w-full"
            >
              ALYA
              <br />
              <span className="text-gradient-chrome">AKBAROVA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl font-light leading-relaxed"
            >
              Помогаю бизнесу быстро получить рабочий результат: сайт, каталог, CRM или ИИ-помощника
              — от идеи до версии, которую можно{" "}
              <span className="text-foreground italic">показать клиентам и опробовать</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {[
                { label: "Сайты и прототипы", sub: "быстрый старт" },
                { label: "ИИ-помощники", sub: "под вашу задачу" },
                { label: "Автоматизация рутины", sub: "меньше ручной работы" },
                { label: "Проверка результата", sub: "тестирую перед показом" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill font-mono text-[10px] uppercase tracking-wider"
                >
                  <span className="text-foreground">{pill.label}</span>
                  <span className="text-muted-foreground/70">· {pill.sub}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <MagneticLink
                href="#contact"
                className="btn-spark group items-center gap-2 px-5 py-3 rounded-md text-sm font-semibold"
              >
                Связаться{" "}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticLink>
              <MagneticLink
                href="#nova"
                className="btn-cta-secondary items-center gap-2 px-5 py-3 rounded-md text-sm font-medium"
              >
                Смотреть примеры работ
              </MagneticLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative lg:border-l lg:border-border lg:pl-8 pb-4 flex flex-col items-center lg:items-stretch gap-6"
          >
            <p className="font-mono text-xs leading-relaxed text-muted-foreground uppercase">
              «Я не обещаю "ИИ, который решит всё". Я разбираюсь в задаче, собираю конкретный
              рабочий инструмент под неё и проверяю, что он действительно работает — прежде чем
              показать вам.»
            </p>
            <div className="font-mono text-[10px] text-accent uppercase tracking-widest">
              — Pilot Ali
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
