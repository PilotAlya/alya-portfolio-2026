import { MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Until the client hydrates, force reduced motion so SSR markup with
 * opacity:0 / translateY does not render as a blank page.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const id = requestAnimationFrame(() => {
      document.documentElement.classList.add("hydrated");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <MotionConfig reducedMotion={hydrated ? "user" : "always"}>
      {children}
    </MotionConfig>
  );
}
