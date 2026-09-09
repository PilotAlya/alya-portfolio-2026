import flower from "@/assets/lab-clay-flower.webp";
import spiral from "@/assets/lab-clay-spiral.webp";

/** Floating clay specimens — tactile hero objects (PNG, not live 3D) */
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
        src={spiral}
        alt=""
        className="hero-object hero-object--spiral"
        width={480}
        height={480}
        decoding="async"
      />
    </div>
  );
}
