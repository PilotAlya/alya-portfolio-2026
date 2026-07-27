import { ChurnAuditCase } from "@/components/ChurnAuditCase";
import { AITestingCase } from "@/components/AITestingCase";
import { SectionIntro } from "@/components/SectionIntro";

export function PortfolioSection() {
  return (
    <div id="portfolio">
      <SectionIntro
        chapter={4}
        label="Портфолио"
        title="Кейсы с метриками и артефактами"
        description="Data-аудит B2B-сервиса и QA AI-ассистента — с цифрами, live-дашбордом и PDF-отчётом."
        meta="2 кейса · live demo"
      />
      <ChurnAuditCase />
      <AITestingCase />
    </div>
  );
}
