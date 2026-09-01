import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

type SocialIconsProps = {
  variant?: "hero" | "footer";
};

const links = [
  { href: "#", label: "Instagram", Icon: FaInstagram },
  { href: "#", label: "X (Twitter)", Icon: FaXTwitter },
  { href: "#", label: "Bluesky", Icon: SiBluesky },
] as const;

export function SocialIcons({ variant = "footer" }: SocialIconsProps) {
  const isHero = variant === "hero";

  return (
    <span
      className={`inline-flex ${isHero ? "gap-2.5" : "gap-4"}`}
      aria-label="Follow @victryena"
    >
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={
            isHero
              ? "inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/40 text-xs hover:border-gold hover:text-gold"
              : "flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm hover:border-gold hover:bg-gold hover:text-on-gold"
          }
        >
          <Icon aria-hidden className={isHero ? "h-3 w-3" : "h-3.5 w-3.5"} />
        </a>
      ))}
    </span>
  );
}
