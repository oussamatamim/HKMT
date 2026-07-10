"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NAV_ITEMS = [
  { key: "home", href: "#hero" },
  { key: "services", href: "#services" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/80 backdrop-blur-xl transition-shadow duration-300 ease-editorial ${
        scrolled ? "border-navy/10 shadow-[0_1px_0_0_rgba(27,55,100,0.06)]" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ease-editorial lg:px-8 ${
          scrolled ? "py-2.5" : "py-3"
        }`}
      >
        <a href="#hero" className="focus-ring flex items-center gap-2 rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no LCP concern */}
          <img src="/hkmt-logo.svg" alt="HKMT Solutions" className="h-8 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="focus-ring group relative rounded-sm text-[0.82rem] font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {t(item.key)}
              <span className="absolute -bottom-1 start-0 h-px w-0 bg-orange transition-all duration-300 ease-editorial group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher variant="light" />
          <a
            href="#contact"
            className="focus-ring inline-flex items-center rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-light"
          >
            {t("contact")}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring flex items-center justify-center p-2 text-navy md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-sm px-2 py-2.5 text-base font-medium text-navy hover:text-orange"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-navy/10 px-2 pt-4">
              <LanguageSwitcher variant="light" />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex items-center bg-orange px-5 py-2.5 text-sm font-semibold text-white"
              >
                {t("contact")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
