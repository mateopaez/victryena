import Link from "next/link";
import {
  CONTACT_EMAIL,
  SOCIAL_HANDLE,
  STUDIO_LOCATION,
  STUDIO_NAME,
} from "@/lib/content";
import { SocialIcons } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-dark-soft pb-[34px] pt-[70px]">
      <div className="site-wrap">
        <div className="mb-14 grid grid-cols-[1.3fr_1fr_1fr] gap-10 max-nav:grid-cols-2 max-xs:grid-cols-1">
          <div>
            <Link
              href="/"
              className="mb-2.5 inline-block font-script text-[34px] font-bold tracking-[0.01em] text-gold"
            >
              Victryena
            </Link>
            <p className="text-[15px] text-muted">
              Certified Personal Trainer & Online Coach
            </p>
          </div>

          <div>
            <h4 className="mb-[18px] text-[13px] uppercase tracking-[0.1em] text-gold">
              Contact
            </h4>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mb-2.5 block text-[15px] text-muted hover:text-gold"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mb-2.5 text-[15px] text-muted">{SOCIAL_HANDLE}</p>
            <p className="text-[15px] text-muted">
              {STUDIO_NAME}
              <br />
              {STUDIO_LOCATION}
            </p>
          </div>

          <div>
            <h4 className="mb-[18px] text-[13px] uppercase tracking-[0.1em] text-gold">
              Explore
            </h4>
            <Link
              href="/about"
              className="mb-2.5 block text-[15px] text-muted hover:text-gold"
            >
              About
            </Link>
            <Link
              href="/packages"
              className="mb-2.5 block text-[15px] text-muted hover:text-gold"
            >
              Packages
            </Link>
            <Link
              href="/book-online"
              className="mb-2.5 block text-[15px] text-muted hover:text-gold"
            >
              Book Online
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-7 text-[13px] opacity-70 max-xs:flex-col max-xs:items-start">
          <span>© 2026 Victryena. Trans Joy is Trans Strength.</span>
          <SocialIcons variant="footer" />
        </div>
      </div>
    </footer>
  );
}
