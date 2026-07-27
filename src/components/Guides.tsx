import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { CornerMarks, spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionLabel } from "./effects/SectionLabel";

export function Guides() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <SectionLabel chapter={8} title="Экспертиза & Community" />
          <h2 className="text-4xl font-bold tracking-tight mt-4 mb-4">
            Технические гайды и Open Knowledge
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            «Я верю в Open Knowledge. Мои гайды — деконструкция сложных технологий в простые
            пошаговые алгоритмы для жизни и работы.»
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              t: "Цифровая свобода и личный VPN",
              d: "Технический мануал по цифровой свободе в условиях блокировок. Пошаговый алгоритм настройки личного VPN.",
              href: "https://gamma.app/docs/-pn6c00ti46m0r4l",
            },
            {
              t: "Google AI Search: поиск будущего",
              d: "Мануал по новому поколению поиска для пользователей любого уровня.",
              href: "https://gamma.app/docs/AI--ti6euqermukmwh3",
            },
          ].map((g, i) => (
            <motion.a
              key={g.t}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              {...spotlightAttrs}
              className={spotlightClass(
                "corner-brackets group rounded-lg p-8 border border-white/10 flex flex-col",
              )}
            >
              <CornerMarks />
              <CornerMarks />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col flex-1"
              >
                <motion.div variants={staggerItem} className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
                  Guide {String(i + 1).padStart(2, "0")}
                </motion.div>
                <motion.h3 variants={staggerItem} className="text-2xl font-bold tracking-tight mb-3">
                  {g.t}
                </motion.h3>
                <motion.p variants={staggerItem} className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {g.d}
                </motion.p>
                <motion.span variants={staggerItem} className="mt-auto inline-flex items-center gap-2 text-sm text-foreground group-hover:text-accent transition-colors">
                  Читать гайд{" "}
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
