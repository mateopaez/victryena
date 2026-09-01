import { SiteShell } from "@/components/layout/SiteShell";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ValuesStrip } from "@/components/sections/ValuesStrip";

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <IntroSection />
      <HowIWorkSection />
      <ValuesStrip />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
    </SiteShell>
  );
}
