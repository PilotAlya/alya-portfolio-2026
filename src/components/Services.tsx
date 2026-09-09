import { motion } from "framer-motion";
import { Globe, Presentation, Bot, ShieldCheck } from "lucide-react";

import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const SERVICES = [
  {
    Icon: Globe,
    title: "Сайты и лендинги",
    desc: "Сайт-визитка, лендинг под конкретную задачу или продукт — от идеи до версии, которую можно показать клиентам.",
    href: "#index",
    example: "Пример: мини-CRM",
  },
  {
    Icon: Presentation,
    title: "Презентации и дизайн",
    desc: "Презентации в Gamma и Figma, визуальные материалы для бизнеса — опираюсь на диплом дизайнера.",
    href: "#nova",
    example: "Пример: презентация NOVA",
  },
  {
    Icon: Bot,
    title: "ИИ-помощники и автоматизация",
    desc: "Чат-боты и ассистенты для бизнеса, автоматизация рутинных задач вместо ручной работы в Excel.",
    href: "#experience",
    example: "Пример: автоматизация в ритейле",
  },
  {
    Icon: ShieldCheck,
    title: "Проверка и тестирование",
    desc: "Аудит сайта, ИИ-продукта или процесса — нахожу проблемы и слабые места до того, как их найдёт клиент.",
    href: "#case-b2b",
    example: "Пример: проверка оттока клиентов",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <SectionLabel title="Что я делаю" />
          <SectionHeadline before="Чем я могу быть" accent="полезна бизнесу" />
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Четыре направления, с которыми я работаю чаще всего — коротко о каждом.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              {...spotlightAttrs}
              className={spotlightClass("glass-card group p-6 flex flex-col")}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col flex-1"
              >
                <motion.div
                  variants={staggerItem}
                  className="mb-5 inline-flex size-11 items-center justify-center rounded-full bg-secondary text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                >
                  <s.Icon className="size-5" />
                </motion.div>
                <motion.h3
                  variants={staggerItem}
                  className="text-base font-semibold tracking-tight mb-2"
                >
                  {s.title}
                </motion.h3>
                <motion.p
                  variants={staggerItem}
                  className="text-sm text-muted-foreground leading-relaxed flex-1"
                >
                  {s.desc}
                </motion.p>
                <motion.span
                  variants={staggerItem}
                  className="mt-4 text-xs font-medium text-accent group-hover:underline underline-offset-2"
                >
                  {s.example} →
                </motion.span>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
