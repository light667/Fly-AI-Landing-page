import {
  Brain,
  Target,
  FileText,
  TrendingUp,
  Sparkles,
  Smartphone,
} from "lucide-react";

const FEATURES = [
  {
    icon: Target,
    title: "Bourses adaptées",
    desc: "Des recommandations personnalisées selon votre profil académique, vos langues et vos ambitions.",
  },
  {
    icon: Brain,
    title: "Score IA personnalisé",
    desc: "Évaluez la force de votre dossier et identifiez les axes d'amélioration en temps réel.",
  },
  {
    icon: FileText,
    title: "Lettres de motivation",
    desc: "Générez des lettres percutantes, adaptées à chaque bourse, en quelques secondes.",
  },
  {
    icon: TrendingUp,
    title: "Suivi des candidatures",
    desc: "Gardez le contrôle sur vos deadlines, statuts et prochaines étapes.",
  },
  {
    icon: Sparkles,
    title: "Assistant IA 24/7",
    desc: "Un coach intelligent qui répond à vos questions sur les bourses, visas et procédures.",
  },
  {
    icon: Smartphone,
    title: "Expérience premium",
    desc: "Une app pensée mobile-first, fluide, rapide, optimisée pour les connexions africaines.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-secondary font-medium mb-3 uppercase tracking-wider">
            Fonctionnalités
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tout ce qu'il faut pour <span className="gradient-text">décrocher votre bourse</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fly AI combine intelligence artificielle de pointe et expertise des bourses pour vous
            accompagner à chaque étape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 shadow-card hover:-translate-y-1 transition duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:shadow-glow transition">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
