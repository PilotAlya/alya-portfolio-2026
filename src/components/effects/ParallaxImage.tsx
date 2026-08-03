import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ImgHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ParallaxImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
  speed?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  containerClassName,
  speed = 12,
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);

  return (
    <div ref={ref} className={cn("overflow-hidden", containerClassName)}>
      <motion.img
        src={src}
        alt={alt ?? ""}
        style={{ y, scale: 1.08 }}
        className={className}
        loading="lazy"
        {...props}
      />
    </div>
  );
}
