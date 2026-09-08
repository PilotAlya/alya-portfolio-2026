import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { CornerMarks, spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const GUIDES = [
  {
    t: "Как настроить автосбор заявок из Telegram в таблицу",
    d: "Пошаговый гайд: бот в Telegram сам записывает заявки в Google Таблицу — без дублей и без ручного переноса. Пригодится, если заявки сейчас теряются в переписке.",
    href: "https://drive.google.com/drive/folders/1EpUihavWoV-Pu3brdqD4yLX9kmiCWWGd?usp=drive_link",
    cta: "Открыть PDF-гайд",
  },
] as const;

export function Guides() {
  return (
    <section id="guides" className="py-24 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <SectionLabel chapter={6} title="Готовый гайд" />
          <SectionHeadline before="Инструкция, которой" accent="можно пользоваться" />
          <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
            Один из готовых результатов моей работы — бесплатная и понятная инструкция для бизнеса.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDES.map((g) => (
            <motion.a
              key={g.t}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              {...spotlightAttrs}
              className={spotlightClass(
                "corner-brackets group rounded-lg p-8 border flex flex-col border-accent/30 bg-accent/[0.03] md:col-span-2 lg:col-span-1",
              )}
            >
              <CornerMarks />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col flex-1"
              >
                <motion.div
                  variants={staggerItem}
                  className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4"
                >
                  Бесплатный гайд
                </motion.div>
                <motion.h3
                  variants={staggerItem}
                  className="text-2xl font-bold tracking-tight mb-3"
                >
                  {g.t}
                </motion.h3>
                <motion.p
                  variants={staggerItem}
                  className="text-sm text-muted-foreground leading-relaxed mb-6"
                >
                  {g.d}
                </motion.p>
                <motion.span
                  variants={staggerItem}
                  className="mt-auto inline-flex items-center gap-2 text-sm text-foreground group-hover:text-accent transition-colors"
                >
                  {g.cta}{" "}
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.span>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
