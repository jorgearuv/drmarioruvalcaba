import { createPageMetadata } from "@/lib/metadata";
import DoctorBio from "@/components/sections/DoctorBio";
import TrustBadges from "@/components/sections/TrustBadges";
import CTASection from "@/components/sections/CTASection";

export const metadata = createPageMetadata({
  title: "Sobre el Dr. Mario Ruvalcaba | Cirujano Bariátrico en Mérida",
  description: "Conoce al Dr. Mario Ruvalcaba, cirujano bariátrico certificado con más de 15 años de experiencia y 3,000+ cirugías exitosas en Mérida, Yucatán.",
  path: "/sobre-el-doctor",
});

export default function SobreElDoctorPage() {
  return (
    <>
      <DoctorBio />
      <TrustBadges />
      <CTASection
        heading="Agenda Tu Consulta con el Dr. Ruvalcaba"
        description="Da el primer paso hacia una vida más saludable. Consulta personalizada y sin compromiso."
        variant="navy"
      />
    </>
  );
}
