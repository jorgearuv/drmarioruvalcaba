import { getProcedureBySlug } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import ProcedureDetail from "@/components/sections/ProcedureDetail";
import RelatedProcedures from "@/components/sections/RelatedProcedures";
import CTASection from "@/components/sections/CTASection";
import { notFound } from "next/navigation";

const procedureData = getProcedureBySlug("bypass-gastrico-merida");

export const metadata = procedureData
  ? createPageMetadata({
      title: procedureData.metaTitle,
      description: procedureData.metaDescription,
      path: "/bypass-gastrico-merida",
      ogImage: "/images/og-bypass-gastrico.png",
    })
  : {};

export default function BypassGastricoPage() {
  if (!procedureData) notFound();

  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Inicio", url: DOCTOR_INFO.siteUrl },
    { name: "Procedimientos", url: `${DOCTOR_INFO.siteUrl}/#procedimientos` },
    { name: procedureData.title, url: `${DOCTOR_INFO.siteUrl}/bypass-gastrico-merida` },
  ]);

  return (
    <>
      <ProcedureDetail procedure={procedureData} />
      <RelatedProcedures currentHref="/bypass-gastrico-merida" />
      <CTASection
        heading="¿El Bypass Gástrico es para Ti?"
        description="Agenda una valoración personalizada con el Dr. Mario Ruvalcaba."
        variant="teal"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
