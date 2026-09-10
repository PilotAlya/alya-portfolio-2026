import flower from "@/assets/lab-clay-flower.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";
import coil from "@/assets/lab-clay-coil.webp";
import spiral from "@/assets/lab-clay-spiral.webp";

/**
 * Connected clay cluster (Andy Lin) on a soft wave (GIF):
 * orange thread links specimens into one composition; some sit behind type, some in front.
 */
export function HeroMask() {
  return (
    <div className="hero-wave" aria-hidden>
      <div className="hero-wave__band">
        <div className="hero-wave__wash" />
      </div>

      {/* Behind type — depth like objects weaving through PORTFOLIO */}
      <div className="hero-wave__specimens hero-wave__specimens--back">
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

      {/* Orange thread tying the cluster together */}
      <svg
        className="hero-wave__thread"
        viewBox="0 0 1000 420"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        <path
          className="hero-wave__thread-path"
          d="M120,210 C220,90 320,300 420,170 C520,60 600,280 700,150 C780,60 860,240 920,130"
        />
        <path
          className="hero-wave__thread-path hero-wave__thread-path--soft"
          d="M160,250 C280,320 400,120 520,260 C640,380 760,180 880,280"
        />
      </svg>

      {/* In front of type — flower + accents as the focal cluster */}
      <div className="hero-wave__specimens hero-wave__specimens--front">
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
      </div>
    </div>
  );
}
