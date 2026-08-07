import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useNovaScrollPin() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    const pinEl = pinRef.current;
    const scrollEl = scrollRef.current;
    if (!section || !pinEl || !scrollEl) return;

    let trigger: ScrollTrigger | undefined;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top+=72",
        end: () => `+=${Math.max(scrollEl.offsetHeight - pinEl.offsetHeight + 80, 400)}`,
        pin: pinEl,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      mm.revert();
      trigger?.kill();
    };
  }, []);

  return { sectionRef, pinRef, scrollRef };
}
