import { motion } from "framer-motion";
import { Palette, Globe, LayoutDashboard, Presentation } from "lucide-react";

import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const SERVICES = [
  {
    Icon: Palette,
    idxClass: "idx-pill--blue",
    idx: "01",
    title: "Дизайн и визуал",
    desc: "Макеты, визуализации, Photoshop, прототипы в Figma. Композиция — с диплома дизайнера. Подходит и для заказа, и как proof вкуса на вакансии.",
    href: "#work",
    example: "Пример: ванная и музейные витрины",
  },
  {
    Icon: Presentation,
    idxClass: "idx-pill--orange",
    idx: "02",
    title: "Презентации",
    desc: "Структура, слайды, «до / после» — презентация, которую можно отправить заказчику или приложить к кейсу. Gamma и Figma.",
    href: "https://alya-nova-2026.vercel.app/",
    example: "Пример: презентация NOVA",
    external: true,
  },
  {
    Icon: Globe,
    idxClass: "idx-pill--ink",
    idx: "03",
    title: "Сайты и лендинги",
    desc: "От структуры блоков до живой ссылки: собираю сама через vibe-coding — не жду отдельную команду разработки.",
    href: "#case-crm",
    example: "Пример: мини-CRM и это портфолио",
  },
  {
    Icon: LayoutDashboard,
    idxClass: "idx-pill--blue",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              target={"external" in s && s.external ? "_blank" : undefined}
              rel={"external" in s && s.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              {...spotlightAttrs}
              className={spotlightClass("lab-card group p-6 flex flex-col")}
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
                  className="flex items-center justify-between mb-5"
                >
                  <span className={`idx-pill ${s.idxClass} mb-0`}>{s.idx}</span>
                  <s.Icon className="size-5 text-muted-foreground group-hover:text-accent transition-colors" />
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
