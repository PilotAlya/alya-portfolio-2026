import { SectionHeadline } from "./effects/SectionHeadline";

const GROUPS = [
  {
    title: "Дизайн",
    lead: "Веду инструмент",
    tags: ["Figma", "Композиция", "Презентации", "Веб-UI"],
  },
  {
    title: "Сборка",
    lead: "Довожу до демо",
    tags: ["Cursor", "vibe-coding", "React", "Vercel"],
  },
  {
    title: "Ускорители",
    lead: "Не замена глазу",
    tags: ["Claude", "Gemini", "тесты с людьми"],
  },
] as const;

export function Stack() {
  return (
    <section id="stack" className="relative py-20 lg:py-28 px-6 lg:px-8 scroll-mt-24">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <SectionHeadline before="Как" accent="работаю" />
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
            Figma — основа. Cursor и AI — ускорители сборки. Навык не в списке инструментов, а в
            том, что макет доходит до рабочей версии.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-t border-border pt-10">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <p className="lab-caption text-foreground mb-1">{group.title}</p>
              <p className="text-xs text-muted-foreground mb-4">{group.lead}</p>
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
