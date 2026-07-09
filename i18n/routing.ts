import { defineRouting } from "next-intl/routing";

export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
