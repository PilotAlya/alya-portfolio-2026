import { motion } from "framer-motion";
import { Bot, FileText, Download, Smartphone, CheckCircle2, AlertTriangle } from "lucide-react";
import { fadeUp } from "./shared";

export function AITestingCase() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
          {/* Main Description */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent uppercase tracking-widest">
                Кейс 03 · AI Assistant QA
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm flex items-center gap-1">
                <Smartphone className="size-3 text-accent" /> iOS · iPhone 11 · v26.6.5.551
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Тестирование ИИ-ассистента «Яндекс с Алисой»
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              Комплексное функциональное тестирование голосового ассистента в мобильном приложении на iOS.
              Выполнила сценарии по ТЗ (диалоги, погода, музыка, карусели, игры), выявила расхождения,
              зафиксировала вердикты (Pass/Fail) и составила профессиональный пакет баг-репортов.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3 border border-white/10 rounded bg-background/50 text-xs">
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Тест-кейсы & Вердикты
                </div>
                <p className="text-muted-foreground">
                  6 ключевых сценариев: 1 Pass (Погода) / 5 Fail (Диалоги, Музыка, UX карусели, Монетка, Угадай песню).
                </p>
              </div>

              <div className="p-3 border border-white/10 rounded bg-background/50 text-xs">
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Пакет баг-репортов
                </div>
                <p className="text-muted-foreground">
                  5 зафиксированных дефектов с шагами воспроизведения, Expected/Actual и Severity (Minor / Trivial).
                </p>
              </div>
            </div>

            <a
              href="/yandex-alice-qa-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              <Download className="size-4" />
              Смотреть полный PDF-отчёт (3 стр.)
            </a>
          </motion.div>

          {/* Right Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-white/10 rounded-xl p-6 bg-background/60 space-y-4"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent">
                <Bot className="size-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-foreground">Артефакты тестирования</div>
                <div className="font-mono text-[10px] text-muted-foreground">Яндекс с Алисой (iOS)</div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Покрытие ТЗ:</span>
                <span className="text-foreground font-semibold">6 сценариев</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Результаты:</span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">1 Pass</span>
                  <span className="text-rose-400 font-semibold">5 Fail</span>
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Баг-репорты:</span>
                <span className="text-rose-400 font-semibold">5 зафиксировано</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Severity:</span>
                <span className="text-amber-400 font-semibold">Minor / Trivial</span>
              </div>
            </div>

            <a
              href="/yandex-alice-qa-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/30 py-2 rounded hover:bg-accent/10 transition-colors"
            >
              <FileText className="size-3.5" />
              Открыть документ в новой вкладке
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
