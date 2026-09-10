import lime from "@/assets/lab-clay-lime.webp";

/**
 * Soft handoff from hero → Services: one clay specimen + thread remnant
 * so the lab composition doesn't end abruptly at the hero edge.
 */
export function LabBridge() {
  return (
    <div className="lab-bridge" aria-hidden>
      <svg
        className="lab-bridge__thread"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="lab-bridge__thread-path"
          d="M180,10 C320,80 420,160 560,90 C700,20 820,150 980,70 C1060,30 1120,90 1180,50"
        />
        <path
          className="lab-bridge__thread-path lab-bridge__thread-path--fade"
          d="M200,40 C360,120 500,40 640,130 C780,200 900,80 1100,140"
        />
      </svg>

      <div className="lab-bridge__wash" />

      <img
        src={lime}
        alt=""
        className="lab-bridge__specimen"
        decoding="async"
      />
    </div>
  );
}
