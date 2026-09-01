import { testimonials, testimonialsContent } from "@/lib/content";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  const { eyebrow, title, description } = testimonialsContent;

  return (
    <section className="section-pad text-center">
      <div className="site-wrap">
        <div className="mx-auto mb-[70px] max-w-[720px]">
          <span className="mb-[18px] block text-sm font-semibold uppercase tracking-[0.18em] opacity-85">
            {eyebrow}
          </span>
          <h2 className="mb-5 text-[40px] font-extrabold">{title}</h2>
          <p className="text-base font-light text-muted">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-10 text-left max-nav:grid-cols-1 max-nav:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name + testimonial.quote.slice(0, 20)}
              name={testimonial.name}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
