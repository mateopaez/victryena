import { pricingTiers } from "@/lib/content";
import { PriceCard } from "./PriceCard";

export function PricingGrid() {
  return (
    <div className="mx-auto grid grid-cols-1 items-stretch gap-6 sm:max-w-[460px] lg:max-w-none lg:grid-cols-3 lg:gap-7">
      {pricingTiers.map((tier) => (
        <PriceCard key={tier.name} tier={tier} />
      ))}
    </div>
  );
}
