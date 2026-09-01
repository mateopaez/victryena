import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { bookOnlineContent } from "@/lib/content";

export function BookingOptions() {
  const { options } = bookOnlineContent;

  return (
    <div className="mb-[70px] grid grid-cols-2 gap-8 max-nav:grid-cols-1">
      {options.map((option) => (
        <div
          key={option.title}
          className="rounded-md border border-white/15 p-9"
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
