import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
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
          <SectionHeadline accent="Немного обо мне" className="mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-xl">
            Образование и то, как я работаю с ИИ каждый день. Чем я полезна в работе — в блоке
            «Почему именно я» выше.
          </p>

          <div>
            {[
              {
                period: "2021–2024",
                t: "Профильное образование",
                d: "ПКПС, «Дизайн (по отраслям)», квалификация Дизайнер-проектировщик, красный диплом. Основной профиль: дизайн интерьера коммерческих пространств.",
                badge: "Красный диплом",
              },
              {
                period: "Сейчас",
                t: "Учусь дальше",
                d: "Учусь на системного аналитика в Нетологии — это про то, как выстраивать логику сложных систем и процессов. Хороший фундамент, но не главная роль.",
                badge: "В процессе",
                Icon: GraduationCap,
              },
              {
                period: "Ежедневно",
                t: "Работаю с ИИ каждый день",
                d: "Использую ИИ-инструменты в работе ежедневно — не просто «пробую ChatGPT», а собираю с их помощью реальные рабочие вещи: сайты, помощников, автоматизации.",
                Icon: Sparkles,
              },
            ].map((c) => (
              <div key={c.t} {...spotlightAttrs} className={spotlightClass("cv-row", "subtle")}>
                <div className="cv-row__period">{c.period}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {c.Icon && <c.Icon className="size-3.5 text-accent" />}
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
