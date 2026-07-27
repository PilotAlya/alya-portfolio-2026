import { EngineeringBackground } from "@/components/EngineeringBackground";
import { BathroomCase } from "@/components/BathroomCase";
import { LegacyCase } from "@/components/LegacyCase";
import { SectionIntro } from "@/components/SectionIntro";

export function ExperienceSection() {
  return (
    <div id="experience">
      <SectionIntro
        chapter={3}
        label="Опыт работы"
        title="Production, процессы и Legacy"
        description="От чертежей на производстве — до автоматизации рутины в Legacy-софте. Три блока реального опыта."
        meta="3 блока · QA & SA"
      />
      <EngineeringBackground />
      <BathroomCase />
      <LegacyCase />
    </div>
  );
}
