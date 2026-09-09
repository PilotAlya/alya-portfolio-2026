import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const ITEMS = [
  {
    idx: "01 · Глаз",
    idxClass: "idx-pill--blue",
    problem: "Нужно, чтобы выглядело дорого и собранно — а не «как получилось в Canva».",
    solution:
      "Диплом дизайнера-проектировщика, Photoshop, Figma, Gamma. Композицию и материалы считаю так же, как считала витрины для музея: ничего лишнего, всё по задаче.",
    result:
      "В портфолио — интерьер ванной (модель → кадр), музейные витрины под ключ и интерфейс NOVA, который можно открыть.",
  },
  {
    idx: "02 · Сборка",
    idxClass: "idx-pill--orange",
    problem:
      "Макет есть, а живого сайта, лендинга или презентации — нет, и команды разработки рядом тоже нет.",
    solution:
      "Сама довожу дизайн до рабочей версии: лендинг, дашборд, презентация. Не обещаю «студию на 20 человек» — обещаю один понятный результат в срок.",
    result:
      "NOVA Light, это портфолио, мини-CRM, презентация кейса — всё можно открыть по ссылке и показать своему клиенту.",
  },
  {
    idx: "03 · Проверка",
    idxClass: "idx-pill--ink",
    problem: "Страшно, что «красиво» не значит «понятно людям».",
    solution:
      "Тестирую на реальных людях до того, как отдать вам. Смотрю, где спотыкаются, упрощаю, проверяю снова.",
    result:
      "В NOVA — 12+ замечаний с тестов, две итерации. 3 из 3 сказали: «Стало понятнее. Сами бы таким пользовались».",
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
          <SectionLabel title="Почему я" />
          <SectionHeadline before="Дизайнер, который" accent="доводит до конца" />
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Три причины написать мне, а не «просто дизайнеру» или «просто тому, кто собирает сайты».
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
