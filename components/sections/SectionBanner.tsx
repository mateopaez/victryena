import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tag?: string;
  className?: string;
};

export function SectionBanner({
  eyebrow,
  title,
  description,
  tag,
  className = "hero-gradient pb-6 pt-10 text-center sm:pb-[30px] sm:pt-14 lg:pt-20",
}: SectionBannerProps) {
  return (
    <div className={className}>
      <div className="site-wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-[clamp(34px,5vw,54px)] font-extrabold">{title}</h2>
        {description ? (
          <p className="mx-auto mt-[22px] max-w-[680px] text-base font-light text-muted">
            {description}
          </p>
        ) : null}
        {tag ? (
          <span className="mt-5 inline-block rounded border-[1.5px] border-gold px-3 py-1.5 text-[15px] font-extrabold uppercase tracking-[0.06em] text-gold">
            {tag}
          </span>
        ) : null}
      </div>
    </div>
  );
}
