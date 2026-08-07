import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionCodeDecor, LEGACY_CODE_LINES } from "./shared";
import { CountUp } from "./effects/CountUp";

import legacyPriceChecker from "@/assets/legacy-price-checker.gif";
import legacyMebelChecker from "@/assets/legacy-mebel-checker.gif";

export function LegacyCase() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      <SectionCodeDecor lines={LEGACY_CODE_LINES} side="right" speed={80} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Опыт · Legacy Transformation
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-4 mb-6">
            Борьба с Legacy и автоматизация рутины
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Реинжиниринг процессов учёта в ритейле. Устаревшее ПО («Инфо-Предприятие») создавало
            «цифровое гетто»: дублирование номенклатуры, хаос в ценообразовании, ручная сверка 100+
            позиций часами.
          </p>

          <div className="space-y-4 mb-10">
            {[
              {
                t: "Price Checker",
                d: "Автономный парсер цен маркетплейсов для динамического контроля маржи в реальном времени. Раньше проверка цен занимала 10-60 минут, теперь — секунды.",
              },
              {
                t: "Data Validator",
                d: "Автоматическая сверка данных, введённых сотрудником на сайте (Руматик vs мастер) — минимизация закупочных рисков. Раньше перепроверка занимала 10-20 минут в зависимости от объёма, теперь — секунды.",
              },
              {
                t: "SSOT-нормализация",
                d: "Единая база номенклатуры, оперативное обновление штрихкодирования.",
              },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <ChevronRight className="size-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{f.t}</div>
                  <div className="text-sm text-muted-foreground">{f.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-end">
            <div>
              <div className="text-6xl lg:text-7xl font-extrabold tracking-tight">
                <CountUp to={420} prefix="+" suffix="×" duration={1600} className="text-accent" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2">
                Ускорение процесса
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative space-y-6"
        >
          <figure className="relative">
            <div className="relative overflow-hidden ring-1 ring-white/10 rounded-lg bg-card">
              <img
                src={legacyPriceChecker}
                alt="Price Checker — парсер цен маркетплейсов в реальном времени"
                className="legacy-demo-gif w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-accent/20 rounded-lg pointer-events-none" />
            </div>
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [01] Price Checker · парсер цен
            </figcaption>
          </figure>

          <figure className="relative">
            <div className="relative overflow-hidden ring-1 ring-white/10 rounded-lg bg-card">
              <img
                src={legacyMebelChecker}
                alt="Data Validator — автоматическая сверка данных заказов"
                className="legacy-demo-gif w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-accent/20 rounded-lg pointer-events-none" />
            </div>
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [02] Data Validator · AI-валидация заказов
            </figcaption>
          </figure>

          <div className="absolute -bottom-3 -right-3 bg-background border border-white/15 px-3 py-1.5 rounded text-[10px] font-mono uppercase text-accent">
            [BUILT WITH VIBE-CODING]
          </div>
        </motion.div>
      </div>
    </section>
  );
}
