import { motion } from "framer-motion";
import { Target, CircuitBoard, Sparkles } from "lucide-react";
import { fadeUp } from "./shared";

export function WhyMe() {
  const items = [
    {
      n: "01",
      problem: "Бизнес тонет в Excel и Legacy-софте.",
      solution:
        "Декомпозирую процесс, выношу повторяющиеся операции в скрипты и AI-агентов на vibe-coding.",
      result: "Парсер цен и Data Validator сократили рутину — проверка теперь занимает секунды вместо 10-60 минут.",
      Icon: Target,
    },
    {
      n: "02",
      problem: "Между производством и продажами — стена непонимания.",
      solution:
        "Говорю на языке цеха (2 года за чертежами + стажировки) и на языке продукта (системный анализ + AI).",
      result:
        "Клиент из Перми заказал ванную по моим чертежам и AI-рендерам — без единого визита в офис, работая с командой из Лысьвы.",
      Icon: CircuitBoard,
    },
    {
      n: "03",
      problem: "MVP нужен «вчера», а команды разработки нет.",
      solution: "Собираю работающие прототипы сама: React + TanStack + RAG, без посредников.",
      result: "NOVA Dashboard и RAG-ассистент «Борис» — закрытый MVP, демо доступно по запросу.",
      Icon: Sparkles,
    },
  ];
  return (
    <section id="why" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Глава 01.5 · Почему именно я
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4">
            Что я приношу в команду
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Три проблемы, с которыми ко мне приходят, и как я их закрываю — с конкретным результатом.
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
              className="border border-white/10 bg-white/[0.02] p-7 hover:border-accent/40 transition-colors flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  [{it.n}] PROBLEM → RESULT
                </span>
                <it.Icon className="size-4 text-accent" />
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Проблема
                </div>
                <p className="text-sm font-semibold leading-snug">{it.problem}</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Что делаю
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.solution}</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
                  Результат
                </div>
                <p className="text-sm leading-relaxed">{it.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
