import { siteContent } from "@/lib/content";

type BundleItem = {
  text: string;
  highlight?: string;
  suffix?: string;
  fine?: string;
};

function BundleListItem({ item }: { item: BundleItem }) {
  return (
    <li className="relative pl-[22px] text-[15px]">
      {item.text}
      {item.highlight ? (
        <>
          {" "}
          <strong className="text-gold">{item.highlight}</strong>
          {item.suffix}
        </>
      ) : null}
      {item.fine ? (
        <span className="mt-0.5 block text-xs italic text-muted">
          {item.fine}
        </span>
      ) : null}
    </li>
  );
}

type DetailItem = {
  text: string;
  highlight?: string;
  suffix?: string;
  fine?: string;
};

function DetailListItem({ item }: { item: DetailItem }) {
  return (
    <li className="relative pl-[22px] text-[15px]">
      {item.text}
      {item.highlight ? (
        <>
          {" "}
          <span className="text-gold">{item.highlight}</span>
          {item.suffix}
        </>
      ) : null}
      {item.fine ? (
        <span className="mt-0.5 block text-xs italic text-muted">
          {item.fine}
        </span>
      ) : null}
    </li>
  );
}

export function InPersonSessions() {
  const { inPerson } = siteContent.packages;

  return (
    <div className="rounded-md bg-purple p-6 sm:p-8 lg:p-11">
      <h2 className="mb-6 text-[clamp(22px,4vw,26px)] font-extrabold sm:mb-8">
        {inPerson.title}{" "}
        <span className="text-gold">{inPerson.titleAccent}</span>{" "}
        {inPerson.titleSuffix}
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr_1fr] lg:gap-10">
        <div className="rounded-md border border-gold-soft bg-dark p-6 text-center">
          <div className="mb-2.5 text-[13px] font-bold text-muted">
            {inPerson.sessionPrice.label}
          </div>
          <div className="font-display text-[40px] font-extrabold leading-none text-gold">
            {inPerson.sessionPrice.price}
          </div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.1em] text-muted">
            {inPerson.sessionPrice.period}
          </div>
        </div>

        <ul className="addon-list flex flex-col gap-3.5">
          {inPerson.bundles.map((item) => (
            <BundleListItem key={item.text} item={item} />
          ))}
        </ul>

        <ul className="addon-list flex flex-col gap-3.5">
          {inPerson.details.map((item) => (
            <DetailListItem key={item.text} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
