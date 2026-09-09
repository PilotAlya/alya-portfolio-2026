import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";
import { GrainFrame } from "./effects/GrainFrame";
import { MediaZoom } from "./effects/MediaZoom";

import portrait from "@/assets/portrait.jpg";

export function Profile() {
  return (
    <section id="profile" className="py-32 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[360px_1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <MediaZoom
            src={portrait}
            alt="Альбина Акбарова — портрет"
            caption="Альбина Акбарова · Pilot Ali"
            className="relative aspect-[3/5] overflow-hidden ring-1 ring-foreground/10 bg-card rounded-3xl group/portrait"
          >
            <GrainFrame
              src={portrait}
              alt="Альбина Акбарова — портрет"
              duotone
              className="h-full w-full rounded-3xl pointer-events-none"
              imageClassName="object-top grayscale group-hover/portrait:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-accent/0 group-hover/portrait:ring-accent/30 transition-all duration-500 pointer-events-none z-[2]" />
          </MediaZoom>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel title="Обо мне" />
          <SectionHeadline before="Дизайнер," accent="который собирает" className="mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-xl">
            Альбина Акбарова, Pilot Ali. Красный диплом дизайнера-проектировщика — и практика, где
            макет должен превратиться в вещь, которой пользуются: витрина, офис, сайт, презентация.
          </p>

          <div>
            {[
              {
                period: "2021–2024",
                t: "Дизайнер-проектировщик",
                d: "ПКПС, «Дизайн (по отраслям)», красный диплом. Профиль — интерьеры коммерческих пространств. Photoshop, чертежи, материалы, работа по ТЗ.",
                badge: "Красный диплом",
              },
              {
                period: "Практика",
                t: "Музей, завод, ритейл",
                d: "Витрины Лысьвенского музея и офисные модули ММК — под ключ, без брака. В ритейле научилась говорить с бизнесом: сроки, учёт, «чтобы работало завтра».",
              },
              {
                period: "Сейчас",
                t: "Цифровой дизайн + сборка",
                d: "Figma, Photoshop, Gamma каждый день. Собираю лендинги и интерфейсы до рабочей версии. Учусь на системного аналитика в Нетологии — чтобы лучше раскладывать сложные задачи, не вместо дизайна.",
                badge: "Figma · Ps · Gamma",
              },
            ].map((c) => (
              <div key={c.t} {...spotlightAttrs} className={spotlightClass("cv-row", "subtle")}>
                <div className="cv-row__period">{c.period}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-sm font-semibold text-foreground">{c.t}</div>
                    {c.badge && (
                      <span className="text-[11px] font-medium text-accent border border-accent/40 rounded-full px-2 py-0.5">
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
