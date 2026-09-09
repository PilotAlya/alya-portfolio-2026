import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const ITEMS = [
  {
    idx: "01 · Сайты",
    idxClass: "idx-pill--blue",
    problem: "Нужен результат быстро: сайт, лендинг, презентация — а своей команды нет.",
    solution:
      "Проектирую логику и сама собираю нужное с помощью современных инструментов для кода и дизайна — от лендинга до презентации.",
    result:
      "NOVA — сайт, дашборд и презентация к нему, мини-CRM — готовые примеры, которые можно открыть и посмотреть прямо сейчас.",
  },
  {
    idx: "02 · Контекст",
    idxClass: "idx-pill--orange",
    problem: "Нужно быстро разобраться в новой теме или сфере бизнеса.",
    solution:
      "Использую ИИ как инструмент для быстрого погружения: изучаю тему, раскладываю по полочкам и сразу применяю на практике.",
    result:
      "От проверки данных для бизнеса до системы с канбан-доской и ИИ-помощником — учусь через реальные задачи, а не только по курсам.",
  },
  {
    idx: "03 · Проверка",
    idxClass: "idx-pill--ink",
    problem: "Нужна уверенность, что решение реально работает, а не просто красиво выглядит.",
    solution:
      "Тестирую всё, что делаю: собираю обратную связь от реальных людей, проверяю разные сценарии, ищу слабые места до того, как их найдёт клиент.",
    result:
      "В NOVA — 12+ доработок по итогам тестов с пользователями. В опыте есть и проверка голосового помощника: 6 сценариев, честные отчёты о найденных проблемах.",
  },
] as const;

export function WhyMe() {
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

        <div className="grid lg:grid-cols-3 gap-4">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              {...spotlightAttrs}
              className={spotlightClass("glass-card p-8 flex flex-col")}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <motion.span variants={staggerItem} className={`idx-pill ${it.idxClass} w-fit`}>
                  {it.idx}
                </motion.span>

                <motion.h3
                  variants={staggerItem}
                  className="text-lg font-semibold leading-snug tracking-tight mb-3"
                >
                  {it.problem}
                </motion.h3>
                <motion.p
                  variants={staggerItem}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {it.solution}
                </motion.p>
                <motion.div
                  variants={staggerItem}
                  className="border-t border-dashed border-foreground/15 mt-5 pt-4"
                >
                  <div className="text-xs font-medium text-accent mb-1">Результат</div>
                  <p className="text-sm leading-relaxed">{it.result}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
