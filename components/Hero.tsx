import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";

type ServiceItem = {
  title: string;
};

const SERVICE_ICONS = [
  <svg key="audit" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 10h6M9 14h6M9 18h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="development" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="security" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.4 2.9 7.5 7 9 4.1-1.5 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
];

export default function Hero() {
  const t = useTranslations("hero");
  const serviceT = useTranslations("services");
  const services = serviceT.raw("items") as ServiceItem[];

  return (
    <section id="hero" className="bg-[#f5f5f7] px-4 py-5 sm:px-6 sm:py-7 lg:py-10">
      <div className="relative mx-auto min-h-[42rem] max-w-[90rem] overflow-hidden rounded-[2rem] bg-navy shadow-[0_28px_70px_rgba(20,39,74,0.2)] lg:min-h-[43rem] lg:rounded-[2.5rem]">
        <Image
          src="/consulting-office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,38,71,0.99)_0%,rgba(18,38,71,0.96)_31%,rgba(18,38,71,0.78)_47%,rgba(18,38,71,0.2)_72%,rgba(18,38,71,0.08)_100%)]"
        />
        <div aria-hidden="true" className="absolute -start-24 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full border border-white/10" />
        <div aria-hidden="true" className="absolute start-[28%] top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(243,146,0,0.32)_1px,transparent_1px)] bg-[length:10px_10px] opacity-70" />

        <Container className="relative flex min-h-[42rem] items-center py-12 lg:min-h-[43rem] lg:py-14">
          <div className="w-full max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-light">
              {t("badge")}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{t("text")}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-orange px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(243,146,0,0.25)] transition-all hover:-translate-y-0.5 hover:bg-orange-light"
              >
                {t("ctaSecondary")} <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                {t("ctaPrimary")} <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-9 grid gap-2 sm:grid-cols-3">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={service.title}
                  className="flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange/20 text-orange-light [&>svg]:h-4 [&>svg]:w-4">
                    {SERVICE_ICONS[index]}
                  </span>
                  <span className="text-xs font-medium leading-snug text-white/85">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
