import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProcedureBySlug } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import ProcedureDetail from "@/components/sections/ProcedureDetail";
import RelatedProcedures from "@/components/sections/RelatedProcedures";
import CTASection from "@/components/sections/CTASection";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const procedureData = getProcedureBySlug("balon-intragastrico", locale as Locale);
  if (!procedureData) return {};

  return createPageMetadata({
    title: procedureData.metaTitle,
    description: procedureData.metaDescription,
    path: "/balon-intragastrico",
    locale: locale as Locale,
    alternateLocalePath: "/balon-intragastrico",
    ogImage: "/images/og-balon-intragastrico.png",
  });
}

export default async function BalonIntragastricoPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const procedureData = getProcedureBySlug("balon-intragastrico", locale as Locale);
  if (!procedureData) notFound();

  const t = await getTranslations({ locale, namespace: "procedures" });
  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: locale === "en" ? "Home" : "Inicio", url: DOCTOR_INFO.siteUrl },
    { name: locale === "en" ? "Procedures" : "Procedimientos", url: `${DOCTOR_INFO.siteUrl}/#procedimientos` },
    { name: procedureData.title, url: `${DOCTOR_INFO.siteUrl}/balon-intragastrico` },
  ]);

  return (
    <>
      <ProcedureDetail procedure={procedureData} />
      <RelatedProcedures currentHref="/balon-intragastrico" />
      <CTASection
        heading={t("balonIntragastrico.ctaHeading")}
        description={t("balonIntragastrico.ctaDescription")}
        variant="teal"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
