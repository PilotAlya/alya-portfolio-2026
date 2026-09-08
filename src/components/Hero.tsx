import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { HeroAurora } from "./effects/HeroAurora";
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
      className="relative pt-40 pb-32 px-6 lg:px-8 overflow-hidden scroll-mt-24"
    >
      <HeroAurora />
      <div className="absolute inset-0 bg-aurora pointer-events-none opacity-80" />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-end">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 pl-3 pr-5 py-1.5 rounded-full glass-panel">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-accent" />
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
              Помогаю бизнесу быстро получить нужный результат: сайт, лендинг, презентацию, CRM или
              ИИ-помощника — от идеи до версии, которую можно{" "}
              <span className="text-foreground italic">показать клиентам и опробовать</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {[
                { label: "Сайты и лендинги", sub: "быстрый старт" },
                { label: "Презентации и дизайн", sub: "Gamma, Figma" },
                { label: "ИИ-помощники", sub: "и автоматизация рутины" },
                { label: "Проверка результата", sub: "тестирую перед показом" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-sm"
                >
                  <span className="text-foreground font-medium">{pill.label}</span>
                  <span className="text-muted-foreground">· {pill.sub}</span>
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
                className="btn-spark group items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold"
              >
                Связаться{" "}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticLink>
              <MagneticLink
                href="#nova"
                className="btn-cta-secondary items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium"
              >
                Смотреть примеры работ
              </MagneticLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative rounded-3xl bg-card border border-foreground/8 p-7 pb-4 flex flex-col items-start gap-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]"
          >
            <p className="text-base leading-relaxed text-foreground">
              «Я не обещаю "ИИ, который решит всё". Я разбираюсь в задаче, собираю конкретный
              рабочий инструмент под неё и проверяю, что он действительно работает — прежде чем
              показать вам.»
            </p>
            <div className="text-sm font-medium text-accent">— Pilot Ali</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
