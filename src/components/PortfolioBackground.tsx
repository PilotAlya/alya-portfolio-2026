import { motion } from "framer-motion";
import { BarChart3, ExternalLink, TrendingDown } from "lucide-react";

import dashboardPreview from "@/assets/churn-dashboard.png";
import { GrainFrame } from "./effects/GrainFrame";
import { fadeUp } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const DASHBOARD_URL = "https://client-retention-dashboard.vercel.app/";

const ITEM = {
  id: "case-b2b",
  tag: "Data Audit",
  Icon: BarChart3,
  title: "B2B Churn Audit",
  summary:
    "Проверила отчёт аналитиков: отток был завышен с 72.7% до реальных 63.6%. Python-скрипт для сверки + executive dashboard для руководства.",
  metric: "72.7% → 63.6%",
  metricLabel: "коррекция оттока",
  href: DASHBOARD_URL,
  linkLabel: "Dashboard",
} as const;

export function PortfolioBackground() {
  return (
    <section
      id="portfolio-background"
      className="relative py-16 px-6 lg:px-8 overflow-hidden border-t border-white/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-10 max-w-3xl"
        >
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            Ещё из практики · Данные и автоматизация
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-3 font-display">
            Автоматизация вокруг продукта
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Не только интерфейс — ещё и рутина вокруг него: аудит данных и executive-дашборд,
            собранные на Python.
          </p>
        </motion.div>

        <motion.article
          id={ITEM.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          {...spotlightAttrs}
          className={spotlightClass(
            "bento-card group relative grid sm:grid-cols-[1.1fr_1fr] gap-6 p-6 sm:p-7 max-w-2xl mx-auto scroll-mt-24",
            "subtle",
          )}
        >
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-spark/15 via-transparent to-transparent opacity-80 rounded-[inherit]`}
          />

          <div className="relative z-[1] flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent/90">
                {ITEM.tag}
              </span>
              <div className="shrink-0 p-1.5 rounded-md border border-white/10 bg-background/40 text-accent">
                <ITEM.Icon className="size-3.5" />
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
              {ITEM.title}
            </h3>

            <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
              {ITEM.summary}
            </p>

            <div className="flex items-end justify-between gap-3 pt-3 border-t border-white/10">
              <div>
                <div className="font-mono text-sm font-bold text-accent flex items-center gap-1">
                  <TrendingDown className="size-3" />
                  {ITEM.metric}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                  {ITEM.metricLabel}
                </div>
              </div>

              <a
                href={ITEM.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors shrink-0"
              >
                {ITEM.linkLabel}
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          <div className="relative z-[1] rounded-[inherit] overflow-hidden min-h-[160px] opacity-90">
            <GrainFrame
              src={dashboardPreview}
              alt=""
              duotone
              caption="Executive dashboard"
              className="h-full w-full rounded-[inherit]"
              imageClassName="object-top"
            />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
