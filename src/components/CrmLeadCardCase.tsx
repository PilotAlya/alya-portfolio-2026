import { motion } from "framer-motion";
import { UserPlus, ExternalLink, Phone, Database, Kanban } from "lucide-react";
import { fadeUp } from "./shared";
import { GrainOverlay } from "./effects/GrainFrame";
import { SectionLabel } from "./effects/SectionLabel";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const DEMO_URL = "https://alya-crm-lead-card.vercel.app";

export function CrmLeadCardCase() {
  return (
    <section
      id="case-crm"
      className="relative py-24 px-6 lg:px-8 overflow-hidden border-b border-foreground/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <SectionLabel title="Личный проект · Мини-CRM" />
              <span className="text-xs text-muted-foreground bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                <UserPlus className="size-3 text-accent" /> React · Vite
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Мини-CRM для учёта клиентов
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              Простое веб-приложение для учёта новых клиентов: форма с проверкой полей, маска для
              телефона, список карточек. Данные сохраняются прямо в браузере — ничего не пропадает
              при обновлении страницы.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              {[
                "Форма нового клиента: имя, телефон, откуда пришёл, ответственный, этап сделки",
                "Проверка обязательных полей и маска телефона +7 (XXX) XXX-XX-XX",
                "Данные сохраняются в браузере — клиенты не пропадают после обновления страницы",
                "Смена этапа сделки прямо в карточке клиента",
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
                  className="text-xs text-muted-foreground border border-foreground/10 px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spark inline-flex items-center gap-2 text-sm px-5 py-3 rounded-md font-semibold"
            >
              <ExternalLink className="size-4" />
              Открыть demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            {...spotlightAttrs}
            className={spotlightClass(
              "relative overflow-hidden rounded-2xl border border-foreground/10 p-6 bg-card space-y-4",
            )}
          >
            <GrainOverlay intensity="subtle" />
            <div className="relative z-[2] flex items-center gap-3 border-b border-foreground/10 pb-4">
              <div className="p-2 rounded-full bg-accent/10 border border-accent/20 text-accent">
                <Kanban className="size-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Что внутри</div>
                <div className="text-xs text-muted-foreground">Мини-CRM · без сервера</div>
              </div>
            </div>

            <div className="relative z-[2] space-y-2 text-sm">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-foreground/5">
                <span className="text-muted-foreground">Поля формы:</span>
                <span className="text-foreground font-semibold">6+</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-foreground/5">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Phone className="size-3" /> Маска:
                </span>
                <span className="text-accent font-semibold">+7 (XXX) …</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-foreground/5">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Database className="size-3" /> Хранение:
                </span>
                <span className="text-emerald-600 font-semibold">в браузере</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-foreground/5">
                <span className="text-muted-foreground">Этап сделки:</span>
                <span className="text-foreground font-semibold">в карточке</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-foreground/5">
                <span className="text-muted-foreground">Посмотреть:</span>
                <span className="text-accent font-semibold">онлайн-демо</span>
              </div>
            </div>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-[2] w-full flex items-center justify-center gap-2 text-sm font-medium text-accent border border-accent/30 py-2.5 rounded-full hover:bg-accent/10 transition-colors"
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
