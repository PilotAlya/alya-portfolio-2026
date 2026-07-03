import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HeroStats } from "@/components/HeroStats";
import { WhyMe } from "@/components/WhyMe";
import { EvolutionPath } from "@/components/EvolutionPath";
import { EngineeringBackground } from "@/components/EngineeringBackground";
import { BathroomCase } from "@/components/BathroomCase";
import { LegacyCase } from "@/components/LegacyCase";
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
      { title: "Alya Akbarova — System Analyst & AI-Native Engineer" },
      {
        name: "description",
        content:
          "Портфолио Али Акбаровой (Pilot Ali). Системный анализ, AI-агенты, продуктовая архитектура. От заводов и музеев — к RAG и NOVA Dashboard.",
      },
      { property: "og:title", content: "Alya Akbarova — Pilot Ali" },
      {
        property: "og:description",
        content:
          "От инженерных чертежей к AI-системам. Кейсы, проекты, NOVA Dashboard, технологический стек.",
      },
      { property: "og:type", content: "website" },
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
      <Nav />
      <Hero />
      <HeroStats />
      <WhyMe />
      <EvolutionPath />
      <EngineeringBackground />
      <BathroomCase />
      <LegacyCase />
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
