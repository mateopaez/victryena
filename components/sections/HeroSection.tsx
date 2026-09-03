import { SocialIcons } from "@/components/layout/SocialIcons";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT_EMAIL, siteContent } from "@/lib/content";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      className="hero-gradient px-0 pt-10 pb-12 text-center sm:py-16 lg:py-[90px]"
    >
      <div className="site-wrap">
        <Eyebrow className="text-white opacity-85">{hero.eyebrow}</Eyebrow>
        <h1 className="mx-auto mb-7 max-w-[900px] text-[clamp(38px,5.6vw,68px)] leading-[1.08] tracking-[0.005em]">
          {hero.headline}
          <br />
          <span className="text-gold">{hero.headlineAccent}</span>
        </h1>
        <p className="mx-auto mb-8 max-w-[640px] text-base font-light text-muted sm:mb-10 sm:text-lg">
          {hero.subtext}
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-2.5 sm:mb-12 sm:flex-row sm:flex-wrap sm:gap-[18px]">
          <Button
            href={hero.primaryCta.href}
            className="h-[42px] px-6 text-[13px] sm:h-[50px] sm:px-[34px] sm:text-[15px]"
          >
            {hero.primaryCta.label}
          </Button>
          <Button
            href={hero.secondaryCta.href}
            variant="ghost"
            className="h-[42px] px-6 text-[13px] sm:h-[50px] sm:px-[34px] sm:text-[15px]"
          >
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 text-[14px] font-medium text-muted sm:flex-row sm:flex-wrap sm:gap-3.5 sm:text-[15px]">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="break-all hover:text-gold sm:break-normal"
          >
            {CONTACT_EMAIL}
          </a>
          <span className="hidden opacity-50 sm:inline">|</span>
          <SocialIcons variant="hero" />
        </div>
      </div>
    </section>
  );
}
