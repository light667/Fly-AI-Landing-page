import { Mail, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { href: "/about", label: "À propos" },
  { href: "/legal", label: "Mentions légales" },
  { href: "/privacy", label: "Politique de confidentialité" },
] as const;

export function Footer() {
  return (
    <footer className="px-4 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fly AI" className="h-10 w-10 rounded-xl" />
            <div>
              <div className="font-display font-bold text-lg">Fly AI</div>
              <div className="text-xs text-muted-foreground max-w-xs">
                Find smarter. Apply better. Win bigger.
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-foreground transition">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:nethaniahdjossou@gmail.com"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-muted/40 transition"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/flyai-org/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-muted/40 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-muted/40 transition"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-xs text-muted-foreground text-center md:text-left border-t border-border pt-6">
          © {new Date().getFullYear()} Fly AI — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
