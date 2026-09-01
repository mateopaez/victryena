import type { PricingTier } from "@/lib/content";

type PriceCardProps = {
  tier: PricingTier;
};

function FeatureText({ text }: { text: string }) {
  const highlighted = ["Structured", "Limited", "Customized", "Direct", "Dynamic", "Priority"];
  const match = highlighted.find((word) => text.includes(word));

  if (!match) {
    return <span>{text}</span>;
  }

  const parts = text.split(match);
  return (
    <span>
      {parts[0]}
      <span className="font-medium">{match}</span>
      {parts[1]}
    </span>
  );
}

export function PriceCard({ tier }: PriceCardProps) {
  return (
    <div
      className={`flex flex-col rounded-md border border-white/12 bg-purple px-6 py-8 text-center sm:px-8 sm:py-10 ${
        tier.featured
          ? "border-2 border-gold shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
          : ""
      }`}
    >
      <div className="mb-1.5 text-2xl font-extrabold">{tier.name}</div>
      <div className="mb-[22px] text-sm font-normal italic text-muted">
        {tier.tagline}
      </div>
      <div className="font-display text-[clamp(36px,8vw,48px)] font-extrabold leading-none text-gold">
        {tier.price}
      </div>
      <div className="my-2.5 text-xs uppercase tracking-[0.12em] text-muted">
        {tier.period}
      </div>
      <div className="mb-[18px] border-t border-white/20 pt-5 text-sm text-white">
        {tier.description}
      </div>
      <ul className="tier-feature-list mb-5 flex grow flex-col gap-2.5 border-t border-white/20 pt-5 text-left">
        {tier.features.map((feature) => {
          const isAddon = feature.startsWith("+ ");
          const text = isAddon ? feature.slice(2) : feature;

          return (
            <li
              key={feature}
              className={`flex gap-2 text-sm text-white${isAddon ? " tier-feature-addon" : ""}`}
            >
              <FeatureText text={text} />
            </li>
          );
        })}
      </ul>
      <div className="border-t border-white/20 pt-[18px] text-left text-[13px] text-muted">
        {"supported" in tier.rates ? (
          <>
            <div className="mb-1">
              Supported Rate:{" "}
              <b className="text-gold">{tier.rates.supported}</b> / month
            </div>
            <div>
              Supporter Rate:{" "}
              <b className="text-gold">{tier.rates.supporter}</b> / month
            </div>
          </>
        ) : (
          tier.rates.note
        )}
      </div>
    </div>
  );
}
