import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { Hero } from "@/components/Hero";
import { HeroStats } from "@/components/HeroStats";
import { WhyMe } from "@/components/WhyMe";
import { EvolutionPath } from "@/components/EvolutionPath";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Nova } from "@/components/Nova";
import { Stack } from "@/components/Stack";
import { GitHubProjects } from "@/components/GitHubProjects";
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
      { title: "Альбина Акбарова — AI-Native Engineer · Vibe-Coder" },
      {
        name: "description",
        content:
          "Портфолио Альбины Акбаровой (Pilot Ali). AI-native, vibe-coding, MVP и валидация AI-продуктов. Кейсы: NOVA Dashboard, B2B-дашборд, автоматизации.",
      },
      { property: "og:title", content: "Альбина Акбарова — AI-Native · Vibe-Coder" },
      {
        property: "og:description",
        content:
          "AI-Native Engineer · Vibe-Coder. Собираю MVP через AI, проверяю результат, довожу до деплоя.",
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

    // Wait for layout / fonts so scroll-mt and Lenis settle
    const t = window.setTimeout(scrollToHash, 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <NoiseOverlay />
        <ScrollProgress />
        <Nav />
        <Hero />
        <HeroStats />
        <SectionShell variant="alt">
          <WhyMe />
        </SectionShell>
        <SectionShell variant="default">
          <EvolutionPath />
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
          <GitHubProjects />
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
