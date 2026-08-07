import { ChurnAuditCase } from "@/components/ChurnAuditCase";
import { AITestingCase } from "@/components/AITestingCase";
import { YandexBrowserCase } from "@/components/YandexBrowserCase";
import { TelegramLeadCaptureCase } from "@/components/TelegramLeadCaptureCase";
import { SectionIntro } from "@/components/SectionIntro";

export function PortfolioSection() {
  return (
    <div id="portfolio">
      <SectionIntro
        chapter={5}
        label="Портфолио"
        title="Кейсы с метриками и артефактами"
        description="Автоматизации, data-аудит, AI-продукты и валидация — с PDF, live-demo и рабочими прототипами."
        meta="4 кейса · PDF + demo"
      />
      <TelegramLeadCaptureCase />
      <ChurnAuditCase />
      <YandexBrowserCase />
      <AITestingCase />
    </div>
  );
}
