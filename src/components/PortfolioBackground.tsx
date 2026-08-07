import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  ExternalLink,
  Globe,
  Sparkles,
  TrendingDown,
} from "lucide-react";

import dashboardPreview from "@/assets/churn-dashboard.png";
import { GrainFrame } from "./effects/GrainFrame";
import { fadeUp } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const DASHBOARD_URL = "https://client-retention-dashboard.vercel.app/";
const BROWSER_PDF = "/yandex-browser-verdicts.pdf";
const ALICE_PDF = "/yandex-alice-qa-report.pdf";

const ITEMS = [
  {
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
    external: true,
    accent: "from-emerald-500/10 via-transparent to-transparent",
  },
  {
    id: "case-browser",
    tag: "Product QC",
    Icon: Globe,
    title: "Яндекс.Браузер",
    summary:
      "3 сценария по ТЗ (боковая панель, PWA, группы вкладок). Pass / Pass с дефектами, 2 баг-репорта. Background — фильтр качества, не core identity.",
    metric: "3 → 2 Pass",
    metricLabel: "сценариев",
    href: BROWSER_PDF,
    linkLabel: "PDF-отчёт",
    external: true,
    accent: "from-amber-500/10 via-transparent to-transparent",
  },
  {
    id: "case-alice",
    tag: "AI Evaluation",
    Icon: Sparkles,
    title: "Яндекс с Алисой",
    summary:
      "Оценка conversational AI: 6 сценариев (диалоги, погода, музыка, карусели). 1 Pass / 5 Fail, 5 баг-репортов с Expected/Actual и severity.",
    metric: "6 сценариев",
    metricLabel: "AI quality",
    href: ALICE_PDF,
    linkLabel: "PDF-отчёт",
    external: true,
    accent: "from-violet-500/10 via-transparent to-transparent",
  },
] as const;

export function PortfolioBackground() {
  return (
    <section
      id="portfolio-background"
      className="relative py-16 px-6 lg:px-8 overflow-hidden border-t border-white/5 bg-card/20"
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
            Background · Data & Validation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-3 font-display">
            Ещё из практики
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Аудит данных, контроль качества продукта и оценка AI-ассистентов — часть бэкграунда SA/QA,
            которую использую как фильтр при shipping, а не как основную идентичность.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              {...spotlightAttrs}
              className={spotlightClass(
                "bento-card group relative flex flex-col p-5 min-h-[220px]",
                "subtle",
              )}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80 rounded-[inherit]`}
              />

              {item.id === "case-b2b" && (
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] overflow-hidden rounded-[inherit]">
                  <GrainFrame
                    src={dashboardPreview}
                    alt=""
                    duotone
                    className="h-full w-full rounded-[inherit]"
                    imageClassName="object-top"
                  />
                </div>
              )}

              <div className="relative z-[1] flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent/90">
                    {item.tag}
                  </span>
                  <div className="shrink-0 p-1.5 rounded-md border border-white/10 bg-background/40 text-accent">
                    <item.Icon className="size-3.5" />
                  </div>
                </div>

                <h3 className="font-display text-base font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
                  {item.summary}
                </p>

                <div className="flex items-end justify-between gap-3 pt-3 border-t border-white/10">
                  <div>
                    <div className="font-mono text-sm font-bold text-accent flex items-center gap-1">
                      {item.id === "case-b2b" && <TrendingDown className="size-3" />}
                      {item.metric}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {item.metricLabel}
                    </div>
                  </div>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors shrink-0"
                  >
                    {item.linkLabel}
                    {item.external ? (
                      <ExternalLink className="size-3" />
                    ) : (
                      <ArrowUpRight className="size-3" />
                    )}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70"
        >
          PDF и dashboard · артефакты для AI assessor / data audit ролей
        </motion.p>
      </div>
    </section>
  );
}
