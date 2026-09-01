"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/content";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/book-online", label: "Book Online" },
];

type SiteHeaderProps = {
  action?: "book" | "email";
};

export function SiteHeader({ action = "book" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const ctaButton =
    action === "email" ? (
      <Button href={`mailto:${CONTACT_EMAIL}`} size="small">
        Email Me
      </Button>
    ) : (
      <Button href="/book-online" size="small">
        Book a Session
      </Button>
    );

  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-purple">
      <div className="site-wrap flex h-16 items-center gap-4 lg:h-[90px]">
        <Link
          href="/"
          className="shrink-0 font-script text-[26px] font-bold tracking-[0.01em] text-gold sm:text-[30px] lg:text-[34px]"
        >
          Victryena
        </Link>

        <nav id="main-nav" className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul className="flex gap-12">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium tracking-[0.02em] opacity-90 transition-opacity hover:opacity-100 ${isActive ? "border-b border-gold opacity-100" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:flex">{ctaButton}</div>

        <button
          type="button"
          id="nav-toggle"
          aria-label={navOpen ? "Close menu" : "Open menu"}
          aria-expanded={navOpen}
          aria-controls="mobile-nav"
          className="ml-auto inline-flex cursor-pointer items-center justify-center border-none bg-transparent p-1 text-2xl text-white lg:hidden"
          onClick={() => setNavOpen((open) => !open)}
        >
          {navOpen ? "✕" : "☰"}
        </button>
      </div>

      {navOpen ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto bg-purple p-6 sm:p-8 lg:hidden"
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setNavOpen(false)}
                    className={`text-lg font-medium tracking-[0.02em] opacity-90 transition-opacity hover:opacity-100 ${isActive ? "text-gold opacity-100" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">{ctaButton}</div>
        </nav>
      ) : null}
    </header>
  );
}
