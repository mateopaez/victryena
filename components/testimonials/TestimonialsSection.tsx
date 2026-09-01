import { testimonials, testimonialsContent } from "@/lib/content";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  const { eyebrow, title, description } = testimonialsContent;

  return (
    <section className="text-center">
      <div className="site-wrap">
        <div className="mx-auto mb-10 max-w-[720px] sm:mb-[70px]">
          <span className="mb-[18px] block text-sm font-semibold uppercase tracking-[0.18em] opacity-85">
            {eyebrow}
          </span>
          <h2 className="section-heading mb-5">{title}</h2>
          <p className="text-base font-light text-muted">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 text-left sm:gap-8 lg:grid-cols-3 lg:gap-10">
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
