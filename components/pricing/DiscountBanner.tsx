import { packagesContent } from "@/lib/content";

export function DiscountBanner() {
  const { discounts } = packagesContent;

  return (
    <div className="my-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 rounded-md border border-gold-soft bg-dark-soft px-9 py-6 max-xs:flex-col max-xs:items-start">
      <div>
        <h3 className="text-lg leading-tight uppercase tracking-[0.04em]">
          {discounts.title}
        </h3>
        <p className="mt-1 text-[13px] leading-snug font-normal italic text-muted">
          {discounts.note}
        </p>
      </div>
      <div className="flex flex-wrap gap-8 text-base leading-tight">
        {discounts.tiers.map((tier) => (
          <span key={tier.duration}>
            {tier.duration}: <b className="text-gold">{tier.discount}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
