import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "./shared";

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
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Глава 08 · Экспертиза & Community
          </span>
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
              className="group p-8 border border-white/10 hover:border-accent/40 hover:bg-white/[0.02] transition-all flex flex-col"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4">
                Guide {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">{g.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{g.d}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm text-foreground group-hover:text-accent transition-colors">
                Читать гайд{" "}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
