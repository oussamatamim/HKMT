import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

type ServiceItem = {
  title: string;
  text: string;
};

const ICONS = [
  <svg key="audit" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 10h6M9 14h6M9 18h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="development" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="security" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.4 2.9 7.5 7 9 4.1-1.5 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="m9.5 12 1.7 1.7 3.5-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="cloud" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 18a4 4 0 0 1-.7-7.94A5.1 5.1 0 0 1 16.2 9.2 3.6 3.6 0 0 1 17.7 18H7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  <svg key="ai" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="training" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m12 5 9 4.5-9 4.5-9-4.5L12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 12v4.5c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

const CARD_STYLES = [
  "bg-navy text-white",
  "bg-white text-navy",
  "bg-[#f3eee7] text-navy",
  "bg-white text-navy",
  "bg-navy text-white",
  "bg-[#e9f0f4] text-navy",
];

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="bg-stone-100 py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-dark">
              {t("eyebrow")}
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-navy sm:text-5xl">
              {t("title")}
            </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 75} className="h-full">
              <article className={`group relative h-full overflow-hidden rounded-[2rem] p-8 transition-transform duration-500 ease-editorial hover:-translate-y-1 sm:p-10 ${CARD_STYLES[index]}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-white transition-transform duration-500 group-hover:scale-110 [&>svg]:h-6 [&>svg]:w-6">
                    {ICONS[index]}
                  </span>
                  <span className={`text-xs font-semibold tracking-[0.16em] ${index === 0 || index === 4 ? "text-white/55" : "text-navy/45"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className={`mt-3 max-w-xl text-base leading-relaxed ${index === 0 || index === 4 ? "text-white/75" : "text-stone-600"}`}>{item.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
