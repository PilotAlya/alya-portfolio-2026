import { ArrowUpRight } from "lucide-react";

import bathroomReal from "@/assets/case-bathroom-real.jpg";
import museumPhoto from "@/assets/eng-museum-1.jpg";
import novaDashboard from "@/assets/nova-dashboard-new.png";

import { SectionHeadline } from "./effects/SectionHeadline";

const CASES = [
  {
    id: "work-bathroom",
    n: "01",
    tag: "Дизайн",
    title: "Ванная: модель → кадр",
    task: "Показать интерьер так, чтобы его можно было согласовать — не «красивый референс», а путь от идеи.",
    did: "Собрала пространство в 3D, сделала визуализацию и финальный кадр.",
    result: "Понятный путь модель → картинка → кадр.",
    img: bathroomReal,
    alt: "Финальный кадр ванной",
  },
  {
    id: "work-museum",
    n: "02",
    tag: "Дизайн",
    title: "Музей и завод ММК",
    task: "Витрины и офисные модули по строгому ТЗ — ошибка на производстве недопустима.",
    did: "Чертежи, материалы, монтаж под ключ.",
    result: "Ноль брака на производстве.",
    img: museumPhoto,
    alt: "Монтаж витрин Лысьвенского музея",
  },
  {
    id: "work-nova",
    n: "03",
    tag: "Продукт",
    title: "NOVA Dashboard",
    task: "Интерфейс продукта, которым можно пользоваться, а не только смотреть в макете.",
    did: "UI в Figma + vibe-coding до деплоя; после тестов с людьми упростила до Light.",
    result: "Живое демо на Vercel. 3 из 3: «стало понятнее».",
    img: novaDashboard,
    alt: "NOVA Dashboard — интерфейс",
    href: "https://alya-nova-2026.vercel.app/",
    linkLabel: "Открыть демо",
  },
] as const;

export function SelectedWork() {
  return (
    <section id="work" className="py-20 lg:py-28 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <SectionHeadline before="Три работы," accent="одна логика" />
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-[40rem]">
            Сначала глаз, потом продукт. У каждого кейса — задача, что сделала и чем закончилось.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {CASES.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-28 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 lg:gap-12 items-start"
            >
              <div className="overflow-hidden rounded-md border border-border bg-secondary/30 aspect-[16/10]">
                <img src={c.img} alt={c.alt} className="h-full w-full object-cover object-top" />
              </div>

              <div className="lg:pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="lab-caption text-foreground/50">{c.n}</span>
                  <span className="index-row__tag">{c.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-display mb-6">
                  {c.title}
                </h3>

                <dl className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="lab-caption text-foreground/45 mb-1">Задача</dt>
                    <dd className="text-muted-foreground">{c.task}</dd>
                  </div>
                  <div>
                    <dt className="lab-caption text-foreground/45 mb-1">Что сделала</dt>
                    <dd className="text-muted-foreground">{c.did}</dd>
                  </div>
                  <div>
                    <dt className="lab-caption text-accent mb-1">Результат</dt>
                    <dd className="text-foreground/90">{c.result}</dd>
                  </div>
                </dl>

                {"href" in c && c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-2"
                  >
                    {c.linkLabel}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
