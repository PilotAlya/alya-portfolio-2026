import flower from "@/assets/lab-clay-flower.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";

/**
 * Floating clay cluster only — no wash ribbon, no thread line.
 * Specimens stay on the right, clear of hero copy (Andy Lin / ploy air).
 */
export function HeroMask() {
  return (
    <div className="hero-clay" aria-hidden>
      <img
        src={flower}
        alt=""
        className="hero-clay__obj hero-clay__obj--flower"
        decoding="async"
      />
      <img
        src={star}
        alt=""
        className="hero-clay__obj hero-clay__obj--star"
        decoding="async"
      />
      <img
        src={lime}
        alt=""
        className="hero-clay__obj hero-clay__obj--lime"
        decoding="async"
      />
    </div>
  );
}
