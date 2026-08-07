import { cn } from "@/lib/utils";

type GrainFrameProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  duotone?: boolean;
};

/** Editorial grain + violet/cyan duotone — SENCE case thumbnail treatment */
export function GrainFrame({
  src,
  alt,
  caption,
  className,
  imageClassName,
  duotone = true,
}: GrainFrameProps) {
  return (
    <figure className={cn("grain-frame group/grain relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "grain-frame__img w-full h-full object-cover transition-transform duration-700 group-hover/grain:scale-[1.03]",
          imageClassName,
        )}
      />
      {duotone && <div className="grain-frame__duotone pointer-events-none" aria-hidden />}
      <div className="grain-frame__noise pointer-events-none" aria-hidden />
      {caption && (
        <figcaption className="grain-frame__caption font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-spark">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
