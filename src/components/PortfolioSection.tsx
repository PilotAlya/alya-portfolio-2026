import { CrmLeadCardCase } from "@/components/CrmLeadCardCase";
import { PortfolioBackground } from "@/components/PortfolioBackground";
import { PortfolioBento } from "@/components/PortfolioBento";
import { SectionIntro } from "@/components/SectionIntro";

export function PortfolioSection() {
  return (
    <div id="portfolio">
      <SectionIntro
        chapter={5}
        label="Портфолио"
        titleAccent="Кейсы"
        titleAfter="с метриками и артефактами"
        description="Флагман NOVA — выше. Здесь pet-project CRM и AI-автоматизация (поиск студий → Excel); data audit и AI validation — компактно в background. Telegram → Sheets — в разделе «Гайды»."
        meta="pet-project + automation · demo + background"
      />
      <PortfolioBento />
      <CrmLeadCardCase />
      <PortfolioBackground />
    </div>
  );
}
