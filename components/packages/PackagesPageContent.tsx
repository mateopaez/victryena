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
        tag={pricing.onlineTag}
        className="bg-dark pb-8 pt-10 text-center sm:pb-10 sm:pt-14 lg:pt-20"
      />

      <section className="pb-14 sm:pb-16 lg:pb-[100px]">
        <div className="site-wrap">
          <PricingGrid />
          <DiscountBanner />
          <InPersonSessions />

          <p className="mt-6 text-left text-[13px] italic text-muted sm:text-right">
            {pricing.priceNote}
          </p>

          <div className="mt-8 text-center">
            <Button href={pricing.bookCta.href} variant="outline">
              {pricing.bookCta.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}2
