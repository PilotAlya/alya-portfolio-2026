import { motion } from "framer-motion";

/** Animated aurora blobs — Chromatic Atelier Hero atmosphere */
export function HeroAurora() {
  return (
    <div className="hero-aurora pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-aurora__blob hero-aurora__blob--violet" />
      <div className="hero-aurora__blob hero-aurora__blob--cyan" />
      <div className="hero-aurora__blob hero-aurora__blob--spark" />
      <div className="hero-aurora__mesh" />
    </div>
  );
}
