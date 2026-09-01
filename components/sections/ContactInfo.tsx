import {
  CONTACT_EMAIL,
  SOCIAL_HANDLE,
  STUDIO_LOCATION,
  STUDIO_NAME,
  homeContent,
} from "@/lib/content";

export function ContactInfo() {
  return (
    <div className="mt-2 flex flex-col gap-5">
      <div className="flex gap-3.5 text-base">
        <span className="min-w-[90px] font-semibold text-gold">Email</span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
      <div className="flex gap-3.5 text-base">
        <span className="min-w-[90px] font-semibold text-gold">Social</span>
        <span>
          {SOCIAL_HANDLE} {homeContent.contact.socialDetail}
        </span>
      </div>
      <div className="flex gap-3.5 text-base">
        <span className="min-w-[90px] font-semibold text-gold">Studio</span>
        <span>
          {STUDIO_NAME}, {STUDIO_LOCATION}
        </span>
      </div>
    </div>
  );
}
