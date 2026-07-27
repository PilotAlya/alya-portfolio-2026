import { CountUp } from "./CountUp";

type SectionLabelProps = {
  chapter: number;
  title: string;
  className?: string;
};

export function SectionLabel({ chapter, title, className }: SectionLabelProps) {
  const isDecimal = !Number.isInteger(chapter);

  return (
    <span className={className ?? "font-mono text-xs text-accent uppercase tracking-widest"}>
      Глава{" "}
      <CountUp
        to={chapter}
        decimals={isDecimal ? 1 : 0}
        padZero={isDecimal ? undefined : 2}
        duration={1100}
        className="inline text-accent"
      />
      {" · "}
      {title}
    </span>
  );
}
