import { Expand } from "lucide-react";
import { useState, type KeyboardEvent, type ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type MediaZoomProps = {
  src: string;
  alt: string;
  caption?: string;
  kind?: "image" | "video";
  className?: string;
  hintClassName?: string;
  children: ReactNode;
};

/** Click-to-enlarge for photos, GIFs, and looping videos. */
export function MediaZoom({
  src,
  alt,
  caption,
  kind = "image",
  className,
  hintClassName,
  children,
}: MediaZoomProps) {
  const [open, setOpen] = useState(false);

  const openZoom = () => setOpen(true);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openZoom();
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={openZoom}
        onKeyDown={onKeyDown}
        className={cn(
          "group/zoom relative cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        aria-label={`Открыть ближе: ${alt}`}
      >
        {children}
        <span
          className={cn(
            "pointer-events-none absolute bottom-3 right-3 z-[3] inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-background/80 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground opacity-80 transition-opacity sm:opacity-0 sm:group-hover/zoom:opacity-100 sm:group-focus-visible/zoom:opacity-100",
            hintClassName,
          )}
        >
          <Expand className="size-3" />
          ближе
        </span>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            "max-w-[min(96vw,1100px)] w-auto gap-3 border-white/10 bg-background/95 p-3 sm:p-5",
            "data-[state=open]:zoom-in-95",
          )}
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          {kind === "video" ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="mx-auto max-h-[min(85vh,900px)] w-auto max-w-full rounded-md bg-black"
            />
          ) : (
            <img
              src={src}
              alt={alt}
              className="mx-auto max-h-[min(85vh,900px)] w-auto max-w-full rounded-md object-contain"
            />
          )}
          {(caption || alt) && (
            <p className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {caption ?? alt}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
