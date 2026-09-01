import { ContactInfo } from "@/components/sections/ContactInfo";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SplitLayout } from "@/components/ui/SplitLayout";
import { signUpCta, siteContent } from "@/lib/content";

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contact" className="section-pad">
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
          <div className="mb-9 max-w-[460px] text-base font-light text-muted">
            {contact.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <ContactInfo />
          <Button href={signUpCta.href} className="mt-9">
            {signUpCta.label}
          </Button>
        </SplitLayout>
      </div>
    </section>
  );
}
