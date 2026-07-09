import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
