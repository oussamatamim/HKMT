import { useTranslations } from "next-intl";
import Container from "@/components/Container";

type ServiceItem = {
  title: string;
  text: string;
};

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="py-24 lg:py-32">
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
        </div>

        <div className="mt-16 grid grid-cols-1 border-s border-t border-stone-200 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative border-e border-b border-stone-200 p-8 transition-colors duration-300 ease-editorial hover:bg-white"
            >
              <span className="font-serif text-sm text-stone-400 transition-colors duration-300 ease-editorial group-hover:text-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-stone-600">
                {item.text}
              </p>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-orange transition-transform duration-300 ease-editorial group-hover:scale-x-100"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
