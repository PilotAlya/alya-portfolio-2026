import { motion } from "framer-motion";

import { HandDrawnCircle, HandDrawnWave } from "./effects/HandDrawn";
import { CountUp } from "./effects/CountUp";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

export function HeroStats() {
  const stats = [
    { n: 2, suf: " года", label: "в ритейле + ~6 мес. стажировки с учёбы", highlight: false },
    { n: 5, suf: "+", label: "рабочих MVP и демо на Vercel", highlight: true },
    { n: 40, suf: "%", label: "рутины автоматизировано в Legacy-софте", highlight: false },
    {
      n: 12,
      suf: "+",
      label: "дефектов поймано до деплоя в NOVA — UX-тесты и итерации",
      highlight: false,
    },
  ];

  return (
    <section className="border-y border-border bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <HandDrawnWave className="mb-2 hidden lg:block" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            {...spotlightAttrs}
            className={spotlightClass(
              "relative flex flex-col gap-2 rounded-lg border border-transparent p-4 -m-4",
              "subtle",
            )}
          >
            {s.highlight && (
              <HandDrawnCircle
                size={100}
                className="absolute -top-2 -left-3 opacity-70 pointer-events-none"
              />
            )}
            <div className="font-extrabold text-3xl sm:text-4xl tracking-tight relative z-[1]">
              <CountUp
                to={s.n}
                duration={1200}
                className={s.highlight ? "text-spark" : "text-accent"}
              />
              {s.suf}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground leading-relaxed relative z-[1]">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
