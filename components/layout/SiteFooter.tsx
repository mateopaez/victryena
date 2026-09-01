import {
  CONTACT_EMAIL,
  STUDIO_LOCATION,
  STUDIO_NAME,
  navLinks,
  signUpCta,
} from "@/lib/content";
import { SocialIcons } from "./SocialIcons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-dark-soft pb-8 pt-12 sm:pb-[34px] sm:pt-[70px]">
      <div className="site-wrap">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:mb-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              className="mb-2.5 inline-block font-script text-[34px] font-bold tracking-[0.01em] text-gold"
            >
              Victryena
            </a>
            <p className="text-[15px] text-muted">
              Certified Personal Trainer & Lover of Feet
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
            <div className="mb-2.5">
              <SocialIcons variant="hero" />
            </div>
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
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="mb-2.5 block text-[15px] text-muted hover:text-gold"
              >
                {label}
              </a>
            ))}
            <a
              href={signUpCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2.5 block text-[15px] text-muted hover:text-gold"
            >
              {signUpCta.label}
            </a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 text-[13px] opacity-70 sm:pt-7">
          <span>© 2026 Victryena. Trans Joy is Trans Strength.</span>
        </div>
      </div>
    </footer>
  );
}
