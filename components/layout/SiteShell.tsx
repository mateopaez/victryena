import type { ReactNode } from "react";
import { PrideBanner } from "./PrideBanner";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type SiteShellProps = {
  children: ReactNode;
  headerAction?: "book" | "email";
};

export function SiteShell({ children, headerAction = "book" }: SiteShellProps) {
  return (
    <>
      <SiteHeader action={headerAction} />
      <PrideBanner />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
