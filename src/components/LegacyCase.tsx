import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { CountUp } from "./effects/CountUp";
import { MediaZoom } from "./effects/MediaZoom";

import legacyPriceChecker from "@/assets/legacy-price-checker.gif";
import legacyMebelChecker from "@/assets/legacy-mebel-checker.gif";

const LEGACY_GALLERY = [
  {
    src: legacyPriceChecker,
    alt: "Price Checker — парсер цен маркетплейсов в реальном времени",
    caption: "[01] Price Checker · парсер цен",
  },
  {
    src: legacyMebelChecker,
    alt: "Data Validator — автоматическая сверка данных заказов",
    caption: "[02] Data Validator · AI-валидация заказов",
  },
] as const;

export function LegacyCase() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Опыт · Автоматизация в ритейле
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-4 mb-6">
            Как я избавила магазин от ручной рутины
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            В магазине пользовались старой программой учёта («Инфо-Предприятие»), из-за которой
            товары дублировались, а цены путались. Сверка 100+ позиций вручную занимала часы каждый
            день.
          </p>

          <div className="space-y-4 mb-10">
            {[
              {
                t: "Price Checker",
                d: "Программа сама проверяет цены конкурентов на маркетплейсах, чтобы вовремя менять свою цену. Раньше это занимало 10–60 минут вручную, теперь — пару секунд.",
              },
              {
                t: "Data Validator",
                d: "Программа сама сверяет данные, которые сотрудник ввёл на сайте, с данными поставщика — так меньше риск заказать не то. Раньше сверка занимала 10–20 минут, теперь — секунды.",
              },
              {
                t: "Единый список товаров",
                d: "Все товары собраны в одном месте, без дублей. Штрихкоды обновляются автоматически.",
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
                Во сколько раз быстрее, чем вручную
              </div>
            </div>
          </div>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/80 border border-foreground/10 rounded-md px-3 py-2 inline-block">
            Код — внутренний проект под NDA, показываю в виде записи экрана (GIF выше)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative space-y-6"
        >
          <figure className="relative">
            <MediaZoom
              src={legacyPriceChecker}
              alt="Price Checker — парсер цен маркетплейсов в реальном времени"
              caption="[01] Price Checker · парсер цен"
              items={[...LEGACY_GALLERY]}
              index={0}
              className="overflow-hidden ring-1 ring-foreground/10 rounded-lg bg-card"
            >
              <img
                src={legacyPriceChecker}
                alt="Price Checker — парсер цен маркетплейсов в реальном времени"
                className="legacy-demo-gif w-full h-auto object-contain pointer-events-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-accent/20 rounded-lg pointer-events-none" />
            </MediaZoom>
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [01] Price Checker · парсер цен
            </figcaption>
          </figure>

          <figure className="relative">
            <MediaZoom
              src={legacyMebelChecker}
              alt="Data Validator — автоматическая сверка данных заказов"
              caption="[02] Data Validator · AI-валидация заказов"
              items={[...LEGACY_GALLERY]}
              index={1}
              className="overflow-hidden ring-1 ring-foreground/10 rounded-lg bg-card"
            >
              <img
                src={legacyMebelChecker}
                alt="Data Validator — автоматическая сверка данных заказов"
                className="legacy-demo-gif w-full h-auto object-contain pointer-events-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-accent/20 rounded-lg pointer-events-none" />
            </MediaZoom>
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              [02] Data Validator · AI-валидация заказов
            </figcaption>
          </figure>

          <div className="absolute -bottom-3 -right-3 bg-background border border-foreground/15 px-3 py-1.5 rounded text-[10px] font-mono uppercase text-accent">
            Собрано с помощью ИИ-инструментов
          </div>
        </motion.div>
      </div>
    </section>
  );
}
