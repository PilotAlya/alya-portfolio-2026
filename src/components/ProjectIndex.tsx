import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const ITEMS = [
  {
    n: "01",
    title: "NOVA",
    tag: "Продукт",
    desc: "Дашборд и Telegram-бот с ИИ-помощником — от идеи до рабочей версии, которую можно показать.",
    href: "#nova",
  },
  {
    n: "02",
    title: "Мини-CRM для клиентов",
    tag: "Веб",
    desc: "Форма лида, маска телефона, сохранение данных — личный проект для практики.",
    href: "#case-crm",
  },
  {
    n: "03",
    title: "Проверка оттока клиентов",
    tag: "Данные",
    desc: "Аудит данных и дашборд для руководства — на реальных бизнес-цифрах.",
    href: "#case-b2b",
  },
  {
    n: "04",
    title: "От Excel — к автоматизации",
    tag: "Автоматизация",
    desc: "Скрипты на Python вместо ручной проверки данных в старом учётном софте.",
    href: "#experience",
  },
  {
    n: "05",
    title: "Studio research",
    tag: "Исследование",
    desc: "Проверка гипотез и предиктивная аналитика для бизнес-решений.",
    href: "#case-studios",
  },
] as const;

export function ProjectIndex() {
  return (
    <section id="index" className="py-20 lg:py-28 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 max-w-2xl"
        >
          <SectionLabel title="Указатель" />
          <SectionHeadline before="Все примеры" accent="в одном списке" />
        </motion.div>

        <div className="border-t border-foreground/10">
          {ITEMS.map((item, i) => (
            <motion.a
              key={item.n}
              href={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="index-row group"
            >
              <span className="index-row__n">{item.n}</span>
              <span className="index-row__title">
                {item.title}
                <span className="index-row__tag">{item.tag}</span>
              </span>
              <span className="index-row__desc">{item.desc}</span>
              <ArrowUpRight className="index-row__arrow" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
