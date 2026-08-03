import { useEffect, useState } from "react";

const SECTION_IDS = ["why", "experience", "portfolio", "nova", "contact"] as const;

export type ActiveSection = (typeof SECTION_IDS)[number] | "";

export function useActiveSection(): ActiveSection {
  const [active, setActive] = useState<ActiveSection>("");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        const best = SECTION_IDS.filter((id) => (ratios.get(id) ?? 0) > 0).sort(
          (a, b) => (ratios.get(b) ?? 0) - (ratios.get(a) ?? 0),
        )[0];

        if (best) setActive(best);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export const NAV_SECTION_MAP: Record<string, ActiveSection> = {
  "#why": "why",
  "#experience": "experience",
  "#portfolio": "portfolio",
  "#nova": "nova",
  "#contact": "contact",
};
