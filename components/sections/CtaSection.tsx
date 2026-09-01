import { Button } from "@/components/ui/Button";

type CtaButton = {
  label: string;
  href: string;
  variant?: "solid" | "outline" | "ghost";
};

type CtaSectionProps = {
  title: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
};

export function CtaSection({
  title,
  primaryCta,
  secondaryCta,
}: CtaSectionProps) {
  return (
    <section className="section-pad">
      <div className="site-wrap text-center">
        <h2 className="section-heading mb-6">{title}</h2>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-[18px]">
          <Button href={primaryCta.href} variant={primaryCta.variant ?? "solid"} className="w-full sm:w-auto">
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant={secondaryCta.variant ?? "outline"}
            className="w-full sm:w-auto"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
