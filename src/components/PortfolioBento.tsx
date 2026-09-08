import { motion } from "framer-motion";
import { ArrowUpRight, Kanban, BarChart3 } from "lucide-react";

import churnDashboard from "@/assets/churn-dashboard.png";
import { GrainFrame } from "./effects/GrainFrame";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { fadeUp } from "./shared";

const TILES = [
  {
    id: "case-crm",
    title: "Мини-CRM для клиентов",
    subtitle: "Форма лида, маска телефона, сохранение данных",
    tag: "Личный проект",
    Icon: Kanban,
    span: "md:col-span-2",
    href: "#case-crm",
    accent: "from-accent/20 via-transparent to-transparent",
    grainOnly: true as const,
  },
  {
    id: "case-b2b",
    title: "Проверка оттока клиентов",
    subtitle: "Аудит данных и дашборд для руководства",
    tag: "Проверка данных",
    Icon: BarChart3,
    span: "",
    href: "#case-b2b",
    accent: "from-spark/15 via-transparent to-transparent",
    image: churnDashboard,
    grainCaption: "Дашборд",
  },
] as const;

export function PortfolioBento() {
  return (
    <section className="relative px-6 lg:px-8 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Навигация по кейсам ниже · NOVA — в разделе выше
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-fr">
          {TILES.map((tile, i) => (
            <motion.a
              key={tile.id}
              href={tile.href}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              {...spotlightAttrs}
              className={spotlightClass(
                `bento-card group flex flex-col justify-between min-h-[148px] p-6 overflow-hidden ${tile.span}`,
              )}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tile.accent} opacity-80`}
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
              {"grainOnly" in tile && tile.grainOnly && (
                <div className="pointer-events-none absolute inset-0 opacity-25 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
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
                <div className="shrink-0 p-2 rounded-md border border-foreground/10 bg-background/40 text-accent group-hover:border-accent/40 transition-colors">
                  <tile.Icon className="size-4" />
                </div>
              </div>
              <div className="relative z-[1] mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
                К кейсу
                <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
