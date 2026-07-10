import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="border-t border-stone-200 bg-[#f5f5f7] py-12 text-navy">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-[1.1fr_1fr_auto] md:items-start md:text-start">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no LCP concern */}
            <img
              src="/hkmt-logo.svg"
              alt="HKMT Solutions"
              className="mx-auto h-10 w-auto md:mx-0"
            />
            <p className="mt-3 text-sm text-stone-600">{t("tagline")}</p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-medium text-stone-600 md:justify-start"
          >
            <a href="#hero" className="focus-ring transition-colors hover:text-navy">
              {tNav("home")}
            </a>
            <a href="#services" className="focus-ring transition-colors hover:text-navy">
              {tNav("services")}
            </a>
            <a href="#about" className="focus-ring transition-colors hover:text-navy">
              {tNav("about")}
            </a>
            <a href="#contact" className="focus-ring transition-colors hover:text-navy">
              {tNav("contact")}
            </a>
          </nav>

          <a
            href={`mailto:${tContact("email")}`}
            className="focus-ring text-sm font-medium text-stone-600 transition-colors hover:text-navy"
          >
            {tContact("email")}
          </a>
        </div>

        <p className="mt-12 border-t border-stone-300 pt-6 text-center text-xs text-stone-500">
          {t("copyright")}
        </p>
      </Container>
    </footer>
  );
}
