import { getProcedureBySlug, SUB_PROCEDURES } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import ProcedureDetail from "@/components/sections/ProcedureDetail";
import CTASection from "@/components/sections/CTASection";
import { notFound } from "next/navigation";

const procedureData = getProcedureBySlug("cirugia-minima-invasion");

export const metadata = procedureData
  ? createPageMetadata({
      title: procedureData.metaTitle,
      description: procedureData.metaDescription,
      path: "/cirugia-minima-invasion",
    })
  : {};

export default function CirugiaMinimaInvasionPage() {
  if (!procedureData) notFound();

  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name);

  return (
    <>
      <ProcedureDetail procedure={procedureData} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center">Procedimientos que Realizamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {SUB_PROCEDURES.map((sub) => (
              <div key={sub.title} className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                <span className="text-3xl">{sub.icon}</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3">{sub.title}</h3>
                <p className="text-navy-600 mt-2">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        heading="¿Necesitas una Cirugía de Mínima Invasión?"
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
