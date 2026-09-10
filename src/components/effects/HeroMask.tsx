import field from "@/assets/lab-clay-field.webp";
import flower from "@/assets/lab-clay-flower.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";
import coil from "@/assets/lab-clay-coil.webp";
import spiral from "@/assets/lab-clay-spiral.webp";

/**
 * GIF-style organic wave ribbon.
 * Soft mask via CSS mask-image (reliable) — specimens live inside, never
 * hard-cropped by the viewport box.
 */
export function HeroMask() {
  return (
    <div className="hero-wave" aria-hidden>
      <div className="hero-wave__band">
        <div
          className="hero-wave__texture"
          style={{ backgroundImage: `url(${field})` }}
        />
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
    </div>
  );
}
