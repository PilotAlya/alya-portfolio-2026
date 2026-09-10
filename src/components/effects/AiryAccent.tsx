import flower from "@/assets/lab-clay-flower.webp";
import star from "@/assets/lab-clay-star.webp";
import lime from "@/assets/lab-clay-lime.webp";
import coil from "@/assets/lab-clay-coil.webp";

const ASSETS = {
  flower,
  star,
  lime,
  coil,
} as const;

type AiryKind = keyof typeof ASSETS;

/**
 * Sparse floating clay accents for mid-page air (ploy-style continuity,
 * kept in lab orange/lime — no color-block sections).
 */
export function AiryAccent({
  kind,
  className = "",
}: {
  kind: AiryKind;
  className?: string;
}) {
  return (
    <img
      src={ASSETS[kind]}
      alt=""
      aria-hidden
      decoding="async"
      className={`airy-accent airy-accent--${kind} ${className}`.trim()}
    />
  );
}
