import { LegacyCase } from "@/components/LegacyCase";
import { StudioResearchCase } from "@/components/StudioResearchCase";
import { SectionIntro } from "@/components/SectionIntro";

export function ExperienceSection() {
  return (
    <div id="experience" className="scroll-mt-24">
      <SectionIntro
        chapter={3}
        label="Опыт работы"
        titleAccent="Legacy"
        titleAfter="· процессы и автоматизация"
        description="Дизайн — не только интерфейс. От Legacy-софта в ритейле — до Python/AI-пайплайнов: парсеры, валидация данных и поиск лидов с LLM-фильтром, которые снимают рутину вокруг продукта."
        meta="2 блока · AI & Automation"
      />
      <LegacyCase />
      <StudioResearchCase />
    </div>
  );
}
