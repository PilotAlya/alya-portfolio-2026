import field from "@/assets/lab-clay-field.webp";
import flower from "@/assets/lab-clay-flower.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";
import coil from "@/assets/lab-clay-coil.webp";
import spiral from "@/assets/lab-clay-spiral.webp";

/**
 * GIF-style organic wave ribbon: clay field + specimens live inside a soft
 * undulating mask — never hard-cropped by the viewport box.
 */
export function HeroMask() {
  return (
    <div className="hero-wave" aria-hidden>
      <svg className="hero-wave__defs" width="0" height="0" aria-hidden>
        <defs>
          {/* Soft island ribbon — wavy top & bottom like the nature strip */}
          <clipPath id="hero-wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.02,0.38 C0.1,0.18 0.18,0.58 0.28,0.32 C0.38,0.08 0.48,0.55 0.58,0.28 C0.68,0.06 0.78,0.52 0.88,0.26 C0.94,0.12 0.98,0.3 0.98,0.36 L0.98,0.7 C0.94,0.88 0.86,0.58 0.78,0.78 C0.7,0.96 0.6,0.62 0.5,0.8 C0.4,0.98 0.3,0.64 0.2,0.82 C0.12,0.94 0.06,0.78 0.02,0.72 Z" />
          </clipPath>
        </defs>
      </svg>

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
