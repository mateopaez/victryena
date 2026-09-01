import {
  CONTACT_EMAIL,
  SOCIAL_HANDLE,
  STUDIO_LOCATION,
  STUDIO_NAME,
  homeContent,
} from "@/lib/content";

export function ContactInfo() {
  return (
    <div className="mt-2 flex flex-col gap-4 sm:gap-5">
      <div className="flex flex-col gap-1 text-base sm:flex-row sm:gap-3.5">
        <span className="font-semibold text-gold sm:min-w-[90px]">Email</span>
        <a href={`mailto:${CONTACT_EMAIL}`} className="break-all sm:break-normal">
          {CONTACT_EMAIL}
        </a>
      </div>
      <div className="flex flex-col gap-1 text-base sm:flex-row sm:gap-3.5">
        <span className="font-semibold text-gold sm:min-w-[90px]">Social</span>
        <span>
          {SOCIAL_HANDLE} {homeContent.contact.socialDetail}
        </span>
      </div>
      <div className="flex flex-col gap-1 text-base sm:flex-row sm:gap-3.5">
        <span className="font-semibold text-gold sm:min-w-[90px]">Studio</span>
        <span>
          {STUDIO_NAME}, {STUDIO_LOCATION}
        </span>
      </div>
    </div>
  );
}
