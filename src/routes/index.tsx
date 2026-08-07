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
import { SmoothScroll } from "@/components/effects/SmoothScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Альбина Акбарова — AI-Native Engineer · Vibe-Coder" },
      {
        name: "description",
        content:
          "Портфолио Али Акбаровой (Pilot Ali). AI-native, vibe-coding, MVP и валидация AI-продуктов. Кейсы: NOVA Dashboard, B2B-дашборд, автоматизации.",
      },
      { property: "og:title", content: "Альбина Акбарова — AI-Native · Vibe-Coder" },
      {
        property: "og:description",
        content:
          "AI-Native Engineer · Vibe-Coder. Собираю MVP через AI, проверяю результат, довожу до деплоя.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://portfolio-resume-alya-akbarova.vercel.app/" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <NoiseOverlay />
        <ScrollProgress />
        <Nav />
        <Hero />
        <HeroStats />
        <WhyMe />
        <EvolutionPath />
        <Nova />
        <ExperienceSection />
        <PortfolioSection />
        <Stack />
        <GitHubProjects />
        <Guides />
        <Profile />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
