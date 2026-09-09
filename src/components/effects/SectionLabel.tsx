type SectionLabelProps = {
  title: string;
  className?: string;
};

export function SectionLabel({ title, className }: SectionLabelProps) {
  return (
    <span
      className={
        className ??
        "inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.12em] uppercase text-foreground/85"
      }
    >
      <span className="inline-block size-[9px] bg-accent" aria-hidden />
      {title}
    </span>
  );
}
