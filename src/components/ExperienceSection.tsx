import { LegacyCase } from "@/components/LegacyCase";
import { SectionIntro } from "@/components/SectionIntro";

export function ExperienceSection() {
  return (
    <div id="experience">
      <SectionIntro
        chapter={4}
        label="Опыт работы"
        titleAccent="Legacy"
        title="· процессы и автоматизация"
        description="От работы с Legacy-софтом в ритейле — до автоматизации рутины через vibe-coding."
        meta="1 блок · AI & Automation"
      />
      <LegacyCase />
    </div>
  );
}
