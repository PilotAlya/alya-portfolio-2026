import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

type TagSize = "sm" | "md" | "lg";

const TAGS: { label: string; size: TagSize; core?: boolean }[] = [
  { label: "Cursor", size: "lg", core: true },
  { label: "Сборка с ИИ", size: "lg" },
  { label: "React", size: "md" },
  { label: "TypeScript", size: "md" },
  { label: "TanStack", size: "md" },
  { label: "Vercel", size: "md" },
  { label: "OpenCode", size: "md" },
  { label: "Gemini", size: "md" },
  { label: "Claude", size: "md" },
  { label: "Lovable", size: "sm" },
  { label: "Bolt", size: "sm" },
  { label: "Replit", size: "sm" },
  { label: "GitHub Copilot", size: "sm" },
  { label: "DeepSeek", size: "sm" },
  { label: "OpenRouter", size: "sm" },
  { label: "NotebookLM", size: "sm" },
  { label: "Python", size: "sm" },
  { label: "Pandas", size: "sm" },
  { label: "Тестирование", size: "sm" },
  { label: "Оценка качества ИИ", size: "sm" },
  { label: "Figma", size: "md" },
  { label: "Gamma", size: "md" },
  { label: "PRO100", size: "sm" },
  { label: "Быстрый запуск", size: "md" },
  { label: "Автоматизация", size: "md" },
];

const SIZE_CLASS: Record<TagSize, string> = {
  sm: "tag-cloud-pill--sm",
  md: "tag-cloud-pill--md",
  lg: "tag-cloud-pill--lg",
};

export function Stack() {
  return (
    <section
      id="stack"
      className="relative pt-16 md:pt-24 pb-32 px-6 lg:px-8 overflow-x-clip scroll-mt-20 isolate"
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
          <SectionHeadline before="С чем я" accent="работаю" />
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
            Инструменты, которыми пользуюсь каждый день, чтобы быстро собирать сайты, делать
            презентации и автоматизировать рутину.
          </p>
        </motion.div>

        {/* Tag cloud — SENCE-style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-panel rounded-2xl p-8 md:p-10 mb-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Основной инструмент · Cursor</p>

          <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center md:justify-start">
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.35 }}
                className={[
                  "tag-cloud-pill",
                  SIZE_CLASS[tag.size],
                  tag.core && "tag-cloud-pill--core",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {tag.core && (
                  <span className="text-spark text-[0.65em]" aria-hidden>
                    ✦
                  </span>
                )}
                {tag.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
