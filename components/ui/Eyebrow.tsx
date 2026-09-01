import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`mb-[18px] block text-sm font-semibold uppercase tracking-[0.18em] opacity-85 ${className}`}
    >
      {children}
    </span>
  );
}
