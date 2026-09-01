import { SocialIcons } from "@/components/layout/SocialIcons";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT_EMAIL, SOCIAL_HANDLE, homeContent } from "@/lib/content";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="hero-gradient px-0 py-[90px] text-center">
      <div className="site-wrap">
        <Eyebrow className="text-white opacity-85">{hero.eyebrow}</Eyebrow>
        <h1 className="mx-auto mb-7 max-w-[900px] text-[clamp(38px,5.6vw,68px)] leading-[1.08] tracking-[0.005em]">
          {hero.headline}{" "}
          <span className="text-gold">{hero.headlineAccent}</span>
        </h1>
        <p className="mx-auto mb-10 max-w-[640px] text-lg font-light text-muted">
          {hero.subtext}
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-[18px]">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 text-[15px] font-medium text-muted">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">
            {CONTACT_EMAIL}
          </a>
          <span className="opacity-50">|</span>
          <SocialIcons variant="hero" />
          <span>{SOCIAL_HANDLE}</span>
        </div>
      </div>
    </section>
  );
}
