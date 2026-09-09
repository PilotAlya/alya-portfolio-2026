import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { useState } from "react";

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
      className="py-24 lg:py-32 px-6 lg:px-8 border-t border-border relative scroll-mt-24"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold tracking-tight leading-[0.9] font-display mb-8">
            Задача
            <br />
            или роль —
            <br />
            <span className="text-accent">напишите</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Нужен лендинг, презентация, визуал — или человек с глазом дизайнера и vibe-coding до
            демо? Коротко опишите задачу или вакансию.
          </p>

          <div className="mb-10">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spark group inline-flex items-center gap-3 px-8 py-4 rounded-md text-base font-semibold"
            >
              Написать в Telegram
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <p className="mt-4 lab-caption pl-1">@Albinaa_Akbarova</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/25 transition-colors"
            >
              <Mail className="size-3.5" />
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

          <p className="text-base text-muted-foreground max-w-md leading-relaxed">
            Сначала разберём задачу. Потом — картинка, которую не стыдно показать, и версия,
            которой можно пользоваться.
          </p>
        </div>
      </div>
    </section>
  );
}
