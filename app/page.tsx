import { SiteShell } from "@/components/layout/SiteShell";
import { HomeContactSection } from "@/components/home/HomeContactSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeOfferSection } from "@/components/home/HomeOfferSection";
import { ValuesStrip } from "@/components/sections/ValuesStrip";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { AboutHowIWorkSection } from "@/components/about/AboutHowIWorkSection";
import { PackagesPageContent } from "@/components/packages/PackagesPageContent";

export default function HomePage() {
  return (
    <SiteShell>
      <HomeHero />
      <AboutIntroSection />
      <AboutHowIWorkSection /> 
      <ValuesStrip />
      <PackagesPageContent />
      <TestimonialsSection />
      <HomeContactSection />
    </SiteShell>
  );
}
