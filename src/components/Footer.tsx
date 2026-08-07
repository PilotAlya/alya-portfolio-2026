export function Footer() {
  return (
    <footer className="footer-hud border-t border-white/5 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground space-y-2">
            <p className="text-foreground/80">session.end · portfolio_2026</p>
            <p>deploy · vercel · stack react · tanstack · framer</p>
            <p className="text-muted-foreground/70">Pilot Ali · portfolio 2026 · chromatic atelier</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-widest">
            <a
              href="https://github.com/PilotAlya"
              target="_blank"
              rel="noopener noreferrer"
              className="link-spark text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://portfolio-resume-alya-akbarova.vercel.app/"
              className="link-spark text-muted-foreground hover:text-foreground transition-colors"
            >
              Live
            </a>
            <a
              href="#contact"
              className="link-spark text-muted-foreground hover:text-spark transition-colors"
            >
              Contact
            </a>
            <a
              href="/resume-ai.pdf"
              className="link-spark text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume AI
            </a>
          </div>
        </div>

        <div className="footer-hud__rule mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
          <span>© 2026 · Pilot Ali · AI-Native Engineer</span>
          <span className="text-muted-foreground/45">the future is not far off</span>
        </div>
      </div>
    </footer>
  );
}
