import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { HeroStats } from "@/components/HeroStats";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { WhyMe } from "@/components/WhyMe";
import { EvolutionPath } from "@/components/EvolutionPath";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Nova } from "@/components/Nova";
import { Stack } from "@/components/Stack";
import { Guides } from "@/components/Guides";
import { Profile } from "@/components/Profile";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionShell } from "@/components/effects/SectionShell";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Альбина Акбарова — дизайнер, который собирает рабочие сайты и презентации" },
      {
        name: "description",
        content:
          "Дизайнер-проектировщик: интерьеры, презентации, лендинги и интерфейсы. Figma, Photoshop, Gamma — и живые демо, которые можно открыть. Кейсы: музей, NOVA, визуализации.",
      },
      {
        property: "og:title",
        content: "Альбина Акбарова — дизайн, который можно запустить",
      },
      {
        property: "og:description",
        content:
          "Диплом дизайнера, Figma и Photoshop. Делаю презентации, лендинги и интерфейсы — до версии, которой можно пользоваться.",
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
          <EvolutionPath />
        </SectionShell>
        <SectionShell variant="default">
          <Nova />
        </SectionShell>
        <SectionShell variant="alt">
          <ExperienceSection />
        </SectionShell>
        <SectionShell variant="default">
          <PortfolioSection />
        </SectionShell>
        <SectionShell variant="alt">
          <Stack />
        </SectionShell>
        <SectionShell variant="default">
          <Guides />
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
