import { LegacyCase } from "@/components/LegacyCase";
import { StudioResearchCase } from "@/components/StudioResearchCase";
import { SectionIntro } from "@/components/SectionIntro";

export function ExperienceSection() {
  return (
    <div id="experience" className="scroll-mt-24">
      <SectionIntro
        chapter={4}
        label="Опыт работы"
        titleAccent="Legacy"
        titleAfter="· процессы и автоматизация"
        description="От Legacy-софта в ритейле — до Python/AI-пайплайнов: парсеры, валидация данных и поиск лидов с LLM-фильтром."
        meta="2 блока · AI & Automation"
      />
      <LegacyCase />
      <StudioResearchCase />
    </div>
  );
}
