import { AnimateSection } from "./animate-section";

export function Features() {
  return (
    <section id="features" className="px-4 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <AnimateSection className="text-center mb-16">
          <p className="text-sm text-accent font-medium mb-3 uppercase tracking-wider">À propos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            À propos de <span className="gradient-text">FlyAI</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FlyAI est une plateforme d’intelligence artificielle conçue pour rendre la technologie plus accessible, utile et intuitive au quotidien.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Notre mission est simple : <strong>permettre à chacun d’exploiter la puissance de l’IA sans complexité technique</strong>.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Nous construisons un assistant intelligent capable d’aider les utilisateurs dans plusieurs domaines : recherche d’informations, productivité, analyse de données, assistance personnelle et bien plus encore.
          </p>
        </AnimateSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimateSection>
            <div className="glass rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-bold mb-4">💡 Notre vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous croyons que l’intelligence artificielle ne doit pas être réservée aux experts.
                FlyAI vise à devenir un compagnon numérique capable de comprendre les besoins des utilisateurs et de leur fournir des réponses rapides, précises et adaptées à leur contexte.
              </p>
            </div>
          </AnimateSection>

          <AnimateSection delay={80}>
            <div className="glass rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-bold mb-4">🧠 Ce que nous construisons</h3>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li>• Un assistant IA intelligent et multilingue</li>
                <li>• Des outils de productivité avancés</li>
                <li>• Une expérience fluide et accessible sur tous les appareils</li>
                <li>• Des fonctionnalités personnalisées selon chaque utilisateur</li>
              </ul>
            </div>
          </AnimateSection>

          <AnimateSection delay={160}>
            <div className="glass rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-bold mb-4">🌍 Notre objectif</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rendre l’IA utile dans la vie réelle pour :
              </p>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li>• Étudiants</li>
                <li>• Développeurs</li>
                <li>• Entrepreneurs</li>
                <li>• Professionnels</li>
                <li>• Et toute personne curieuse de la technologie</li>
              </ul>
            </div>
          </AnimateSection>

          <AnimateSection delay={240}>
            <div className="glass rounded-3xl p-8 shadow-card border border-border">
              <h3 className="font-display text-2xl font-bold mb-4">🔥 Pourquoi FlyAI ?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parce que nous voulons créer plus qu’un simple chatbot.
                FlyAI est pensé comme un <strong>écosystème intelligent</strong>, capable d’évoluer avec ses utilisateurs et de s’adapter à leurs besoins.
              </p>
            </div>
          </AnimateSection>
        </div>

        <AnimateSection delay={320} className="mt-12 text-center">
          <div className="glass rounded-3xl p-8 shadow-card border border-border inline-block text-left max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4">📩 Contact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pour toute question, partenariat ou suggestion :
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              <a href="mailto:nethaniahdjossou@gmail.com" className="text-primary hover:underline">nethaniahdjossou@gmail.com</a>
            </p>
          </div>
        </AnimateSection>
      </div>
    </section>
  );
}
