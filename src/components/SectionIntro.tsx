import { motion } from "framer-motion";

import { SectionHeadline } from "./effects/SectionHeadline";
import { SectionLabel } from "./effects/SectionLabel";
import { fadeUp } from "./shared";

type SectionIntroProps = {
  label: string;
  titleBefore?: string;
  titleAccent: string;
  titleAfter?: string;
  description?: string;
  meta?: string;
};

export function SectionIntro({
  label,
  titleBefore,
  titleAccent,
  titleAfter,
  description,
  meta,
}: SectionIntroProps) {
  return (
    <section className="relative py-10 lg:py-12 px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="relative max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <div className="max-w-3xl">
          <SectionLabel title={label} />
          <SectionHeadline before={titleBefore} accent={titleAccent} after={titleAfter} />
          {description && (
            <p className="text-muted-foreground mt-3 leading-relaxed max-w-2xl">{description}</p>
          )}
        </div>

        {meta && (
          <div className="shrink-0 text-sm text-muted-foreground border border-foreground/10 rounded-full px-4 py-2.5 bg-card">
            {meta}
          </div>
        )}
      </motion.div>
    </section>
  );
}
