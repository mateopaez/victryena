import { SocialIcons } from "@/components/layout/SocialIcons";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, navLinks, signUpCta } from "@/lib/content";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <>
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-30 bg-dark/70 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`hero-gradient fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto transition-all duration-300 ease-out lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="site-wrap flex min-h-full flex-col py-8 sm:py-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold opacity-85">
            Menu
          </p>

          <ul className="flex flex-col">
            {navLinks.map(({ href, label }, index) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 border-b border-white/10 py-5 transition-colors hover:border-gold/25 sm:py-6"
                  style={{
                    transitionDelay: open ? `${index * 60 + 80}ms` : "0ms",
                  }}
                >
                  <span
                    className="shrink-0 text-[17px] leading-none text-gold/55 transition-colors group-hover:text-gold"
                    aria-hidden="true"
                  >
                    ♡
                  </span>
                  <span className="text-[clamp(16px,4.5vw,20px)] font-extrabold leading-none tracking-[0.01em] transition-colors group-hover:text-gold">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto border-t border-white/10 pt-8">
            <Button href={signUpCta.href} className="mb-6 w-full">
              {signUpCta.label}
            </Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mb-5 block text-center text-sm font-medium text-muted transition-colors hover:text-gold"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex justify-center">
              <SocialIcons variant="hero" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

type NavToggleProps = {
  open: boolean;
  onClick: () => void;
};

export function NavToggle({ open, onClick }: NavToggleProps) {
  return (
    <button
      type="button"
      id="nav-toggle"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-nav"
      className="relative ml-auto inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center border-none bg-transparent lg:hidden"
      onClick={onClick}
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span
        className={`absolute block h-0.5 w-[22px] rounded-full bg-white transition-all duration-300 ease-out ${
          open ? "translate-y-0 rotate-45" : "-translate-y-[7px] rotate-0"
        }`}
      />
      <span
        className={`absolute block h-0.5 w-[22px] rounded-full bg-white transition-all duration-300 ease-out ${
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        }`}
      />
      <span
        className={`absolute block h-0.5 w-[22px] rounded-full bg-white transition-all duration-300 ease-out ${
          open ? "translate-y-0 -rotate-45" : "translate-y-[7px] rotate-0"
        }`}
      />
    </button>
  );
}
