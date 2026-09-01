"use client";

import { useEffect, useState } from "react";
import { MobileNav, NavToggle } from "@/components/layout/MobileNav";
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

  useEffect(() => {
    if (!navOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/12 bg-purple">
      <div className="site-wrap flex h-16 items-center gap-4 lg:h-[90px]">
        <a
          href="#top"
          onClick={closeNav}
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

        <NavToggle open={navOpen} onClick={() => setNavOpen((open) => !open)} />
      </div>

      <MobileNav open={navOpen} onClose={closeNav} />
    </header>
  );
}
