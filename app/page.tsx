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
        headline="Transforma Tu Vida con Cirugía Bariátrica en Mérida"
        subheadline="El Dr. Mario Ruvalcaba es especialista en cirugía bariátrica y metabólica con más de 3,000 procedimientos exitosos. Recupera tu salud y bienestar con técnicas de mínima invasión."
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
