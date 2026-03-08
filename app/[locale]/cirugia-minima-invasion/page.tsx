import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProcedureBySlug, getSubProcedures } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import ProcedureDetail from "@/components/sections/ProcedureDetail";
import RelatedProcedures from "@/components/sections/RelatedProcedures";
import CTASection from "@/components/sections/CTASection";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const procedureData = getProcedureBySlug("cirugia-minima-invasion", locale as Locale);
  if (!procedureData) return {};

  return createPageMetadata({
    title: procedureData.metaTitle,
    description: procedureData.metaDescription,
    path: "/cirugia-minima-invasion",
    locale: locale as Locale,
    alternateLocalePath: "/cirugia-minima-invasion",
    ogImage: "/images/og-cirugia-minima-invasion.png",
  });
}

export default async function CirugiaMinimaInvasionPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const procedureData = getProcedureBySlug("cirugia-minima-invasion", locale as Locale);
  if (!procedureData) notFound();

  const t = await getTranslations({ locale, namespace: "procedures" });
  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: locale === "en" ? "Home" : "Inicio", url: DOCTOR_INFO.siteUrl },
    { name: locale === "en" ? "Procedures" : "Procedimientos", url: `${DOCTOR_INFO.siteUrl}/#procedimientos` },
    { name: procedureData.title, url: `${DOCTOR_INFO.siteUrl}/cirugia-minima-invasion` },
  ]);

  return (
    <>
      <ProcedureDetail procedure={procedureData} />
      <RelatedProcedures currentHref="/cirugia-minima-invasion" />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center">
            {t("shared.proceduresWePerform")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {getSubProcedures(locale as Locale).map((sub) => (
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
        heading={t("cirugiaMinimaInvasion.ctaHeading")}
        description={t("cirugiaMinimaInvasion.ctaDescription")}
        variant="teal"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
