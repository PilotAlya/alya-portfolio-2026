import { motion } from "framer-motion";
import { Target, CircuitBoard, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

export function WhyMe() {
  const items = [
    {
      n: "01",
      problem: "Нужен результат быстро: сайт, лендинг, презентация — а своей команды нет.",
      solution:
        "Проектирую логику и сама собираю нужное с помощью современных инструментов для кода и дизайна — от лендинга до презентации.",
      result:
        "NOVA — сайт, дашборд и презентация к нему, мини-CRM — готовые примеры, которые можно открыть и посмотреть прямо сейчас.",
      Icon: Sparkles,
    },
    {
      n: "02",
      problem: "Нужно быстро разобраться в новой теме или сфере бизнеса.",
      solution:
        "Использую ИИ как инструмент для быстрого погружения: изучаю тему, раскладываю по полочкам и сразу применяю на практике.",
      result:
        "От проверки данных для бизнеса до системы с канбан-доской и ИИ-помощником — учусь через реальные задачи, а не только по курсам.",
      Icon: Target,
    },
    {
      n: "03",
      problem: "Нужна уверенность, что решение реально работает, а не просто красиво выглядит.",
      solution:
        "Тестирую всё, что делаю: собираю обратную связь от реальных людей, проверяю разные сценарии, ищу слабые места до того, как их найдёт клиент.",
      result:
        "В NOVA — 12+ доработок по итогам тестов с пользователями. В опыте есть и проверка голосового помощника: 6 сценариев, честные отчёты о найденных проблемах.",
      Icon: CircuitBoard,
    },
  ];
  return (
    <section id="why" className="py-24 px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <SectionLabel title="Почему именно я" />
          <SectionHeadline before="Что я приношу в" accent="ваш проект" />
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Три задачи, с которыми ко мне чаще всего приходят — и как я их решаю.
          </p>
        </motion.div>

        <div>
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              {...spotlightAttrs}
              className={spotlightClass("why-row", "subtle")}
            >
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                <span className="font-display text-2xl font-extrabold text-muted-foreground tabular-nums">
                  {it.n}
                </span>
                <it.Icon className="size-4 text-accent" />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={staggerItem} className="why-row__label">
                  Проблема
                </motion.div>
                <motion.p variants={staggerItem} className="text-sm font-semibold leading-snug">
                  {it.problem}
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={staggerItem} className="why-row__label">
                  Что делаю
                </motion.div>
                <motion.p
                  variants={staggerItem}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {it.solution}
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={staggerItem}
                  className="why-row__label why-row__label--accent"
                >
                  Результат
                </motion.div>
                <motion.p variants={staggerItem} className="text-sm leading-relaxed">
                  {it.result}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
