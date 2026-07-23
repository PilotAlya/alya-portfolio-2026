import { motion } from "framer-motion";
import { fadeUp } from "./shared";

import bathSims from "@/assets/case-bathroom-sims.jpg";
import bathAi from "@/assets/case-bathroom-ai.jpg";
import bathReal from "@/assets/case-bathroom-real.jpg";

export function BathroomCase() {
  const phases = [
    {
      tag: "01 · The Sims Look",
      sub: "RAW PRO100",
      caption: "Исходный визуал. Низкое доверие клиента.",
      img: bathSims,
    },
    {
      tag: "02 · The Hook",
      sub: "AI-ENHANCED",
      caption: "Гиперреализм из ИИ-пайплайна.",
      img: bathAi,
      highlight: true,
    },
    {
      tag: "03 · The Proof",
      sub: "REALITY",
      caption: "Реализованный объект. AI-реставрация на основе реальных фотографий реализованного проекта.",
      img: bathReal,
    },
  ];

  return (
    <section id="cases" className="py-24 px-6 lg:px-8 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 max-w-3xl"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Кейс 01 · Workflow Hacking
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-4">
            От «Sims-рендера» — к удалённой продаже
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Подобных AI-визуализаций сделано более 10, но этот кейс — ключевой. Клиенты из Перми
            ни разу не приехали в офис в Лысьве (≈ 300 км между городами) и приняли решение о
            заказе проекта дистанционно — только на основе эскизов и AI-рендеров.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              {
                k: "Контекст",
                v: "Заказчик в другом регионе, бюджет премиум, нулевое доверие к «мыльным» PRO100-визуализациям.",
              },
              {
                k: "Пайплайн",
                v: "Эскиз → апскейл в ChatGPT → ручная цвето- и материал-коррекция.",
              },
              {
                k: "Чек-лист",
                v: "Сохранение геометрии помещения, реальные коллекции плитки, мебели и света от поставщиков.",
              },
              {
                k: "Результат",
                v: "Сделка закрыта удалённо. Реализованный объект совпал с рендером на 95%+.",
              },
            ].map((b) => (
              <div key={b.k} className="border border-white/10 rounded-md p-3 bg-card/30">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
                  {b.k}
                </div>
                <p className="text-[13px] text-foreground/85 leading-relaxed">{b.v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {phases.map((p, i) => (
            <motion.figure
              key={p.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group"
            >
              <div
                className={`relative overflow-hidden ring-1 bg-card flex items-center justify-center ${
                  p.highlight ? "ring-accent/40" : "ring-white/10"
                }`}
              >
                <img
                  src={p.img}
                  alt={p.caption}
                  className="w-full h-auto max-h-[640px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm ${
                      p.highlight
                        ? "bg-accent text-accent-foreground"
                        : "bg-background/80 text-muted-foreground"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-foreground/60 bg-background/60 px-2 py-1 rounded-sm">
                    {p.sub}
                  </span>
                </div>
              </div>
              <figcaption className="font-mono text-xs text-muted-foreground mt-3">
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            {
              k: "Problem",
              v: "«Мыльный» визуал PRO100 не вызывал доверия у иногороднего заказчика.",
            },
            {
              k: "Solution",
              v: "AI-Native Pipeline: апскейл эскизов до гиперреализма.",
            },
            {
              k: "Outcome",
              v: "Удалённая конверсия. Сделка закрыта без визита клиента в офис.",
            },
          ].map((b) => (
            <div key={b.k} className="bg-background p-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                {b.k}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
