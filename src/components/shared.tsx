import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export const HERO_CODE_LINES = [
  "$ pilot-ali init --mode=system-architect",
  "> loading modules: rag-agent, nova-flex, nova-project ............ ok",
  "▌ parsing legacy_software('Info-Predpriyatie') → migrating schema",
  "const boris = new Agent({ role: 'wiki', memory: 'rag', tone: 'kind' })",
  "// 1 mm на чертеже = −∞ ₽ на производстве. правило #01",
  "if (chaos.detected) { return architecture.deconstruct(chaos).rebuild() }",
  "[ok] vector_store ← embed(docs/*.pdf)  ·  1287 chunks  ·  cosine=0.93",
  "GET /api/nova/orders?status=in_progress  →  200 OK  · 42 ms",
  "// от чертежей мебели — до автономных AI-конвейеров",
  "schema design ── system analysis ── prompt engineering ── shipping",
  "ALYA.AKBAROVA :: pilot_ali ▸ system_analyst ▸ ai_native_engineer",
  "$ nova run --pipeline=warehouse → 1428 SKU synced  · 0 errors",
  "trace_id=9f2c1b4a  ·  agent=boris  ·  latency=312ms  ·  cost=$0.0007",
  "// «я проектирую логику систем» — повторять как мантру",
];

export const EVOLUTION_CODE_LINES = [
  "$ git log --oneline --from=blueprint --to=ai-arch",
  "> stage 01: industrial_chaos.init()",
  "const precision = new Rule('1mm === ∞₽ losses')",
  "> stage 02: legacy.migrate('Info-Predpriyatie')",
  "schema.normalize({ duplicates: 'merge', source: 'SSOT' })",
  "> stage 03: nova.deploy({ agents: ['boris'], rag: true })",
  "// системный анализ → prompt engineering → shipping",
  "$ boris.agent --mode=wiki --memory=rag --tone=kind",
  "[ok] vector_store.embed(docs/*.pdf) → 1287 chunks",
];

export const LEGACY_CODE_LINES = [
  "$ legacy.deconstruct() --target='Info-Predpriyatie'",
  "function automate(matrix) { return parser.run(matrix) }",
  "if (duplicate.detected) { merge.into(SSOT) }",
  "[ok] price_checker: 300% efficiency ↑ · 4× speed ↑",
  "while (manualWork.exists) { build.bot().deploy() }",
  "const boris = new Agent({ role: 'validator', mode: 'strict' })",
  "// от хаоса Excel — к автономным AI-конвейерам",
  "$ nova run --pipeline=warehouse --status=synced",
];

export function SectionCodeDecor({
  lines,
  side = "left",
  speed = 60,
}: {
  lines: string[];
  side?: "left" | "right";
  speed?: number;
}) {
  const posClass = side === "left" ? "left-2 lg:left-6" : "right-2 lg:right-6";
  const colorClass = side === "left" ? "text-accent/50" : "text-muted-foreground/40";
  const alignClass = side === "right" ? "text-right" : "";
  const startY = side === "left" ? "0" : "-50%";
  const endY = side === "left" ? "-50%" : "0";
  return (
    <div
      className={`absolute inset-y-0 ${posClass} overflow-hidden pointer-events-none select-none hidden md:block w-56 ${alignClass}`}
    >
      <motion.div
        initial={{ y: startY }}
        animate={{ y: endY }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className={`font-mono text-[10px] leading-loose ${colorClass} whitespace-nowrap`}
      >
        {[...lines, ...lines].map((l, i) => (
          <div key={`${side}-${i}`}>{l}</div>
        ))}
      </motion.div>
    </div>
  );
}
