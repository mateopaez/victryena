import type { ReactNode } from "react";

type SplitLayoutProps = {
  children: ReactNode;
  media: ReactNode;
  gap?: "default" | "compact";
};

export function SplitLayout({
  children,
  media,
  gap = "default",
}: SplitLayoutProps) {
  const gapClass =
    gap === "compact"
      ? "gap-[60px] max-nav:gap-12"
      : "gap-20 max-nav:gap-12";

  return (
    <div
      className={`grid grid-cols-2 items-center ${gapClass} max-nav:grid-cols-1`}
    >
      <div>{children}</div>
      <div>{media}</div>
    </div>
  );
}
