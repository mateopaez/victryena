type TestimonialCardProps = {
  name: string;
  quote: string;
};

export function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <div className="rounded border border-white/8 bg-dark-soft p-8 text-left">
      <div className="mb-2.5 text-4xl font-extrabold leading-none text-gold">
        &ldquo;
      </div>
      <h3 className="mb-3 text-lg font-extrabold">{name}</h3>
      <p className="text-[15px] font-light italic text-muted">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}
