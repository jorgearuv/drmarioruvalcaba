import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProcedureBySlug } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd } from "@/lib/seo";
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
  const procedureData = getProcedureBySlug("cirugia-diastasis-rectos", locale as Locale);
  if (!procedureData) return {};

  return createPageMetadata({
    title: procedureData.metaTitle,
    description: procedureData.metaDescription,
    path: "/cirugia-diastasis-rectos",
    locale: locale as Locale,
    alternateLocalePath: "/cirugia-diastasis-rectos",
  });
}

export default async function CirugiaDiastasisRectosPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const procedureData = getProcedureBySlug("cirugia-diastasis-rectos", locale as Locale);
  if (!procedureData) notFound();

  const t = await getTranslations({ locale, namespace: "procedures" });
  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name);

  return (
    <>
      <ProcedureDetail procedure={procedureData} />
      <RelatedProcedures currentHref="/cirugia-diastasis-rectos" />
      <CTASection
        heading={t("cirugiaDiastasisRectos.ctaHeading")}
        description={t("cirugiaDiastasisRectos.ctaDescription")}
        variant="teal"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
