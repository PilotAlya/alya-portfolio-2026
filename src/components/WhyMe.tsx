import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const ITEMS = [
  {
    idx: "01 · Глаз",
    idxClass: "idx-pill--blue",
    problem: "Нужно, чтобы выглядело собранно — лендинг, презентация, интерфейс.",
    solution:
      "Диплом дизайнера-проектировщика, Figma, Photoshop, Gamma. Композицию считаю так же, как считала витрины для музея: ничего лишнего, всё по задаче.",
    result:
      "В портфолио — интерьер (модель → кадр), музей под ключ и презентация NOVA. Это направление, в котором хочу расти дальше.",
  },
  {
    idx: "02 · Сборка",
    idxClass: "idx-pill--orange",
    problem: "Макет есть, а живой версии нет — и ждать разработчика некогда.",
    solution:
      "Vibe-coding: Cursor и AI ускоряют код, я проектирую логику, проверяю и деплою. Не «студия на 20 человек» — один понятный результат в срок.",
    result:
      "NOVA Light, это портфолио, мини-CRM — всё можно открыть по ссылке. Для вакансии это proof, что умею довести продукт до демо.",
  },
  {
    idx: "03 · Проверка",
    idxClass: "idx-pill--ink",
    problem: "Страшно, что «красиво» не значит «понятно людям».",
    solution:
      "Тестирую на реальных людях до сдачи: где спотыкаются, упрощаю, проверяю снова — и в заказе, и в продуктовой роли.",
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
          <SectionHeadline before="Глаз, сборка," accent="проверка" />
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Три опоры одной ссылки: для заказчика — результат без посредников; для команды —
            дизайнер, который умеет vibe-coding до демо.
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
