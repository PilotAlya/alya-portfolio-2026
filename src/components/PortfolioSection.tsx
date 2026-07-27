import { motion } from "framer-motion";

import { ChurnAuditCase } from "@/components/ChurnAuditCase";
import { AITestingCase } from "@/components/AITestingCase";
import { fadeUp } from "./shared";

export function PortfolioSection() {
  return (
    <div id="portfolio">
      <section className="pt-20 pb-4 px-6 lg:px-8 border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-7xl mx-auto flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] shrink-0">
            Портфолио · 2 кейса
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>
      </section>
      <ChurnAuditCase />
      <AITestingCase />
    </div>
  );
}
