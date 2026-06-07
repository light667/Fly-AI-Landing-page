import { ArrowRight, Users, Globe, Smartphone } from "lucide-react";
import logo from "@/assets/logo.png";
import { APP_URL } from "@/lib/site";
import { trackCTA } from "@/lib/analytics";
import { WAITLIST_COUNT } from "./data";
import { AnimateSection } from "./animate-section";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative text-center">
        <AnimateSection>
          <div className="relative mx-auto max-w-[200px] mb-10 animate-float">
            <div className="absolute inset-0 gradient-primary blur-3xl opacity-40 rounded-full" />
            <img
              src={logo}
              alt="Fly AI"
              className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-[2rem] shadow-glow"
            />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] mb-4">
            Propulsez votre avenir <br />
            avec <span className="gradient-text">Fly AI</span>
          </h1>

          <p className="font-display text-sm md:text-base tracking-wide text-muted-foreground mb-6 uppercase">
            Find smarter. Apply better. Win bigger.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8 glass rounded-2xl px-5 py-3">
            <span className="flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-primary" />
              Web
            </span>
            <span className="text-border">·</span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-primary" />
              iOS & Android
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCTA("hero_commencer")}
              className="gradient-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition shadow-glow inline-flex items-center justify-center gap-2"
            >
              Commencer gratuitement <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="glass font-medium px-6 py-3.5 rounded-xl hover:bg-muted/50 transition inline-flex items-center justify-center"
            >
              Voir comment ça marche
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground justify-center">
            <Users className="h-4 w-4 text-primary" />
            <span>
              <strong className="text-foreground">{WAITLIST_COUNT}</strong> étudiants sur la liste
              d&apos;attente
            </span>
          </div>
        </AnimateSection>
      </div>
    </section>
  );
}
