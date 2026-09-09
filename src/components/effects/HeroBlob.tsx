/** Floating gradient blob — print-portfolio reference hero motif */
export function HeroBlob() {
  return (
    <div className="hero-blob" aria-hidden>
      <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
        <defs>
          <radialGradient id="heroBlobGradient" cx="35%" cy="30%" r="75%">
            <stop offset="0%" style={{ stopColor: "var(--blue-soft)" }} />
            <stop offset="45%" style={{ stopColor: "var(--blue-soft)" }} />
            <stop offset="100%" style={{ stopColor: "var(--blue)" }} />
          </radialGradient>
          <radialGradient id="heroBlobHighlight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id="heroBlobSoft">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <path
          filter="url(#heroBlobSoft)"
          fill="url(#heroBlobGradient)"
          d="M200 30 C280 20 350 80 358 160 C366 240 330 300 268 342 C214 378 128 372 84 318 C40 264 34 190 66 128 C98 66 140 38 200 30 Z"
        />
        <ellipse
          cx="150"
          cy="120"
          rx="90"
          ry="55"
          fill="url(#heroBlobHighlight)"
          opacity="0.7"
          transform="rotate(-18 150 120)"
        />
        <path
          filter="url(#heroBlobSoft)"
          fill="url(#heroBlobGradient)"
          opacity="0.85"
          d="M118 210 C150 185 200 190 224 224 C248 258 240 306 202 326 C164 346 112 336 94 298 C76 260 86 235 118 210 Z"
        />
      </svg>
    </div>
  );
}
