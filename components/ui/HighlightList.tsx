type HighlightItem = {
  bold: string;
  rest?: string;
};

type HighlightListProps = {
  items: HighlightItem[];
  className?: string;
};

export function HighlightList({ items, className = "" }: HighlightListProps) {
  return (
    <ul className={`mb-8 flex flex-col gap-4 ${className}`}>
      {items.map((item) => (
        <li
          key={item.bold}
          className="flex items-start gap-3 text-base text-muted"
        >
          <span className="shrink-0 text-[17px] leading-normal text-gold">
            ♡
          </span>
          <span>
            <strong className="font-semibold text-white">{item.bold}</strong>
            {item.rest ? ` ${item.rest}` : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
