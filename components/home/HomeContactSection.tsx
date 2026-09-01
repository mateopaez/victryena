import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SplitLayout } from "@/components/ui/SplitLayout";
import { homeContent } from "@/lib/content";

export function HomeContactSection() {
  const { contact } = homeContent;

  return (
    <section className="section-pad">
      <div className="site-wrap">
        <SplitLayout
          gap="compact"
          media={
            <PlaceholderImage
              label={contact.imageLabel}
              className="aspect-[4/5]"
            />
          }
        >
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 className="section-heading mb-4">{contact.title}</h2>
          <p className="mb-9 max-w-[460px] text-base font-light text-muted">
            {contact.description}
          </p>
          <ContactInfo />
          <ContactForm />
        </SplitLayout>
      </div>
    </section>
  );
}
