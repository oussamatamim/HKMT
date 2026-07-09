import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-orange" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              {t("badge")}
            </span>
          </div>

          <h1 className="mt-7 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            {t("title")}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone-600">{t("text")}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="focus-ring group inline-flex items-center justify-center gap-2 bg-navy px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy-light"
            >
              {t("ctaPrimary")}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex items-center justify-center border border-stone-300 px-7 py-3.5 text-base font-medium text-navy transition-colors hover:border-navy"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up border-navy/10 [animation-delay:150ms] lg:border-s lg:ps-14">
          <svg
            viewBox="0 0 320 280"
            className="h-auto w-full"
            role="img"
            aria-label="HKMT Solutions"
          >
            <g stroke="#1b3764" strokeWidth="1" strokeOpacity="0.25">
              {[
                { x1: 60, y1: 70, x2: 160, y2: 40 },
                { x1: 160, y1: 40, x2: 260, y2: 90 },
                { x1: 60, y1: 70, x2: 90, y2: 180 },
                { x1: 160, y1: 40, x2: 150, y2: 160 },
                { x1: 260, y1: 90, x2: 220, y2: 200 },
                { x1: 90, y1: 180, x2: 150, y2: 160 },
                { x1: 150, y1: 160, x2: 220, y2: 200 },
                { x1: 90, y1: 180, x2: 130, y2: 240 },
                { x1: 220, y1: 200, x2: 180, y2: 240 },
              ].map((line, i) => (
                <line
                  key={i}
                  {...line}
                  pathLength={1}
                  className="hero-line"
                  style={{ animationDelay: `${i * 90}ms` }}
                />
              ))}
            </g>
            <circle
              cx="160"
              cy="40"
              r="4"
              fill="#1b3764"
              className="hero-node-pulse"
              style={{ animationDelay: "900ms, 1400ms" }}
            />
            <circle
              cx="60"
              cy="70"
              r="3"
              fill="#f39200"
              className="hero-node"
              style={{ animationDelay: "950ms" }}
            />
            <circle
              cx="260"
              cy="90"
              r="3"
              fill="#f39200"
              className="hero-node"
              style={{ animationDelay: "1000ms" }}
            />
            <circle
              cx="90"
              cy="180"
              r="3"
              fill="#1b3764"
              fillOpacity="0.7"
              className="hero-node"
              style={{ animationDelay: "1050ms" }}
            />
            <circle
              cx="150"
              cy="160"
              r="4"
              fill="#f39200"
              className="hero-node-pulse"
              style={{ animationDelay: "1100ms, 1600ms" }}
            />
            <circle
              cx="220"
              cy="200"
              r="3"
              fill="#1b3764"
              fillOpacity="0.7"
              className="hero-node"
              style={{ animationDelay: "1150ms" }}
            />
            <circle
              cx="130"
              cy="240"
              r="2.5"
              fill="#1b3764"
              fillOpacity="0.4"
              className="hero-node"
              style={{ animationDelay: "1200ms" }}
            />
            <circle
              cx="180"
              cy="240"
              r="2.5"
              fill="#1b3764"
              fillOpacity="0.4"
              className="hero-node"
              style={{ animationDelay: "1250ms" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
