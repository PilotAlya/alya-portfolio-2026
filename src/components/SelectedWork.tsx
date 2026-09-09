import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import bathroomReal from "@/assets/case-bathroom-real.jpg";
import bathroomViz from "@/assets/case-bathroom-ai.jpg";
import bathroomModel from "@/assets/case-bathroom-sims.jpg";
import museumPhoto from "@/assets/eng-museum-1.jpg";
import museumBlueprint from "@/assets/eng-blueprint.jpg";
import novaDashboard from "@/assets/nova-dashboard-new.png";
import novaTeam from "@/assets/nova-team.png";

import { fadeUp } from "./shared";
import { MediaZoom } from "./effects/MediaZoom";
import { SectionHeadline } from "./effects/SectionHeadline";
import { SectionLabel } from "./effects/SectionLabel";

const BATHROOM_GALLERY = [
  { src: bathroomModel, alt: "3D-модель ванной", caption: "01 · Модель пространства" },
  { src: bathroomViz, alt: "Визуализация ванной", caption: "02 · Визуализация" },
  { src: bathroomReal, alt: "Финальный кадр ванной", caption: "03 · Финальный кадр" },
];

const MUSEUM_GALLERY = [
  {
    src: museumPhoto,
    alt: "Монтаж витрин Лысьвенского музея",
    caption: "Монтаж · Лысьвенский музей",
  },
  { src: museumBlueprint, alt: "Чертёж витрины для музея", caption: "Чертёж · витрина под ключ" },
];

const NOVA_GALLERY = [
  { src: novaDashboard, alt: "NOVA Dashboard — интерфейс", caption: "NOVA · дашборд" },
  { src: novaTeam, alt: "NOVA — экран команды", caption: "NOVA · команда" },
];

const INDEX = [
  {
    n: "01",
    title: "Ванная · интерьер",
    tag: "Дизайн",
    desc: "Модель → визуализация → финальный кадр. Композиция, материалы, свет.",
    href: "#work-bathroom",
  },
  {
    n: "02",
    title: "Музей и завод ММК",
    tag: "Дизайн",
    desc: "Витрины и офисные модули по ТЗ, с нулевым браком на производстве.",
    href: "#work-museum",
  },
  {
    n: "03",
    title: "NOVA Dashboard",
    tag: "Продукт",
    desc: "UI + vibe-coding: дашборд, онбординг — и живая демо-версия на Vercel.",
    href: "#nova",
  },
  {
    n: "04",
    title: "Презентация NOVA",
    tag: "Дизайн",
    desc: "Кейс, тесты с людьми, «до / после» — презентация для клиента или вакансии.",
    href: "https://alya-nova-2026.vercel.app/",
    external: true,
  },
  {
    n: "05",
    title: "Мини-CRM",
    tag: "Продукт",
    desc: "Форма лида с маской телефона — маленький рабочий интерфейс на vibe-coding.",
    href: "#case-crm",
  },
  {
    n: "06",
    title: "Автоматизация в ритейле",
    tag: "Продукт",
    desc: "От ручной сверки данных — к скриптам, которые проверяют данные сами.",
    href: "#experience",
  },
] as const;

export function SelectedWork() {
  return (
    <section id="work" className="py-24 lg:py-32 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 max-w-3xl"
        >
          <SectionLabel title="Избранные работы" />
          <SectionHeadline before="Сначала глаз," accent="потом продукт" />
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl">
            Одна галерея — две дорожки: визуальный дизайн (интерьеры, презентации) и продукт на
            vibe-coding (NOVA, CRM, автоматизации). Для заказчика и для вакансии — одни и те же
            доказательства.
          </p>
        </motion.div>

        {/* Bathroom — featured */}
        <motion.article
          id="work-bathroom"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="scroll-mt-28 mb-6"
        >
          <div className="work-feature">
            <MediaZoom
              src={bathroomReal}
              alt="Финальный кадр ванной"
              caption="Ванная · финальный кадр"
              items={BATHROOM_GALLERY}
              index={2}
              className="work-shot work-shot--hero"
            >
              <img
                src={bathroomReal}
                alt="Финальный кадр ванной — мрамор, дерево, латунь"
                className="h-full w-full object-cover"
              />
            </MediaZoom>

            <div className="flex flex-col justify-between gap-6 p-1 lg:py-4">
              <div>
                <span className="idx-pill idx-pill--blue">01 · Дизайн</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display mt-1 mb-3">
                  Ванная: модель → картинка → кадр
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Учебный кейс по дизайну интерьера. Сначала собираю пространство в 3D, потом
                  визуализацию, потом финальный кадр — чтобы заказчик видел не «красивую референсную
                  фотографию», а путь от идеи до вида, который можно согласовать.
                </p>
              </div>
              <div className="process-steps">
                {BATHROOM_GALLERY.map((shot, i) => (
                  <MediaZoom
                    key={shot.caption}
                    src={shot.src}
                    alt={shot.alt}
                    caption={shot.caption}
                    items={BATHROOM_GALLERY}
                    index={i}
                    className="work-shot work-shot--thumb"
                  >
                    <img src={shot.src} alt={shot.alt} className="h-full w-full object-cover" />
                    <span className="work-shot__caption">{shot.caption}</span>
                  </MediaZoom>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Museum + NOVA */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <motion.article
            id="work-museum"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 glass-card overflow-hidden"
          >
            <MediaZoom
              src={museumPhoto}
              alt="Монтаж витрин Лысьвенского музея"
              caption="Лысьвенский музей · монтаж"
              items={MUSEUM_GALLERY}
              index={0}
              className="work-shot work-shot--wide"
            >
              <img
                src={museumPhoto}
                alt="Монтаж выставочных витрин"
                className="h-full w-full object-cover"
              />
            </MediaZoom>
            <div className="p-6 lg:p-8">
              <span className="idx-pill idx-pill--orange">02 · Дизайн</span>
              <h3 className="text-xl font-bold tracking-tight font-display mt-1 mb-3">
                Лысьвенский музей и завод ММК
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Выставочные витрины по строгому ТЗ (бюджетные средства — ошибка недопустима) и
                офисные модули для металлургического завода. Чертёж, материалы, монтаж под ключ. На
                производстве — ноль брака.
              </p>
              <p className="text-xs font-medium text-accent">
                Photoshop · чертежи · работа по ТЗ →
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-card overflow-hidden"
          >
            <MediaZoom
              src={novaDashboard}
              alt="NOVA Dashboard — интерфейс"
              caption="NOVA · продуктовый интерфейс"
              items={NOVA_GALLERY}
              index={0}
              className="work-shot work-shot--wide"
            >
              <img
                src={novaDashboard}
                alt="Интерфейс NOVA Dashboard"
                className="h-full w-full object-cover object-top"
              />
            </MediaZoom>
            <div className="p-6 lg:p-8">
              <span className="idx-pill idx-pill--ink">03 · Продукт</span>
              <h3 className="text-xl font-bold tracking-tight font-display mt-1 mb-3">
                NOVA — дашборд, который можно открыть
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Дизайн интерфейса + vibe-coding до деплоя: онбординг, канбан, команда, ИИ-помощник.
                После тестов с людьми упростила до NOVA Light — 3 из 3 сказали «стало понятнее».
              </p>
              <a
                href="#nova"
                className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline underline-offset-2"
              >
                Смотреть кейс и живое демо
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </motion.article>
        </div>

        {/* Index */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">Все работы одним списком</p>
          <div className="border-t border-foreground/10">
            {INDEX.map((item, i) => (
              <motion.a
                key={item.n}
                href={item.href}
                target={"external" in item && item.external ? "_blank" : undefined}
                rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="index-row group"
              >
                <span className="index-row__n">{item.n}</span>
                <span className="index-row__title">
                  {item.title}
                  <span className="index-row__tag">{item.tag}</span>
                </span>
                <span className="index-row__desc">{item.desc}</span>
                <ArrowUpRight className="index-row__arrow" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
