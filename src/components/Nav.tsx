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
      "nav-pill text-sm transition-colors",
      isActive(href) ? "is-active" : "text-muted-foreground",
      extra,
    );

  return (
    <nav className="fixed top-4 md:top-6 inset-x-4 md:inset-x-8 z-50">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-4 lg:px-5 h-14 flex items-center justify-between shadow-[0_8px_28px_-16px_rgba(0,0,0,0.18)]">
        <a href="#top" className="text-sm font-semibold tracking-tight pl-2">
          Pilot Ali{" "}
          <span className="hidden sm:inline text-muted-foreground font-normal">
            // дизайн, сайты и ИИ для бизнеса
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
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
                <SheetTitle className="text-sm font-semibold tracking-tight">
                  Pilot Ali <span className="text-muted-foreground font-normal">// Меню</span>
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
