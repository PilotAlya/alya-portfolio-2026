import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  variant?: "default" | "alt";
  as?: ElementType;
  id?: string;
  className?: string;
};

/** Alternating section backgrounds — Chromatic Atelier rhythm */
export function SectionShell({
  children,
  variant = "default",
  as: Tag = "div",
  id,
  className,
}: SectionShellProps) {
  return (
    <Tag
      id={id}
      className={cn(
        variant === "alt" ? "section-shell-alt" : "section-shell",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
