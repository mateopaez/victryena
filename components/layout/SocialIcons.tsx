import { SOCIAL_HANDLE, socialLinks } from "@/lib/content";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

type SocialIconsProps = {
  variant?: "hero" | "footer";
};

const iconByLabel = {
  Instagram: FaInstagram,
  "X (Twitter)": FaXTwitter,
  Bluesky: SiBluesky,
} as const;

export function SocialIcons({ variant = "footer" }: SocialIconsProps) {
  const isHero = variant === "hero";

  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`inline-flex ${isHero ? "gap-2.5" : "gap-4"}`}
        aria-label={`Follow ${SOCIAL_HANDLE}`}
      >
        {socialLinks.map(({ href, label }) => {
          const Icon = iconByLabel[label];

          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SOCIAL_HANDLE} on ${label}`}
              className={
                isHero
                  ? "inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/40 text-xs hover:border-gold hover:text-gold"
                  : "flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm hover:border-gold hover:bg-gold hover:text-on-gold"
              }
            >
              <Icon aria-hidden className={isHero ? "h-3 w-3" : "h-3.5 w-3.5"} />
            </a>
          );
        })}
      </span>
      <span>{SOCIAL_HANDLE}</span>
    </span>
  );
}
