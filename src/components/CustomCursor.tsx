import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, summary, [data-cursor-hover]";

type TrailDot = {
  id: number;
  x: number;
  y: number;
  born: number;
};

const TRAIL_LIFE_MS = 520;
const TRAIL_INTERVAL_MS = 48;
const MAX_TRAILS = 14;

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trails, setTrails] = useState<TrailDot[]>([]);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const trailId = useRef(0);
  const lastTrailAt = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer) return;

    setActive(true);
    document.body.classList.add("custom-cursor-active");

    const spawnTrail = (x: number, y: number) => {
      if (reducedMotion) return;
      const now = performance.now();
      if (now - lastTrailAt.current < TRAIL_INTERVAL_MS) return;
      lastTrailAt.current = now;

      const id = ++trailId.current;
      setTrails((prev) => {
        const next = [...prev, { id, x, y, born: now }];
        return next.length > MAX_TRAILS ? next.slice(-MAX_TRAILS) : next;
      });
    };

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
      spawnTrail(e.clientX, e.clientY);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      setHovering(!!target.closest(INTERACTIVE));
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ring) {
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (!reducedMotion) {
        const now = performance.now();
        setTrails((prev) => {
          const filtered = prev.filter((t) => now - t.born < TRAIL_LIFE_MS);
          return filtered.length === prev.length ? prev : filtered;
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!active) return null;

  const now = typeof performance !== "undefined" ? performance.now() : 0;

  return (
    <>
      {trails.map((t) => {
        const age = now - t.born;
        const life = 1 - age / TRAIL_LIFE_MS;
        return (
          <span
            key={t.id}
            aria-hidden
            className="custom-cursor-trail"
            style={{
              transform: `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${0.4 + life * 0.6})`,
              opacity: life * (hovering ? 0.55 : 0.35),
            }}
          />
        );
      })}
      <div
        ref={ringRef}
        aria-hidden
        className={cn("custom-cursor-ring", hovering && "is-hover", !visible && "is-hidden")}
      />
      <div
        ref={dotRef}
        aria-hidden
        className={cn("custom-cursor-dot", hovering && "is-hover", !visible && "is-hidden")}
      />
    </>
  );
}
