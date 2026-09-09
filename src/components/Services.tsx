import { motion } from "framer-motion";

import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const SERVICES = [
  {
    idx: "01",
    title: "Дизайн и визуал",
    desc: "Макеты, визуализации, прототипы в Figma. Композиция — с диплома дизайнера. Подходит и для заказа, и как proof вкуса на вакансии.",
    href: "#work",
    example: "Пример: ванная и музейные витрины",
  },
  {
    idx: "02",
    title: "Презентации",
    desc: "Структура, слайды, «до / после» — презентация, которую можно отправить заказчику или приложить к кейсу. Gamma и Figma.",
    href: "https://alya-nova-2026.vercel.app/",
    example: "Пример: презентация NOVA",
    external: true,
  },
  {
    idx: "03",
    title: "Сайты и лендинги",
    desc: "От структуры блоков до живой ссылки: собираю сама через vibe-coding — не жду отдельную команду разработки.",
    href: "#case-crm",
    example: "Пример: мини-CRM и это портфолио",
  },
  {
    idx: "04",
    title: "Интерфейсы продуктов",
    desc: "Экраны, онбординг, канбан — UI + vibe-coding до демо. Проверяю на людях, пока пользоваться станет удобно.",
    href: "#nova",
    example: "Пример: NOVA Dashboard",
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
          <SectionLabel title="Что могу сделать" />
          <SectionHeadline before="Дизайн снаружи," accent="сборка внутри" />
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Заказчику — результат без папки с макетами. Команде — глаз дизайнера и быстрая сборка
            лендинга или MVP до демо.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border bg-border">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              target={"external" in s && s.external ? "_blank" : undefined}
              rel={"external" in s && s.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group flex flex-col bg-background p-6 lg:p-7 transition-colors hover:bg-secondary/60"
            >
              <span className="lab-caption text-accent mb-5">{s.idx}</span>
              <h3 className="text-base font-semibold tracking-tight mb-2 font-display">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <span className="mt-4 text-xs font-medium text-foreground/70 group-hover:text-accent transition-colors">
                {s.example} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
