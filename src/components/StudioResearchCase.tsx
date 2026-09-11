import { motion } from "framer-motion";
import { Search, Download, ExternalLink, Sparkles, Filter } from "lucide-react";
import { fadeUp } from "./shared";
import { GrainOverlay } from "./effects/GrainFrame";
import { SectionLabel } from "./effects/SectionLabel";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const CASE_PAGE = "/studio-research/case.html";
const XLSX_URL = "/studio-research/demo-results.xlsx";

/** Columns match demo-results.xlsx: Студия · Город · Сайт · Основатель · Тип · Доказательство */
const DEMO_ROWS = [
  {
    studio: "Millimetr",
    city: "Пермь",
    site: "https://millimetr.com/",
    host: "millimetr.com",
    founder: "Иван Моисеенко",
    evidence: "На сайте указана команда дизайнеров, архитекторов и технологов",
  },
  {
    studio: "Студия Ксении Филатовой",
    city: "Пермь",
    site: "https://dizayn-interera-perm.ru/",
    host: "dizayn-interera-perm.ru",
    founder: "Ксения Филатова",
    evidence: "Основана в 2006 году, на сайте представлена команда сотрудников",
  },
  {
    studio: "Kochenevskikh Bureau",
    city: "Пермь",
    site: "https://kochenevskikh.ru/",
    host: "kochenevskikh.ru",
    founder: "Не найдено",
    evidence: "Офис и работа с пулом подрядчиков в формате бюро",
  },
  {
    studio: "Annte",
    city: "Пермь",
    site: "https://annte.ru/",
    host: "annte.ru",
    founder: "Анатолий Алексеев",
    evidence: "Указаны роли: руководитель, арт-директор, ведущий дизайнер",
  },
  {
    studio: "Vozhev Design",
    city: "Екатеринбург",
    site: "https://vozhevdesign.ru/",
    host: "vozhevdesign.ru",
    founder: "Иван Вожев",
    evidence: "На сайте подчёркнута командная реализация проектов",
  },
  {
    studio: "ARCHIZ",
    city: "Екатеринбург",
    site: "https://archi-z.ru/",
    host: "archi-z.ru",
    founder: "Светлана Попова",
    evidence: "Опубликован штат: архитекторы, визуализаторы, прорабы",
  },
] as const;

const PIPELINE = [
  { n: "01", t: "Поиск", d: "Сайты по запросу и городу" },
  { n: "02", t: "Разбор сайта", d: "Главная · О нас · Команда" },
  { n: "03", t: "Проверка ИИ", d: "Команда или фрилансер" },
  { n: "04", t: "Таблица", d: "Только нужные строки" },
] as const;

export function StudioResearchCase() {
  return (
    <section
      id="case-studios"
      className="relative py-24 px-6 lg:px-8 overflow-hidden border-t border-foreground/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <SectionLabel title="Опыт · Автоматизация" />
              <span className="text-xs text-muted-foreground bg-foreground/5 border border-foreground/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Search className="size-3 text-accent" /> Python · Gemini
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Как я автоматизировала поиск дизайн-студий для рассылки
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              Программа сама находит дизайн-студии по городу, заходит на их сайты и с помощью ИИ
              отсеивает одиночных фрилансеров, оставляя только настоящие команды. На выходе —
              готовая таблица со ссылками и объяснением, почему это команда.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              {[
                "Поиск сайтов → отбор нужных → анализ страниц «О нас» и «Команда» → проверка через ИИ: команда или один человек",
                "Готовая таблица: Студия · Город · Сайт · Основатель · Тип · Доказательство",
                "Проверено на Перми и Екатеринбурге — готовая база для рассылки",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {PIPELINE.map((s) => (
                <div key={s.n} className="rounded-2xl border border-foreground/10 bg-card p-3">
                  <div className="inline-flex size-6 items-center justify-center rounded-full bg-secondary text-[11px] font-semibold text-muted-foreground mb-2">
                    {s.n}
                  </div>
                  <div className="text-sm font-medium text-foreground">{s.t}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{s.d}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Python",
                "Requests",
                "BeautifulSoup",
                "Pandas",
                "OpenPyXL",
                "Gemini API",
                "DDGS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-muted-foreground border border-foreground/10 px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={XLSX_URL}
                download="studio-research-demo.xlsx"
                className="btn-spark inline-flex items-center gap-2 text-sm px-5 py-3 rounded-md font-semibold"
              >
                <Download className="size-4" />
                Скачать таблицу
              </a>
              <a
                href={CASE_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-secondary inline-flex items-center gap-2 text-sm px-5 py-3 rounded-md font-semibold"
              >
                <ExternalLink className="size-4" />
                Демо-страница
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            {...spotlightAttrs}
            className={spotlightClass(
              "relative overflow-hidden rounded-2xl border border-foreground/10 p-6 bg-card space-y-4",
            )}
          >
            <GrainOverlay intensity="subtle" />
            <div className="relative z-[2] flex items-center gap-3 border-b border-foreground/10 pb-4">
              <div className="p-2 rounded-full bg-accent/10 border border-accent/20 text-accent">
                <Filter className="size-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Столбцы таблицы</div>
                <div className="text-xs text-muted-foreground">как в демо-файле</div>
              </div>
            </div>
            <ol className="relative z-[2] space-y-2.5 text-sm text-muted-foreground list-none">
              {[
                ["Студия", "название бюро"],
                ["Город", "Пермь / Екатеринбург"],
                ["Сайт", "кликабельная ссылка"],
                ["Основатель", "если найден на сайте"],
                ["Тип", "Команда / отсев одиночек"],
                ["Доказательство", "короткое обоснование от ИИ"],
              ].map(([col, hint]) => (
                <li key={col} className="flex items-start gap-3">
                  <span className="text-xs font-medium text-spark shrink-0 mt-0.5 w-[7.5rem]">
                    {col}
                  </span>
                  <span className="text-xs leading-relaxed">{hint}</span>
                </li>
              ))}
            </ol>
            <p className="relative z-[2] text-[11px] text-muted-foreground leading-relaxed border-t border-foreground/10 pt-3">
              Ниже — фрагмент той же таблицы. Полный файл — кнопка «Скачать таблицу».
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card"
        >
          <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-foreground/10">
            <div className="text-sm text-muted-foreground">Демо-результат · 6 строк</div>
            <a
              href={XLSX_URL}
              download="studio-research-demo.xlsx"
              className="text-sm text-accent hover:text-spark transition-colors inline-flex items-center gap-1.5"
            >
              <Download className="size-3" />
              Скачать
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left border-collapse">
              <thead>
                <tr className="text-xs text-muted-foreground border-b border-foreground/10 bg-foreground/[0.02]">
                  <th className="py-3 px-4 font-medium">Студия</th>
                  <th className="py-3 px-3 font-medium">Город</th>
                  <th className="py-3 px-3 font-medium">Сайт</th>
                  <th className="py-3 px-3 font-medium">Основатель</th>
                  <th className="py-3 px-3 font-medium">Тип</th>
                  <th className="py-3 px-4 font-medium">Доказательство</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_ROWS.map((row) => (
                  <tr
                    key={row.studio}
                    className="border-b border-foreground/5 last:border-0 align-top"
                  >
                    <td className="py-3 px-4 text-xs text-foreground font-medium leading-snug">
                      {row.studio}
                    </td>
                    <td className="py-3 px-3 text-[11px] text-muted-foreground whitespace-nowrap">
                      {row.city}
                    </td>
                    <td className="py-3 px-3">
                      <a
                        href={row.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:text-spark transition-colors"
                      >
                        {row.host}
                      </a>
                    </td>
                    <td className="py-3 px-3 text-[11px] text-muted-foreground whitespace-nowrap">
                      {row.founder}
                    </td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-spark bg-spark/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                        <Sparkles className="size-2.5" />
                        Команда
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[11px] text-muted-foreground leading-relaxed max-w-xs">
                      {row.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
