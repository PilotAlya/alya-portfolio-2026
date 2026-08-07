import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Bot, Kanban, BarChart3, Rocket } from "lucide-react";

import novaDashboard from "@/assets/nova-dashboard-new.png";
import churnDashboard from "@/assets/churn-dashboard.png";
import { FilterPills } from "./effects/FilterPills";
import { GrainFrame, GrainOverlay } from "./effects/GrainFrame";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { fadeUp } from "./shared";

type TileCategory = "flagship" | "mvp" | "automation" | "data";

const FILTER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "flagship", label: "Flagship" },
  { id: "mvp", label: "MVP" },
  { id: "automation", label: "Automation" },
  { id: "data", label: "Data" },
] as const;

const TILES = [
  {
    id: "nova",
    title: "NOVA Dashboard",
    subtitle: "Флагман · MVP · UX-тесты · AI «Борис» · live demo",
    tag: "Flagship",
    categories: ["flagship", "mvp"] as TileCategory[],
    Icon: Rocket,
    span: "md:col-span-2 md:row-span-1 min-h-[160px]",
    href: "#nova",
    external: false,
    accent: "from-accent/25 via-accent/5 to-transparent",
    image: novaDashboard,
    grainCaption: "Live MVP",
  },
  {
    id: "case-crm",
    title: "CRM Lead Card",
    subtitle: "React · Vite · localStorage · маска телефона",
    tag: "Pet project",
    categories: ["mvp"] as TileCategory[],
    Icon: Kanban,
    span: "",
    href: "#case-crm",
    external: false,
    accent: "from-blue-500/15 via-transparent to-transparent",
    image: novaDashboard,
    grainCaption: "React MVP",
  },
  {
    id: "case-telegram",
    title: "Telegram → Google Sheets",
    subtitle: "Lead capture · Apps Script · no server",
    tag: "Automation",
    categories: ["automation"] as TileCategory[],
    Icon: Bot,
    span: "",
    href: "#case-telegram",
    external: false,
    accent: "from-accent/20 via-accent/5 to-transparent",
    grainOnly: true,
  },
  {
    id: "case-b2b",
    title: "B2B Churn Audit",
    subtitle: "72.7% → 63.6% · executive dashboard",
    tag: "Data · background",
    categories: ["data"] as TileCategory[],
    Icon: BarChart3,
    span: "",
    href: "https://client-retention-dashboard.vercel.app/",
    external: true,
    accent: "from-emerald-500/10 via-transparent to-transparent",
    image: churnDashboard,
    grainCaption: "Data audit",
  },
] as const;

export function PortfolioBento() {
  const [filter, setFilter] = useState("all");

  const visibleTiles = useMemo(() => {
    if (filter === "all") return TILES;
    return TILES.filter((t) => t.categories.includes(filter as TileCategory));
  }, [filter]);

  return (
    <section className="relative px-6 lg:px-8 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Bento · быстрый обзор проектов
          </p>
          <FilterPills options={[...FILTER_OPTIONS]} value={filter} onChange={setFilter} />
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {visibleTiles.map((tile, i) => (
              <motion.a
                key={tile.id}
                layout
                href={tile.href}
                target={tile.external ? "_blank" : undefined}
                rel={tile.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
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
                  <div className="pointer-events-none absolute inset-0 opacity-30">
                    <GrainOverlay />
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
                  {tile.external ? "Live demo" : "К кейсу"}
                  <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
