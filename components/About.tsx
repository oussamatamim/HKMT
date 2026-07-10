import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-stone-100 py-20 lg:py-28">
      <Container>
        <div className="grid overflow-hidden bg-cream lg:grid-cols-[1.02fr_0.98fr]">
          <ScrollReveal direction="left" className="relative min-h-[23rem] sm:min-h-[31rem] lg:min-h-[40rem]">
            <Image
              src="/luxembourg.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_58%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-navy/15" />
            <div aria-hidden="true" className="absolute bottom-0 start-0 h-2 w-28 bg-orange" />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120} className="flex items-center px-7 py-14 sm:px-12 lg:px-16 xl:px-20">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-dark">
                {t("eyebrow")}
              </span>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-navy sm:text-4xl">
                {t("title")}
              </h2>
              <div className="mt-7 space-y-4 text-base leading-relaxed text-stone-700 sm:text-lg">
                <p>{t("text1")}</p>
                <p>{t("text2")}</p>
              </div>
              <div className="mt-10 flex items-center gap-4 border-t border-stone-300 pt-6">
                <span className="font-serif text-5xl font-medium leading-none text-navy">
                  {t("stats.expertiseValue")}
                </span>
                <span className="max-w-[9rem] text-sm font-medium leading-snug text-stone-600">
                  {t("stats.expertiseLabel")}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
