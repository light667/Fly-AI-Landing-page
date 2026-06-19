import { useState, useEffect } from "react";
import { X, Rocket } from "lucide-react";

const BETA_DATE = new Date("2026-07-11T00:00:00Z");

function getTimeLeft() {
  const now = new Date();
  const diff = BETA_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <span className="flex flex-col items-center">
      <span className="font-display font-bold text-sm leading-none tabular-nums text-foreground">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">{label}</span>
    </span>
  );
}

export function BetaBanner() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (dismissed || !timeLeft) return null;

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0d1a35] via-[#0f1f40] to-[#0d1a35] border-b border-[rgba(59,127,255,0.2)]">
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-center gap-3 sm:gap-5">
        {/* Left badge */}
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-semibold text-primary uppercase tracking-wider">
          <Rocket className="h-3 w-3" />
          Bêta
        </span>

        {/* Countdown + label */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="flex items-center gap-2.5 bg-background/30 border border-white/5 rounded-lg px-3 py-1">
            <Digit value={timeLeft.days} label="Jours" />
            <span className="text-muted-foreground text-xs font-bold leading-none -mt-1">:</span>
            <Digit value={timeLeft.hours} label="Heures" />
            <span className="text-muted-foreground text-xs font-bold leading-none -mt-1">:</span>
            <Digit value={timeLeft.minutes} label="Minutes" />
            <span className="text-muted-foreground text-xs font-bold leading-none -mt-1">:</span>
            <Digit value={timeLeft.seconds} label="Secondes" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground/70">
            Sortie de la version bêta
          </span>
        </div>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 rounded text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fermer"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}