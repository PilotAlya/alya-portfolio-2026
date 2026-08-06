import { ChurnAuditCase } from "@/components/ChurnAuditCase";
import { AITestingCase } from "@/components/AITestingCase";
import { YandexBrowserCase } from "@/components/YandexBrowserCase";
import { SectionIntro } from "@/components/SectionIntro";

export function PortfolioSection() {
  return (
    <div id="portfolio">
      <SectionIntro
        chapter={3}
        label="Портфолио"
        title="Кейсы с метриками и артефактами"
        description="Data-аудит, AI-продукты и валидация — с цифрами, PDF и live-demo."
        meta="3 кейса · PDF + demo"
      />
      <ChurnAuditCase />
      <YandexBrowserCase />
      <AITestingCase />
    </div>
  );
}
