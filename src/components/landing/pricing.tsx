import { Check, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Gratuit",
    price: "0",
    currency: "FCFA",
    period: "pour toujours",
    description: "Pour découvrir et commencer vos recherches.",
    cta: "Commencer gratuitement",
    ctaStyle: "border",
    popular: false,
    features: [
      "Profil étudiant complet",
      "20 bourses recommandées / mois",
      "1 lettre de motivation / mois",
      "Alertes deadline basiques",
      "Tableau de bord candidatures",
    ],
  },
  {
    name: "Pro",
    price: "1 000",
    currency: "FCFA",
    period: "/ mois",
    description: "Pour les candidats sérieux qui veulent maximiser leurs chances.",
    cta: "Commencer l'essai gratuit",
    ctaStyle: "gradient",
    popular: true,
    features: [
      "Tout du plan Gratuit",
      "Bourses illimitées et matching avancé",
      "Lettres de motivation illimitées",
      "Essays & personal statements IA",
      "Coaching IA personnalisé 24/7",
      "Alertes premium et rappels",
      "Revue de dossier complète",
    ],
  },
  {
    name: "Équipe",
    price: "1 500",
    currency: "FCFA",
    period: "/ mois",
    description: "Pour les établissements, ONG et conseillers d'orientation.",
    cta: "Nous contacter",
    ctaStyle: "border",
    popular: false,
    features: [
      "Tout du plan Pro",
      "Jusqu'à 10 étudiants / compte",
      "Dashboard administrateur",
      "Rapports et statistiques",
      "Intégration établissements",
      "Support prioritaire dédié",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-3">
            Tarifs
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Simple, transparent,
            <span className="gradient-text"> abordable.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-md">
            Commencez gratuitement. Passez au Pro quand vous êtes prêt à candidater sérieusement.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-200 ${
                plan.popular
                  ? "border-primary/40 bg-gradient-to-b from-primary/5 to-card shadow-[0_0_40px_rgba(59,127,255,0.12)]"
                  : "border-border bg-card hover:border-border/80"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-primary text-primary-foreground shadow-glow">
                    <Sparkles className="h-2.5 w-2.5" />
                    Populaire
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1.5 mb-2 flex-wrap">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm font-semibold text-primary">{plan.currency}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              {/* CTA */}
              <a
                href="#newsletter"
                className={`flex items-center justify-center h-10 rounded-xl text-sm font-semibold transition-all mb-6 ${
                  plan.ctaStyle === "gradient"
                    ? "gradient-cta text-white shadow-glow hover:shadow-glow-strong hover:scale-[1.01]"
                    : "border border-border text-foreground hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full bg-accent/15 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Prix en bêta. Offre early-bird pour les premiers inscrits — réservez votre place maintenant.
        </p>
      </div>
    </section>
  );
}