import field from "@/assets/lab-clay-field.webp";

/**
 * Organic ribbon mask — clay field flowing under the paper grid.
 * One authored motion for the hero (Taste MOTION 4).
 */
export function HeroMask() {
  return (
    <div className="hero-mask" aria-hidden>
      <div className="hero-mask__ribbon">
        <div
          className="hero-mask__texture"
          style={{ backgroundImage: `url(${field})` }}
        />
      </div>
    </div>
  );
}
