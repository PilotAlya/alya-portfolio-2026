import { motion } from "framer-motion";
import { ArrowUpRight, Bot, PlayCircle, Rocket, Users, Github, ExternalLink } from "lucide-react";

import novaDashboard from "@/assets/nova-dashboard-new.png";
import novaBorisChat from "@/assets/nova-boris-chat.png";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";
import { fadeUp } from "./shared";

const TILES = [
  {
    title: "NOVA Light · живая версия",
    subtitle: "Заказы, склад, канбан — можно открыть и покликать прямо сейчас",
    tag: "Главный проект",
    Icon: Rocket,
    span: "md:col-span-2 md:row-span-2 min-h-[280px]",
    href: "https://nova-light-app.vercel.app/",
    external: true,
    accent: "from-accent/25 via-accent/5 to-transparent",
    image: novaDashboard,
    grainCaption: "Живая демо-версия",
    cta: "Открыть demo",
  },
  {
    title: "Презентация NOVA",
    subtitle: "Кейс, тесты с пользователями, «до/после»",
    tag: "Презентация",
    Icon: PlayCircle,
    span: "",
    href: "https://alya-nova-2026.vercel.app/",
    external: true,
    accent: "from-accent/20 via-transparent to-transparent",
    image: novaDashboard,
    cta: "Смотреть",
  },
  {
    title: "ИИ-ассистент «Борис»",
    subtitle: "Отвечает по инструкциям, товарным спискам и заказам",
    tag: "ИИ-помощник",
    Icon: Bot,
    span: "",
    href: "#nova-detail",
    external: false,
    accent: "from-accent/15 via-transparent to-transparent",
    image: novaBorisChat,
    grainCaption: "Как работает",
    cta: "Подробнее",
  },
  {
    title: "Проверка на реальных людях",
    subtitle: "2 круга тестов · 12+ проблем найдено · 3 критичных исправлено",
    tag: "Тестирование",
    Icon: Users,
    span: "",
    href: "#nova-ux",
    external: false,
    accent: "from-spark/15 via-transparent to-transparent",
    cta: "Метрики",
  },
  {
    title: "Исходный код проекта",
    subtitle: "Открытый код на GitHub, если хотите заглянуть под капот",
    tag: "Код",
    Icon: Github,
    span: "md:col-span-2",
    href: "https://github.com/PilotAlya/Nova_light-",
    external: true,
    accent: "from-foreground/5 via-transparent to-transparent",
    cta: "Посмотреть код",
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
          <p className="text-sm text-muted-foreground">NOVA · коротко о проекте</p>
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
                <div className="pointer-events-none absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity">
                  <img src={tile.image} alt="" className="h-full w-full object-cover object-top" />
                  {"grainCaption" in tile && tile.grainCaption && (
                    <span className="absolute bottom-3 left-3 text-xs font-medium text-spark">
                      {tile.grainCaption}
                    </span>
                  )}
                </div>
              )}
              <div className="relative z-[1] flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-medium text-accent/90">{tile.tag}</span>
                  <h3 className="font-display text-lg font-semibold tracking-tight mt-1.5 group-hover:text-accent transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-sm">
                    {tile.subtitle}
                  </p>
                </div>
                <div className="shrink-0 p-2 rounded-full border border-foreground/10 bg-background/60 text-accent group-hover:border-accent/40 transition-colors">
                  <tile.Icon className="size-4" />
                </div>
              </div>
              <div className="relative z-[1] mt-4 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-accent transition-colors">
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
