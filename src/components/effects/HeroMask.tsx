import flower from "@/assets/lab-clay-flower.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";

/**
 * Right-side clay cluster on a soft wave — kept clear of hero copy.
 * Three specimens only (flower, star, lime) + short orange thread.
 */
export function HeroMask() {
  return (
    <div className="hero-wave" aria-hidden>
      <div className="hero-wave__band">
        <div className="hero-wave__wash" />
      </div>

      <svg
        className="hero-wave__thread"
        viewBox="0 0 600 360"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        <path
          className="hero-wave__thread-path"
          d="M40,200 C120,80 200,260 300,140 C380,60 460,220 560,120"
        />
      </svg>

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
      </div>
    </div>
  );
}
