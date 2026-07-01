import { motion } from "framer-motion";
import { Ruler, CircuitBoard, Bot } from "lucide-react";
import { fadeUp, SectionCodeDecor, EVOLUTION_CODE_LINES } from "./shared";

export function EvolutionPath() {
  const stages = [
    {
      n: "01",
      title: "Промышленный хаос",
      body: "Конструирование для заводов и музеев. Урок: ошибка в 1 мм на чертеже — финансовые потери на производстве.",
      Icon: Ruler,
    },
    {
      n: "02",
      title: "Оцифровка процессов",
      body: "Реинжиниринг бизнес-моделей, оптимизация Legacy-софта (Инфо-Предприятие), создание автоматизированных конвейеров.",
      Icon: CircuitBoard,
      featured: true,
    },
    {
      n: "03",
      title: "Интеллектуальный штурман",
      body: "Разработка экосистемы NOVA (FLEX & PROJECT) через Vibe-coding. RAG-агенты, AI-пайплайны, автономные инструменты.",
      Icon: Bot,
    },
  ];

  return (
    <section
      id="path"
      className="relative py-24 px-6 lg:px-8 border-y border-white/5 overflow-hidden"
    >
      <SectionCodeDecor lines={EVOLUTION_CODE_LINES} side="left" speed={70} />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 relative z-10"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest bg-background/70 backdrop-blur-sm px-2 py-1 rounded-sm">
            Глава 02 · Эволюция системности
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 max-w-3xl text-white relative z-10">
            От чертежа — до AI-архитектуры
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 border border-white/10">
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className={`p-10 lg:p-12 group transition-colors ${
                i < stages.length - 1 ? "lg:border-r border-b lg:border-b-0 border-white/10" : ""
              } ${s.featured ? "bg-accent/5" : "hover:bg-white/[0.02]"}`}
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`font-mono text-xs ${s.featured ? "text-accent" : "text-muted-foreground"}`}
                >
                  STAGE {s.n}
                </span>
                <s.Icon
                  className={`size-5 ${s.featured ? "text-accent" : "text-muted-foreground"} group-hover:text-accent transition-colors`}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
