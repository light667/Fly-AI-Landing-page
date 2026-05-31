import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimateSection } from "./animate-section";

const NEWSLETTER_FORM = "https://formspree.io/f/xkoeqaar";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch(NEWSLETTER_FORM, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <AnimateSection className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Soyez les <span className="gradient-text">premiers informés</span>
          </h2>
          <p className="text-muted-foreground">
            Recevez les nouvelles bourses, les conseils de candidature et les nouveautés Fly AI
            directement dans votre boîte mail.
          </p>
        </AnimateSection>

        <AnimateSection delay={100}>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 shadow-card flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="Newsletter Fly AI" />
            <input type="hidden" name="type" value="newsletter" />
            <input
              required
              type="email"
              name="email"
              placeholder="votre@email.com"
              className="flex-1 bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition shadow-glow inline-flex items-center justify-center gap-2 disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Envoi..." : status === "sent" ? "Inscrit ✓" : "Je m'abonne"}
              {status === "idle" && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
          {status === "error" && (
            <p className="text-sm text-destructive text-center mt-3">Erreur. Réessayez plus tard.</p>
          )}
          {status === "sent" && (
            <p className="text-sm text-accent text-center mt-3">
              Merci ! Vérifiez votre boîte mail pour la confirmation.
            </p>
          )}
          <p className="text-xs text-muted-foreground text-center mt-4">
            Pas de spam. Désabonnement en 1 clic.
          </p>
        </AnimateSection>
      </div>
    </section>
  );
}
