import { motion } from "framer-motion";

import { ChurnAuditCase } from "@/components/ChurnAuditCase";
import { AITestingCase } from "@/components/AITestingCase";
import { fadeUp } from "./shared";

export function PortfolioSection() {
  return (
    <div id="portfolio">
      <section className="py-16 px-6 lg:px-8 border-t border-white/5 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest">
              Глава 04 · Портфолио работ
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-4">
              Кейсы с артефактами
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Практические работы с измеримым результатом: аудит данных, QA мобильного
              ИИ-ассистента и проектирование MVP-системы.
            </p>
          </motion.div>
        </div>
      </section>
      <ChurnAuditCase />
      <AITestingCase />
    </div>
  );
}
