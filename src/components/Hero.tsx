import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { HERO_CODE_LINES } from "./shared";

function HeroCodeRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-2 lg:left-6 font-mono text-[10px] leading-loose text-accent/30 whitespace-nowrap"
      >
        {[...HERO_CODE_LINES, ...HERO_CODE_LINES].map((l, i) => (
          <div key={`l-${i}`}>{l}</div>
        ))}
      </motion.div>
      <motion.div
        initial={{ y: "-50%" }}
        animate={{ y: 0 }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-2 lg:right-6 font-mono text-[10px] leading-loose text-muted-foreground/25 whitespace-nowrap text-right hidden md:block"
      >
        {[...HERO_CODE_LINES, ...HERO_CODE_LINES].map((l, i) => (
          <div key={`r-${i}`}>{l}</div>
        ))}
      </motion.div>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

function HeroCornerTags() {
  return (
    <>
      <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-accent/40 pointer-events-none" />
      <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-accent/40 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-accent/40 pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-accent/40 pointer-events-none" />
      <div className="absolute top-24 left-6 lg:left-10 pointer-events-none z-10">
        <span className="inline-block bg-accent/15 border border-accent/30 text-accent font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm">
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
    <section id="top" ref={ref} className="relative pt-40 pb-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <HeroCodeRain />
      <HeroCornerTags />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-end">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block p-1 border border-white/10 rounded-full"
            >
              <div className="flex items-center gap-3 pl-3 pr-5 py-1.5 bg-white/5 rounded-full">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-accent" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Available · System & AI architecture
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight leading-[0.85]"
            >
              ALYA<br />
              <span className="text-accent">AKBAROVA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl font-light leading-relaxed"
            >
              System Analyst · AI-Native Engineer · Product Architect.
              Перевожу промышленный хаос в цифровую логику —{" "}
              <span className="text-foreground italic">от чертежей мебели до RAG-агентов</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Связаться{" "}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/resume.html"
                download="Albina_Akbarova_Resume.html"
                className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-5 py-3 rounded-md text-sm font-medium hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Скачать резюме
              </a>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Смотреть кейсы
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative lg:border-l lg:border-white/10 lg:pl-8 pb-4 flex flex-col items-center lg:items-stretch gap-6"
          >
            <p className="font-mono text-xs leading-relaxed text-muted-foreground uppercase">
              «Я проектирую логику систем. Моя суперсила — деконструкция хаоса и сборка автономных
              инструментов там, где стандартный софт бессилен.»
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
