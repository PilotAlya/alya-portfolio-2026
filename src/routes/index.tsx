import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { HeroStats } from "@/components/HeroStats";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { WhyMe } from "@/components/WhyMe";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Nova } from "@/components/Nova";
import { Stack } from "@/components/Stack";
import { Profile } from "@/components/Profile";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionShell } from "@/components/effects/SectionShell";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Альбина Акбарова — дизайнер, который доводит макет до рабочей версии",
      },
      {
        name: "description",
        content:
          "Лендинги, презентации, веб-интерфейсы: Figma и Photoshop + vibe-coding до живого демо. Для заказчиков и продуктовых ролей. Кейсы: NOVA, музей, визуализации.",
      },
      {
        property: "og:title",
        content: "Альбина Акбарова — дизайн + vibe-coding до запуска",
      },
      {
        property: "og:description",
        content:
          "Дизайнер-проектировщик: от композиции в Figma до рабочей версии через vibe-coding. Презентации, лендинги, интерфейсы.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash || hash === "#") return;

    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (!(el instanceof HTMLElement)) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const t = window.setTimeout(scrollToHash, 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <ScrollProgress />
        <Nav />
        <Hero />
        <HeroStats />
        <SectionShell variant="default">
          <Services />
        </SectionShell>
        <SectionShell variant="alt">
          <SelectedWork />
        </SectionShell>
        <SectionShell variant="default">
          <WhyMe />
        </SectionShell>
        <SectionShell variant="alt">
          <Nova />
        </SectionShell>
        <SectionShell variant="default">
          <ExperienceSection />
        </SectionShell>
        <SectionShell variant="alt">
          <PortfolioSection />
        </SectionShell>
        <SectionShell variant="default">
          <Stack />
        </SectionShell>
        <SectionShell variant="alt">
          <Profile />
        </SectionShell>
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
