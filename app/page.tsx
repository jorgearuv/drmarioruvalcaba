import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import ServiceCards from "@/components/sections/ServiceCards";
import BMICalculator from "@/components/sections/BMICalculator";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import TrustBadges from "@/components/sections/TrustBadges";
import InsurancePartners from "@/components/sections/InsurancePartners";
import CTASection from "@/components/sections/CTASection";

export const metadata = createPageMetadata({
  title: "Cirujano Bariátra en Mérida | Dr. Mario Ruvalcaba",
  description:
    "Cirujano general y bariátra certificado en Mérida, Yucatán. Manga gástrica, bypass gástrico, cirugía de mínima invasión. Agenda tu consulta: 999 260 3030.",
  path: "/",
  keywords: [
    "cirujano bariátra Mérida",
    "cirugía bariátrica Yucatán",
    "manga gástrica Mérida",
    "bypass gástrico Mérida",
    "cirugía de mínima invasión",
    "Dr. Mario Ruvalcaba",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — trust + first impression + primary CTA */}
      <Hero
        headline="Cirujano Bariátra en Mérida, Especialista en Mínima Invasión"
        subheadline={"El Dr. Mario Ruvalcaba es cirujano general y bariátra certificado por el Consejo Mexicano de Cirugía General. Se especializa en cirugía bariátrica y metabólica, así como en cirugía de mínima invasión (laparoscópica), ofreciendo a sus pacientes tratamientos seguros, efectivos y con la menor invasión posible.\n\nRespaldado por experiencia en distintos tipos de cirugías y una preparación constante, brinda atención de calidad con un enfoque integral y personalizado para cada paciente.\n\nSu consultorio se encuentra en Mérida, Yucatán, donde atiende a pacientes locales y de otras partes de México y el extranjero."}
      />

      {/* 2. Why bariatric surgery — empathy + benefits */}
      <StatsCounter />

      {/* 3. Procedures — core offering */}
      <ServiceCards />

      {/* 4. BMI Calculator — engagement + qualification */}
      <BMICalculator />

      {/* 5. Testimonials — social proof */}
      <TestimonialCarousel />

      {/* 6. Institutional trust */}
      <TrustBadges />

      {/* 7. Insurance partners */}
      <InsurancePartners />

      {/* 8. Final conversion CTA */}
      <CTASection
        heading="¿Listo para Transformar Tu Vida?"
        description="Agenda una consulta gratuita con el Dr. Mario Ruvalcaba y descubre cuál es el mejor procedimiento para ti."
      />
    </>
  );
}
