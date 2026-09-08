import { motion } from "framer-motion";

import { CountUp } from "./effects/CountUp";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

export function HeroStats() {
  const stats = [
    {
      n: 2,
      suf: " года",
      label: "практики в ритейле + стажировки во время учёбы",
      highlight: false,
    },
    {
      n: 5,
      suf: "+",
      label: "рабочих прототипов и демо-сайтов в открытом доступе",
      highlight: true,
    },
    {
      n: 40,
      suf: "%",
      label: "рутинных задач автоматизировано в старом учётном софте",
      highlight: false,
    },
    {
      n: 12,
      suf: "+",
      label: "проблем найдено и исправлено в NOVA до показа пользователям",
      highlight: false,
    },
  ];

  return (
    <section className="border-y border-border bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            {...spotlightAttrs}
            className={spotlightClass(
              "relative flex flex-col gap-2 rounded-2xl border border-transparent p-4 -m-4",
              "subtle",
            )}
          >
            <div className="font-extrabold text-3xl sm:text-4xl tracking-tight">
              <CountUp
                to={s.n}
                duration={1200}
                className={s.highlight ? "text-spark" : "text-accent"}
              />
              {s.suf}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
