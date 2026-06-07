import { ArrowRight } from "lucide-react";
import { APP_URL } from "@/lib/site";
import { trackCTA } from "@/lib/analytics";
import { AnimateSection } from "./animate-section";

export function FinalCTA() {
  return (
    <section className="px-4 py-24">
      <AnimateSection>
        <div className="max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden gradient-cta">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Votre avenir commence par une bourse.
              <br />
              Commencez maintenant.
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackCTA("final_rejoindre_beta")}
                className="bg-white text-[#050A14] font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition inline-flex items-center justify-center gap-2"
              >
                Commencer gratuitement <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-white/10 transition inline-flex items-center justify-center"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </AnimateSection>
    </section>
  );
}
