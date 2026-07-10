import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="overflow-hidden bg-[#fbfbfd] px-4 pb-4 pt-16 sm:px-6 sm:pb-6 lg:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-dark">
          {t("badge")}
        </span>
        <h1 className="mt-5 font-serif text-5xl font-medium leading-[0.98] tracking-tight text-navy sm:text-6xl lg:text-7xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-stone-700 sm:text-xl">
          {t("text")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-base font-semibold text-navy sm:text-lg">
          <a href="#contact" className="focus-ring inline-flex items-center gap-1 transition-colors hover:text-orange">
            {t("ctaPrimary")} <span aria-hidden="true">›</span>
          </a>
          <a href="#services" className="focus-ring inline-flex items-center gap-1 transition-colors hover:text-orange">
            {t("ctaSecondary")} <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-14 h-[23rem] max-w-[90rem] overflow-hidden rounded-[2rem] bg-navy sm:h-[32rem] lg:mt-16 lg:h-[38rem] lg:rounded-[2.5rem]">
        <Image
          src="/consulting-office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,38,71,0.04),rgba(18,38,71,0.35))]" />
        <div aria-hidden="true" className="absolute bottom-0 start-1/2 h-1.5 w-24 -translate-x-1/2 bg-orange" />
      </div>
    </section>
  );
}
