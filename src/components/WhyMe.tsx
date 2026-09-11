import { SectionHeadline } from "./effects/SectionHeadline";

const ITEMS = [
  {
    label: "01 · Глаз",
    title: "Чтобы выглядело собранно",
    body: "Диплом дизайнера-проектировщика и Figma. Лендинг, презентация, интерфейс — композиция под задачу, без лишнего.",
  },
  {
    label: "02 · Сборка",
    title: "Чтобы макет стал рабочей версией",
    body: "Vibe-coding в Cursor: проектирую, собираю и деплою сама. Один понятный результат — ссылка, которой можно пользоваться.",
  },
  {
    label: "03 · Проверка",
    title: "Чтобы было понятно людям",
    body: "До сдачи тестирую на реальных людях: где спотыкаются — упрощаю и проверяю снова.",
  },
] as const;

export function WhyMe() {
  return (
    <section id="why" className="py-20 lg:py-28 px-6 lg:px-8 relative scroll-mt-24">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <SectionHeadline before="Чем я" accent="полезна" />
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-[40rem]">
            Одна роль: дизайнер, который доводит макет до рабочей версии. Для заказчика — результат
            без посредников. Для команды — глаз дизайнера и vibe-coding до демо.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-border">
          {ITEMS.map((it) => (
            <div
              key={it.label}
              className="border-b md:border-b-0 md:border-r border-border last:md:border-r-0 py-8 md:pr-8 md:pl-0 md:first:pl-0 md:[&:nth-child(2)]:pl-8 md:[&:nth-child(3)]:pl-8"
            >
              <p className="lab-caption text-accent mb-4">{it.label}</p>
              <h3 className="font-display font-bold tracking-tight text-lg mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[28rem]">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
