import { Eyebrow } from "@/components/ui/Eyebrow";
import { HighlightList } from "@/components/ui/HighlightList";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SplitLayout } from "@/components/ui/SplitLayout";
import { highlightItems, homeContent } from "@/lib/content";

export function HomeOfferSection() {
  const { offer } = homeContent;

  return (
    <section className="section-pad">
      <div className="site-wrap">
        <SplitLayout media={<PlaceholderImage label={offer.imageLabel} />}>
          <Eyebrow>{offer.eyebrow}</Eyebrow>
          <h2 className="mb-6 text-[40px] font-extrabold">{offer.title}</h2>
          <HighlightList items={highlightItems} />
          <p className="max-w-[520px] italic text-muted">
            &ldquo;{offer.quote}&rdquo;
          </p>
        </SplitLayout>
      </div>
    </section>
  );
}
