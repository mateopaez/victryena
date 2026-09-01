import { packagesContent } from "@/lib/content";

export function DiscountBanner() {
  const { discounts } = packagesContent;

  return (
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-md border border-gold-soft bg-dark-soft px-9 py-[26px] max-xs:flex-col max-xs:items-start">
      <h3 className="text-lg uppercase tracking-[0.04em]">
        {discounts.title}
        <span className="mt-1 block text-[13px] font-normal normal-case italic tracking-normal text-muted">
          {discounts.note}
        </span>
      </h3>
      <div className="flex flex-wrap gap-8 text-base">
        {discounts.tiers.map((tier) => (
          <span key={tier.duration}>
            {tier.duration}: <b className="text-gold">{tier.discount}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
