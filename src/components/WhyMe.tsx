import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const ITEMS = [
  {
    idx: "01",
    label: "Глаз",
    problem: "Нужно, чтобы выглядело собранно — лендинг, презентация, интерфейс.",
    solution:
      "Диплом дизайнера-проектировщика и Figma. Композицию считаю так же, как считала витрины для музея: ничего лишнего, всё по задаче.",
    result:
      "В портфолио — интерьер (модель → кадр), музей под ключ и презентация NOVA. Это направление, в котором хочу расти дальше.",
  },
  {
    idx: "02",
    label: "Сборка",
    problem: "Макет есть, а живой версии нет — и ждать разработчика некогда.",
    solution:
      "Vibe-coding: Cursor и AI ускоряют код, я проектирую логику, проверяю и деплою. Не «студия на 20 человек» — один понятный результат в срок.",
    result:
      "NOVA Light, это портфолио, мини-CRM — всё можно открыть по ссылке. Для вакансии это proof, что умею довести продукт до демо.",
  },
  {
    idx: "03",
    label: "Проверка",
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

        <div className="grid lg:grid-cols-3 gap-px border border-border bg-border">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col bg-background p-8"
            >
              <div className="lab-caption mb-5">
                <span className="text-accent">{it.idx}</span>
                <span className="text-muted-foreground"> · {it.label}</span>
              </div>

              <h3 className="text-lg font-semibold leading-snug tracking-tight mb-3 font-display">
                {it.problem}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.solution}</p>
              <div className="border-t border-dashed border-foreground/15 mt-5 pt-4">
                <div className="lab-caption text-accent mb-1">Результат</div>
                <p className="text-sm leading-relaxed">{it.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
