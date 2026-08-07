import { cn } from "@/lib/utils";

type SectionHeadlineProps = {
  /** Text before accent — sentence starts here (capital letter) */
  before?: string;
  /** Highlighted word or phrase */
  accent: string;
  /** Text after accent */
  after?: string;
  className?: string;
};

/** One chrome accent within a natural reading-order headline */
export function SectionHeadline({ before, accent, after, className }: SectionHeadlineProps) {
  return (
    <h2 className={cn("section-headline mt-4", className)}>
      {before && <span className="text-foreground">{before} </span>}
      <span className="section-headline-accent">{accent}</span>
      {after && <span className="text-foreground"> {after}</span>}
    </h2>
  );
}
