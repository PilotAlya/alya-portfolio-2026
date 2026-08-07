import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let lenis: InstanceType<Awaited<typeof import("lenis")>["default"]> | undefined;
    let ticker: ((time: number) => void) | undefined;
    let gsapModule: typeof import("gsap") | undefined;

    const init = async () => {
      const [{ default: Lenis }, gsap, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      await import("lenis/dist/lenis.css");

      if (cancelled) return;

      gsapModule = gsap;
      gsap.default.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.2,
      });

      document.documentElement.classList.add("lenis", "lenis-smooth");

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length && lenis) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis?.scroll ?? 0;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      lenis.on("scroll", ScrollTrigger.update);

      ticker = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.default.ticker.add(ticker);
      gsap.default.ticker.lagSmoothing(0);

      ScrollTrigger.refresh();

      const onAnchorClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement).closest("a[href^='#']");
        if (!(anchor instanceof HTMLAnchorElement)) return;
        const href = anchor.getAttribute("href");
        if (!href || href === "#" || href === "#top") return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        lenis?.scrollTo(el, { offset: -72, duration: 1.2 });
      };

      document.addEventListener("click", onAnchorClick);

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      return () => {
        document.removeEventListener("click", onAnchorClick);
        window.removeEventListener("resize", onResize);
      };
    };

    let cleanupListeners: (() => void) | undefined;

    init().then((cleanup) => {
      cleanupListeners = cleanup;
    });

    return () => {
      cancelled = true;
      cleanupListeners?.();
      if (ticker && gsapModule) {
        gsapModule.default.ticker.remove(ticker);
      }
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis?.destroy();
    };
  }, []);
}
