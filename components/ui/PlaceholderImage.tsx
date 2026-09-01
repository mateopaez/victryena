type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div className={`ph-img ${className}`}>
      <span className="ph-img-label">{label}</span>
    </div>
  );
}
