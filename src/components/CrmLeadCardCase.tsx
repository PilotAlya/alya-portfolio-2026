import { motion } from "framer-motion";
import { UserPlus, ExternalLink, Phone, Database, Kanban } from "lucide-react";
import { fadeUp } from "./shared";
import { GrainOverlay } from "./effects/GrainFrame";
import { MagneticLink } from "./effects/MagneticButton";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const DEMO_URL = "https://alya-crm-lead-card.vercel.app";

export function CrmLeadCardCase() {
  return (
    <section id="case-crm" className="relative py-24 px-6 lg:px-8 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Кейс 01 · Pet project · CRM
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm flex items-center gap-1">
                <UserPlus className="size-3 text-accent" /> React · Vite
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              CRM Lead Card — мини-форма лида на React
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              Веб-приложение для добавления лида в CRM: форма с валидацией, маской телефона, списком
              карточек и сохранением данных в localStorage. Собрано на vibe-coding, деплой на Vercel.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              {[
                "Форма лида на React + TypeScript + Vite: имя, телефон, источник, ответственный, этап сделки, флаг ТЗ",
                "Валидация обязательных полей и маска телефона +7 (XXX) XXX-XX-XX",
                "Сохранение в localStorage — лиды не пропадают после обновления страницы",
                "Смена этапа сделки прямо в карточке лида",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "TypeScript", "Vite", "localStorage", "Vercel"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-white/10 px-2 py-1 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <MagneticLink
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spark items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-semibold"
            >
              <ExternalLink className="size-4" />
              Открыть demo
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            {...spotlightAttrs}
            className={spotlightClass("relative overflow-hidden rounded-xl border border-white/10 p-6 bg-background/60 space-y-4")}
          >
            <GrainOverlay intensity="subtle" />
            <div className="relative z-[2] flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent">
                <Kanban className="size-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-foreground">Функционал</div>
                <div className="font-mono text-[10px] text-muted-foreground">Mini CRM · client-side</div>
              </div>
            </div>

            <div className="relative z-[2] space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Поля формы:</span>
                <span className="text-foreground font-semibold">6+</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Phone className="size-3" /> Маска:
                </span>
                <span className="text-accent font-semibold">+7 (XXX) …</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Database className="size-3" /> Storage:
                </span>
                <span className="text-emerald-400 font-semibold">localStorage</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Этап сделки:</span>
                <span className="text-foreground font-semibold">в карточке</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Deploy:</span>
                <span className="text-accent font-semibold">Vercel</span>
              </div>
            </div>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-[2] w-full flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/30 py-2 rounded hover:bg-accent/10 transition-colors"
            >
              <ExternalLink className="size-3.5" />
              Live demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
