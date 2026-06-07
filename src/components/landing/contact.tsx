import { useState } from "react";
import { ArrowRight, Mail, Linkedin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const FORMSPREE = "https://formspree.io/f/xkoeqaar";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm text-secondary font-medium mb-3 uppercase tracking-wider">
            Contact
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-muted-foreground">
            Partenariat, collaboration, presse, ou simplement curieux : écrivez-nous.
          </p>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-4 shadow-card">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Votre nom"
              maxLength={100}
              className="bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Votre email"
              maxLength={255}
              className="bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>
          <input
            name="subject"
            placeholder="Sujet"
            maxLength={150}
            className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
          />
          <textarea
            required
            name="message"
            placeholder="Votre message..."
            rows={5}
            maxLength={2000}
            className="w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full gradient-primary text-primary-foreground font-medium px-6 py-3.5 rounded-xl hover:opacity-90 transition shadow-glow inline-flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === "loading"
              ? "Envoi..."
              : status === "sent"
                ? "Message envoyé ✓"
                : "Envoyer le message"}
            {status === "idle" && <ArrowRight className="h-4 w-4" />}
          </button>
          {status === "error" && (
            <p className="text-sm text-destructive text-center">
              Erreur lors de l&apos;envoi. Réessayez ou contactez-nous directement.
            </p>
          )}
        </form>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-8">
          <a
            href="mailto:nethaniahdjossou@gmail.com"
            className="glass rounded-xl px-5 py-3 inline-flex items-center gap-2 text-sm hover:bg-muted/40 transition"
          >
            <Mail className="h-4 w-4 text-secondary shrink-0" />
            nethaniahdjossou@gmail.com
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-xl px-5 py-3 inline-flex items-center gap-2 text-sm hover:bg-muted/40 transition"
          >
            <MessageCircle className="h-4 w-4 text-secondary shrink-0" />
            WhatsApp +228 70 70 31 11
          </a>
          <a
            href="https://www.linkedin.com/company/flyai-org/"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-xl px-5 py-3 inline-flex items-center gap-2 text-sm hover:bg-muted/40 transition"
          >
            <Linkedin className="h-4 w-4 text-secondary shrink-0" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
