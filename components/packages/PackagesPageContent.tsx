import { PageBanner } from "@/components/sections/PageBanner";
import { DiscountBanner } from "@/components/pricing/DiscountBanner";
import { InPersonSessions } from "@/components/pricing/InPersonSessions";
import { PricingGrid } from "@/components/pricing/PricingGrid";
import { Button } from "@/components/ui/Button";
import { packagesContent } from "@/lib/content";

export function PackagesPageContent() {
  const { banner, pricing } = packagesContent;

  return (
    <>
      <PageBanner
        eyebrow={banner.eyebrow}
        title={banner.title}
        description={banner.description}
      />

      <section className="pt-[60px] pb-[100px] max-nav:pb-[72px]">
        <div className="site-wrap">
          <div className="mb-14 text-center">
            <h1 className="inline-block text-[clamp(28px,4vw,48px)] font-extrabold">
              {pricing.title}{" "}
              <span className="ml-3.5 inline-block rounded border-[1.5px] border-gold px-3 py-1.5 align-middle text-[15px] font-extrabold uppercase tracking-[0.06em] text-gold max-xs:mx-auto max-xs:mt-3.5 max-xs:block max-xs:w-fit">
                {pricing.onlineTag}
              </span>
            </h1>
          </div>

          <PricingGrid />
          <DiscountBanner />
          <InPersonSessions />

          <p className="mt-6 text-right text-[13px] italic text-muted">
            {pricing.priceNote}
          </p>

          <div className="mt-[60px] text-center">
            <Button href={pricing.bookCta.href} variant="outline">
              {pricing.bookCta.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
