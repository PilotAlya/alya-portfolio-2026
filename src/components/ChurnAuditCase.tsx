import { motion } from "framer-motion";
import { BarChart3, ExternalLink, TrendingDown, Zap } from "lucide-react";

import { fadeUp } from "./shared";

const DASHBOARD_URL = "https://client-retention-dashboard.vercel.app/";

export function ChurnAuditCase() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Портфолио · Кейс 01 · Data Audit
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm">
                B2B · Churn · ETL
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Аудит данных и бизнес-метрик B2B-сервиса
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              Отчёт прошлых аналитиков показывал Churn Rate 72.7% — руководство сомневалось в
              достоверности. Провела независимый аудит сырых биллинг-данных, восстановила логику
              флайтов и пересчитала ключевые метрики удержания.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6 text-xs">
              <div className="p-3 border border-white/10 rounded bg-background/50">
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Situation · Task
                </div>
                <p className="text-muted-foreground">
                  Завышенный отток вызывал сомнения. Задача — аудит 6 CSV-таблиц, восстановление
                  ETL-логики и пересчёт метрик для руководства.
                </p>
              </div>
              <div className="p-3 border border-white/10 rounded bg-background/50">
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Action
                </div>
                <p className="text-muted-foreground">
                  Декомпозиция склейки сущностей и пауз · Python-скрипт (Pandas + Cursor) ·
                  Executive Dashboard на Vercel с Chart.js.
                </p>
              </div>
            </div>

            <div className="p-4 border border-accent/20 rounded-md bg-accent/5 mb-6">
              <div className="flex items-start gap-2">
                <Zap className="size-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground italic">
                  Не тратила 6 часов на ручную сверку в Excel — использовала AI как мультипликатор:
                  когнитивная нагрузка с рутины смещена на архитектуру гипотез, бизнес-анализ и
                  финальную валидацию.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "Pandas", "Cursor", "Chart.js", "Tailwind", "Vercel", "Markdown"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-white/10 px-2 py-1 rounded-sm"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              <ExternalLink className="size-4" />
              Открыть дашборд
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-white/10 rounded-xl p-6 bg-background/60 space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent">
                <BarChart3 className="size-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-foreground">KPI · Result</div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  Executive Dashboard
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Churn Rate (до):</span>
                <span className="text-rose-400 font-semibold line-through">72.7%</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground flex items-center gap-1">
                  <TrendingDown className="size-3" /> Churn Rate (после):
                </span>
                <span className="text-emerald-400 font-semibold">63.6%</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Renewal Rate:</span>
                <span className="text-accent font-semibold">36.4%</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Системные ошибки:</span>
                <span className="text-amber-400 font-semibold">3 найдено</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Документация:</span>
                <span className="text-foreground font-semibold">AUDIT.md</span>
              </div>
            </div>

            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/30 py-2 rounded hover:bg-accent/10 transition-colors"
            >
              <ExternalLink className="size-3.5" />
              client-retention-dashboard.vercel.app
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
