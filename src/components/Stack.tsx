import { SectionHeadline } from "./effects/SectionHeadline";

const GROUPS = [
  {
    title: "Дизайн",
    tags: ["Figma", "Gamma", "Композиция", "Визуализация", "Презентации", "Веб-UI"],
  },
  {
    title: "Сборка",
    tags: ["Cursor", "React", "TypeScript", "Vercel"],
  },
  {
    title: "Проверка",
    tags: ["Gemini", "Claude", "Тесты с людьми"],
  },
] as const;

export function Stack() {
  return (
    <section id="stack" className="relative py-20 lg:py-28 px-6 lg:px-8 scroll-mt-20">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <SectionHeadline before="Дизайн ведёт," accent="vibe-coding собирает" />
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
            Figma — основной инструмент. Cursor — способ быстро довести макет до демо.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-t border-border pt-10">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <p className="lab-caption text-foreground mb-4">{group.title}</p>
              <ul className="space-y-2">
                {group.tags.map((tag) => (
                  <li key={tag} className="text-sm text-foreground/80">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
