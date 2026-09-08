import { motion } from "framer-motion";
import { Target, CircuitBoard, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { CornerMarks, spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

export function WhyMe() {
  const items = [
    {
      n: "01",
      problem: "Нужен рабочий прототип быстро, а своей команды разработки нет.",
      solution:
        "Проектирую логику продукта и с помощью современных ИИ-инструментов быстро собираю рабочую версию — сама проверяю и запускаю.",
      result:
        "NOVA, мини-CRM, дашборд для бизнеса — готовые примеры, которые можно открыть и потрогать прямо сейчас.",
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
          <SectionLabel chapter={1} title="Почему именно я" />
          <SectionHeadline before="Что я приношу в" accent="ваш проект" />
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Три задачи, с которыми ко мне чаще всего приходят — и как я их решаю.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              {...spotlightAttrs}
              className={spotlightClass(
                "corner-brackets rounded-lg border border-foreground/10 bg-foreground/[0.02] p-7 flex flex-col gap-5",
              )}
            >
              <CornerMarks />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-5"
              >
                <motion.div variants={staggerItem} className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    [{it.n}] PROBLEM → RESULT
                  </span>
                  <it.Icon className="size-4 text-accent" />
                </motion.div>

                <motion.div variants={staggerItem}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Проблема
                  </div>
                  <p className="text-sm font-semibold leading-snug">{it.problem}</p>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Что делаю
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.solution}</p>
                </motion.div>
                <motion.div variants={staggerItem} className="border-t border-foreground/10 pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
                    Результат
                  </div>
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
