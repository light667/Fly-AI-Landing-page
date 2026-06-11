import { Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const FOOTER_LINKS = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Feuille de route", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Politique de confidentialité", href: "/privacy" },
  { label: "Conditions d'utilisation", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="/" className="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="Fly AI" className="h-7 w-7 object-contain" />
              <span className="font-display font-bold text-base text-foreground tracking-tight">
                Fly<span className="text-primary">AI</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed">
              La plateforme IA qui propulse les étudiants africains vers les meilleures bourses
              internationales.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a
                href="https://www.linkedin.com/company/flyai-org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <ThemeToggle />
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Navigation
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fly AI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}