import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { SectionHeadline } from "./effects/SectionHeadline";
import { GrainFrame } from "./effects/GrainFrame";
import { MediaZoom } from "./effects/MediaZoom";

import portrait from "@/assets/portrait.jpg";

export function Profile() {
  return (
    <section id="profile" className="py-32 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[360px_1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <MediaZoom
            src={portrait}
            alt="Альбина Акбарова — портрет"
            caption="Альбина Акбарова · Pilot Ali"
            className="relative aspect-[3/5] overflow-hidden border border-border bg-card rounded-md group/portrait"
          >
            <GrainFrame
              src={portrait}
              alt="Альбина Акбарова — портрет"
              duotone
              className="h-full w-full rounded-md pointer-events-none"
              imageClassName="object-top grayscale group-hover/portrait:grayscale-0 transition-all duration-700"
            />
          </MediaZoom>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionHeadline before="Дизайнер," accent="который собирает" className="mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-xl">
            Альбина Акбарова, Pilot Ali. Расту в лендингах, презентациях и веб-дизайне. Vibe-coding
            — способ довести макет до живой версии, не отдельная «инженерная» идентичность.
          </p>

          <div>
            {[
              {
                period: "2021–2024",
                t: "Дизайнер-проектировщик",
                d: "ПКПС, «Дизайн (по отраслям)», красный диплом. Профиль — интерьеры коммерческих пространств: чертежи, материалы, работа по ТЗ.",
                badge: "Красный диплом",
              },
              {
                period: "Практика",
                t: "Музей, завод, ритейл",
                d: "Витрины Лысьвенского музея и офисные модули ММК — под ключ, без брака. В ритейле — ТЗ, сроки и «чтобы работало завтра».",
              },
              {
                period: "Сейчас",
                t: "Веб-дизайн + vibe-coding",
                d: "Figma каждый день. Собираю лендинги и интерфейсы через Cursor до демо на Vercel. Учусь на системного аналитика в Нетологии — чтобы лучше раскладывать задачи, не вместо дизайна.",
                badge: "Figma · Cursor",
              },
            ].map((c) => (
              <div key={c.t} className="cv-row">
                <div className="cv-row__period">{c.period}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-sm font-semibold text-foreground">{c.t}</div>
                    {c.badge && (
                      <span className="lab-caption text-accent border border-accent/30 rounded-sm px-2 py-0.5">
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <a
              href="/resume-ai.pdf"
              download="Albina_Akbarova_AI_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-colors"
            >
              Резюме (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
