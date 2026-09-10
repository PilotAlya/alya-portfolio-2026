import { SectionHeadline } from "./effects/SectionHeadline";
import { AiryAccent } from "./effects/AiryAccent";

const ITEMS = [
  {
    label: "Глаз",
    problem: "Нужно, чтобы выглядело собранно — лендинг, презентация, интерфейс.",
    solution:
      "Диплом дизайнера-проектировщика и Figma. Композицию считаю так же, как витрины для музея: ничего лишнего, всё по задаче.",
    result: "Интерьер (модель → кадр), музей под ключ, презентация NOVA.",
  },
  {
    label: "Сборка",
    problem: "Макет есть, а живой версии нет — и ждать разработчика некогда.",
    solution:
      "Vibe-coding: Cursor и AI ускоряют код, я проектирую логику, проверяю и деплою. Один понятный результат в срок.",
    result: "NOVA Light, это портфолио, мини-CRM — открыть по ссылке.",
  },
  {
    label: "Проверка",
    problem: "Страшно, что «красиво» не значит «понятно людям».",
    solution:
      "Тестирую на реальных людях до сдачи: где спотыкаются, упрощаю, проверяю снова.",
    result: "В NOVA — две итерации после тестов. «Стало понятнее. Сами бы таким пользовались».",
  },
] as const;

export function WhyMe() {
  return (
    <section id="why" className="py-20 lg:py-28 px-6 lg:px-8 relative scroll-mt-24">
      <AiryAccent kind="star" className="airy-accent--why" />
      <div className="relative z-[1] max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <SectionHeadline before="Глаз, сборка," accent="проверка" />
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-[42rem]">
            Три опоры одной ссылки: для заказчика — результат без посредников; для команды —
            дизайнер с vibe-coding до демо.
          </p>
        </div>

        <div className="border-t border-border">
          {ITEMS.map((it) => (
            <div
              key={it.label}
              className="grid lg:grid-cols-[8rem_1fr_1fr] gap-4 lg:gap-10 py-8 border-b border-border"
            >
              <div className="lab-caption text-accent pt-1">{it.label}</div>
              <div>
                <h3 className="font-display font-bold tracking-tight text-base mb-2">{it.problem}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.solution}</p>
              </div>
              <div>
                <p className="lab-caption text-foreground/50 mb-2">Результат</p>
                <p className="text-sm leading-relaxed text-foreground/85">{it.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
