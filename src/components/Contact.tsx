import { motion } from "framer-motion";
import { ArrowUpRight, Download, Copy, Check, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

import borisIdleCleanVideo from "@/assets/boris-idle-final.webm";
import {
  HandDrawnOval,
  ScribbleBurst,
  SparkStar,
} from "@/components/effects/HandDrawn";
import { MagneticLink } from "@/components/effects/MagneticButton";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const TELEGRAM_URL = "https://t.me/Albinaa_Akbarova";
const EMAIL = "pilotalya@a-akbarova.ru";

export function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 px-6 lg:px-8 border-t border-border relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint opacity-25 pointer-events-none" />
      <div className="absolute inset-0 contact-spark-glow pointer-events-none" />
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-glow/12 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <SparkStar />
            <span>Глава 09 · Контакты</span>
          </div>

          <ScribbleBurst className="mb-4 -ml-1" />

          <h2 className="text-[clamp(2.75rem,8vw,5.75rem)] font-extrabold tracking-tight leading-[0.88] font-display uppercase mb-8">
            Связаться
            <br />
            и обсудить
            <br />
            <span className="text-gradient-chrome">проект</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            MVP, vibe-coding, AI-валидация — напиши, если нужен человек, который собирает,
            проверяет и доводит до деплоя.
          </p>

          <div className="mb-10">
            <HandDrawnOval>
              <MagneticLink
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spark group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-semibold uppercase tracking-wide"
              >
                <MessageCircle className="size-5" />
                Написать в Telegram
                <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticLink>
            </HandDrawnOval>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-spark/90 pl-1">
              ✦ быстрый ответ · @Albinaa_Akbarova
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <button
              type="button"
              onClick={copyEmail}
              {...spotlightAttrs}
              className={spotlightClass(
                "glass-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors",
                "subtle",
              )}
            >
              <Mail className="size-3.5 text-accent" />
              {emailCopied ? "Скопировано!" : EMAIL}
              {!emailCopied && <Copy className="size-3 opacity-60" />}
              {emailCopied && <Check className="size-3 text-spark" />}
            </button>

            <MagneticLink
              href="/resume-ai.pdf"
              download="Albina_Akbarova_AI_Resume.pdf"
              className="glass-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
            >
              <Download className="size-3.5" />
              Резюме AI
            </MagneticLink>

            <a
              href="/resume-qa.pdf"
              download="Albina_Akbarova_QA_Resume.pdf"
              className="glass-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
            >
              Резюме QA
            </a>
            <a
              href="/resume-sa.pdf"
              download="Albina_Akbarova_SA_Resume.pdf"
              className="glass-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
            >
              Резюме SA
            </a>
          </div>

          <p className="text-sm text-muted-foreground/80 italic max-w-md border-l-2 border-spark/40 pl-4">
            «Готова собрать MVP, проверить AI-продукт и довести до рабочего результата.»
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[280px] lg:max-w-[320px] aspect-[520/772]"
        >
          <div
            className="absolute inset-x-8 bottom-6 h-12 rounded-full bg-spark/25 blur-2xl"
            aria-hidden
          />
          <video
            src={borisIdleCleanVideo}
            autoPlay
            loop
            muted
            playsInline
            className="relative h-full w-full object-contain select-none pointer-events-none"
            style={{
              filter:
                "drop-shadow(0 18px 28px color-mix(in oklab, var(--glow) 35%, transparent))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
