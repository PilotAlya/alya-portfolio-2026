type SectionLabelProps = {
  title: string;
  className?: string;
};

export function SectionLabel({ title, className }: SectionLabelProps) {
  return (
    <span
      className={
        className ??
        "inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium tracking-[0.12em] uppercase text-muted-foreground"
      }
    >
      <span className="lab-dot !size-[7px] !shadow-none" aria-hidden />
      {title}
    </span>
  );
}
