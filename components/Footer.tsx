import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="border-t border-navy/10 bg-navy py-12 text-white">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-start">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no LCP concern */}
            <img
              src="/hkmt-logo-white.svg"
              alt="HKMT Solutions"
              className="mx-auto h-9 w-auto sm:mx-0"
            />
            <p className="mt-3 text-sm text-white/70">{t("tagline")}</p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-medium text-white/80 sm:justify-start"
          >
            <a href="#hero" className="focus-ring transition-colors hover:text-orange">
              {tNav("home")}
            </a>
            <a href="#services" className="focus-ring transition-colors hover:text-orange">
              {tNav("services")}
            </a>
            <a href="#about" className="focus-ring transition-colors hover:text-orange">
              {tNav("about")}
            </a>
            <a href="#contact" className="focus-ring transition-colors hover:text-orange">
              {tNav("contact")}
            </a>
          </nav>

          <a
            href={`mailto:${tContact("email")}`}
            className="focus-ring text-sm font-medium text-white/80 transition-colors hover:text-orange"
          >
            {tContact("email")}
          </a>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          {t("copyright")}
        </p>
      </Container>
    </footer>
  );
}
