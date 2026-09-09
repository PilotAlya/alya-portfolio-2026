import { motion } from "framer-motion";

import { CountUp } from "./effects/CountUp";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

export function HeroStats() {
  const stats = [
    {
      n: 1,
      suf: "",
      display: "Диплом",
      label: "дизайнера-проектировщика, красный · интерьеры коммерческих пространств",
      color: "text-accent",
    },
    {
      n: 2,
      suf: "",
      display: "Музей + ММК",
      label: "коммерческие проекты под ключ, ноль брака на производстве",
      color: "",
    },
    {
      n: 5,
      suf: "+",
      display: null,
      label: "рабочих сайтов и демо, которые можно открыть прямо сейчас",
      color: "text-accent",
    },
    {
      n: 3,
      suf: "",
      display: "Figma · Ps · Gamma",
      label: "ежедневные инструменты плюс сборка живых интерфейсов",
      color: "text-orange-accent",
    },
  ];

  return (
    <section className="border-y border-border bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            {...spotlightAttrs}
            className={spotlightClass("relative flex flex-col gap-2 p-6 lg:p-8", "subtle")}
          >
            <div
              className={`font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight ${s.color}`}
            >
              {s.display ? (
                s.display
              ) : (
                <>
                  <CountUp to={s.n} duration={1200} />
                  {s.suf}
                </>
              )}
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
