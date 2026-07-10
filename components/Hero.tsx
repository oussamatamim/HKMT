import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative isolate min-h-[39rem] overflow-hidden bg-navy sm:min-h-[43rem] lg:min-h-[46rem]">
      <Image
        src="/consulting-office.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-105 object-cover object-center blur-[1.5px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,38,71,0.96)_0%,rgba(18,38,71,0.88)_38%,rgba(18,38,71,0.52)_68%,rgba(18,38,71,0.35)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(0deg,rgba(18,38,71,0.76),transparent)]" />

      <Container className="relative flex min-h-[39rem] items-end pb-16 pt-32 sm:min-h-[43rem] sm:pb-20 lg:min-h-[46rem] lg:pb-24">
        <div className="max-w-3xl border-s-2 border-orange ps-6 sm:ps-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-light">
            {t("badge")}
          </span>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{t("text")}</p>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-base font-semibold text-white sm:text-lg">
            <a href="#contact" className="focus-ring inline-flex items-center gap-1 transition-colors hover:text-orange-light">
              {t("ctaPrimary")} <span aria-hidden="true">›</span>
            </a>
            <a href="#services" className="focus-ring inline-flex items-center gap-1 transition-colors hover:text-orange-light">
              {t("ctaSecondary")} <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
