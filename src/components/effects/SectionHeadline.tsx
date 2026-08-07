import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadlineProps = {
  accent?: string;
  children: ReactNode;
  className?: string;
};

/** One loud accent word + calm body — clean section titles */
export function SectionHeadline({ accent, children, className }: SectionHeadlineProps) {
  return (
    <h2 className={cn("section-headline mt-4", className)}>
      {accent && <span className="section-headline-accent">{accent}</span>}
      {accent && " "}
      <span className="text-foreground">{children}</span>
    </h2>
  );
}
