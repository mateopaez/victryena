"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-purple">
      <div className="site-wrap flex h-[90px] items-center justify-between">
        <Link href="/" className="font-script text-[34px] font-bold tracking-[0.01em] text-gold">
          Victryena
        </Link>

        <nav
          id="main-nav"
          className={`max-nav:fixed max-nav:inset-x-0 max-nav:top-[90px] max-nav:bottom-0 max-nav:flex-col max-nav:bg-purple max-nav:p-8 ${navOpen ? "max-nav:flex" : "max-nav:hidden"} flex`}
        >
          <ul className="flex gap-12 max-nav:flex-col max-nav:gap-7">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setNavOpen(false)}
                    className={`text-sm font-medium tracking-[0.02em] opacity-90 transition-opacity hover:opacity-100 ${isActive ? "border-b border-gold opacity-100" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 text-sm">
          {action === "email" ? (
            <Button href={`mailto:${CONTACT_EMAIL}`} size="small">
              Email Me
            </Button>
          ) : (
            <Button href="/book-online" size="small">
              Book a Session
            </Button>
          )}
        </div>

        <button
          type="button"
          id="nav-toggle"
          aria-label="Toggle menu"
          className="hidden cursor-pointer border-none bg-transparent text-[26px] text-white max-nav:inline-flex"
          onClick={() => setNavOpen((open) => !open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
