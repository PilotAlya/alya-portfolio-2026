import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Download, Copy, Check } from "lucide-react";
import { useState } from "react";

import borisIdleCleanVideo from "@/assets/boris-idle-final.webm";

export function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("pilotalya@a-akbarova.ru");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-8 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_340px] gap-12 items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Глава 10 · Контакты
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mt-6 mb-8 leading-[0.9]">
            На связи —<br />
            для <span className="text-accent">системных вызовов</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mb-12 italic">
            «Готова к деконструкции ваших самых сложных задач.»
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-6">
            <a
              href="https://t.me/Albinaa_Akbarova"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-white/10 hover:border-accent hover:bg-accent/5 transition-all"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                  Telegram
                </div>
                <div className="text-2xl font-bold tracking-tight">@Albinaa_Akbarova</div>
              </div>
              <ArrowUpRight className="size-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
            <button
              onClick={copyEmail}
              className="group flex items-center justify-between p-6 border border-white/10 hover:border-accent hover:bg-accent/5 transition-all text-left"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                  Email
                </div>
                <div className="text-xl font-bold tracking-tight break-all">
                  pilotalya@a-akbarova.ru
                </div>
              </div>
              {emailCopied ? (
                <Check className="size-6 text-accent shrink-0 ml-4" />
              ) : (
                <Copy className="size-6 text-muted-foreground group-hover:text-accent transition-colors shrink-0 ml-4" />
              )}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/resume-qa.pdf"
              download="Albina_Akbarova_QA_Resume.pdf"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 rounded-md text-base font-semibold hover:bg-accent/90 transition-colors"
            >
              <Download className="size-5" />
              Скачать резюме QA
            </a>

            <a
              href="/resume-sa.pdf"
              download="Albina_Akbarova_SA_Resume.pdf"
              className="group inline-flex items-center gap-3 border border-accent/40 bg-accent/10 px-6 py-4 rounded-md text-base font-semibold hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download className="size-5" />
              Скачать резюме SA
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px] aspect-[520/772]"
        >
          <div
            className="absolute inset-x-8 bottom-6 h-12 rounded-full bg-accent/35 blur-2xl"
            aria-hidden
          />
          <video
            src={borisIdleCleanVideo}
            autoPlay
            loop
            muted
            playsInline
            className="relative h-full w-full object-contain select-none pointer-events-none"
            style={{ filter: "drop-shadow(0 18px 28px rgba(59,130,246,0.35))" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
