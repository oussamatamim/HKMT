"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  fr: "FR",
  en: "EN",
};

export default function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleSelect(nextLocale: string) {
    setOpen(false);
    router.replace(pathname, { locale: nextLocale });
  }

  const buttonStyles =
    variant === "light"
      ? "text-navy/80 hover:text-navy"
      : "text-white/80 hover:text-white";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("label")}
        onClick={() => setOpen((v) => !v)}
        className={`focus-ring flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors ${buttonStyles}`}
      >
        {LOCALE_LABELS[locale]}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t("label")}
          className="absolute end-0 z-50 mt-3 min-w-[6rem] border border-navy/10 bg-white py-1 shadow-card"
        >
          {routing.locales.map((loc) => (
            <li key={loc}>
              <button
                type="button"
                role="option"
                aria-selected={loc === locale}
                onClick={() => handleSelect(loc)}
                className={`focus-ring block w-full px-4 py-2 text-start text-sm transition-colors hover:bg-cream ${
                  loc === locale ? "font-semibold text-orange" : "text-navy"
                }`}
              >
                {LOCALE_LABELS[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
