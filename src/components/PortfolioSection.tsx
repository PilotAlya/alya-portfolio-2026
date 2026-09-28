import { CrmLeadCardCase } from "@/components/CrmLeadCardCase";
import { PortfolioBackground } from "@/components/PortfolioBackground";
import { PortfolioBento } from "@/components/PortfolioBento";
import { RocketRushCase } from "@/components/RocketRushCase";
import { SectionIntro } from "@/components/SectionIntro";

export function PortfolioSection() {
  return (
    <div id="portfolio" className="scroll-mt-24">
      <SectionIntro
        chapter={4}
        label="Портфолио"
        titleAccent="Кейсы"
        titleAfter="с метриками и артефактами"
        description="Флагман NOVA — выше. Здесь дизайн-кейсы: Rocket Rush (Telegram Mini App, UX-прототип) и CRM Lead Card; аудит данных и автоматизация — компактно в background. Автоматизация поиска студий — в разделе «Опыт»; Telegram → Sheets — в «Гайдах»."
        meta="2 дизайн-кейса · demo + background"
      />
      <PortfolioBento />
      <RocketRushCase />
      <CrmLeadCardCase />
      <PortfolioBackground />
    </div>
  );
}
