import { PageBanner } from "@/components/sections/PageBanner";
import { BookingOptions } from "@/components/book-online/BookingOptions";
import { BookingRequestSection } from "@/components/book-online/BookingRequestSection";
import { bookOnlineContent } from "@/lib/content";

export function BookOnlinePageContent() {
  const { banner } = bookOnlineContent;

  return (
    <>
      <PageBanner
        eyebrow={banner.eyebrow}
        title={banner.title}
        description={banner.description}
      />

      <section className="section-pad">
        <div className="site-wrap">
          <BookingOptions />
          <BookingRequestSection />
        </div>
      </section>
    </>
  );
}
