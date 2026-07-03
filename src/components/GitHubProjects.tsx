import { motion } from "framer-motion";
import { Github, ArrowUpRight, Star } from "lucide-react";
import { fadeUp } from "./shared";

export function GitHubProjects() {
  const projects = [
    {
      name: "Nova_light-",
      description: "MVP-система управления мебельным производством. Единая точка управления заказами, складом и AI-ассистентом «Борис». React, TypeScript, TanStack Router.",
      url: "https://github.com/PilotAlya/Nova_light-",
      demo: "https://alya-nova-2026.vercel.app/",
      tags: ["React", "TypeScript", "TanStack", "RAG"],
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
            Глава 07.5 · GitHub Projects
          </span>
          <h2 className="text-4xl font-bold tracking-tight mt-4 mb-4">
            Open Source & Публичные проекты
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Мои проекты на GitHub — от MVP-систем до автоматизации. Весь код открыт для изучения.
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 hover:border-accent/40 bg-background p-8 hover:bg-card transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Github className="size-5 text-accent" />
                    <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:items-end shrink-0">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                  >
                    <Github className="size-4" />
                    Смотреть код
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Star className="size-4" />
                      Live Demo
                      <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* GitHub Profile Link */}
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
              className="group flex items-center justify-between p-6 border border-white/10 hover:border-accent/40 bg-white/[0.02] hover:bg-card transition-all"
            >
              <div className="flex items-center gap-4">
                <Github className="size-6 text-accent" />
                <div>
                  <div className="font-bold text-lg">github.com/PilotAlya</div>
                  <div className="text-sm text-muted-foreground">
                    Больше проектов и экспериментов в моём GitHub профиле
                  </div>
                </div>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
