import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  Bot,
  Activity,
  HelpCircle,
  Users,
  PlayCircle,
} from "lucide-react";
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
import novaPipeline from "@/assets/nova-pipeline.png";
import novaDemoVideo from "@/assets/nova-demo.webm";

export function Nova() {
  return (
    <section
      id="nova"
      className="pt-16 pb-6 px-6 lg:px-8 bg-card/40 border-y border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
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
            Цифровое ядро производства. MVP-решение на React — единая точка управления мебельным
            предприятием.
          </p>
          <p className="text-base text-muted-foreground/90 leading-relaxed border-l-2 border-accent/60 pl-4">
            Проект родился из желания вырваться из когнитивного хаоса Excel и перегруженности
            классических CRM-систем — к{" "}
            <span className="text-foreground font-medium">
              интеллектуальной экосистеме управления
            </span>
            , где данные, документы и AI-ассистент живут в одном понятном интерфейсе.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video overflow-hidden ring-1 ring-accent/30 rounded-lg group mb-4 bg-black"
        >
          <video
            src={novaDemoVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
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

        {/* Превью-скриншоты */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {[
            { src: novaOnboarding, label: "Онбординг · 7 шагов", tag: "Onboarding" },
            { src: novaTeam, label: "Команда · Наши герои", tag: "Team" },
            { src: novaDashboard, label: "Дашборд · Администратор", tag: "Dashboard" },
            { src: novaKassa, label: "Касса · Смена", tag: "Kassa" },
            { src: novaBorisChat, label: "Командный чат", tag: "Chat" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative aspect-video overflow-hidden ring-1 ring-white/10 rounded-md group cursor-pointer hover:ring-accent/50 transition-all bg-black"
            >
              <img
                src={s.src}
                alt={s.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest text-accent bg-background/80 backdrop-blur border border-accent/30 px-1.5 py-0.5 rounded">
                {s.tag}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-background/95 to-transparent">
                <div className="font-mono text-[9px] uppercase tracking-wider text-white/85">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Пайплайн задач — полная ширина */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden ring-1 ring-white/10 rounded-lg bg-black mb-6"
        >
          <img
            src={novaPipeline}
            alt="NOVA — пайплайн задач менеджера"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-accent bg-background/80 backdrop-blur border border-accent/30 px-1.5 py-0.5 rounded">
            Pipeline
          </div>
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-0.5">
              Пайплайн задач · Канбан-доска
            </div>
            <div className="text-xs text-muted-foreground">
              Статусы заказов в реальном времени — от нового лида до выдачи
            </div>
          </div>
        </motion.div>

        {/* Wiki + 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-3 mb-12"
        >
          <div className="relative aspect-video overflow-hidden ring-1 ring-accent/30 rounded-md bg-black">
            <img
              src={novaWiki}
              alt="База знаний — Wiki"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/95 to-transparent">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
                База знаний · Wiki
              </div>
              <div className="text-xs text-muted-foreground">
                Регламенты, инструкции и база данных — всё в одном месте для команды
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden ring-1 ring-accent/30 rounded-md bg-white">
            <img
              src={nova404}
              alt="Кастомная страница 404 с Борисом"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/95 to-transparent">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1">
                404 · «Я устал… я ухожу»
              </div>
              <div className="text-xs text-muted-foreground">
                Даже ошибки — часть характера системы. Сбой превращается в эмоцию бренда
              </div>
            </div>
          </div>
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
              Проведено{" "}
              <span className="text-foreground font-medium">4 коридорных тестирования</span> с
              пользователями разных возрастных групп. Найдено и устранено{" "}
              <span className="text-foreground font-medium">12+ проблем</span> интерфейса и логики
              до закрытого релиза MVP. Полная методология — в презентации на Gamma.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 border-t border-accent/10 pt-5">
            {[
              { value: "4/4", label: "Пользователей подтвердили улучшение" },
              { value: "12+", label: "Проблем устранено до релиза" },
              { value: "3", label: "Критических блокера закрыто" },
              { value: "75–100%", label: "Поняли задачу с первого раза" },
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

          <div className="mt-6 pt-5 border-t border-accent/10 flex flex-col sm:flex-row gap-3">
            <a
              href="https://landing-page-nova-delta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md text-sm font-semibold hover:bg-accent/90 transition-colors w-full sm:w-auto"
            >
              <PlayCircle className="size-4" />
              Смотреть презентацию NOVA
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
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
                a: "Единый интерфейс для управления заказами, складом и AI-ассистентом «Борис» — вместо россыпи Excel и тяжёлых CRM.",
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
                q: "Есть ли бизнес, готовый попробовать NOVA?",
                a: "Один бизнес уже заинтересовался и готов прогнать через дашборд один реальный заказ. По итогам теста — решение, нужна NOVA или нет, и видно, как дашборд ведёт себя в полевых условиях на живых процессах.",
              },
              {
                value: "n5",
                q: "Где посмотреть детали и UX-исследование?",
                a: "Полный разбор функционала, коридорных тестов и «до/после» — в презентации NOVA; демо интерфейса — на Яндекс.Диске.",
              },
            ].map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border-0">
                <AccordionTrigger className="px-4 sm:px-5 py-4 text-sm font-medium hover:no-underline hover:bg-white/[0.02] transition-colors [&[data-state=open]>svg]:rotate-180">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                  {item.value === "n5" && (
                    <a
                      href="https://landing-page-nova-delta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-md text-[13px] font-semibold hover:bg-accent/90 transition-colors"
                    >
                      <PlayCircle className="size-4" />
                      Смотреть презентацию NOVA
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
              d: "Дашборд запускается локально. Доступ к функционалу — через демо-видео на Яндекс.Диске.",
              Icon: Send,
            },
          ].map((f) => (
            <div key={f.t} className="border border-white/10 p-6 hover:border-accent/40 transition-colors">
              <f.Icon className="size-5 text-accent mb-4" />
              <div className="font-bold mb-2">{f.t}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href="https://landing-page-nova-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md text-sm font-semibold hover:bg-accent/90 transition-colors w-full sm:w-auto"
          >
            <PlayCircle className="size-4" /> Смотреть презентацию NOVA{" "}
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-accent/60 hover:text-accent px-5 py-3 rounded-md text-sm font-medium transition-colors w-full sm:w-auto"
          >
            <Send className="size-4" /> Демо-видео на Яндекс.Диске
          </a>
        </div>
      </div>
    </section>
  );
}
