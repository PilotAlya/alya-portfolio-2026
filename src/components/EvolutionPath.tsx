import { motion } from "framer-motion";
import { PencilRuler, Building2, MonitorSmartphone } from "lucide-react";
import { fadeUp } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

export function EvolutionPath() {
  const stages = [
    {
      n: "01",
      title: "Глаз и точность",
      body: "Диплом дизайнера-проектировщика. Витрины музея, офис завода ММК: ошибка в миллиметре на старте — брак и деньги на финале.",
      Icon: PencilRuler,
    },
    {
      n: "02",
      title: "Заказчик и процесс",
      body: "Ритейл научил говорить с бизнесом: ТЗ, сроки, «чтобы работало завтра». Дизайн без этого — картинка в папке.",
      Icon: Building2,
    },
    {
      n: "03",
      title: "Цифровой продукт",
      body: "Figma, Photoshop, Gamma — и сборка живых сайтов. NOVA: интерфейс, тесты с людьми, демо, которое можно открыть.",
      Icon: MonitorSmartphone,
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
          <SectionLabel title="Откуда вкус" />
          <SectionHeadline
            before="От чертежа и интерьера — к"
            accent="цифровому дизайну"
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
