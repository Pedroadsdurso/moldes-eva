import { ScarcityBar } from "@/components/ScarcityBar";
import { Hero } from "@/components/Hero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { MentalTrigger } from "@/components/MentalTrigger";
import { Creator } from "@/components/Creator";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Bonuses } from "@/components/Bonuses";
import { Pricing } from "@/components/Pricing";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialProofToast } from "@/components/SocialProofToast";
import { ExitIntentRedirect } from "@/components/ExitIntentRedirect";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ExitIntentRedirect
        storageKey="offer_1990_shown"
        redirectTo="/oferta-1990"
      />
      <ScarcityBar />
      <main className="flex-1">
        <Hero />
        <ProductCarousel />
        <HowItWorks />
        <MentalTrigger />
        <Creator />
        <TestimonialsCarousel />
        <Bonuses />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <SocialProofToast />
    </div>
  );
}
