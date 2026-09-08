import { LegacyCase } from "@/components/LegacyCase";
import { StudioResearchCase } from "@/components/StudioResearchCase";
import { SectionIntro } from "@/components/SectionIntro";

export function ExperienceSection() {
  return (
    <div id="experience" className="scroll-mt-24">
      <SectionIntro
        chapter={3}
        label="Опыт работы"
        titleBefore="От бумаги и Excel — до"
        titleAccent="автоматизации"
        description="От устаревших программ учёта в ритейле — до скриптов на Python, которые сами проверяют данные и находят нужную информацию."
        meta="2 кейса · автоматизация"
      />
      <LegacyCase />
      <StudioResearchCase />
    </div>
  );
}
