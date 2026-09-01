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
        <h2 className="mb-6 text-[40px] font-extrabold">{title}</h2>
        <div className="flex flex-wrap justify-center gap-[18px]">
          <Button href={primaryCta.href} variant={primaryCta.variant ?? "solid"}>
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant={secondaryCta.variant ?? "outline"}
          >
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
