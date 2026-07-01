import { motion } from "framer-motion";

export function HeroStats() {
  const stats = [
    { n: 2, suf: " года", label: "в производстве и ритейле + ~6 мес. стажировки с учёбы" },
    { n: 3, suf: "", label: "AI-инструмента собрано на vibe-coding" },
    { n: 40, suf: "%", label: "рутины автоматизировано в Legacy-софте" },
    {
      n: 1,
      suf: "",
      label: "ключевой кейс: клиент из Перми заказал проект по моим чертежам и AI-рендерам без визита в офис",
    },
  ];
  return (
    <section className="border-y border-white/10 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <div className="font-extrabold text-3xl sm:text-4xl tracking-tight">
              <span className="text-accent">{s.n}</span>
              <span>{s.suf}</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground leading-relaxed">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
