import type { ReactNode } from "react";
import { PrideBanner } from "./PrideBanner";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <SiteHeader />
      <PrideBanner />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
