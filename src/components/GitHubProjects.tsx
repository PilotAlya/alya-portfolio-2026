import { motion } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { fadeUp } from "./shared";

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
      name: "Nova_light-",
      category: "MVP · SA",
      description: "Система управления мебельным производством: заказы, склад, AI-ассистент «Борис».",
      url: "https://github.com/PilotAlya/Nova_light-",
      demo: "https://alya-nova-2026.vercel.app/",
      tags: ["React", "TypeScript", "RAG"],
    },
    {
      name: "Client Retention Dashboard",
      category: "Data Audit",
      description: "Executive Dashboard: аудит оттока клиентов B2B-сервиса, KPI и визуализация.",
      url: "https://github.com/PilotAlya/topfacemedia-client-retention-audit",
      demo: "https://client-retention-dashboard.vercel.app/",
      tags: ["Python", "Chart.js", "Vercel"],
    },
    {
      name: "alya-portfolio-2026",
      category: "Portfolio",
      description: "Этот лендинг: vibe-coding на React, TanStack, Tailwind, Framer Motion.",
      url: "https://github.com/PilotAlya/alya-portfolio-2026",
      demo: "https://portfolio-resume-alya-akbarova.vercel.app/",
      tags: ["React", "TanStack", "Vercel"],
    },
  ];

  return (
    <section id="github" className="py-24 px-6 lg:px-8 bg-card/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 max-w-3xl"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            GitHub · Projects
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-4 mb-4">
            Проекты и репозитории
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Код, live-демо и pet-проекты — всё в одном месте.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col border border-white/10 rounded-xl bg-background/60 p-5 hover:border-accent/40 hover:bg-card/40 transition-all"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                {project.category}
              </span>
              <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground border border-white/10 px-1.5 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-3 border-t border-white/10 font-mono text-[10px] uppercase tracking-wider">
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
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://github.com/PilotAlya"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 border border-white/10 rounded-xl hover:border-accent/40 bg-white/[0.02] hover:bg-card transition-all"
          >
            <div className="flex items-center gap-4">
              <Github className="size-6 text-accent" />
              <div>
                <div className="font-bold">github.com/PilotAlya</div>
                <div className="text-sm text-muted-foreground">Все репозитории и эксперименты</div>
              </div>
            </div>
            <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
