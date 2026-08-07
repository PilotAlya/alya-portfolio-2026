import { motion } from "framer-motion";

import { ScribbleBurst, SparkStar } from "./effects/HandDrawn";
import { SectionLabel } from "./effects/SectionLabel";
import { fadeUp } from "./shared";

type SectionIntroProps = {
  chapter: number;
  label: string;
  title: string;
  description?: string;
  meta?: string;
};

export function SectionIntro({ chapter, label, title, description, meta }: SectionIntroProps) {
  return (
    <section className="relative py-10 lg:py-12 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-6 lg:left-8 w-24 h-px bg-gradient-to-r from-accent/60 to-transparent pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="relative max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <div className="max-w-3xl">
          <ScribbleBurst className="mb-3 -ml-1 opacity-80" />
          <SectionLabel chapter={chapter} title={label} />
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 font-display flex items-start gap-2">
            {title}
            <SparkStar className="mt-2 shrink-0" />
          </h2>
          {description && (
            <p className="text-muted-foreground mt-3 leading-relaxed max-w-2xl">{description}</p>
          )}
        </div>

        {meta && (
          <div className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-white/10 rounded-md px-4 py-2.5 bg-white/[0.02]">
            {meta}
          </div>
        )}
      </motion.div>
    </section>
  );
}
