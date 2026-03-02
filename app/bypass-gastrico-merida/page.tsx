import { getProcedureBySlug } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import ProcedureDetail from "@/components/sections/ProcedureDetail";
import CTASection from "@/components/sections/CTASection";
import { notFound } from "next/navigation";

const procedureData = getProcedureBySlug("bypass-gastrico-merida");

export const metadata = procedureData
  ? createPageMetadata({
      title: procedureData.metaTitle,
      description: procedureData.metaDescription,
      path: "/bypass-gastrico-merida",
    })
  : {};

export default function BypassGastricoPage() {
  if (!procedureData) notFound();

  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name);

  return (
    <>
      <ProcedureDetail procedure={procedureData} />
      <CTASection
        heading="¿El Bypass Gástrico es para Ti?"
        description="Agenda una valoración personalizada con el Dr. Mario Ruvalcaba."
        variant="teal"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
