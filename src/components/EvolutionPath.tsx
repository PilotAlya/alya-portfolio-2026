import { motion } from "framer-motion";
import { Ruler, CircuitBoard, Bot } from "lucide-react";
import { fadeUp } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

export function EvolutionPath() {
  const stages = [
    {
      n: "01",
      title: "Точность и процессы",
      body: "Ритейл, проекты для музея и завода ММК. Урок на всю жизнь: ошибка в деталях на старте — финансовые потери в конце.",
      Icon: Ruler,
    },
    {
      n: "02",
      title: "Порядок в цифрах",
      body: "Наводила порядок в учёте и автоматизировала рутину в ритейле — подробности в блоке «Опыт» ниже.",
      Icon: CircuitBoard,
    },
    {
      n: "03",
      title: "Помощник на основе ИИ",
      body: "NOVA — система для бизнеса с ИИ-помощником внутри, от идеи до рабочей версии. Полный кейс — в разделе NOVA ниже.",
      Icon: Bot,
      featured: true,
    },
  ];

  return (
    <section id="path" className="relative py-24 px-6 lg:px-8 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 relative z-10"
        >
          <SectionLabel title="Мой путь" />
          <SectionHeadline
            before="От точности на бумаге — до"
            accent="цифровых решений"
            className="max-w-3xl relative z-10"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              {...spotlightAttrs}
              className={spotlightClass(
                `rounded-2xl border p-10 lg:p-12 group ${s.featured ? "bg-accent/5 border-accent/20" : "bg-card border-foreground/8"}`,
                "flat",
              )}
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`inline-flex size-9 items-center justify-center rounded-full text-sm font-semibold ${s.featured ? "bg-spark text-spark-foreground" : "bg-secondary text-muted-foreground"}`}
                >
                  {s.n}
                </span>
                <s.Icon
                  className={`size-5 ${s.featured ? "text-accent" : "text-muted-foreground"} group-hover:text-accent transition-colors`}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
