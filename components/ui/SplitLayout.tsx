import type { ReactNode } from "react";

type SplitLayoutProps = {
  children: ReactNode;
  media: ReactNode;
  gap?: "default" | "compact";
  mediaFirst?: boolean;
};

export function SplitLayout({
  children,
  media,
  gap = "default",
  mediaFirst = true,
}: SplitLayoutProps) {
  const gapClass =
    gap === "compact"
      ? "gap-10 lg:gap-[60px]"
      : "gap-10 lg:gap-20";

  const contentOrder = mediaFirst
    ? "order-2 lg:order-1"
    : "order-1";
  const mediaOrder = mediaFirst
    ? "order-1 lg:order-2"
    : "order-2";

  return (
    <div
      className={`grid grid-cols-1 items-center ${gapClass} lg:grid-cols-2`}
    >
      <div className={contentOrder}>{children}</div>
      <div className={mediaOrder}>{media}</div>
    </div>
  );
}
