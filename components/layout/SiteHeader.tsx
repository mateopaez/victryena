"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navLinks, signUpCta } from "@/lib/content";

export function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-purple">
      <div className="site-wrap flex h-16 items-center gap-4 lg:h-[90px]">
        <a
          href="#top"
          className="shrink-0 font-script text-[26px] font-bold tracking-[0.01em] text-gold sm:text-[30px] lg:text-[34px]"
        >
          Victryena
        </a>

        <nav id="main-nav" className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul className="flex gap-12">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium tracking-[0.02em] opacity-90 transition-opacity hover:opacity-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:flex">
          <Button href={signUpCta.href} size="small">
            {signUpCta.label}
          </Button>
        </div>

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
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeNav}
                  className="text-lg font-medium tracking-[0.02em] opacity-90 transition-opacity hover:opacity-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={signUpCta.href} size="small">
              {signUpCta.label}
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
