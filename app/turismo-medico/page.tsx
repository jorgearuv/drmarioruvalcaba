import { createPageMetadata } from "@/lib/metadata";
import { TESTIMONIALS } from "@/lib/testimonials";
import MedicalTourismSection from "@/components/sections/MedicalTourismSection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTASection from "@/components/sections/CTASection";

export const metadata = createPageMetadata({
  title: "Turismo Médico en Mérida | Cirugía Bariátrica - Dr. Mario Ruvalcaba",
  description:
    "Turismo médico para cirugía bariátrica en Mérida, Yucatán. Paquetes todo incluido, traslados, hospedaje y atención personalizada. Ahorra hasta 60%.",
  path: "/turismo-medico",
  keywords: [
    "turismo médico Mérida",
    "cirugía bariátrica México",
    "turismo médico cirugía",
    "bariatric surgery Mexico",
    "medical tourism Merida",
  ],
});

export default function TurismoMedicoPage() {
  const internationalTestimonials = TESTIMONIALS.filter(
    (testimonial) =>
      testimonial.text.toLowerCase().includes("estados unidos") ||
      testimonial.text.toLowerCase().includes("extranjero") ||
      testimonial.text.toLowerCase().includes("viaj")
  );

  const displayTestimonials =
    internationalTestimonials.length > 0
      ? internationalTestimonials
      : TESTIMONIALS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">
            Turismo Médico
          </p>
          <h1 className="mt-4 text-4xl font-display text-white md:text-5xl">
            Cirugía Bariátrica en Mérida, México
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-navy-300">
            Combina atención médica de clase mundial con la calidez y cultura de
            Mérida, Yucatán. Ahorra hasta un 60% comparado con EE.UU.
          </p>
        </div>
      </section>

      <MedicalTourismSection />

      <TestimonialCarousel testimonials={displayTestimonials} />

      <CTASection
        heading="Planifica Tu Viaje Médico"
        description="Te ayudamos con toda la logística. Desde tu primera consulta virtual hasta tu regreso a casa."
        variant="teal"
        buttonText="Consulta Virtual Gratuita"
      />
    </>
  );
}
