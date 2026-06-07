import {
  Target,
  Hand,
  Bot,
  Lightbulb,
  Globe,
  LayoutDashboard,
  Languages,
  School,
  GraduationCap,
  LineChart,
  Bell,
  Wallet,
  Gift,
  Zap,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export const WAITLIST_COUNT = "2 400+";

export const CORE_FEATURES: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: Target,
    title: "Matching intelligent de bourses",
    desc: "À l'inscription, Fly AI collecte vos informations essentielles et sélectionne uniquement les bourses qui correspondent à votre profil. Fini la recherche manuelle.",
  },
  {
    icon: Hand,
    title: "Swipe to Apply",
    desc: "Parcourez vos bourses recommandées comme un feed personnalisé. Swipez à droite pour sauvegarder, à gauche pour ignorer. Simple, rapide, intuitif.",
  },
  {
    icon: Bot,
    title: "Candidature guidée par IA",
    desc: "Pour chaque bourse sauvegardée, notre IA vous accompagne : critères, check-list, rédaction assistée et optimisation du dossier.",
  },
  {
    icon: Lightbulb,
    title: "Assistant Light — Expert CV & Motivation",
    desc: "Light est votre assistant IA pour CV, lettres de motivation, reformulation et adaptation à chaque bourse. Disponible 24h/24.",
  },
  {
    icon: Globe,
    title: "Ressources & outils recommandés",
    desc: "CV pro en ligne, préparation TOEFL/IELTS, guides académiques et outils curatés pour maximiser vos chances.",
  },
  {
    icon: LayoutDashboard,
    title: "Espace candidatures",
    desc: "Tableau de bord clair : statuts, deadlines, documents à fournir et rappels automatiques. Votre hub de gestion.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Créez votre profil",
    desc: "Renseignez vos informations académiques, vos objectifs et vos contraintes en moins de 5 minutes.",
  },
  {
    n: "02",
    title: "Découvrez vos bourses",
    desc: "Notre IA sélectionne les opportunités les plus adaptées. Swipez pour sauvegarder celles qui vous intéressent.",
  },
  {
    n: "03",
    title: "Candidatez avec l'IA",
    desc: "Accompagnement complet : documents, lettres, stratégie pour chaque bourse sauvegardée.",
  },
  {
    n: "04",
    title: "Obtenez votre bourse",
    desc: "Soumettez un dossier optimisé et suivez l'avancement depuis votre espace.",
  },
];

export const ROADMAP: {
  icon: LucideIcon;
  title: string;
  desc: string;
  badge: string;
}[] = [
  {
    icon: Languages,
    title: "Traduction de documents officiels",
    desc: "Traduisez et certifiez relevés de notes, diplômes et actes officiels depuis l'app, à tarif négocié.",
    badge: "Partenariat en cours",
  },
  {
    icon: School,
    title: "Partenariats universitaires",
    desc: "Accès privilégié à des programmes de bourses exclusifs avec des établissements internationaux.",
    badge: "Bientôt",
  },
  {
    icon: GraduationCap,
    title: "Coaching humain à la demande",
    desc: "Sessions avec un mentor certifié, ancien lauréat de bourse, pour un accompagnement personnalisé.",
    badge: "Bientôt",
  },
  {
    icon: LineChart,
    title: "Analyse prédictive de candidature",
    desc: "Évaluez votre probabilité de succès sur chaque bourse et les améliorations à apporter.",
    badge: "En développement",
  },
  {
    icon: Bell,
    title: "Alertes bourses en temps réel",
    desc: "Notifications dès qu'une nouvelle bourse correspondant à votre profil est publiée.",
    badge: "Bientôt",
  },
  {
    icon: Wallet,
    title: "Aide au financement annexe",
    desc: "Microfinancements, prêts étudiants à taux préférentiels et bourses locales pour compléter votre dossier.",
    badge: "Bientôt",
  },
];

export const PRICING_PLANS = [
  {
    name: "Démarrage",
    icon: Gift,
    price: "Gratuit",
    credits: "50 crédits offerts à l'inscription",
    perCredit: null,
    highlight: false,
    features: [
      "Matching IA",
      "Swipe bourses",
      "1 candidature guidée",
      "Assistant Light",
    ],
    cta: "S'inscrire gratuitement",
    ctaPrimary: false,
  },
  {
    name: "Pack Essentiel",
    icon: Zap,
    price: "1 000 FCFA",
    credits: "100 crédits",
    perCredit: "10 FCFA / crédit",
    highlight: false,
    features: [
      "Tout du plan Démarrage",
      "Candidatures illimitées",
      "Assistant Light",
      "Export PDF dossier",
    ],
    cta: "Acheter ce pack",
    ctaPrimary: true,
  },
  {
    name: "Pack Avancé",
    icon: Rocket,
    price: "1 500 FCFA",
    credits: "200 crédits",
    perCredit: "7,5 FCFA / crédit",
    highlight: true,
    features: [
      "Tout du Pack Essentiel",
      "Crédits bonus",
      "Priorité support",
      "Accès anticipé nouvelles fonct.",
    ],
    cta: "Acheter ce pack",
    ctaPrimary: true,
  },
];

export const FAQ_ITEMS = [
  {
    q: "Fly AI est-il gratuit ?",
    a: "Oui pour démarrer : vous recevez 50 crédits gratuits à l'inscription. Ensuite, vous achetez des packs de crédits uniquement quand vous en avez besoin.",
  },
  {
    q: "Quels types de bourses sont disponibles ?",
    a: "Bourses gouvernementales, universitaires, programmes internationaux (Erasmus+, Eiffel, Chevening…) et opportunités privées, filtrées selon votre profil.",
  },
  {
    q: "L'application fonctionne-t-elle pour tous les pays africains ?",
    a: "Oui. Fly AI est conçu pour les étudiants de tout le continent, avec des critères adaptés par pays, langue et niveau d'études.",
  },
  {
    q: "Fly AI est-il disponible sur mobile ?",
    a: "Oui. Fly AI est une application multiplateforme : accessible sur le web, iOS et Android, avec la même expérience partout.",
  },
  {
    q: "Comment l'IA m'aide-t-elle à candidater ?",
    a: "Matching intelligent, swipe de bourses, check-lists personnalisées, rédaction assistée et relecture via l'assistant Light pour chaque candidature.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Vos données sont chiffrées et ne sont jamais revendues. Vous gardez le contrôle sur ce que vous partagez dans votre profil.",
  },
  {
    q: "Quand la version complète sera-t-elle disponible ?",
    a: "La bêta est ouverte progressivement. Inscrivez-vous à la newsletter pour être informé des nouvelles fonctionnalités en priorité.",
  },
  {
    q: "Comment fonctionnent les crédits ?",
    a: "Chaque action IA consomme un nombre de crédits défini. Vous voyez le coût avant de lancer une action et gardez le contrôle total.",
  },
  {
    q: "Est-ce que mes crédits expirent ?",
    a: "Non. Les crédits n'expirent pas : achetez une fois, utilisez quand vous voulez.",
  },
  {
    q: "Quels moyens de paiement sont acceptés ?",
    a: "Mobile Money : Wave, Orange Money et MTN MoMo. Paiement sécurisé depuis l'application.",
  },
];
