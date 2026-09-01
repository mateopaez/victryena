import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { bookOnlineContent } from "@/lib/content";

export function BookingOptions() {
  const { options } = bookOnlineContent;

  return (
    <div className="mb-12 grid grid-cols-1 gap-6 sm:mb-[70px] sm:gap-8 lg:grid-cols-2">
      {options.map((option) => (
        <div
          key={option.title}
          className="rounded-md border border-white/15 p-6 sm:p-9"
        >
          <Eyebrow>{option.eyebrow}</Eyebrow>
          <h3 className="mb-3 text-[22px] font-extrabold">{option.title}</h3>
          <p className="mb-5 text-[15px] text-muted">{option.description}</p>
          <Button href={option.cta.href} variant="outline" size="small">
            {option.cta.label}
          </Button>
        </div>
      ))}
    </div>
  );
}
