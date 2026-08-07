import { motion } from "framer-motion";
import { BarChart3, TrendingDown, Zap } from "lucide-react";

import dashboardPreview from "@/assets/churn-dashboard.png";
import { fadeUp } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { ParallaxImage } from "./effects/ParallaxImage";

const DASHBOARD_URL = "https://client-retention-dashboard.vercel.app/";

export function ChurnAuditCase() {
  return (
    <section id="case-b2b" className="relative py-16 px-6 lg:px-8 overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              Кейс 03 · Анализ данных
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
              Аудит отчёта об оттоке клиентов B2B-сервиса
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-5">
              В отчёте аналитиков отток клиентов был завышен до 72.7%. Проверила исходные данные,
              нашла ошибки в расчётах и пересчитала показатели — реальный отток оказался 63.6%.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-5 text-xs">
              <div
                {...spotlightAttrs}
                className={spotlightClass("p-3 rounded border border-white/10 bg-background/50", "subtle")}
              >
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Проблема
                </div>
                <p className="text-muted-foreground">
                  Руководство не доверяло цифрам. Нужно было проверить таблицы с данными и понять,
                  где считали неправильно.
                </p>
              </div>
              <div
                {...spotlightAttrs}
                className={spotlightClass("p-3 rounded border border-white/10 bg-background/50", "subtle")}
              >
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Что сделала
                </div>
                <p className="text-muted-foreground">
                  Сверила данные скриптом на Python, исправила ошибки в логике отчёта и собрала
                  наглядную панель с графиками для руководства.
                </p>
              </div>
            </div>

            <div className="p-4 border border-accent/20 rounded-md bg-accent/5 mb-5">
              <div className="flex items-start gap-2">
                <Zap className="size-4 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground italic">
                  Вместо ручной сверки в Excel на несколько часов — автоматическая проверка и фокус
                  на поиске причин расхождений с помощью AI-инструментов.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Python", "Pandas", "Chart.js", "Vercel"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-white/10 px-2 py-1 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              {...spotlightAttrs}
              className={spotlightClass("group block overflow-hidden rounded-xl border border-white/10 bg-background/60")}
            >
              <ParallaxImage
                src={dashboardPreview}
                alt="Дашборд: KPI-карточки, графики оттока и таблица проверки данных"
                className="w-full h-auto object-cover object-top max-h-[280px] group-hover:scale-[1.02] transition-transform duration-500"
                speed={10}
              />
              <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent group-hover:text-accent/80 transition-colors">
                  Открыть дашборд →
                </span>
                <span className="font-mono text-[10px] text-muted-foreground truncate">
                  client-retention-dashboard.vercel.app
                </span>
              </div>
            </a>

            <div
              {...spotlightAttrs}
              className={spotlightClass("rounded-xl border border-white/10 p-5 bg-background/60 space-y-3")}
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent">
                  <BarChart3 className="size-4" />
                </div>
                <div className="font-mono text-xs font-bold text-foreground">Итог</div>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span className="text-muted-foreground">Клиентов:</span>
                  <span className="text-foreground font-semibold">11</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span className="text-muted-foreground">Отток (было):</span>
                  <span className="text-rose-400 font-semibold line-through">72.7%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <TrendingDown className="size-3" /> Отток (стало):
                  </span>
                  <span className="text-emerald-400 font-semibold">63.6%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span className="text-muted-foreground">Удержание:</span>
                  <span className="text-accent font-semibold">36.4%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span className="text-muted-foreground">Ошибок в данных:</span>
                  <span className="text-amber-400 font-semibold">3</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
