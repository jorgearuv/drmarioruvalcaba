import { createPageMetadata } from "@/lib/metadata";
import { TESTIMONIALS } from "@/lib/testimonials";
import CTASection from "@/components/sections/CTASection";

export const metadata = createPageMetadata({
  title: "Testimonios de Pacientes | Dr. Mario Ruvalcaba",
  description: "Lee las experiencias reales de pacientes del Dr. Mario Ruvalcaba. Testimonios de cirugía bariátrica en Mérida, Yucatán.",
  path: "/testimonios",
});

export default function TestimoniosPage() {
  return (
    <>
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">Testimonios</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-display text-white">Testimonios de Nuestros Pacientes</h1>
          <p className="mt-4 text-xl text-navy-300 max-w-2xl mx-auto">Historias reales de transformación y bienestar</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="card-premium card-glow p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex} className={starIndex < testimonial.rating ? "text-teal-500" : "text-navy-100"}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-navy-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-navy-100">
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-navy-500">{testimonial.age} años · {testimonial.procedure}</p>
                  <span className="mt-2 inline-flex bg-teal-600 text-white rounded-full px-3 py-1 text-xs font-semibold">-{testimonial.weightLost}</span>
                  <p className="text-xs text-navy-400 mt-1">{testimonial.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        heading="Comienza Tu Propia Historia de Éxito"
        description="Únete a miles de pacientes que han transformado su vida con el Dr. Mario Ruvalcaba."
        variant="teal"
      />
    </>
  );
}
