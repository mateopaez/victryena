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
      <div id="top" aria-hidden="true" />
      <SiteHeader />
      <PrideBanner />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
