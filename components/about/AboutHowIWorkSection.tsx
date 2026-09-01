import { Eyebrow } from "@/components/ui/Eyebrow";
import { HighlightList } from "@/components/ui/HighlightList";
import { aboutContent, aboutHighlightItems } from "@/lib/content";

export function AboutHowIWorkSection() {
  const { howIWork } = aboutContent;

  return (
    <section className="section-pad pt-0">
      <div className="site-wrap">
        <Eyebrow>{howIWork.eyebrow}</Eyebrow>
        <h2 className="section-heading mb-6 sm:mb-8">{howIWork.title}</h2>
        <HighlightList
          items={aboutHighlightItems}
          className="max-w-[640px]"
        />
      </div>
    </section>
  );
}
