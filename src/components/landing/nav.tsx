import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { APP_URL } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#features", label: "Fonctionnalités" },
  { href: "#how", label: "Comment ça marche" },
  { href: "#why", label: "Pourquoi Fly AI" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="max-w-6xl mx-auto glass rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="Fly AI" className="h-9 w-9 rounded-xl shadow-glow" />
          <span className="font-display font-bold text-lg">Fly AI</span>
        </a>

        <div className="hidden lg:flex items-center gap-5 text-sm text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />

          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="gradient-primary text-primary-foreground text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-xl hover:opacity-90 transition shadow-glow whitespace-nowrap"
          >
            Commencer gratuitement
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl glass hover:bg-muted/40 transition"
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
              <SheetHeader>
                <SheetTitle className="font-display text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-muted/50 transition"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 flex items-center justify-between px-1">
                <span className="text-sm text-muted-foreground">Thème</span>
                <ThemeToggle />
              </div>
              <SheetClose asChild>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 w-full gradient-primary text-primary-foreground font-semibold px-4 py-3 rounded-xl hover:opacity-90 transition shadow-glow inline-flex items-center justify-center gap-2"
                >
                  Commencer gratuitement <ArrowRight className="h-4 w-4" />
                </a>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
