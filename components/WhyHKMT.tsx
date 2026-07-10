import { useTranslations } from "next-intl";
import Container from "@/components/Container";

type Pillar = {
  title: string;
  text: string;
};

const ICONS = [
  <svg key="proximity" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 20c.5-3.3 2.5-5.2 5.5-5.2s5 1.9 5.5 5.2M14.5 15.6c3 .1 5.2 1.7 5.8 4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>,
  <svg key="tailored" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="m15 9 5-5M17 4h3v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="security" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.4 2.9 7.5 7 9 4.1-1.5 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="m9.5 12 1.7 1.7 3.5-3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="innovation" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13.2 4.2c3.8-.5 5.9.2 6.6.9.7.7 1.4 2.8.9 6.6-.5 3.7-2.3 6.2-5.6 7.5l-3.6-3.6c1.3-3.3 3.8-5.1 7.5-5.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m11.6 15.6-3.2 3.2M8.7 12.1 5 12l-.8 3.8 2.5 2.5M11.9 8.7 12 5l3.8-.8 2.5 2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function WhyHKMT() {
  const t = useTranslations("whyHKMT");
  const pillars = t.raw("pillars") as Pillar[];

  return (
    <section className="bg-navy py-16 text-white lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_3fr] lg:gap-12">
          <div className="lg:pe-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-light">
              {t("eyebrow")}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
              {t("title")}
            </h2>
          </div>

          <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="px-0 sm:px-6 sm:[&:nth-child(odd)]:border-e sm:[&:nth-child(odd)]:border-white/15 lg:border-s lg:border-white/15 lg:px-6 lg:[&:nth-child(odd)]:border-e-0"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/15 text-orange-light [&>svg]:h-6 [&>svg]:w-6">
                  {ICONS[index]}
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
