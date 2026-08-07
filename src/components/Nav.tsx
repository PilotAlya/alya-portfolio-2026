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
import { NAV_SECTION_MAP, useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#why", label: "Обо мне" },
  { href: "#nova", label: "NOVA" },
  { href: "#experience", label: "Опыт" },
  { href: "#portfolio", label: "Портфолио" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  const isActive = (href: string) => NAV_SECTION_MAP[href] === activeSection;

  const pillClass = (href: string, extra?: string) =>
    cn(
      "nav-pill font-mono text-[10px] tracking-widest uppercase transition-colors",
      isActive(href) ? "is-active" : "text-muted-foreground",
      extra,
    );

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border glass-panel !rounded-none !border-x-0 !border-t-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tighter link-spark">
          Pilot Ali <span className="text-muted-foreground">// AI · Vibe-Coding</span>
        </a>

        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={pillClass(link.href)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={pillClass("#contact")}>
            Контакты →
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Открыть меню"
                className="flex items-center justify-center size-10 -mr-2 rounded-full border border-border hover:border-spark/50 hover:text-spark transition-colors"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-border bg-background/95 backdrop-blur-md w-full sm:max-w-xs"
            >
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="font-mono text-sm tracking-tighter">
                  Pilot Ali <span className="text-muted-foreground font-normal">// Меню</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 font-mono text-xs tracking-widest uppercase">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "nav-pill px-4 py-3 text-center",
                        isActive(link.href) ? "is-active" : "text-muted-foreground border border-border",
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className={cn(
                      "nav-pill mt-2 px-4 py-3 text-center",
                      isActive("#contact") ? "is-active" : "bg-foreground text-background",
                    )}
                  >
                    Контакты →
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
