# PROMPT — Refonte Landing Page Fly AI

## Contexte du projet

**Fly AI** est une plateforme IA destinée aux étudiants africains qui souhaitent obtenir des bourses d'études internationales. Elle centralise tout le parcours : découverte des bourses, candidature guidée par IA, préparation du dossier, outils professionnels, et ressources complémentaires.

Site actuel à refondre : https://fly-ai-page.vercel.app/

---

## Mission de la refonte

Retravailler entièrement le design et le contenu du site vitrine pour :
1. Adopter un **design moderne 2025** (type Linear, Vercel, Loom, Notion — dark/light clean, typographie forte, animations légères)
2. Présenter **toutes les fonctionnalités actuelles et futures** de l'application
3. Ajouter un **formulaire de newsletter**
4. Donner envie aux étudiants africains de s'inscrire à la liste d'attente / beta

---

## Stack technique recommandée

- **Next.js 14** (App Router) ou **Astro** pour les performances
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **shadcn/ui** pour les composants
- Police : **Geist** (Vercel) ou **Cabinet Grotesk** + **Instrument Serif** pour les accroches
- Icônes : **Lucide** ou **Tabler Icons**

---

## Identité visuelle

### Palette de couleurs (thème moderne, dark-first)
```
Background principal : #050A14 (noir profond)
Background secondaire : #0D1626 (bleu nuit)
Accent primaire : #3B7FFF (bleu électrique)
Accent secondaire : #00E5A0 (vert néon doux)
Texte principal : #F0F4FF
Texte secondaire : #8B9AB8
Bordures/séparateurs : rgba(255,255,255,0.08)
Gradient hero : from #3B7FFF via #7C3AED to #00E5A0
```

### Style visuel
- Fond sombre avec **particules ou grille légère** en arrière-plan
- **Glassmorphism** pour les cartes (backdrop-blur, border 1px rgba white 0.1)
- **Bordures lumineuses** (glow) sur les éléments clés
- Animations scroll-triggered **subtiles** (fade-in-up, staggered)
- Un badge animé "Beta disponible" ou "Bientôt disponible" en haut

---

## Structure des sections (dans l'ordre)

### 1. BARRE DE NAVIGATION
- Logo Fly AI (gauche)
- Liens : Fonctionnalités | Comment ça marche | Partenaires | FAQ
- Bouton CTA : **"Rejoindre la bêta"** (accent bleu)
- Responsive avec hamburger menu

---

### 2. SECTION HERO
**Accroche principale :**
> "Votre bourse internationale, à portée de swipe."

**Sous-titre :**
> Fly AI analyse votre profil, recommande les meilleures bourses, et vous guide pas à pas dans votre candidature — grâce à l'intelligence artificielle.

**Éléments visuels :**
- Mockup animé d'un téléphone montrant le swipe de bourses (style Tinder cards)
- Badge flottant : "✦ Alimenté par l'IA"
- 2 boutons CTA : **"Commencer gratuitement"** + **"Voir comment ça marche"**
- Compteur social proof : "X étudiants sur liste d'attente"

---

### 3. SECTION FONCTIONNALITÉS PRINCIPALES

Titre : **"Tout ce dont vous avez besoin, au même endroit"**

Présenter en grille 2x3 ou carrousel horizontal les 6 fonctionnalités core :

#### 🎯 Matching intelligent de bourses
> À l'inscription, Fly AI collecte vos informations essentielles (pays, niveau d'études, domaine, langues, situation financière) et sélectionne uniquement les bourses qui correspondent à votre profil. Fini la recherche manuelle.

#### 👆 Swipe to Apply
> Parcourez vos bourses recommandées comme un feed personnalisé. Swipez à droite pour sauvegarder les opportunités qui vous intéressent, à gauche pour les ignorer. Simple, rapide, intuitif.

#### 🤖 Candidature guidée par IA
> Pour chaque bourse sauvegardée, notre IA vous accompagne étape par étape : analyse des critères, check-list personnalisée, rédaction assistée, relecture et optimisation du dossier pour maximiser vos chances.

#### 💡 Assistant Light — Expert CV & Motivation
> Light est votre assistant IA personnel pour tout ce qui touche à votre image professionnelle : rédaction de CV, lettres de motivation, reformulation, adaptation au poste ou à la bourse visée. Disponible 24h/24.

#### 🌐 Ressources & Outils recommandés
> Accédez à une sélection curatée de ressources : créateurs de CV pro en ligne, tests de niveau d'anglais (TOEFL, IELTS prep), guides de rédaction académique, et bien plus. Tout ce qui augmente vos chances.

#### 📋 Espace candidatures
> Retrouvez toutes vos candidatures en cours dans un tableau de bord clair : statut, deadlines, documents à fournir, rappels automatiques. Votre hub de gestion de candidatures.

---

### 4. SECTION "COMMENT ÇA MARCHE"

Titre : **"De la découverte à l'acceptation, en 4 étapes"**

Timeline horizontale (desktop) / verticale (mobile) :

```
[1] Créez votre profil
     → Renseignez vos informations académiques, vos objectifs et vos contraintes en moins de 5 minutes.

[2] Découvrez vos bourses
     → Notre IA sélectionne les opportunités les plus adaptées. Swipez pour sauvegarder celles qui vous intéressent.

[3] Candidatez avec l'IA
     → Pour chaque bourse sauvegardée, bénéficiez d'un accompagnement IA complet : documents, lettres, stratégie.

[4] Réussissez votre bourse
     → Soumettez un dossier optimisé et suivez l'avancement de vos candidatures depuis votre espace.
```

---

### 5. SECTION FONCTIONNALITÉS À VENIR

Titre : **"La roadmap Fly AI — Ce qui arrive bientôt"**
Sous-titre : *Fly AI s'agrandit. Voici ce que nos partenaires et notre équipe préparent pour vous.*

Afficher en cartes avec un badge **"Bientôt"** ou **"En développement"** :

- 🌍 **Traduction de documents officiels** *(partenariat en cours)* — Faites traduire et certifier vos relevés de notes, diplômes et actes officiels directement depuis l'app, à tarif négocié.
- 🏫 **Partenariats avec des universités** — Accès privilégié à des programmes de bourses exclusifs en partenariat avec des établissements internationaux.
- 🎓 **Coaching humain à la demande** — Réservez une session avec un mentor certifié (ancien lauréat de bourse) pour un accompagnement personnalisé.
- 📊 **Analyse prédictive de candidature** — Fly AI évalue votre probabilité de succès sur chaque bourse et vous suggère les améliorations à apporter.
- 🔔 **Alertes bourses en temps réel** — Recevez des notifications push dès qu'une nouvelle bourse correspondant à votre profil est publiée.
- 💰 **Aide au financement annexe** — Guide des microfinancements, prêts étudiants à taux préférentiels et bourses locales pour compléter votre dossier.

---

### 6. SECTION SOCIAL PROOF / TESTIMONIALS

Titre : **"Ils ont fait confiance à Fly AI"**

3 témoignages de beta-testeurs ou early adopters (format carte avec photo, nom, pays, bourse obtenue ou en cours).

Exemple format :
> *"Fly AI m'a fait gagner des semaines de recherche. J'ai candidaté à 3 bourses en moins d'un mois avec un dossier vraiment solide."*
> — Aminata K., Sénégal, Bourse Eiffel 2024

---

### 7. SECTION NEWSLETTER

Titre : **"Soyez les premiers informés"**
Sous-titre : Recevez les nouvelles bourses, les conseils de candidature et les nouveautés Fly AI directement dans votre boîte mail.

Formulaire simple :
- Champ email
- Bouton **"Je m'abonne"**
- Texte : *Pas de spam. Désabonnement en 1 clic.*

Intégration suggérée : **Mailchimp**, **Resend**, ou **ConvertKit** (à adapter selon la stack back)

---

### 8. SECTION PRICING

Titre : **"Commencez gratuitement. Évoluez à votre rythme."**
Sous-titre : *Pas d'abonnement forcé. Achetez des crédits uniquement quand vous en avez besoin.*

#### Système de crédits à expliquer clairement

> Fly AI fonctionne avec un système de **crédits**. Chaque action IA (analyse de bourse, rédaction assistée, optimisation de lettre, session avec Light…) consomme un certain nombre de crédits. Vous gardez le contrôle total de votre consommation.

#### 3 cartes tarifaires (style modern pricing cards)

```
┌─────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
│   🎁 DÉMARRAGE      │   │  ⚡ PACK ESSENTIEL   │   │  🚀 PACK AVANCÉ     │
│   Gratuit           │   │  1 000 FCFA           │   │  1 500 FCFA          │
│                     │   │                       │   │                      │
│  50 crédits         │   │  100 crédits          │   │  200 crédits         │
│  offerts            │   │                       │   │                      │
│  à l'inscription    │   │  10 FCFA / crédit     │   │  7,5 FCFA / crédit   │
│                     │   │                       │   │  ← Meilleure valeur  │
│  ✓ Matching IA      │   │  ✓ Tout du plan       │   │  ✓ Tout du plan      │
│  ✓ Swipe bourses    │   │    Démarrage          │   │    Essentiel         │
│  ✓ 1 candidature    │   │  ✓ Candidatures       │   │  ✓ Crédits bonus     │
│    guidée           │   │    illimitées         │   │  ✓ Priorité support  │
│  ✓ Assistant Light  │   │  ✓ Assistant Light    │   │  ✓ Assistant Light   │
│                     │   │  ✓ Export PDF dossier │   │  ✓ Export PDF        │
│                     │   │                       │   │  ✓ Accès anticipé    │
│                     │   │                       │   │    nouvelles fonct.  │
│  [S'inscrire        │   │  [Acheter ce pack]    │   │  [Acheter ce pack]   │
│   gratuitement]     │   │                       │   │                      │
└─────────────────────┘   └──────────────────────┘   └──────────────────────┘
```

**Notes de design :**
- La carte "Pack Avancé" porte un badge **"Meilleure valeur"** et une bordure lumineuse (glow accent)
- Afficher une note rassurante : *"Les crédits n'expirent pas. Achetez une fois, utilisez quand vous voulez."*
- Ajouter une ligne de réassurance : *"Paiement sécurisé via Mobile Money (Wave, Orange Money, MTN MoMo)"*
- Sous les cartes : lien "Voir le détail des actions et leur coût en crédits →" (ouvre un modal ou accordéon)

#### Tableau optionnel (accordéon "Combien coûte chaque action ?")

| Action IA | Crédits consommés |
|---|---|
| Analyse de compatibilité bourse | 2 crédits |
| Génération d'une lettre de motivation | 5 crédits |
| Relecture et optimisation d'un document | 3 crédits |
| Session complète avec l'assistant Light | 4 crédits |
| Check-list candidature personnalisée | 2 crédits |
| Traduction de document (à venir) | 10 crédits |

---

### 9. SECTION FAQ

Titre : **"Questions fréquentes"**

Accordéon avec les questions suivantes (à enrichir) :

- Fly AI est-il gratuit ?
- Quels types de bourses sont disponibles sur la plateforme ?
- L'application fonctionne-t-elle pour tous les pays africains ?
- Comment l'IA m'aide-t-elle à candidater ?
- Mes données sont-elles sécurisées ?
- Quand la version complète sera-t-elle disponible ?
- Comment fonctionnent les crédits ?
- Est-ce que mes crédits expirent ?
- Quels moyens de paiement sont acceptés ?

---

### 11. SECTION CTA FINALE

Grande section avec fond dégradé (bleu → violet → vert) :

**Titre :** "Votre avenir commence par une bourse. Commencez maintenant."

**2 boutons :**
- Principal : "Rejoindre la bêta gratuite"
- Secondaire : "En savoir plus"

---

### 12. FOOTER

- Logo + tagline courte
- Liens : À propos | Contact | Mentions légales | Politique de confidentialité
- Réseaux sociaux (Instagram, LinkedIn, Twitter/X, WhatsApp)
- © 2025 Fly AI — Tous droits réservés

---

## Comportements UX importants

- **Mobile-first** : 80% des utilisateurs cibles sont sur mobile
- **Animations** : scroll-triggered fade-in-up sur chaque section (Framer Motion ou AOS)
- **Performance** : images optimisées (WebP), lazy loading, score Lighthouse > 90
- **Accessibilité** : contrastes WCAG AA, balises ARIA sur les éléments interactifs
- **SEO** : balises meta complètes, og:image, sitemap.xml, robots.txt

---

## Remarques finales pour le développeur

1. Le logo actuel (`/logo.png`) doit être réutilisé ou modernisé
2. Le nom de l'assistant IA interne s'appelle **"Light"** — à mentionner avec cette identité
3. Les fonctionnalités "à venir" doivent visuellement se distinguer des fonctionnalités existantes (badge, opacité réduite, ou style différent)
4. La newsletter doit envoyer un email de confirmation automatique
5. Prévoir un tracking analytics (Plausible ou Vercel Analytics)
6. Ajouter un meta pixel ou événement de conversion sur le clic CTA principal
