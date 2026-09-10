import flower from "@/assets/lab-clay-flower.webp";
import spiral from "@/assets/lab-clay-spiral.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";
import coil from "@/assets/lab-clay-coil.webp";

/** Floating clay specimens — tactile hero objects */
export function HeroObjects() {
  return (
    <div className="hero-objects" aria-hidden>
      <img
        src={flower}
        alt=""
        className="hero-object hero-object--flower"
        width={640}
        height={640}
        decoding="async"
      />
      <img
        src={star}
        alt=""
        className="hero-object hero-object--star"
        width={480}
        height={480}
        decoding="async"
      />
      <img
        src={lime}
        alt=""
        className="hero-object hero-object--lime"
        width={400}
        height={400}
        decoding="async"
      />
      <img
        src={coil}
        alt=""
        className="hero-object hero-object--coil"
        width={360}
        height={360}
        decoding="async"
      />
      <img
        src={spiral}
        alt=""
        className="hero-object hero-object--spiral"
        width={400}
        height={400}
        decoding="async"
      />
    </div>
  );
}
