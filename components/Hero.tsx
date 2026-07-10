import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="bg-stone-100 py-6 sm:py-8">
      <div className="mx-auto grid w-full max-w-[90rem] overflow-hidden bg-navy lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative flex min-h-[33rem] flex-col justify-center px-7 py-16 sm:px-12 lg:min-h-[39rem] lg:px-16 xl:px-20">
          <span aria-hidden="true" className="absolute inset-y-0 start-0 w-1.5 bg-orange" />
          <div className="relative max-w-xl">
            <span className="inline-flex border-b border-orange pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {t("badge")}
            </span>
            <h1 className="mt-8 font-serif text-4xl font-medium leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.7rem]">
              {t("title")}
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">{t("text")}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-light"
              >
                {t("ctaPrimary")}
              </a>
              <a
                href="#services"
                className="focus-ring inline-flex items-center justify-center border border-white/45 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[28rem] lg:min-h-full">
          <Image
            src="/consulting-office.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-navy/10" />
          <div aria-hidden="true" className="absolute bottom-0 start-0 h-1.5 w-28 bg-orange" />
        </div>
      </div>
    </section>
  );
}
