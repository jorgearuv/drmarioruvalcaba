import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProcedureBySlug } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd, generateBreadcrumbJsonLd, generateFAQPageJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import ProcedureDetail from "@/components/sections/ProcedureDetail";
import TrackViewContent from "@/components/analytics/TrackViewContent";
import RelatedProcedures from "@/components/sections/RelatedProcedures";
import CTASection from "@/components/sections/CTASection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const procedureData = getProcedureBySlug("biparticion-transito-intestinal", locale as Locale);
  if (!procedureData) return {};

  return createPageMetadata({
    title: procedureData.metaTitle,
    description: procedureData.metaDescription,
    path: "/biparticion-transito-intestinal",
    locale: locale as Locale,
    alternateLocalePath: "/biparticion-transito-intestinal",
    ogImage: "/images/og-bariatrica.png",
  });
}

export default async function BiparticionTransitoIntestinalPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const procedureData = getProcedureBySlug("biparticion-transito-intestinal", locale as Locale);
  if (!procedureData) notFound();

  const t = await getTranslations({ locale, namespace: "procedures" });
  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name, locale);
  const faqJsonLd = generateFAQPageJsonLd(procedureData.faq);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: locale === "en" ? "Home" : "Inicio", url: `${DOCTOR_INFO.siteUrl}/${locale}` },
    { name: locale === "en" ? "Procedures" : "Procedimientos", url: `${DOCTOR_INFO.siteUrl}/${locale}/#procedimientos` },
    { name: procedureData.title, url: `${DOCTOR_INFO.siteUrl}/${locale}/biparticion-transito-intestinal` },
  ]);

  return (
    <>
      <TrackViewContent contentName={procedureData.title} contentCategory="procedure" />
      <ProcedureDetail procedure={procedureData} />
      <MedicalDisclaimer />
      <RelatedProcedures currentHref="/biparticion-transito-intestinal" />
      <CTASection
        heading={t("biparticionIntestinal.ctaHeading")}
        description={t("biparticionIntestinal.ctaDescription")}
        variant="teal"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
