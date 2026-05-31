import { AnimateSection } from "./animate-section";
import { CORE_FEATURES } from "./data";

export function Features() {
  return (
    <section id="features" className="px-4 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <AnimateSection className="text-center mb-16">
          <p className="text-sm text-accent font-medium mb-3 uppercase tracking-wider">Fonctionnalités</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Tout ce dont vous avez besoin,{" "}
            <span className="gradient-text">au même endroit</span>
          </h2>
        </AnimateSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_FEATURES.map((item, i) => (
            <AnimateSection key={item.title} delay={i * 80}>
              <div className="glass rounded-2xl p-6 h-full shadow-card hover:-translate-y-1 transition duration-300 group border-glow-hover">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:shadow-glow transition">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}
