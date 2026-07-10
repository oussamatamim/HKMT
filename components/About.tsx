import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

type AboutStat = {
  value: string;
  label: string;
};

export default function About() {
  const t = useTranslations("about");
  const stats = t.raw("stats") as AboutStat[];

  return (
    <section id="about" className="overflow-hidden bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
          <ScrollReveal direction="left" className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -start-10 bottom-7 h-40 w-40 bg-[radial-gradient(circle,rgba(243,146,0,0.8)_1.5px,transparent_1.5px)] bg-[length:12px_12px]"
            />
            <div className="relative aspect-[4/4.7] overflow-hidden rounded-[2rem] shadow-[0_24px_55px_rgba(20,39,74,0.18)] sm:aspect-[4/4.3] lg:aspect-[4/4.8]">
              <Image
                src="/luxembourg.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[center_55%]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(18,38,71,0.28))]" />
            </div>
            <div className="absolute -bottom-8 -end-4 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white px-4 text-center shadow-[0_18px_45px_rgba(20,39,74,0.2)] sm:-end-8 sm:h-36 sm:w-36">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-orange">
                <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <circle cx="12" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
              </svg>
              <span className="mt-2 text-xs font-semibold leading-snug text-navy">{t("locationBadge")}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-dark">
              {t("eyebrow")}
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              {t("title")}
            </h2>
            <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-stone-700 sm:text-lg">
              <p>{t("text1")}</p>
              <p>{t("text2")}</p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-stone-200 bg-white px-5 py-5 text-center shadow-[0_10px_26px_rgba(20,39,74,0.08)]"
                >
                  <p className="text-xl font-semibold tracking-tight text-navy">{stat.value}</p>
                  <p className="mt-2 text-xs font-medium leading-snug text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
