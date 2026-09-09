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
import { MagneticLink } from "./effects/MagneticButton";
import { MediaZoom } from "./effects/MediaZoom";
import { ParallaxImage } from "./effects/ParallaxImage";
import { SectionLabel } from "./effects/SectionLabel";
import { NovaBento } from "./NovaBento";
import { useNovaScrollPin } from "@/hooks/useNovaScrollPin";

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
  { src: novaOnboarding, label: "Онбординг · 7 шагов", tag: "Onboarding" },
  { src: novaDashboard, label: "Дашборд · Администратор", tag: "Dashboard" },
  { src: novaPipelineTasks, label: "Пайплайн задач · Канбан", tag: "Pipeline" },
  { src: novaWiki, label: "База знаний · Wiki · элемент геймификации", tag: "Knowledge" },
  { src: novaTeam, label: "Команда · Наши герои", tag: "Team" },
  { src: novaKassa, label: "Касса · Смена", tag: "Kassa" },
  { src: novaBorisChat, label: "Командный чат", tag: "Chat" },
  { src: nova404, label: "404 · «Я устал… я ухожу»", tag: "404" },
];

const NOVA_GALLERY = SLIDES.map((s) => ({
  src: s.src,
  alt: s.label,
  caption: s.label,
}));

function NovaCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

  return (
    <div className="relative">
      {/* Main slide — с подсветкой по краям */}
      <div className="relative aspect-video overflow-hidden rounded-lg ring-2 ring-accent/40 bg-black shadow-[0_0_32px_color-mix(in_oklab,var(--accent)_35%,transparent)]">
        <MediaZoom
          src={SLIDES[current].src}
          alt={SLIDES[current].label}
          caption={SLIDES[current].label}
          items={NOVA_GALLERY}
          index={current}
          className="absolute inset-0"
          hintClassName="top-3 right-3 bottom-auto"
        >
          <ParallaxImage
            key={current}
            src={SLIDES[current].src}
            alt={SLIDES[current].label}
            className="w-full h-full object-contain pointer-events-none"
            speed={8}
          />
        </MediaZoom>
        {/* tag */}
        <div className="pointer-events-none absolute top-3 left-3 z-[4] text-xs font-medium text-accent bg-background/85 backdrop-blur px-2.5 py-1 rounded-full">
          {SLIDES[current].tag}
        </div>
        {/* caption */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] p-3 bg-gradient-to-t from-black/90 to-transparent">
          <div className="text-sm text-white/85">{SLIDES[current].label}</div>
        </div>
        {/* arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 z-[5] -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/70 hover:bg-accent border border-foreground/10 hover:border-accent transition-all"
          aria-label="Предыдущий"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 z-[5] -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/70 hover:bg-accent border border-foreground/10 hover:border-accent transition-all"
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
              i === current ? "w-5 bg-accent" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
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
                ? "ring-accent shadow-[0_0_8px_color-mix(in_oklab,var(--accent)_45%,transparent)]"
                : "ring-foreground/10 opacity-50 hover:opacity-80"
            }`}
          >
            <img src={s.src} alt={s.label} className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function Nova() {
  const { sectionRef, pinRef, scrollRef } = useNovaScrollPin();

  return (
    <section id="nova" className="pt-16 pb-6 px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <NovaBento />

      <div className="relative max-w-7xl mx-auto">
        {/* Заголовок */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <SectionLabel title="Главный проект · NOVA" />
          <div className="mt-4 mb-6 flex flex-wrap items-center gap-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display">
              NOVA Dashboard
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 prose-portfolio">
            NOVA — это единое окно для управления заказами, складом и общением с ИИ-помощником
            «Борис». Первая версия получилась слишком сложной, поэтому после тестов с реальными
            людьми я упростила её до NOVA Light — версии, где остались только заказы и склад.
          </p>
          <p className="text-base text-muted-foreground/90 leading-relaxed border-l-2 border-accent/60 pl-4">
            <span className="text-foreground font-medium">Два круга доработки:</span> в первую
            версию я попыталась уместить даже бухгалтерию и сложную логику работы с клиентами — и
            все 3 человека, с кем я тестировала, сказали, что пользоваться этим тяжело. Я убрала
            лишнее и сделала NOVA Light. Показала тем же людям снова — и услышала: «Стало намного
            понятнее. Сами бы таким пользовались».
          </p>
        </motion.div>

        {/* Pin layout: video слева (desktop), контент справа скроллится */}
        <div ref={sectionRef} className="nova-pin-section">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            <div ref={pinRef} className="nova-pin-panel mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)]"
              >
                <video
                  src={novaDemoVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/85 backdrop-blur px-3 py-1.5 rounded-full">
                  <span className="relative flex size-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-xs font-medium text-accent">Walkthrough</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                  <div className="text-sm font-medium text-accent mb-1">
                    NOVA Dashboard · прототип
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Управление складом, заказами и AI-ассистентом «Борис» в одном окне
                  </div>
                </div>
              </motion.div>
            </div>

            <div ref={scrollRef} className="nova-scroll-panels space-y-12">
              {/* Карусель скриншотов */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="nova-scroll-panel"
              >
                <NovaCarousel />
              </motion.div>

              {/* UX Validation */}
              <motion.div
                id="nova-ux"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="nova-scroll-panel border border-accent/20 bg-accent/5 rounded-2xl p-4 sm:p-6"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-5">
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                      <Users className="size-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-accent">
                      Проверка на реальных людях
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">
                      Я не просто сделала интерфейс — я его протестировала.
                    </span>{" "}
                    Провела 3 сессии по 20–40 минут с людьми разных возрастов: наблюдала, как они
                    пользуются NOVA, и записывала все проблемы. Нашла и задокументировала 12+
                    проблем, закрыла 3 самых критичных. Потом протестировала снова — с теми же
                    людьми.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 border-t border-accent/10 pt-5">
                  {[
                    { value: "2 круга", label: "Доработки и повторного тестирования" },
                    { value: "12+", label: "Проблем найдено и записано" },
                    { value: "3", label: "Самых критичных — исправлено" },
                    { value: "3/3", label: "Сказали «стало понятнее» после доработки" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.45 }}
                      className="border border-foreground/10 rounded-2xl p-3 sm:p-4 bg-card text-center"
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
                id="nova-detail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="nova-scroll-panel"
              >
                <div className="flex items-center gap-3 mb-5">
                  <HelpCircle className="size-4 text-accent" />
                  <span className="text-sm font-medium text-accent">Вопросы про NOVA</span>
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="border border-foreground/10 rounded-2xl overflow-hidden divide-y divide-foreground/10"
                >
                  {[
                    {
                      value: "n1",
                      q: "Что такое NOVA Dashboard?",
                      a: "Единое окно для управления заказами, складом и общением с ИИ-помощником «Борис». Я сделала два варианта: первый оказался слишком сложным, второй — NOVA Light — проще и удобнее в работе.",
                    },
                    {
                      value: "n2",
                      q: "Как работает ассистент «Борис»?",
                      a: "Борис отвечает только на основе того, что ему загрузили: инструкций, списков товаров, данных о заказах. Он не выдумывает ответы и не выходит за рамки того, что знает.",
                    },
                    {
                      value: "n-ai",
                      q: "Есть ли внутри настоящий искусственный интеллект?",
                      a: "Сейчас нет — дашборд показывает, как это будет работать в реальности (сценарий, а не подключённая модель). Подключить настоящий ИИ технически возможно — это следующий шаг, если проект пойдёт дальше.",
                    },
                    {
                      value: "n3",
                      q: "Для какого бизнеса подходит NOVA?",
                      a: "Для бизнеса, где есть склад и заказы — например, магазин, мастерская, шоурум. Систему можно адаптировать и под другие отрасли.",
                    },
                    {
                      value: "n-pilot",
                      q: "Как проходило тестирование?",
                      a: "В два круга. Сначала — полная версия: 3 сессии показали, что она перегружена лишними функциями вроде бухгалтерии, все 3 человека подтвердили, что пользоваться сложно. Затем — NOVA Light, упрощённая версия с фокусом на заказы и склад. Те же люди протестировали снова: «Стало намного понятнее. Сами бы таким пользовались, если бы это было полноценно работающее приложение».",
                    },
                    {
                      value: "n5",
                      q: "Где посмотреть детали и результаты тестирования?",
                      a: "Полный разбор функционала, тестов и «до/после» — в отдельной презентации NOVA.",
                    },
                  ].map((item) => (
                    <AccordionItem key={item.value} value={item.value} className="border-0">
                      <AccordionTrigger className="px-4 sm:px-5 py-4 text-sm font-medium hover:no-underline hover:bg-foreground/[0.02] transition-colors [&[data-state=open]>svg]:rotate-180">
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
              <div className="nova-scroll-panel grid sm:grid-cols-3 gap-4">
                {[
                  {
                    t: "ИИ-помощник внутри",
                    d: "Борис отвечает по инструкциям и товарным спискам. Подключение полноценной модели ИИ — следующий шаг развития.",
                    Icon: Bot,
                  },
                  {
                    t: "Живая отчётность",
                    d: "Дашборды обновляются сами — не нужно вручную сводить отчёты каждый раз.",
                    Icon: Activity,
                  },
                  {
                    t: "Живая демо-версия",
                    d: "Можно открыть и покликать прямо сейчас — заказы, склад, чат с Борисом.",
                    Icon: Rocket,
                  },
                ].map((f) => (
                  <div
                    key={f.t}
                    className="rounded-2xl border border-foreground/10 bg-card p-6 hover:border-accent/40 transition-colors"
                  >
                    <f.Icon className="size-5 text-accent mb-4" />
                    <div className="font-bold mb-2">{f.t}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                  </div>
                ))}
              </div>

              {/* Презентация */}
              <div className="nova-scroll-panel flex justify-start pb-4">
                <MagneticLink
                  href="https://alya-nova-2026.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spark group items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold"
                >
                  <PlayCircle className="size-4" />
                  Смотреть презентацию NOVA
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
