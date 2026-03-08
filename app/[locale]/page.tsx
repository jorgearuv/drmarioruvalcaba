import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { getProcedures, getBariatricSubProcedures, getSubProcedures } from "@/lib/procedures";
import { getTestimonials } from "@/lib/testimonials";
import type { Locale } from "@/i18n/routing";
import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import ServiceCards from "@/components/sections/ServiceCards";
import BMICalculator from "@/components/sections/BMICalculator";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import TrustBadges from "@/components/sections/TrustBadges";
import InsurancePartners from "@/components/sections/InsurancePartners";
import CTASection from "@/components/sections/CTASection";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;

  if (locale === "en") {
    return createPageMetadata({
      title: "Bariatric Surgeon in Mérida | Dr. Mario Ruvalcaba",
      description:
        "Board-certified general and bariatric surgeon in Mérida, Yucatán. Gastric sleeve, gastric bypass, minimally invasive surgery. Schedule your consultation: 999 260 3030.",
      path: "/",
      locale: "en",
      alternateLocalePath: "/",
      keywords: [
        "bariatric surgeon Mérida",
        "bariatric surgery Yucatán",
        "gastric sleeve Mérida",
        "gastric bypass Mérida",
        "minimally invasive surgery",
        "Dr. Mario Ruvalcaba",
      ],
    });
  }

  return createPageMetadata({
    title: "Cirujano Bariátra en Mérida | Dr. Mario Ruvalcaba",
    description:
      "Cirujano general y bariátra certificado en Mérida, Yucatán. Manga gástrica, bypass gástrico, cirugía de mínima invasión. Agenda tu consulta: 999 260 3030.",
    path: "/",
    locale: "es",
    alternateLocalePath: "/",
    keywords: [
      "cirujano bariátra Mérida",
      "cirugía bariátrica Yucatán",
      "manga gástrica Mérida",
      "bypass gástrico Mérida",
      "cirugía de mínima invasión",
      "Dr. Mario Ruvalcaba",
    ],
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const tCta = await getTranslations({ locale, namespace: "home.ctaSection" });

  return (
    <>
      <Hero
        headline={t("hero.headline")}
        subheadline={t("hero.subheadline")}
      />
      <StatsCounter />
      <ServiceCards
        procedures={getProcedures(locale as Locale)}
        bariatricSubProcedures={getBariatricSubProcedures(locale as Locale)}
        subProcedures={getSubProcedures(locale as Locale)}
      />
      <BMICalculator />
      <TestimonialCarousel testimonials={getTestimonials(locale as Locale)} />
      <TrustBadges />
      <InsurancePartners />
      <CTASection
        heading={tCta("readyToTransform")}
        description={tCta("readyToTransformDescription")}
      />
    </>
  );
}
