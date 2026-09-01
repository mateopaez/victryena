import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "default" | "small";

const variantClasses: Record<ButtonVariant, string> = {
  solid:
    "border-2 border-gold bg-gold text-on-gold font-bold hover:opacity-85",
  outline:
    "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-on-gold",
  ghost:
    "border-2 border-white/50 bg-transparent text-white hover:border-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-[50px] px-[34px] text-[15px]",
  small: "h-[42px] px-[22px] text-[13px]",
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "solid",
  size = "default",
  type = "button",
  className = "",
  children,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center whitespace-nowrap rounded-[3px] font-semibold tracking-[0.02em] transition-[background,color,opacity,border-color] duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (
      isExternalHref(href) ||
      href.startsWith("mailto:") ||
      href.startsWith("#")
    ) {
      return (
        <a
          href={href}
          className={classes}
          {...(isExternalHref(href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
