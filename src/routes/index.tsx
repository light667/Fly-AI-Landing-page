import { BetaBanner } from "@/components/landing/beta-banner";
import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Why } from "@/components/landing/why";
import { Roadmap } from "@/components/landing/roadmap";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
//import { Newsletter } from "@/components/landing/newsletter";
//import { FinalCTA } from "@/components/landing/final-cta";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Beta countdown banner - top of everything */}
      <BetaBanner />
      {/* Nav sticks below the banner */}
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Why />
        <Roadmap />
        <Pricing />
        <FAQ />
        {/* <Newsletter /> */}
        {/* <FinalCTA /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}