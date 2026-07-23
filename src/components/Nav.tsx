import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#why", label: "Why me" },
  { href: "#path", label: "Evolution" },
  { href: "#cases", label: "Cases" },
  { href: "#nova", label: "NOVA" },
  { href: "#stack", label: "Stack" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tighter">
          Pilot Ali <span className="text-muted-foreground">// System Analyst</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">
            Hire Expert →
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Открыть меню"
              className="md:hidden flex items-center justify-center size-10 -mr-2 rounded-md border border-white/10 hover:border-accent/50 hover:text-accent transition-colors"
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-white/10 bg-background/95 backdrop-blur-md w-full sm:max-w-xs"
          >
            <SheetHeader className="text-left mb-8">
              <SheetTitle className="font-mono text-sm tracking-tighter">
                Pilot Ali <span className="text-muted-foreground font-normal">// Menu</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 font-mono text-xs tracking-widest uppercase">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 py-4 border-b border-white/5 text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-foreground text-background rounded-md text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Hire Expert →
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
