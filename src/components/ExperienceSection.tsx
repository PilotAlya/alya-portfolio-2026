import { motion } from "framer-motion";

import { EngineeringBackground } from "@/components/EngineeringBackground";
import { BathroomCase } from "@/components/BathroomCase";
import { LegacyCase } from "@/components/LegacyCase";
import { fadeUp } from "./shared";

export function ExperienceSection() {
  return (
    <div id="experience">
      <section className="py-16 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              Глава 03 · Инженерный опыт
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-4">
              Опыт на производстве
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Два года в мебельном производстве: от чертежей и музейных экспозиций до борьбы с
              Legacy-софтом и автоматизации рутины на UrbanMebel.
            </p>
          </motion.div>
        </div>
      </section>
      <EngineeringBackground />
      <BathroomCase />
      <LegacyCase />
    </div>
  );
}
