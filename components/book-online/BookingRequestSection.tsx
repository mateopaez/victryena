import { ContactForm } from "@/components/forms/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SplitLayout } from "@/components/ui/SplitLayout";
import { bookOnlineContent } from "@/lib/content";

export function BookingRequestSection() {
  const { request } = bookOnlineContent;

  return (
    <SplitLayout
      media={
        <PlaceholderImage
          label={request.imageLabel}
          className="aspect-[4/5]"
        />
      }
    >
      <Eyebrow>{request.eyebrow}</Eyebrow>
      <h2 className="section-heading mb-6">{request.title}</h2>
      <p className="mb-7 max-w-[520px] text-base font-light text-muted">
        {request.description}
      </p>
      <ContactForm showPackageField />
    </SplitLayout>
  );
}
