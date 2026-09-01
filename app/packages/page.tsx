import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PackagesPageContent } from "@/components/packages/PackagesPageContent";

export const metadata: Metadata = {
  title: "Packages",
};

export default function PackagesPage() {
  return (
    <SiteShell>
      <PackagesPageContent />
    </SiteShell>
  );
}
