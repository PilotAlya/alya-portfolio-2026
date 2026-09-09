import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

const GROUPS = [
  {
    title: "Дизайн",
    hint: "кто я и куда расту — глаз и композиция",
    tags: [
      { label: "Figma", core: true },
      { label: "Photoshop", core: true },
      { label: "Gamma", core: true },
      { label: "PRO100" },
      { label: "Композиция" },
      { label: "Визуализация" },
      { label: "Презентации" },
      { label: "Веб-UI" },
    ],
  },
  {
    title: "Сборка · vibe-coding",
    hint: "чтобы макет стал ссылкой, а не остался картинкой",
    tags: [
      { label: "Cursor", core: true },
      { label: "React" },
      { label: "TypeScript" },
      { label: "Vercel" },
      { label: "Lovable" },
      { label: "Bolt" },
      { label: "OpenCode" },
    ],
  },
  {
    title: "ИИ и проверка",
    hint: "ускоряет черновик, вкус и качество — за мной",
    tags: [
      { label: "Gemini" },
      { label: "Claude" },
      { label: "Тесты с людьми" },
      { label: "Python" },
      { label: "Автоматизация" },
    ],
  },
] as const;

export function Stack() {
  return (
    <section
      id="stack"
      className="relative pt-16 md:pt-24 pb-24 px-6 lg:px-8 overflow-x-clip scroll-mt-20 isolate"
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <SectionLabel title="Инструменты" />
          <SectionHeadline before="Дизайн ведёт," accent="vibe-coding собирает" />
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
            Figma и Photoshop — не «ещё умею». Cursor и React — способ быстро довести макет до демо
            без отдельной команды разработки.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="glass-card p-6 md:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-foreground mb-1">
                {group.title}
              </p>
              <p className="text-sm text-muted-foreground mb-5">{group.hint}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={[
                      "tag-cloud-pill tag-cloud-pill--md",
                      "core" in tag && tag.core && "tag-cloud-pill--core",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
