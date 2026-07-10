import { useTranslations } from "next-intl";
import Container from "@/components/Container";

type Step = {
  title: string;
  text: string;
};

const ICONS = [
  <svg key="listen" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v5a3.5 3.5 0 0 1-3.5 3.5H12l-3.5 3v-3H8.5A3.5 3.5 0 0 1 5 11.5v-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 9h.01M12 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="design" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="m7.7 7.2 2.9 8.1M16.3 7.2l-2.9 8.1M8 6h8" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="deploy" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M13.2 4.2c3.8-.5 5.9.2 6.6.9.7.7 1.4 2.8.9 6.6-.5 3.7-2.3 6.2-5.6 7.5l-3.6-3.6c1.3-3.3 3.8-5.1 7.5-5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m11.6 15.6-3.2 3.2M8.7 12.1 5 12l-.8 3.8 2.5 2.5M11.9 8.7 12 5l3.8-.8 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="evolve" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="m7 15 4-4 3 2 5-6M16 7h3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function Methodology() {
  const t = useTranslations("methodology");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-[#f5f5f7] py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-dark">
            {t("eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-[1.75rem] bg-white px-7 pb-8 pt-12 text-center shadow-[0_18px_42px_rgba(20,39,74,0.1)] ring-1 ring-black/5">
              <span className="absolute -top-5 start-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white shadow-[0_8px_18px_rgba(20,39,74,0.24)]">
                {index + 1}
              </span>
              {index < steps.length - 1 && (
                <span aria-hidden="true" className="absolute -end-[1.45rem] top-1/2 hidden h-px w-7 border-t-2 border-dashed border-navy/25 lg:block" />
              )}
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/10 text-orange [&>svg]:h-8 [&>svg]:w-8">
                {ICONS[index]}
              </span>
              <h3 className="mt-6 text-lg font-semibold leading-snug text-navy">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{step.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
