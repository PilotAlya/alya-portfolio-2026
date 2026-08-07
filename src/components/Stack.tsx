import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { SectionLabel } from "./effects/SectionLabel";
import { SectionHeadline } from "./effects/SectionHeadline";

import borisWalkStableVideo from "@/assets/boris-walk-stable-hd.webm";

type TagSize = "sm" | "md" | "lg";

const TAGS: { label: string; size: TagSize; core?: boolean }[] = [
  { label: "Cursor", size: "lg", core: true },
  { label: "Vibe-coding", size: "lg" },
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
  { label: "RAG", size: "sm" },
  { label: "OCR", size: "sm" },
  { label: "Python", size: "sm" },
  { label: "Pandas", size: "sm" },
  { label: "UX Testing", size: "sm" },
  { label: "AI Evaluation", size: "sm" },
  { label: "DevTools", size: "sm" },
  { label: "Figma", size: "sm" },
  { label: "PRO100", size: "sm" },
  { label: "MVP Shipping", size: "md" },
  { label: "Automation", size: "md" },
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
      className="relative pt-16 md:pt-24 pb-32 px-6 lg:px-8 overflow-hidden scroll-mt-20"
    >
      {/* Chibi-Boris walking animation */}
      <div className="hidden md:block absolute top-0 inset-x-0 h-64 overflow-visible pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0"
          initial={{ x: "-200px" }}
          animate={{ x: "calc(100vw + 80px)" }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          style={{
            filter: "drop-shadow(0 8px 18px rgba(59,130,246,0.35))",
            willChange: "transform",
          }}
        >
          <video
            src={borisWalkStableVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-60 w-auto select-none block"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <SectionLabel chapter={7} title="Технологический стек" />
          <SectionHeadline before="Стек технологий и" accent="автоматизации" />
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
            AI-native инструменты, фреймворки и практики — всё, что использую при сборке MVP и
            автоматизации.
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
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            core · Cursor · ежедневный стек
          </p>

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

        {/* marquee */}
        <div className="relative overflow-hidden border-y border-white/5 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-12 animate-ticker whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  "Vibe-coding",
                  "AI-Native",
                  "React",
                  "TypeScript",
                  "Python",
                  "Pandas",
                  "RAG",
                  "Cursor",
                  "OpenCode",
                  "Gemini",
                  "Prompt QA",
                  "MVP Shipping",
                  "Chart.js",
                  "Vercel",
                  "Claude",
                  "Figma",
                  "NotebookLM",
                  "TanStack",
                  "UX Testing",
                  "AI Trainer",
                  "Automation",
                ].map((t) => (
                  <span key={`${k}-${t}`} className="text-foreground/70">
                    {t} <span className="text-accent">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
