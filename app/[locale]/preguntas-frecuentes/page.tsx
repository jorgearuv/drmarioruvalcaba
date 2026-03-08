import { setRequestLocale, getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { getFAQItems } from "@/lib/faq";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import type { Locale } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (locale === "en") {
    return createPageMetadata({
      title: "FAQ | Bariatric Surgery Mérida",
      description: "Get answers about bariatric surgery in Mérida. FAQ about gastric sleeve, gastric bypass, costs, recovery and more.",
      path: "/preguntas-frecuentes",
      locale: "en",
      alternateLocalePath: "/preguntas-frecuentes",
      keywords: [
        "bariatric surgery FAQ",
        "gastric sleeve FAQ",
        "gastric bypass questions",
        "bariatric surgery Mérida",
      ],
    });
  }

  return createPageMetadata({
    title: "Preguntas Frecuentes | Cirugía Bariátrica Mérida",
    description:
      "Resuelve tus dudas sobre cirugía bariátrica en Mérida. Preguntas frecuentes sobre manga gástrica, bypass gástrico, costos, recuperación y más.",
    path: "/preguntas-frecuentes",
    locale: "es",
    alternateLocalePath: "/preguntas-frecuentes",
    keywords: [
      "preguntas frecuentes cirugía bariátrica",
      "FAQ manga gástrica",
      "dudas bypass gástrico",
      "cirugía bariátrica Mérida",
    ],
  });
}

export default async function PreguntasFrecuentesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faq" });
  const faqItems = getFAQItems(locale as Locale);

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">FAQ</p>
          <h1 className="mt-4 text-4xl font-display text-white md:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-navy-300">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          {/* Group by category */}
          {["general", "procedimientos", "recuperación", "costos"].map(
            (category) => {
              const categoryItems = faqItems.filter(
                (item) => item.category === category
              );
              if (categoryItems.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <h2 className="mb-6 font-display text-3xl text-navy-900">
                    {t(`categories.${category}`)}
                  </h2>
                  <FAQAccordion items={categoryItems} />
                </div>
              );
            }
          )}
        </div>
      </section>

      <CTASection
        heading={t("ctaHeading")}
        description={t("ctaDescription")}
        variant="navy"
      />
    </>
  );
}
