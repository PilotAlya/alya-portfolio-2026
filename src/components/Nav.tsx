export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tighter">
          Pilot Ali <span className="text-muted-foreground">// System Analyst</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          <a href="#why" className="hover:text-accent transition-colors">Why me</a>
          <a href="#path" className="hover:text-accent transition-colors">Evolution</a>
          <a href="#cases" className="hover:text-accent transition-colors">Cases</a>
          <a href="#nova" className="hover:text-accent transition-colors">NOVA</a>
          <a href="#stack" className="hover:text-accent transition-colors">Stack</a>
          <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">
            Hire Expert →
          </a>
        </div>
      </div>
    </nav>
  );
}
