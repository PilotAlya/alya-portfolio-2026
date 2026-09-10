import flower from "@/assets/lab-clay-flower.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";
import coil from "@/assets/lab-clay-coil.webp";
import spiral from "@/assets/lab-clay-spiral.webp";

/**
 * GIF-style organic wave:
 * - soft masked wash ribbon (like the nature strip)
 * - clay specimens float ON TOP of the ribbon, fully visible (like the cards)
 */
export function HeroMask() {
  return (
    <div className="hero-wave" aria-hidden>
      <div className="hero-wave__band">
        <div className="hero-wave__wash" />
      </div>

      <div className="hero-wave__specimens">
        <img
          src={flower}
          alt=""
          className="hero-wave__obj hero-wave__obj--flower"
          decoding="async"
        />
        <img
          src={star}
          alt=""
          className="hero-wave__obj hero-wave__obj--star"
          decoding="async"
        />
        <img
          src={lime}
          alt=""
          className="hero-wave__obj hero-wave__obj--lime"
          decoding="async"
        />
        <img
          src={coil}
          alt=""
          className="hero-wave__obj hero-wave__obj--coil"
          decoding="async"
        />
        <img
          src={spiral}
          alt=""
          className="hero-wave__obj hero-wave__obj--spiral"
          decoding="async"
        />
      </div>
    </div>
  );
}
