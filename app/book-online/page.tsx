import type { Metadata } from "next";
import { BookOnlinePageContent } from "@/components/book-online/BookOnlinePageContent";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "Book Online",
};

export default function BookOnlinePage() {
  return (
    <SiteShell headerAction="email">
      <BookOnlinePageContent />
    </SiteShell>
  );
}
