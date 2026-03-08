import { createPageMetadata } from "@/lib/metadata";
import { FAQ_ITEMS } from "@/lib/faq";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

export const metadata = createPageMetadata({
  title: "Preguntas Frecuentes | Cirugía Bariátrica Mérida",
  description:
    "Resuelve tus dudas sobre cirugía bariátrica en Mérida. Preguntas frecuentes sobre manga gástrica, bypass gástrico, costos, recuperación y más.",
  path: "/preguntas-frecuentes",
  keywords: [
    "preguntas frecuentes cirugía bariátrica",
    "FAQ manga gástrica",
    "dudas bypass gástrico",
    "cirugía bariátrica Mérida",
  ],
});

export default function PreguntasFrecuentesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">FAQ</p>
          <h1 className="mt-4 text-4xl font-display text-white md:text-5xl">
            Preguntas Frecuentes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-navy-300">
            Resuelve todas tus dudas sobre cirugía bariátrica y nuestros
            procedimientos.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          {/* Group by category */}
          {["general", "procedimientos", "recuperación", "costos"].map(
            (category) => {
              const categoryItems = FAQ_ITEMS.filter(
                (item) => item.category === category
              );
              if (categoryItems.length === 0) return null;

              const categoryLabels: Record<string, string> = {
                general: "General",
                procedimientos: "Procedimientos",
                recuperación: "Recuperación",
                costos: "Costos y Financiamiento",
              };

              return (
                <div key={category} className="mb-12">
                  <h2 className="mb-6 font-display text-3xl text-navy-900">
                    {categoryLabels[category]}
                  </h2>
                  <FAQAccordion items={categoryItems} />
                </div>
              );
            }
          )}
        </div>
      </section>

      <CTASection
        heading="¿Tienes Más Preguntas?"
        description="Nuestro equipo está listo para resolver todas tus dudas. Agenda una consulta personalizada."
        variant="navy"
      />
    </>
  );
}
