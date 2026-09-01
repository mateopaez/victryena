import { pricingTiers } from "@/lib/content";
import { PriceCard } from "./PriceCard";

export function PricingGrid() {
  return (
    <div className="mx-auto grid grid-cols-3 items-stretch gap-7 max-nav:max-w-[460px] max-nav:grid-cols-1">
      {pricingTiers.map((tier) => (
        <PriceCard key={tier.name} tier={tier} />
      ))}
    </div>
  );
}
