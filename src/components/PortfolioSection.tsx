import { CrmLeadCardCase } from "@/components/CrmLeadCardCase";
import { PortfolioBackground } from "@/components/PortfolioBackground";
import { PortfolioBento } from "@/components/PortfolioBento";
import { SectionIntro } from "@/components/SectionIntro";

export function PortfolioSection() {
  return (
    <div id="portfolio" className="scroll-mt-24">
      <SectionIntro
        label="Портфолио"
        titleAccent="Ещё примеры"
        titleAfter="работ"
        description="Мини-CRM с живым демо, проверка данных для бизнеса и оценка ИИ-помощников — примеры из практики, кроме главного проекта NOVA."
        meta="Ещё примеры работ"
      />
      <PortfolioBento />
      <CrmLeadCardCase />
      <PortfolioBackground />
    </div>
  );
}
