import { useEffect, useRef } from "react";

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

    let cancelled = false;
    let mm: ReturnType<Awaited<typeof import("gsap")>["default"]["matchMedia"]> | undefined;
    let trigger: import("gsap/ScrollTrigger").ScrollTrigger | undefined;

    const init = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      mm = gsap.matchMedia();
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

      ScrollTrigger.refresh();
    };

    init();

    return () => {
      cancelled = true;
      mm?.revert();
      trigger?.kill();
    };
  }, []);

  return { sectionRef, pinRef, scrollRef };
}
