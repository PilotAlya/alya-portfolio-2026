type SectionLabelProps = {
  title: string;
  className?: string;
};

export function SectionLabel({ title, className }: SectionLabelProps) {
  return (
    <span className={className ?? "inline-flex items-center gap-2 text-sm font-medium text-accent"}>
      <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
      {title}
    </span>
  );
}
