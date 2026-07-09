import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="border-y border-stone-200 bg-stone-50 py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              {t("eyebrow")}
            </span>
          </div>
          <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">{t("text1")}</p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{t("text2")}</p>

          <div className="mt-10 inline-flex items-baseline gap-3 border-t border-stone-300 pt-6">
            <span className="font-serif text-4xl font-medium text-navy">
              {t("stats.expertiseValue")}
            </span>
            <span className="text-sm text-stone-500">{t("stats.expertiseLabel")}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
