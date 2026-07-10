import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyHKMT from "@/components/WhyHKMT";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <WhyHKMT />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Methodology />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
