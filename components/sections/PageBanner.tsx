import { Eyebrow } from "@/components/ui/Eyebrow";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tag?: string;
  className?: string;
};

export function PageBanner({
  eyebrow,
  title,
  description,
  tag,
  className = "hero-gradient pb-[30px] pt-20 text-center",
}: PageBannerProps) {
  return (
    <section className={className}>
      <div className="site-wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-[clamp(34px,5vw,54px)] font-extrabold">{title}</h1>
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
    </section>
  );
}
