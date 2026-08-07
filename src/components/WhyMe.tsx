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
      problem: "MVP нужен «вчера», а команды разработки нет.",
      solution:
        "Собираю рабочие прототипы через vibe-coding: проектирую логику, AI помогает с кодом, я проверяю и деплою.",
      result:
        "NOVA Dashboard, B2B-дашборд, legacy-скрипты — live-demo на Vercel, без посредников.",
      Icon: Sparkles,
    },
    {
      n: "02",
      problem: "Нужно быстро разобраться в новой теме или домене.",
      solution:
        "Native AI workflow: Cursor, OpenCode, Gemini, NotebookLM — системный подход к любому контексту, не важно насколько он новый.",
      result:
        "От B2B-аудита CSV до MVP с Kanban и AI-ассистентом — осваиваю через практику, а не через месяцы курсов.",
      Icon: Target,
    },
    {
      n: "03",
      problem: "Нужна проверка AI-продукта, а не слепая вера в генерацию.",
      solution:
        "UX-тесты, сценарии, Pass/Fail — проверяю своё и чужое: качество ответов LLM, логику интерфейса, edge cases.",
      result:
        "NOVA: 12+ правок до деплоя; кейс Яндекс Алиса — 6 сценариев, 5 баг-репортов как AI product evaluation.",
      Icon: CircuitBoard,
    },
  ];
  return (
    <section id="why" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <SectionLabel chapter={1.5} title="Почему именно я" />
          <SectionHeadline before="Что я приношу в" accent="команду" />
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Три задачи, с которыми ко мне приходят — и как я их закрываю через AI и системное
            мышление.
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
                "corner-brackets rounded-lg border border-white/10 bg-white/[0.02] p-7 flex flex-col gap-5",
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
                <motion.div variants={staggerItem} className="border-t border-white/10 pt-4">
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
