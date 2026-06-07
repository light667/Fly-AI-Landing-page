import { Check, ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/site";
import { trackCTA } from "@/lib/analytics";
import { AnimateSection } from "./animate-section";
import { PRICING_PLANS } from "./data";

export function Pricing() {
  return (
    <section id="pricing" className="px-4 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <AnimateSection className="text-center mb-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Commencez gratuitement.{" "}
            <span className="gradient-text">Évoluez à votre rythme.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pas d&apos;abonnement forcé. Achetez des crédits uniquement quand vous en avez besoin.
          </p>
        </AnimateSection>

        <AnimateSection delay={80} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm text-muted-foreground leading-relaxed glass rounded-xl px-5 py-4">
            Fly AI fonctionne avec un système de <strong className="text-foreground">crédits</strong>.
            Chaque action IA (analyse, rédaction, session Light…) consomme des crédits. Vous gardez le
            contrôle total de votre consommation.
          </p>
        </AnimateSection>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {PRICING_PLANS.map((plan, i) => (
            <AnimateSection key={plan.name} delay={i * 100}>
              <div
                className={`glass rounded-2xl p-6 h-full flex flex-col relative ${
                  plan.highlight ? "border-glow-strong shadow-glow ring-1 ring-accent/30" : ""
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full gradient-primary text-primary-foreground">
                    Meilleure valeur
                  </span>
                )}
                <div className="text-2xl mb-2">
                  <plan.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="font-display font-bold text-xl">{plan.name}</h3>
                <div className="font-display text-3xl font-bold mt-2 mb-1">{plan.price}</div>
                <p className="text-sm text-accent font-medium mb-1">{plan.credits}</p>
                {plan.perCredit && (
                  <p className="text-xs text-muted-foreground mb-4">{plan.perCredit}</p>
                )}
                {!plan.perCredit && <div className="mb-4" />}
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackCTA(`pricing_${plan.name}`)}
                  className={`w-full text-center font-semibold px-4 py-3 rounded-xl transition inline-flex items-center justify-center gap-2 ${
                    plan.highlight || plan.ctaPrimary
                      ? "gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "glass hover:bg-muted/50"
                  }`}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </AnimateSection>
          ))}
        </div>

        <AnimateSection delay={120} className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Les crédits n&apos;expirent pas. Achetez une fois, utilisez quand vous voulez.
          </p>
          <p className="text-sm text-muted-foreground">
            Paiement sécurisé via Mobile Money (Wave, Orange Money, MTN MoMo)
          </p>
        </AnimateSection>
      </div>
    </section>
  );
}
