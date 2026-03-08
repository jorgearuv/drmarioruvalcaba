import { setRequestLocale, getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import DoctorBio from "@/components/sections/DoctorBio";
import TrustBadges from "@/components/sections/TrustBadges";
import CTASection from "@/components/sections/CTASection";
import type { Locale } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (locale === "en") {
    return createPageMetadata({
      title: "About Dr. Mario Ruvalcaba | Bariatric Surgeon in Mérida",
      description: "Meet Dr. Mario Ruvalcaba, board-certified bariatric surgeon with extensive experience in Mérida, Yucatán.",
      path: "/sobre-el-doctor",
      locale: "en",
      alternateLocalePath: "/sobre-el-doctor",
      ogImage: "/images/og-sobre-el-doctor.png",
    });
  }

  return createPageMetadata({
    title: "Sobre el Dr. Mario Ruvalcaba | Cirujano Bariátrico en Mérida",
    description: "Conoce al Dr. Mario Ruvalcaba, cirujano bariátrico certificado con más de 15 años de experiencia y 3,000+ cirugías exitosas en Mérida, Yucatán.",
    path: "/sobre-el-doctor",
    locale: "es",
    alternateLocalePath: "/sobre-el-doctor",
    ogImage: "/images/og-sobre-el-doctor.png",
  });
}

export default async function SobreElDoctorPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <>
      <DoctorBio />
      <TrustBadges />
      <CTASection
        heading={t("ctaHeading")}
        description={t("ctaDescription")}
        variant="navy"
      />
    </>
  );
}
