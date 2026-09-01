import { Eyebrow } from "@/components/ui/Eyebrow";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageBanner({
  eyebrow,
  title,
  description,
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
      </div>
    </section>
  );
}
