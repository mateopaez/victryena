import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SplitLayout } from "@/components/ui/SplitLayout";
import { aboutContent } from "@/lib/content";

export function AboutIntroSection() {
  const { intro } = aboutContent;

  return (
    <section className="section-pad pt-10 sm:pt-14 lg:pt-20">
      <div className="site-wrap">
        <Eyebrow>{intro.eyebrow}</Eyebrow>
        <SplitLayout
          media={
            <PlaceholderImage
              label={intro.imageLabel}
              className="aspect-[4/5]"
            />
          }
        >
          <h2 className="section-heading mb-6">{intro.title}</h2>
          {intro.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-7 max-w-[520px] text-base font-light text-muted"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href={intro.link.href}
            className="inline-block border-b border-gold pb-1 text-[15px] font-semibold tracking-[0.02em] text-gold"
          >
            {intro.link.label}
          </Link>
        </SplitLayout>
      </div>
    </section>
  );
}
