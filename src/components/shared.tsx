import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const HERO_CODE_LINES = [
  "$ pilot-ali init --mode=ai-native",
  "> loading modules: rag-agent, nova-flex, vibe-coder ............ ok",
  "▌ cursor.agent({ stack: ['OpenCode', 'Gemini'], mode: 'ship' })",
  "const boris = new Agent({ role: 'wiki', memory: 'rag', tone: 'kind' })",
  "// не классический dev — проектирую логику, AI пишет код, я проверяю",
  "if (chaos.detected) { return architecture.deconstruct(chaos).rebuild() }",
  "[ok] vector_store ← embed(docs/*.pdf)  ·  1287 chunks  ·  cosine=0.93",
  "GET /api/nova/orders?status=in_progress  →  200 OK  · 42 ms",
  "// от Legacy-хаоса — до AI-native shipping",
  "vibe-coding ── prompt engineering ── validation ── deploy",
  "ALYA.AKBAROVA :: pilot_ali ▸ ai_native_engineer ▸ vibe_coder",
  "$ nova run --pipeline=warehouse → 1428 SKU synced  · 0 errors",
  "trace_id=9f2c1b4a  ·  agent=boris  ·  latency=312ms  ·  cost=$0.0007",
  "// «с ИИ на ты» — системный подход + проверка результата",
];

export const EVOLUTION_CODE_LINES = [
  "$ git log --oneline --from=blueprint --to=ai-arch",
  "> stage 01: industrial_chaos.init()",
  "const precision = new Rule('detail === cost')",
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
