import { motion } from "framer-motion";
import { Download, Globe, Monitor, CheckCircle2, AlertTriangle } from "lucide-react";
import { fadeUp } from "./shared";
import { MagneticLink } from "./effects/MagneticButton";
import { spotlightAttrs, spotlightClass } from "./SpotlightCard";

const PDF_URL = "/yandex-browser-verdicts.pdf";

export function YandexBrowserCase() {
  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden border-b border-white/5">
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
                Кейс 03 · Тестирование браузера
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm flex items-center gap-1">
                <Monitor className="size-3 text-accent" /> Win 11 · Яндекс.Браузер 26.6.3
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Тестирование «Яндекс.Браузера»
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
              Комплексное функциональное тестирование интерфейса десктопного браузера на Windows.
              Выполнила сценарии по ТЗ (боковая панель, PWA-приложения, группы вкладок), выявила
              расхождения, зафиксировала вердикты (Pass / Pass с дефектами) и составила баг-репорты.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6 text-xs">
              <div
                {...spotlightAttrs}
                className={spotlightClass("p-3 rounded border border-white/10 bg-background/50", "subtle")}
              >
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Тест-кейсы
                </div>
                <p className="text-muted-foreground">
                  №1 «Яндекс Почта» из боковой панели — Pass. №2 pikabu.ru как приложение — Pass.
                  №3 Группы вкладок — Pass с дефектами.
                </p>
              </div>
              <div
                {...spotlightAttrs}
                className={spotlightClass("p-3 rounded border border-white/10 bg-background/50", "subtle")}
              >
                <div className="font-mono text-[10px] uppercase text-accent mb-1 font-semibold">
                  Баг-репорты
                </div>
                <p className="text-muted-foreground">
                  2 дефекта: ESC не закрывает балун создания группы; фокус теряется при переносе
                  активной вкладки между группами.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Functional QA", "Test Cases", "Bug Reports", "Windows 11"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-white/10 px-2 py-1 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <MagneticLink
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="items-center gap-2 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-widest px-4 py-2.5 rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              <Download className="size-4" />
              Смотреть PDF-отчёт (3 стр.)
            </MagneticLink>
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
                <Globe className="size-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-foreground">Артефакты тестирования</div>
                <div className="font-mono text-[10px] text-muted-foreground">Яндекс.Браузер · Desktop</div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Тест-кейсы:</span>
                <span className="text-foreground font-semibold">3 сценария</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Результаты:</span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold inline-flex items-center gap-1">
                    <CheckCircle2 className="size-3" />2 Pass
                  </span>
                  <span className="text-amber-400 font-semibold inline-flex items-center gap-1">
                    <AlertTriangle className="size-3" />1 с дефектами
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Баг-репорты:</span>
                <span className="text-rose-400 font-semibold">2 зафиксировано</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white/5">
                <span className="text-muted-foreground">Часть 1 · ОС:</span>
                <span className="text-accent font-semibold">Выполнено</span>
              </div>
            </div>

            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent border border-accent/30 py-2 rounded hover:bg-accent/10 transition-colors"
            >
              Открыть PDF в новой вкладке
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
