import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Boxes, Brain, TestTube, Github } from "lucide-react";
import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

import borisWalkStableVideo from "@/assets/boris-walk-stable-hd.webm";

export function Stack() {
  const cols = [
    {
      Icon: TestTube,
      title: "Testing & QA",
      items: [
        "Функциональное тестирование веб-приложений",
        "UX-тестирование (коридорные тесты)",
        "Тестирование ИИ-ассистентов и браузеров (Яндекс Алиса, Яндекс.Браузер)",
        "Browser DevTools (Chrome, inspect)",
        "Документирование багов (Google Sheets)",
        "Кросс-возрастное тестирование",
      ],
    },
    {
      Icon: Brain,
      title: "LLM · Модели & AI-ассистенты",
      items: [
        "Gemini · Claude · DeepSeek",
        "ChatGPT · OpenRouter",
        "Kiro · GitHub Copilot",
      ],
    },
    {
      Icon: Cpu,
      title: "Vibe-coding · Разработка",
      items: [
        "Основные: Cursor · Antygravity · OpenCode · Kiro",
        "Каркас: Lovable · Bolt · Replit",
        "React · TanStack · Vercel · GitHub",
        "Постоянно тестирую новые инструменты",
      ],
    },
    {
      Icon: CircuitBoard,
      title: "Исследование · Данные",
      items: [
        "NotebookLM · Abacus AI",
        "RAG & OCR технологии",
        "Аудит бизнес-процессов",
      ],
    },
    {
      Icon: Boxes,
      title: "CAD & Design",
      items: [
        "PRO100 (библиотеки компонентов)",
        "SPlan (чертежи)",
        "Figma · Photoshop · Gamma",
      ],
    },
  ];

  return (
    <section
      id="stack"
      className="relative pt-16 md:pt-24 pb-32 px-6 lg:px-8 overflow-hidden scroll-mt-20"
    >
      {/* Chibi-Boris walking animation */}
      <div className="hidden md:block absolute top-0 inset-x-0 h-64 overflow-visible pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0"
          initial={{ x: "-200px" }}
          animate={{ x: "calc(100vw + 80px)" }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          style={{
            filter: "drop-shadow(0 8px 18px rgba(59,130,246,0.35))",
            willChange: "transform",
          }}
        >
          <video
            src={borisWalkStableVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-60 w-auto select-none block"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 max-w-3xl"
        >
          <SectionLabel chapter={7} title="Технологический стек" />
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4">
            Стек технологий и автоматизации
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {cols.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              {...spotlightAttrs}
              className={spotlightClass("bg-background p-8", "flat")}
            >
              <c.Icon className="size-6 text-accent mb-6" />
              <div className="font-bold text-xl mb-4 uppercase tracking-tight">{c.title}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.items.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-accent">·</span>
                    {x}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* marquee */}
        <div className="relative mt-12 overflow-hidden border-y border-white/5 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-12 animate-ticker whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "Pandas",
                  "QA",
                  "System Analysis",
                  "BPMN",
                  "RAG",
                  "Cursor",
                  "Chart.js",
                  "Vercel",
                  "Gemini",
                  "Claude",
                  "Figma",
                  "PRO100",
                  "NotebookLM",
                  "TanStack",
                  "UX Testing",
                  "MVP",
                  "Automation",
                ].map((t) => (
                  <span key={`${k}-${t}`} className="text-foreground/70">
                    {t} <span className="text-accent">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
