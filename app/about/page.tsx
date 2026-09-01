import type { Metadata } from "next";
import { AboutHowIWorkSection } from "@/components/about/AboutHowIWorkSection";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { ValuesStrip } from "@/components/sections/ValuesStrip";
import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutIntroSection />
      <AboutHowIWorkSection />
      <ValuesStrip />
      <CtaSection
        title={aboutContent.cta.title}
        primaryCta={aboutContent.cta.primaryCta}
        secondaryCta={{
          ...aboutContent.cta.secondaryCta,
          variant: "outline",
        }}
      />
    </SiteShell>
  );
}
