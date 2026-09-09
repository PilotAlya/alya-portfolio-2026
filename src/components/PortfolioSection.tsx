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
        description="Цифровые вещи рядом с дизайном: мини-CRM, проверка данных, оценка продуктов. Главные визуальные кейсы — в блоке «Работы» выше."
        meta="Ещё примеры работ"
      />
      <PortfolioBento />
      <CrmLeadCardCase />
      <PortfolioBackground />
    </div>
  );
}
