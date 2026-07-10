import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";

type HeroStat = {
  value: string;
  label: string;
};

const STAT_ICONS = [
  <svg key="experience" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.5 19c.4-2.9 2.1-4.5 4.5-4.5s4.1 1.6 4.5 4.5M12 19c.4-2.6 1.9-4 4-4 2.4 0 4.1 1.6 4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="expertise" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m12 3 2.2 4.5 5 .7-3.6 3.5.8 4.9-4.4-2.3-4.4 2.3.8-4.9-3.6-3.5 5-.7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>,
  <svg key="support" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.4 2.9 7.5 7 9 4.1-1.5 7-4.6 7-9V6l-7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="m9.5 12 1.7 1.7 3.5-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function Hero() {
  const t = useTranslations("hero");
  const stats = t.raw("stats") as HeroStat[];

  return (
    <section id="hero" className="bg-navy">
      <div className="relative min-h-[42rem] overflow-hidden bg-navy lg:min-h-[43rem]">
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

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className="flex min-h-[5.5rem] items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.12)] backdrop-blur-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange-light [&>svg]:h-5 [&>svg]:w-5">
                    {STAT_ICONS[index]}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-tight text-orange-light">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium leading-snug text-white/75">{stat.label}</span>
                  </span>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
