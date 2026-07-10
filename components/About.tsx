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
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,38,71,0.97)_0%,rgba(18,38,71,0.91)_42%,rgba(18,38,71,0.54)_74%,rgba(18,38,71,0.38)_100%)]"
      />

      <Container>
        <div className="max-w-2xl border-s-2 border-orange ps-7 sm:ps-9">
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/65">
            {t("eyebrow")}
          </span>
          <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {t("title")}
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-white/82">{t("text1")}</p>
          <p className="mt-4 text-lg leading-relaxed text-white/82">{t("text2")}</p>

          <div className="mt-10 inline-flex items-center gap-4 border-t border-white/25 pt-5">
            <span className="font-serif text-5xl font-medium leading-none text-orange">
              {t("stats.expertiseValue")}
            </span>
            <span className="max-w-[10rem] text-sm leading-snug text-white/70">
              {t("stats.expertiseLabel")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
