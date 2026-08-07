import { cn } from "@/lib/utils";

export type FilterOption = {
  id: string;
  label: string;
};

type FilterPillsProps = {
  options: FilterOption[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
};

/** SENCE-style filter pills — active = solid lime */
export function FilterPills({ options, value, onChange, className }: FilterPillsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((opt) => {
        const active = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "filter-pill font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all",
              active
                ? "filter-pill--active bg-spark text-spark-foreground border-spark shadow-[0_0_20px_-6px_var(--spark)]"
                : "border-border text-muted-foreground hover:border-glass-border hover:text-foreground",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
