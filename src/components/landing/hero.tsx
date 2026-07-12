import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { useState, useEffect } from "react";

const BETA_DATE = new Date("2026-07-21T00:00:00Z");

function getTimeLeft() {
  const diff = BETA_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-none tabular-nums gradient-text">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {label}
      </span>
    </div>
  );
}

const STATS = [
  { value: "500+", label: "bourses indexées", icon: BookOpen },
  { value: "3x", label: "plus de chances", icon: Award },
  { value: "100+", label: "étudiants en attente", icon: Users },
];

export function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-[0.08] blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #3b7fff 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 left-[20%] w-[300px] h-[300px] rounded-full opacity-[0.06] blur-[80px]"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-[15%] w-[250px] h-[250px] rounded-full opacity-[0.05] blur-[80px]"
        style={{ background: "radial-gradient(ellipse, #00e5a0 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-semibold text-primary tracking-wide uppercase">
            Sortie de la version bêta
          </span>
        </div>
        {/* Big Countdown */}
        {timeLeft ? (
          <div className="mb-12">
            <div className="flex items-start justify-center gap-4 sm:gap-8 md:gap-12">
              <CountdownUnit value={timeLeft.days} label="Jours" />
              <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl gradient-text leading-none mt-1 select-none">:</span>
              <CountdownUnit value={timeLeft.hours} label="Heures" />
              <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl gradient-text leading-none mt-1 select-none">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl gradient-text leading-none mt-1 select-none">:</span>
              <CountdownUnit value={timeLeft.seconds} label="Secondes" />
            </div>
          </div>
        ) : (
          <div className="mb-12">
            <p className="font-display text-4xl font-bold gradient-text">🎉 La bêta est disponible !</p>
          </div>
        )}

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          <span className="block text-foreground">L'IA qui propulse</span>
          <span className="block gradient-text mt-1">les étudiants africains</span>
          <span className="block text-foreground mt-1">vers le monde.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-12">
          Trouvez les bourses qui vous correspondent, rédigez des candidatures percutantes
          et suivez vos dossiers — tout ça depuis une seule plateforme IA.
        </p>


        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a
            href="#newsletter"
            className="group inline-flex items-center gap-2 h-12 px-7 rounded-xl font-semibold text-sm gradient-cta text-white shadow-glow hover:shadow-glow-strong transition-all duration-200 hover:scale-[1.02]"
          >
            Rejoindre la liste d'attente
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-xl font-semibold text-sm glass text-foreground hover:bg-white/10 transition-all duration-200"
          >
            Voir comment ça marche
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm text-foreground leading-none">{value}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
