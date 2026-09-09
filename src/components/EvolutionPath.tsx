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

        <div className="milestone-strip">
          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              {...spotlightAttrs}
              className={spotlightClass("group", "subtle")}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`milestone__n ${s.featured ? "milestone__n--featured" : ""}`}>
                  {s.n}
                </span>
                <s.Icon
                  className={`size-5 ${s.featured ? "text-accent" : "text-muted-foreground"} group-hover:text-accent transition-colors`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
