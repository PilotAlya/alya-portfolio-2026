import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, ExternalLink, Globe, Sparkles, TrendingDown } from "lucide-react";

import dashboardPreview from "@/assets/churn-dashboard.png";
import { GrainFrame, GrainOverlay } from "./effects/GrainFrame";
import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const DASHBOARD_URL = "https://client-retention-dashboard.vercel.app/";
const BROWSER_PDF = "/yandex-browser-verdicts.pdf";
const ALICE_PDF = "/yandex-alice-qa-report.pdf";

const ITEMS = [
  {
    id: "case-b2b",
    tag: "Проверка данных",
    Icon: BarChart3,
    title: "Проверка оттока клиентов",
    summary:
      "Перепроверила отчёт аналитиков компании — отток клиентов оказался завышен: 72.7% вместо реальных 63.6%. Написала скрипт для проверки и собрала наглядный дашборд для руководства.",
    metric: "72.7% → 63.6%",
    metricLabel: "исправленная цифра оттока",
    href: DASHBOARD_URL,
    linkLabel: "Дашборд",
    external: true,
    accent: "from-spark/15 via-transparent to-transparent",
  },
  {
    id: "case-browser",
    tag: "Проверка продукта",
    Icon: Globe,
    title: "Яндекс.Браузер",
    summary:
      "Проверила 3 функции браузера по техническому заданию (боковая панель, установка как приложение, группы вкладок). Нашла и задокументировала 2 проблемы.",
    metric: "3 → 2 без замечаний",
    metricLabel: "сценариев проверено",
    href: BROWSER_PDF,
    linkLabel: "PDF-отчёт",
    external: true,
    accent: "from-accent/15 via-transparent to-transparent",
  },
  {
    id: "case-alice",
    tag: "Оценка ИИ",
    Icon: Sparkles,
    title: "Голосовой помощник Алиса",
    summary:
      "Проверила, насколько хорошо голосовой помощник справляется с диалогом: 6 сценариев (погода, музыка, карточки и другое). Нашла проблемы в 5 из 6 и оформила подробные отчёты.",
    metric: "6 сценариев",
    metricLabel: "проверено диалогов",
    href: ALICE_PDF,
    linkLabel: "PDF-отчёт",
    external: true,
    accent: "from-spark/12 via-transparent to-transparent",
  },
] as const;

export function PortfolioBackground() {
  return (
    <section
      id="portfolio-background"
      className="relative py-16 px-6 lg:px-8 overflow-hidden border-t border-foreground/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-10 max-w-3xl"
        >
          <SectionLabel title="Дополнительный опыт" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-3 font-display">
            Ещё из практики
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Проверка данных, контроль качества продукта и оценка ИИ-помощников — эти навыки я
            использую как фильтр качества во всём, что делаю.
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
                "bento-card group relative flex flex-col p-5 min-h-[220px] scroll-mt-24",
                "subtle",
              )}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80 rounded-[inherit]`}
              />

              {item.id === "case-b2b" && (
                <div className="pointer-events-none absolute inset-0 opacity-[0.14] overflow-hidden rounded-[inherit]">
                  <GrainFrame
                    src={dashboardPreview}
                    alt=""
                    duotone
                    caption="Executive dashboard"
                    className="h-full w-full rounded-[inherit]"
                    imageClassName="object-top"
                  />
                </div>
              )}

              {(item.id === "case-browser" || item.id === "case-alice") && (
                <div className="pointer-events-none absolute inset-0 opacity-25 rounded-[inherit] overflow-hidden">
                  <GrainOverlay intensity="subtle" />
                </div>
              )}

              <div className="relative z-[1] flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-medium text-accent/90">{item.tag}</span>
                  <div className="shrink-0 p-1.5 rounded-full border border-foreground/10 bg-background/60 text-accent">
                    <item.Icon className="size-3.5" />
                  </div>
                </div>

                <h3 className="font-display text-base font-semibold tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
                  {item.summary}
                </p>

                <div className="flex items-end justify-between gap-3 pt-3 border-t border-foreground/10">
                  <div>
                    <div className="text-sm font-bold text-accent flex items-center gap-1">
                      {item.id === "case-b2b" && <TrendingDown className="size-3" />}
                      {item.metric}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {item.metricLabel}
                    </div>
                  </div>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors shrink-0"
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
      </div>
    </section>
  );
}
