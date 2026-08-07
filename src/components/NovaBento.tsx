import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  PlayCircle,
  Rocket,
  Users,
  Github,
  ExternalLink,
} from "lucide-react";

import novaDashboard from "@/assets/nova-dashboard-new.png";
import novaBorisChat from "@/assets/nova-boris-chat.png";
import { GrainFrame } from "./effects/GrainFrame";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { fadeUp } from "./shared";

const TILES = [
  {
    title: "NOVA Light · Live Demo",
    subtitle: "Заказы, склад, Kanban — рабочий MVP на Vercel",
    tag: "Flagship · MVP",
    Icon: Rocket,
    span: "md:col-span-2 md:row-span-2 min-h-[280px]",
    href: "https://nova-light-app.vercel.app/",
    external: true,
    accent: "from-accent/25 via-accent/5 to-transparent",
    image: novaDashboard,
    grainCaption: "Flagship MVP",
    cta: "Открыть demo",
  },
  {
    title: "Презентация NOVA",
    subtitle: "Кейс, UX-тесты, до/после · alya-nova-2026",
    tag: "Presentation",
    Icon: PlayCircle,
    span: "",
    href: "https://alya-nova-2026.vercel.app/",
    external: true,
    accent: "from-blue-500/15 via-transparent to-transparent",
    image: novaDashboard,
    cta: "Смотреть",
  },
  {
    title: "AI-ассистент «Борис»",
    subtitle: "Сценарий ассистента · wiki · склад · регламенты",
    tag: "AI Layer",
    Icon: Bot,
    span: "",
    href: "#nova-detail",
    external: false,
    accent: "from-violet-500/15 via-transparent to-transparent",
    image: novaBorisChat,
    grainCaption: "AI scenario",
    cta: "Подробнее",
  },
  {
    title: "UX Validation",
    subtitle: "2 цикла · 12+ дефектов · 3 блокера · 3/3 понятнее",
    tag: "Research",
    Icon: Users,
    span: "",
    href: "#nova-ux",
    external: false,
    accent: "from-emerald-500/10 via-transparent to-transparent",
    cta: "Метрики",
  },
  {
    title: "GitHub · Nova_light-",
    subtitle: "React · TypeScript · open source MVP",
    tag: "Code",
    Icon: Github,
    span: "md:col-span-2",
    href: "https://github.com/PilotAlya/Nova_light-",
    external: true,
    accent: "from-foreground/5 via-transparent to-transparent",
    cta: "Repository",
  },
] as const;

export function NovaBento() {
  return (
    <section className="relative px-6 lg:px-8 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            NOVA · bento · флагманский проект
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-fr">
          {TILES.map((tile, i) => (
            <motion.a
              key={tile.title}
              href={tile.href}
              target={tile.external ? "_blank" : undefined}
              rel={tile.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              {...spotlightAttrs}
              className={spotlightClass(
                `bento-card group flex flex-col justify-between p-6 overflow-hidden ${tile.span}`,
              )}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tile.accent} opacity-90`}
              />
              {"image" in tile && tile.image && (
                <div className="pointer-events-none absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <GrainFrame
                    src={tile.image}
                    alt=""
                    duotone
                    caption={"grainCaption" in tile ? tile.grainCaption : undefined}
                    className="h-full w-full rounded-none"
                    imageClassName="object-top"
                  />
                </div>
              )}
              <div className="relative z-[1] flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent/90">
                    {tile.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight mt-1.5 group-hover:text-accent transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-sm">
                    {tile.subtitle}
                  </p>
                </div>
                <div className="shrink-0 p-2 rounded-md border border-white/10 bg-background/40 text-accent group-hover:border-accent/40 transition-colors">
                  <tile.Icon className="size-4" />
                </div>
              </div>
              <div className="relative z-[1] mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
                {tile.cta}
                {tile.external ? (
                  <ExternalLink className="size-3" />
                ) : (
                  <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
