import { motion } from "framer-motion";
import { fadeUp } from "./shared";

import engBlueprint from "@/assets/eng-blueprint.jpg";
import eng1 from "@/assets/eng-museum-1.jpg";
import eng2 from "@/assets/eng-museum-2.jpg";
import eng3 from "@/assets/eng-museum-3.jpg";
import eng4 from "@/assets/eng-museum-4.jpg";

export function EngineeringBackground() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-5"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Глава 03 · Инженерный бэкграунд
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-4 mb-6">
            Мебель & Производство
            <br />
            <span className="text-muted-foreground">2 года</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Мой предыдущий опыт — 2 года конструктором мебели в&nbsp;г.&nbsp;Лысьва (Пермский
            край). Работа «от эскиза до монтажа» научила системному мышлению, точности и переводу
            абстрактных требований в готовый объект.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            <span className="text-foreground font-medium">Принимала участие в проектах:</span>
          </p>
          <ul className="text-muted-foreground leading-relaxed mb-8 flex flex-col gap-2 text-sm">
            <li className="flex gap-2">
              <span className="text-accent shrink-0">·</span>
              <span>
                <strong className="text-foreground">Лысьвенский музей</strong> — экспозиционные
                витрины и системы хранения «под ключ».
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent shrink-0">·</span>
              <span>
                <strong className="text-foreground">Лысьвенский металлургический завод</strong> —
                офисные модули и производственная мебель для подразделений предприятия.
              </span>
            </li>
          </ul>
          <blockquote className="border-l-2 border-accent pl-6 py-2 font-mono text-sm italic text-muted-foreground">
            «Инженерная точность: системный анализ пространства и материалов. Перенос дисциплины
            чертежа — в архитектуру данных.»
          </blockquote>
        </motion.div>

        <div className="lg:col-span-7 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative ring-1 ring-white/10 bg-white/[0.02] p-3"
          >
            <img
              src={engBlueprint}
              alt="Чертёж витрин для Лысьвенского музея — приложение к договору"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-background/80 text-accent px-2 py-1">
              Blueprint · 2025
            </span>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: eng1, alt: "Монтаж витрин на объекте — Лысьвенский музей" },
              { src: eng2, alt: "Готовая экспозиционная зона с витринами" },
              { src: eng3, alt: "Витрина-стол с выдвижными ящиками для экспонатов" },
              { src: eng4, alt: "Витрина с историческими документами музея" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative aspect-square overflow-hidden ring-1 ring-white/5 bg-card"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
