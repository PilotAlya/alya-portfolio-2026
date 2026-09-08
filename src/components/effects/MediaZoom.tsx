import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type MediaZoomItem = {
  src: string;
  alt: string;
  caption?: string;
  kind?: "image" | "video";
};

type MediaZoomProps = {
  src: string;
  alt: string;
  caption?: string;
  kind?: "image" | "video";
  /** Gallery siblings — enables prev/next arrows when length > 1 */
  items?: MediaZoomItem[];
  /** Index of this trigger inside `items` */
  index?: number;
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
  items,
  index = 0,
  className,
  hintClassName,
  children,
}: MediaZoomProps) {
  const gallery: MediaZoomItem[] =
    items && items.length > 0 ? items : [{ src, alt, caption, kind }];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(index);
  const multi = gallery.length > 1;
  const current = gallery[Math.min(active, gallery.length - 1)] ?? gallery[0];

  const openZoom = () => {
    setActive(index);
    setOpen(true);
  };

  const goPrev = () => {
    setActive((i) => (i <= 0 ? gallery.length - 1 : i - 1));
  };

  const goNext = () => {
    setActive((i) => (i >= gallery.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    if (!open || !multi) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((i) => (i <= 0 ? gallery.length - 1 : i - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((i) => (i >= gallery.length - 1 ? 0 : i + 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, multi, gallery.length]);

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
            "pointer-events-none absolute bottom-3 right-3 z-[3] inline-flex items-center gap-1.5 rounded-md border border-foreground/15 bg-background/80 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground opacity-80 transition-opacity sm:opacity-0 sm:group-hover/zoom:opacity-100 sm:group-focus-visible/zoom:opacity-100",
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
            "fixed left-1/2 top-1/2 z-50 flex h-[min(96vh,100dvh)] w-[min(98vw,1600px)] max-w-none -translate-x-1/2 -translate-y-1/2 flex-col gap-0 overflow-hidden border-foreground/10 bg-background/97 p-0 sm:rounded-lg",
            "data-[state=open]:zoom-in-95",
            "[&>button]:z-20 [&>button]:right-3 [&>button]:top-3 [&>button]:rounded-full [&>button]:border [&>button]:border-foreground/15 [&>button]:bg-background/80 [&>button]:p-2 [&>button]:opacity-100",
          )}
        >
          <DialogTitle className="sr-only">
            {current.alt}
            {multi ? ` · ${active + 1} / ${gallery.length}` : ""}
          </DialogTitle>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-12 py-10 sm:px-16 sm:py-12">
            {(current.kind ?? "image") === "video" ? (
              <video
                key={current.src}
                src={current.src}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="max-h-full max-w-full rounded-md bg-black object-contain"
              />
            ) : (
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="max-h-full max-w-full rounded-md object-contain"
              />
            )}

            {multi && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-2 top-1/2 z-[5] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/15 bg-background/80 text-foreground backdrop-blur transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:left-4 sm:size-12"
                  aria-label="Предыдущее"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-2 top-1/2 z-[5] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/15 bg-background/80 text-foreground backdrop-blur transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground sm:right-4 sm:size-12"
                  aria-label="Следующее"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </div>

          <div className="flex shrink-0 items-center justify-between gap-3 border-t border-foreground/10 px-4 py-3 sm:px-6">
            <p className="min-w-0 flex-1 truncate font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              {current.caption ?? current.alt}
            </p>
            {multi && (
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-accent">
                {active + 1} / {gallery.length}
              </span>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
