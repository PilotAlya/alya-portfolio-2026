import { CrmLeadCardCase } from "@/components/CrmLeadCardCase";
import { TelegramLeadCaptureCase } from "@/components/TelegramLeadCaptureCase";
import { PortfolioBackground } from "@/components/PortfolioBackground";
import { PortfolioBento } from "@/components/PortfolioBento";
import { SectionIntro } from "@/components/SectionIntro";

export function PortfolioSection() {
  return (
    <div id="portfolio">
      <SectionIntro
        chapter={5}
        label="Портфолио"
        title="Кейсы с метриками и артефактами"
        description="Флагман NOVA — выше. Здесь pet-проекты и автоматизации с live-demo; data audit и AI validation — компактно в background."
        meta="2 кейса · demo + background"
      />
      <PortfolioBento />
      <CrmLeadCardCase />
      <TelegramLeadCaptureCase />
      <PortfolioBackground />
    </div>
  );
}
