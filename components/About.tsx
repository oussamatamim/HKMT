import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative isolate overflow-hidden bg-navy py-24 lg:py-32">
      <Image
        src="/luxembourg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[center_62%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,38,71,0.72)_0%,rgba(18,38,71,0.56)_42%,rgba(18,38,71,0.30)_74%,rgba(18,38,71,0.18)_100%)]"
      />

      <Container>
        <div className="max-w-2xl border-s-4 border-orange bg-cream/95 p-8 shadow-[0_24px_70px_rgba(8,24,48,0.28)] backdrop-blur-sm sm:p-10 lg:p-12">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-dark">
            {t("eyebrow")}
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            {t("title")}
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-stone-700">{t("text1")}</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">{t("text2")}</p>

          <div className="mt-10 inline-flex items-center gap-4 border-t border-stone-300 pt-5">
            <span className="font-serif text-5xl font-medium leading-none text-orange">
              {t("stats.expertiseValue")}
            </span>
            <span className="max-w-[10rem] text-sm font-medium leading-snug text-stone-600">
              {t("stats.expertiseLabel")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
