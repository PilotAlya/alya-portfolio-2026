import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { fadeUp } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { HandDrawnCircle } from "./effects/HandDrawn";
import { GrainFrame } from "./effects/GrainFrame";

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
          <HandDrawnCircle
            size={340}
            className="absolute -top-6 -right-8 md:-right-12 z-10 opacity-80"
          />
          <div className="relative aspect-[3/5] overflow-hidden ring-1 ring-white/10 bg-card rounded-sm group/portrait">
            <GrainFrame
              src={portrait}
              alt="Алья Акбарова — портрет"
              duotone
              className="h-full w-full rounded-sm"
              imageClassName="object-top grayscale group-hover/portrait:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-accent/0 group-hover/portrait:ring-accent/30 transition-all duration-500 pointer-events-none z-[2]" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionLabel chapter={9} title="Профиль специалиста" />
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-10">
            Профиль специалиста
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                t: "AI-native разработка",
                d: "Vibe-coding, прототипы, деплой на Vercel — см. NOVA и GitHub-проекты.",
              },
              {
                t: "Системное мышление",
                d: "Декомпозиция, процессы, REST/API на базовом уровне — фундамент из Нетологии SA.",
              },
              {
                t: "Валидация и доведение до результата",
                d: "UX-тесты, AI evaluation, аудит данных — подробнее в разделе Портфолио.",
              },
            ].map((c) => (
              <div
                key={c.t}
                {...spotlightAttrs}
                className={spotlightClass("rounded-lg border border-transparent p-4 -m-4", "subtle")}
              >
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
                d: "Нетология · «Системный аналитик» — архитектура систем, REST API, BPMN. Фундамент системного мышления, не главная роль.",
                badge: "В процессе",
                Icon: GraduationCap,
              },
              {
                t: "Native AI user",
                d: "Ежедневно Cursor, OpenCode, Gemini; новые инструменты осваиваю через практику — собираю MVP, а не просто «пробую ChatGPT».",
                Icon: Sparkles,
              },
            ].map((c) => (
              <div
                key={c.t}
                {...spotlightAttrs}
                className={spotlightClass("rounded-lg border border-transparent p-4 -m-4", "subtle")}
              >
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
        </motion.div>
      </div>
    </section>
  );
}
