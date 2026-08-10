import { motion } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "./shared";
import { CornerMarks, spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { SectionHeadline } from "./effects/SectionHeadline";
import { SectionLabel } from "./effects/SectionLabel";
import { SITE_URL } from "@/lib/site";

type Project = {
  name: string;
  category: string;
  description: string;
  url?: string;
  demo?: string;
  tags: string[];
};

export function GitHubProjects() {
  const projects: Project[] = [
    {
      name: "alya-portfolio-2026",
      category: "Portfolio · 2026",
      description: "Код этого лендинга: React, TanStack, Tailwind, Framer Motion · Chromatic Atelier.",
      url: "https://github.com/PilotAlya/alya-portfolio-2026",
      demo: SITE_URL,
      tags: ["React", "TanStack", "Vercel"],
    },
    {
      name: "Nova_light-",
      category: "MVP · AI",
      description: "Репозиторий NOVA Light: React, TypeScript, сценарий ассистента «Борис».",
      url: "https://github.com/PilotAlya/Nova_light-",
      demo: "https://nova-light-app.vercel.app/",
      tags: ["React", "TypeScript", "MVP"],
    },
    {
      name: "Client Retention Dashboard",
      category: "Data Audit",
      description: "Код executive dashboard к B2B-аудиту (кейс в background портфолио).",
      url: "https://github.com/PilotAlya/topfacemedia-client-retention-audit",
      demo: "https://client-retention-dashboard.vercel.app/",
      tags: ["Python", "Chart.js", "Vercel"],
    },
  ];

  return (
    <section id="github" className="py-24 px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <SectionLabel chapter={6} title="GitHub · Projects" />
          <SectionHeadline before="Проекты и" accent="репозитории" className="mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            Ссылки на код и live-demo. Полные кейсы — в разделах NOVA, Опыт и Портфолио выше.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              {...spotlightAttrs}
              className={spotlightClass(
                "corner-brackets group flex flex-col rounded-xl border border-white/10 bg-background/60 p-5",
              )}
            >
              <CornerMarks />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col flex-1"
              >
                <motion.span variants={staggerItem} className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                  {project.category}
                </motion.span>
                <motion.h3 variants={staggerItem} className="text-lg font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </motion.h3>
                <motion.p variants={staggerItem} className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </motion.p>
                <motion.div variants={staggerItem} className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground border border-white/10 px-1.5 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <motion.div variants={staggerItem} className="flex flex-wrap gap-3 pt-3 border-t border-white/10 font-mono text-[10px] uppercase tracking-wider">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="size-3.5" />
                    Код
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="size-3.5" />
                    Demo
                  </a>
                )}
              </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.a
          href="https://github.com/PilotAlya"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          {...spotlightAttrs}
          className={spotlightClass(
            "group flex items-center justify-between p-5 border border-white/10 rounded-xl bg-white/[0.02]",
          )}
        >
          <div className="flex items-center gap-4">
            <Github className="size-6 text-accent" />
            <div>
              <div className="font-bold">github.com/PilotAlya</div>
              <div className="text-sm text-muted-foreground">Все репозитории и эксперименты</div>
            </div>
          </div>
          <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </motion.a>
      </div>
    </section>
  );
}
