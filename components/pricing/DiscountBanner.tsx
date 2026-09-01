import { packagesContent } from "@/lib/content";

export function DiscountBanner() {
  const { discounts } = packagesContent;

  return (
    <div className="my-8 flex flex-col items-start gap-4 rounded-md border border-gold-soft bg-dark-soft px-5 py-5 sm:my-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8 sm:gap-y-3 sm:px-9 sm:py-6">
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
