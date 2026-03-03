import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import ServiceCards from "@/components/sections/ServiceCards";
import BMICalculator from "@/components/sections/BMICalculator";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import TrustBadges from "@/components/sections/TrustBadges";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — trust + first impression + primary CTA */}
      <Hero
        headline="Cirujano Bariatra en Mérida | Cirugía de Mínima Invasión en Yucatán"
        subheadline={"El Dr. Mario Ruvalcaba es cirujano general y bariatra certificado por el Consejo Mexicano de Cirugía General. Se especializa en cirugía bariátrica y metabólica, así como en cirugía de mínima invasión (laparoscópica), ofreciendo a sus pacientes tratamientos seguros, efectivos y con la menor invasión posible.\n\nCuenta con más de 3,000 procedimientos realizados, brindando atención de calidad con un enfoque integral y personalizado para cada paciente.\n\nSu consultorio se encuentra en Mérida, Yucatán, donde atiende a pacientes locales y de otras partes de México y el extranjero."}
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

      {/* 7. Final conversion CTA */}
      <CTASection
        heading="¿Listo para Transformar Tu Vida?"
        description="Agenda una consulta gratuita con el Dr. Mario Ruvalcaba y descubre cuál es el mejor procedimiento para ti."
      />
    </>
  );
}
