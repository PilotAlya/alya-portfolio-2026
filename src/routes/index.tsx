import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Альбина Акбарова — System Analyst & QA Engineer" },
      {
        name: "description",
        content:
          "Портфолио Али Акбаровой (Pilot Ali). Системный анализ, QA, аудит данных, AI-инструменты. Кейсы: B2B-дашборд, Яндекс Алиса, NOVA Dashboard.",
      },
      { property: "og:title", content: "Альбина Акбарова — Pilot Ali" },
      {
        property: "og:description",
        content:
          "System Analyst & QA Engineer. Кейсы с метриками, live-дашборд, резюме SA/QA.",
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
    <div className="min-h-screen bg-background text-foreground font-sans">
      <ScrollProgress />
      <Nav />
      <Hero />
      <HeroStats />
      <WhyMe />
      <EvolutionPath />
      <ExperienceSection />
      <PortfolioSection />
      <Nova />
      <Stack />
      <GitHubProjects />
      <Guides />
      <Profile />
      <Contact />
      <Footer />
    </div>
  );
}
