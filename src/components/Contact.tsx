import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { useState } from "react";

import { SectionLabel } from "@/components/effects/SectionLabel";

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
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <SectionLabel title="Контакты" />

          <h2 className="mt-4 text-[clamp(2.75rem,8vw,5.75rem)] font-extrabold tracking-tight leading-[0.88] font-display mb-8">
            Задача
            <br />
            или роль —
            <br />
            <span className="text-accent">напишите</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Нужен лендинг, презентация, визуал — или человек с глазом дизайнера и vibe-coding до
            демо? Коротко опишите задачу или вакансию — отвечу, подходит ли формат.
          </p>

          <div className="mb-10">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spark group inline-flex items-center gap-3 px-8 py-4 rounded-md text-base sm:text-lg font-semibold"
            >
              Написать в Telegram
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <p className="mt-4 lab-caption pl-1">Быстрый ответ · @Albinaa_Akbarova</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-colors"
            >
              <Mail className="size-3.5 text-accent" />
              {emailCopied ? "Скопировано!" : EMAIL}
              {!emailCopied && <Copy className="size-3 opacity-60" />}
              {emailCopied && <Check className="size-3 text-accent" />}
            </button>
            <a
              href="/resume-ai.pdf"
              download="Albina_Akbarova_AI_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-colors"
            >
              Резюме PDF
            </a>
          </div>

          <p className="text-lg text-muted-foreground max-w-md border-l-2 border-accent/40 pl-4 leading-relaxed">
            «Сначала разберём задачу. Потом — картинка, которую не стыдно показать, и версия,
            которой можно пользоваться.»
          </p>
        </motion.div>
      </div>
    </section>
  );
}
