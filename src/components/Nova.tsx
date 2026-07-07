import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Activity,
  HelpCircle,
  Users,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Rocket,
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp } from "./shared";

import novaDashboard from "@/assets/nova-dashboard-new.png";
import novaWiki from "@/assets/nova-wiki.png";
import novaTeam from "@/assets/nova-team.png";
import novaKassa from "@/assets/nova-kassa.png";
import novaOnboarding from "@/assets/nova-onboarding.png";
import novaBorisChat from "@/assets/nova-boris-chat.png";
import nova404 from "@/assets/nova-404.jpg";
import novaPipelineTasks from "@/assets/nova-pipeline-tasks.png";
import novaDemoVideo from "@/assets/nova-demo.webm";

const SLIDES = [
  { src: novaOnboarding,    label: "Онбординг · 7 шагов", tag: "Onboarding" },
  { src: novaDashboard,     label: "Дашборд · Администратор", tag: "Dashboard" },
  { src: novaPipelineTasks, label: "Пайплайн задач · Канбан", tag: "Pipeline" },
  { src: novaWiki,          label: "База знаний · Wiki · элемент геймификации", tag: "Knowledge" },
  { src: novaTeam,          label: "Команда · Наши герои", tag: "Team" },
  { src: novaKassa,         label: "Касса · Смена", tag: "Kassa" },
  { src: novaBorisChat,     label: "Командный чат", tag: "Chat" },
  { src: nova404,           label: "404 · «Я устал… я ухожу»", tag: "404" },
];

function NovaCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

  return (
    <div className="relative">
      {/* Main slide — с подсветкой по краям */}
      <div className="relative aspect-video overflow-hidden rounded-lg ring-2 ring-accent/40 bg-black shadow-[0_0_32px_rgba(59,130,246,0.2)]">
        <img
          key={current}
          src={SLIDES[current].src}
          alt={SLIDES[current].label}
          className="w-full h-full object-contain"
        />
        {/* tag */}
        <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-accent bg-background/80 backdrop-blur border border-accent/30 px-2 py-0.5 rounded">
          {SLIDES[current].tag}
        </div>
        {/* caption */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/95 to-transparent">
          <div className="font-mono text-[10px] uppercase tracking-wider text-white/80">
            {SLIDES[current].label}
          </div>
        </div>
        {/* arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/70 hover:bg-accent border border-white/10 hover:border-accent transition-all"
          aria-label="Предыдущий"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/70 hover:bg-accent border border-white/10 hover:border-accent transition-all"
          aria-label="Следующий"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-5 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1.5">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative aspect-video overflow-hidden rounded ring-1 transition-all ${
              i === current
                ? "ring-accent shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                : "ring-white/10 opacity-50 hover:opacity-80"
            }`}
          >
            <img src={s.src} alt={s.label} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function Nova() {
  return (
    <section
      id="nova"
      className="pt-16 pb-6 px-6 lg:px-8 bg-card/40 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Глава 06 · Флагманский проект
          </span>
          <div className="mt-4 mb-6 flex flex-wrap items-center gap-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              NOVA Dashboard
            </h2>
            <span className="inline-flex items-center font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/40 bg-accent/10 px-2.5 py-1 rounded-full">
              # АнтиБитрикс
            </span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Единая точка управления заказами, складом и AI-навигатором «Борис». Первоначально проектировалась как полнофункциональная система, но после первого цикла тестирования была переработана в NOVA Light — упрощённую версию с фокусом на продажу ЛДСП материалов (полки, дверцы и т.д.).
          </p>
          <p className="text-base text-muted-foreground/90 leading-relaxed border-l-2 border-accent/60 pl-4">
            <span className="text-foreground font-medium">Два цикла разработки:</span> Первая версия оказалась перегруженной функционалом, выходящим за пределы моих компетенций (бухгалтерия, углубленная логика работы с клиентом) — 3/3 пользователей указали на сложность. На основе обратной связи переработала систему в NOVA Light. Повторные тесты с теми же пользователями: «Стало намного понятнее. Сами бы таким пользовались».
          </p>
        </motion.div>

        {/* Live Demo видео — object-contain чтобы не обрезалось */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video overflow-hidden ring-2 ring-accent/40 rounded-lg mb-6 bg-black shadow-[0_0_40px_rgba(59,130,246,0.2)]"
        >
          <video
            src={novaDemoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur border border-accent/40 px-3 py-1.5 rounded-full">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Live Demo
            </span>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
              NOVA Dashboard · MVP
            </div>
            <div className="text-sm text-muted-foreground">
              Управление складом, заказами и AI-ассистентом «Борис» в одном окне
            </div>
          </div>
        </motion.div>

        {/* Карусель скриншотов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <NovaCarousel />
        </motion.div>

        {/* UX Validation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 border border-accent/20 bg-accent/5 rounded-lg p-4 sm:p-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-5">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <Users className="size-5 text-accent" />
              </div>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent">
                UX Validation
              </span>
            </div>
            <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Полный цикл тестирования (проектирование → тестирование → итерация).</span> Провела 3 сессии коридорного тестирования (по 20-40 минут) с пользователями разных возрастных групп. Найдено и задокументировано в Google Sheets 12+ проблем. Закрыто 3 критических блокера. Баги исправлялись в OpenCode. Итеративное тестирование: первый цикл → доработка → повторное тестирование.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 border-t border-accent/10 pt-5">
            {[
              { value: "2 цикла", label: "Итеративная разработка и тестирование" },
              { value: "12+", label: "Дефектов задокументировано" },
              { value: "3",   label: "Критических блокера закрыто" },
              { value: "100%", label: "Улучшение юзабилити в NOVA Light" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="border border-white/10 rounded-lg p-3 sm:p-4 bg-card/40 text-center"
              >
                <div className="text-lg sm:text-2xl font-extrabold tracking-tight text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <HelpCircle className="size-4 text-accent" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent">
              Вопросы про NOVA
            </span>
          </div>
          <Accordion
            type="single"
            collapsible
            className="border border-white/10 rounded-lg overflow-hidden divide-y divide-white/10"
          >
            {[
              {
                value: "n1",
                q: "Что такое NOVA Dashboard?",
                a: "Единая точка управления заказами, складом и AI-навигатором «Борис». Система прошла два цикла разработки: от перегруженной версии до облегченной NOVA Light с фокусом на продажу ЛДСП материалов.",
              },
              {
                value: "n2",
                q: "Как работает ассистент «Борис»?",
                a: "Ассистент отвечает строго по тому, что ему выдали: загруженные регламенты, списки номенклатуры, инструкции и данные о заказах. Он не выходит за рамки этих источников и не выдумывает ответов.",
              },
              {
                value: "n-ai",
                q: "Есть ли в MVP реальный ИИ?",
                a: "В текущем MVP реального ИИ нет — дашборд показывает сценарий его работы. Интеграция настоящей модели технически возможна и закладывается в архитектуру как следующий шаг.",
              },
              {
                value: "n3",
                q: "Для какого бизнеса подходит NOVA?",
                a: "MVP — для мебельного производства, но архитектура масштабируется на любой бизнес со складом и заказным циклом.",
              },
              {
                value: "n-pilot",
                q: "Как проходило тестирование?",
                a: "Два цикла: (1) Полная версия — 3 сессии, выявлена перегруженность функциями (бухгалтерия). 3/3 пользователей подтвердили сложность. (2) NOVA Light — упрощённая версия с фокусом на ЛДСП материалы. Повторные тесты с теми же людьми: «Стало намного понятнее. Сами бы таким пользовались, если бы это было полноценно-работающее приложение».",
              },
              {
                value: "n5",
                q: "Где посмотреть детали и UX-исследование?",
                a: "Полный разбор функционала, коридорных тестов и «до/после» — в интерактивной презентации NOVA.",
              },
            ].map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border-0">
                <AccordionTrigger className="px-4 sm:px-5 py-4 text-sm font-medium hover:no-underline hover:bg-white/[0.02] transition-colors [&[data-state=open]>svg]:rotate-180">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              t: "Интеллектуальный слой",
              d: "RAG-ассистент «Борис» для мгновенного анализа складских остатков и тех. документации.",
              Icon: Bot,
            },
            {
              t: "Автономность",
              d: "Самообновляемые дашборды, заменяющие отдел отчётности.",
              Icon: Activity,
            },
            {
              t: "Демо по запросу",
              d: "Дашборд запускается локально — напиши в Telegram или на email, покажу живую демонстрацию.",
              Icon: Rocket,
            },
          ].map((f) => (
            <div
              key={f.t}
              className="border border-white/10 p-6 hover:border-accent/40 transition-colors"
            >
              <f.Icon className="size-5 text-accent mb-4" />
              <div className="font-bold mb-2">{f.t}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>

        {/* Единственная кнопка презентации */}
        <div className="flex justify-start">
          <a
            href="https://alya-nova-2026.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            <PlayCircle className="size-4" />
            Смотреть презентацию NOVA
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
