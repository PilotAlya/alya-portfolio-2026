import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Gamepad2, Smartphone } from "lucide-react";
import { fadeUp } from "./shared";
import { GrainOverlay } from "./effects/GrainFrame";
import { MagneticLink } from "./effects/MagneticButton";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

import rrBot from "@/assets/rocket-rush/01-bot-welcome.png";
import rrGame from "@/assets/rocket-rush/02-game.png";
import rrResult from "@/assets/rocket-rush/03-result.png";
import rrRecord from "@/assets/rocket-rush/04-record.png";
import rrLeaderboard from "@/assets/rocket-rush/05-leaderboard.png";
import rrShare from "@/assets/rocket-rush/06-share.png";

/** TanStack Start serves public files by path — use index.html (dir URL 404s). */
const PROTO_BASE = "/rocket-rush/index.html";

const SCREENS = [
  { src: rrBot, label: "Вход из чата", tag: "Bot", qs: "screen=bot-welcome&first=0" },
  { src: rrGame, label: "Свайп-аркада", tag: "Game", qs: "screen=game&first=0" },
  { src: rrResult, label: "Счёт + квест", tag: "Result", qs: "screen=result-normal&first=0&score=1200" },
  { src: rrRecord, label: "Новый рекорд", tag: "Record", qs: "screen=result-record&first=0&score=9000" },
  { src: rrLeaderboard, label: "Топ-30 / призы", tag: "Top", qs: "screen=leaderboard&first=0&best=8420" },
  { src: rrShare, label: "Карточка результата", tag: "Share", qs: "screen=share&first=0&score=1500&best=2000" },
] as const;

function protoUrl(qs: string) {
  return `${PROTO_BASE}?${qs}`;
}

function LivePrototype() {
  const [current, setCurrent] = useState(0);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const hostRef = useRef<HTMLDivElement>(null);

  const src = useMemo(() => protoUrl(SCREENS[current].qs), [current]);

  useEffect(() => {
    const el = hostRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const jumpTo = (index: number) => {
    setCurrent(index);
    setIframeKey((k) => k + 1);
  };

  return (
    <div ref={hostRef} className="relative">
      <div
        {...spotlightAttrs}
        className={spotlightClass(
          "relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-[#e8ecf0] shadow-[0_0_40px_rgba(59,130,246,0.12)]",
        )}
      >
        <GrainOverlay intensity="subtle" />
        <div className="relative z-[1] aspect-[9/16] max-h-[min(72vh,720px)] mx-auto w-full">
          {shouldLoad ? (
            <iframe
              key={iframeKey}
              title="Rocket Rush — кликабельный прототип"
              src={src}
              className="absolute inset-0 h-full w-full border-0 bg-[#e8ecf0]"
              loading="lazy"
              allow="clipboard-write"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={SCREENS[0].src}
                alt=""
                className="h-full w-full object-contain opacity-80"
              />
            </div>
          )}
        </div>
        <div className="absolute top-3 left-3 z-[2] font-mono text-[9px] uppercase tracking-widest text-accent bg-background/85 backdrop-blur border border-accent/30 px-2 py-0.5 rounded">
          Live · {SCREENS[current].tag}
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Кликай внутри телефона · свайпай в игре
      </p>

      <div className="mt-4 grid grid-cols-6 gap-1.5">
        {SCREENS.map((s, i) => (
          <button
            key={s.tag}
            type="button"
            onClick={() => jumpTo(i)}
            className={`relative overflow-hidden rounded-md ring-1 transition-all ${
              i === current
                ? "ring-accent opacity-100"
                : "ring-white/10 opacity-50 hover:opacity-90"
            }`}
            aria-label={s.label}
            title={s.label}
          >
            <img src={s.src} alt="" className="w-full h-auto object-cover aspect-[9/16]" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function RocketRushCase() {
  return (
    <section
      id="case-rocket-rush"
      className="relative py-24 px-6 lg:px-8 overflow-hidden border-b border-white/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Pet project · Telegram Mini App
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm flex items-center gap-1">
                <Smartphone className="size-3 text-accent" /> UX-прототип · не боевой бот
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-display">
              Rocket Rush — прототип Mini App
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              Кликабельный продуктовый прототип к Дню компьютерных игр: бот с подпиской, свайп-аркада,
              лимит попыток, рефералы, топ-30, квест дня и шаринг результата. Показывает логику
              продукта end-to-end — без боевого бэкенда.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              {[
                "User flow и гейм-док → UI бота + Mini App в одном кликабельном прототипе",
                "Свайп-управление, комбо и бустеры, пауза, рейтинг, ачивки, квест «5★»",
                "Мотивация: 3 попытки/день, реферал (+1 обоим), ежедневный бонус, шаринг карточки",
                "Честный мок: подписка и рефералы без сервера — спецификация для разработки",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "Vite", "Tailwind", "Telegram UI", "Figma", "UX flow"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-white/10 px-2 py-1 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <MagneticLink
              href={protoUrl("screen=bot-welcome&first=0")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spark items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-semibold mb-8"
            >
              <ExternalLink className="size-4" />
              Открыть прототип на весь экран
            </MagneticLink>

            <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden">
              {[
                {
                  k: "Problem",
                  v: "Виральный UX в Telegram без полной разработки боевого бота.",
                },
                {
                  k: "Solution",
                  v: "Прототип: подписка → игра → попытки → рефералы → топ-30.",
                },
                {
                  k: "Outcome",
                  v: "End-to-end путь закрыт. Пакет готов как UX-спека.",
                },
              ].map((b) => (
                <div key={b.k} className="bg-background/80 p-4 sm:p-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    {b.k}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{b.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <Gamepad2 className="size-4 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Live demo · кликабельный прототип
              </span>
            </div>
            <LivePrototype />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
