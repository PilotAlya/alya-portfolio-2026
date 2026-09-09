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
  { href: "#services", label: "Услуги" },
  { href: "#work", label: "Работы" },
  { href: "#nova", label: "NOVA" },
  { href: "#profile", label: "Обо мне" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  const isActive = (href: string) => NAV_SECTION_MAP[href] === activeSection;

  const pillClass = (href: string, extra?: string) =>
    cn(
      "nav-pill text-sm transition-colors",
      isActive(href) ? "is-active" : "text-muted-foreground",
      extra,
    );

  return (
    <nav className="fixed top-4 md:top-5 inset-x-4 md:inset-x-8 z-50">
      <div className="max-w-7xl mx-auto bg-background rounded-md px-4 lg:px-5 h-12 flex items-center justify-between border border-border">
        <a href="#top" className="text-sm font-display font-bold tracking-tight pl-1">
          Pilot Ali
          <span className="hidden sm:inline font-mono font-medium text-[0.65rem] tracking-[0.08em] uppercase text-muted-foreground ml-3">
            Design Lab
          </span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={pillClass(link.href)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-md bg-foreground px-3.5 py-2 font-mono text-[0.65rem] font-medium uppercase tracking-[0.08em] text-background transition-opacity hover:opacity-85"
          >
            Задача / роль →
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Открыть меню"
                className="flex items-center justify-center size-9 -mr-1 rounded-md border border-border hover:border-foreground/30 transition-colors"
              >
                <Menu className="size-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-border bg-background/98 backdrop-blur-md w-full sm:max-w-xs"
            >
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-sm font-display font-bold tracking-tight">
                  Pilot Ali{" "}
                  <span className="font-mono font-medium text-[0.65rem] uppercase tracking-[0.08em] text-muted-foreground">
                    Menu
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 text-sm">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "nav-pill px-4 py-3 text-center",
                        isActive(link.href)
                          ? "is-active"
                          : "text-muted-foreground border border-border",
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="mt-2 rounded-md bg-foreground px-4 py-3 text-center font-mono text-[0.7rem] font-medium uppercase tracking-[0.08em] text-background"
                  >
                    Задача / роль →
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
