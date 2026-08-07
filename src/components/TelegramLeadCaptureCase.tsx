import { motion } from "framer-motion";
import { Bot, FileText, Download, Sheet, Clock, ShieldCheck } from "lucide-react";
import { fadeUp } from "./shared";
import { MagneticLink } from "./effects/MagneticButton";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const GUIDE_URL =
  "https://drive.google.com/drive/folders/1EpUihavWoV-Pu3brdqD4yLX9kmiCWWGd?usp=drive_link";
const BOT_URL = "https://t.me/xgdsdsjsd567bot";

export function TelegramLeadCaptureCase() {
  return (
    <section id="case-telegram" className="relative py-24 px-6 lg:px-8 overflow-hidden border-b border-white/5 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Кейс 02 · Automation & Documentation
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm flex items-center gap-1">
                <Bot className="size-3 text-accent" /> Telegram · Google Sheets
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Telegram → Google Sheets Lead Capture
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6 prose-portfolio">
              Спроектировала процесс сбора заявок через Telegram-бота с записью в Google Sheets
              (Apps Script, polling, антидубли). Подготовила практический PDF-гайд с setup,
              troubleshooting и сценарием расширения до multi-step анкеты.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              {[
                "Связка Telegram Bot + Google Sheets без отдельного сервера",
                "Документация процесса для повторяемого запуска",
                "Заложено развитие до анкеты (имя / email / телефон / интерес)",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Telegram Bot API",
                "Google Apps Script",
                "Google Sheets",
                "Automation",
                "PDF Guide",
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-white/10 px-2 py-1 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <MagneticLink
                href={GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-semibold hover:bg-accent/90 transition-colors"
              >
                <Download className="size-4" />
                PDF-гайд
              </MagneticLink>
              <MagneticLink
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="items-center gap-2 border border-accent/40 bg-accent/10 font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-semibold hover:border-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Bot className="size-4" />
                Открыть бота
              </MagneticLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            {...spotlightAttrs}
            className={spotlightClass("rounded-xl border border-white/10 p-6 bg-background/60 space-y-4")}
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent">
                <Sheet className="size-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-foreground">Архитектура</div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  Lead capture · no server
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="size-3" /> Polling:
                </span>
                <span className="text-foreground font-semibold">1 мин</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Backend:</span>
                <span className="text-accent font-semibold">Apps Script</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="size-3" /> Антидубли:
                </span>
                <span className="text-emerald-400 font-semibold">email</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Хранилище:</span>
                <span className="text-foreground font-semibold">Google Sheets</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Документация:</span>
                <span className="text-accent font-semibold">PDF-гайд</span>
              </div>
            </div>

            <a
              href={GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/30 py-2 rounded hover:bg-accent/10 transition-colors"
            >
              <FileText className="size-3.5" />
              Setup + troubleshooting
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
