import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  return (
    <footer className="border-t-4 border-orange bg-navy py-14 text-white">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-[1.1fr_1fr_auto] md:items-start md:text-start">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, no LCP concern */}
            <img
              src="/hkmt-logo-white.svg"
              alt="HKMT Solutions"
              className="mx-auto h-10 w-auto md:mx-0"
            />
            <p className="mt-3 text-sm text-white/70">{t("tagline")}</p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-medium text-white/80 md:justify-start"
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

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          {t("copyright")}
        </p>
      </Container>
    </footer>
  );
}
