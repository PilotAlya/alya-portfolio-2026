import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { fadeUp } from "./shared";

import portrait from "@/assets/portrait.jpg";

export function Profile() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[360px_1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/5] overflow-hidden ring-1 ring-white/10 bg-card">
            <img
              src={portrait}
              alt="Алья Акбарова — портрет"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Глава 09 · Профиль специалиста
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-10">
            Профиль специалиста
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                t: "Тестирование и анализ",
                d: "QA, UX-тесты, тест-дизайн — подробнее в разделе Портфолио.",
              },
              {
                t: "Разработка",
                d: "React, TypeScript, vibe-coding — см. NOVA Dashboard.",
              },
              {
                t: "Управление рисками",
                d: "Комплаенс-аудит, контроль качества — см. раздел Опыт.",
              },
            ].map((c) => (
              <div key={c.t}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                  {c.t}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 grid sm:grid-cols-3 gap-8">
            {[
              {
                t: "Профильное образование",
                d: "ПКПС, «Дизайн (по отраслям)», квалификация Дизайнер-проектировщик (2021–2024), красный диплом. Основной профиль: дизайн интерьера коммерческих пространств.",
                badge: "Красный диплом",
              },
              {
                t: "Сейчас учусь",
                d: "Нетология · «Системный аналитик» — изучение архитектуры систем, REST API, баз данных, BPMN.",
                badge: "В процессе",
                Icon: GraduationCap,
              },
              {
                t: "Early AI adopter",
                d: "Начала применять ИИ-инструменты в работе ещё до того, как это стало мейнстримом — внедряла в реальные кейсы, а не просто пробовала.",
                Icon: Sparkles,
              },
            ].map((c) => (
              <div key={c.t}>
                <div className="flex items-center gap-2 mb-2">
                  {c.Icon && <c.Icon className="size-3.5 text-accent" />}
                  <div className="font-mono text-[10px] uppercase tracking-widest text-foreground">
                    {c.t}
                  </div>
                  {c.badge && (
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent border border-accent/40 px-1.5 py-0.5">
                      {c.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
              Смежный опыт
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="#experience"
                className="group p-4 border border-white/10 rounded-lg hover:border-accent/40 hover:bg-accent/5 transition-colors"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground mb-1">
                  РЭЛАН · дизайн-проектировщик
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  2 года на производстве: проектирование, ERP, автоматизация.
                </p>
                <span className="inline-block mt-2 font-mono text-[10px] text-accent group-hover:underline">
                  Подробнее в Опыт →
                </span>
              </a>
              <a
                href="#nova"
                className="group p-4 border border-white/10 rounded-lg hover:border-accent/40 hover:bg-accent/5 transition-colors"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground mb-1">
                  Urban Mebel · стажировка
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  4 дня аудита процессов — основа для NOVA Dashboard.
                </p>
                <span className="inline-block mt-2 font-mono text-[10px] text-accent group-hover:underline">
                  Смотреть NOVA →
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
