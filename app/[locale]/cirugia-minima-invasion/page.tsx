import { setRequestLocale, getTranslations } from "next-intl/server";
import { getProcedureBySlug, getSubProcedures } from "@/lib/procedures";
import { createPageMetadata } from "@/lib/metadata";
import { generateMedicalProcedureJsonLd, generateBreadcrumbJsonLd, generateFAQPageJsonLd } from "@/lib/seo";
import { DOCTOR_INFO } from "@/lib/constants";
import ProcedureDetail from "@/components/sections/ProcedureDetail";
import TrackViewContent from "@/components/analytics/TrackViewContent";
import CTASection from "@/components/sections/CTASection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import { Link } from "@/i18n/navigation";
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
  const jsonLd = generateMedicalProcedureJsonLd(procedureData, DOCTOR_INFO.name, locale);
  const faqJsonLd = generateFAQPageJsonLd(procedureData.faq);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: locale === "en" ? "Home" : "Inicio", url: `${DOCTOR_INFO.siteUrl}/${locale}` },
    { name: locale === "en" ? "Procedures" : "Procedimientos", url: `${DOCTOR_INFO.siteUrl}/${locale}/#procedimientos` },
    { name: procedureData.title, url: `${DOCTOR_INFO.siteUrl}/${locale}/cirugia-minima-invasion` },
  ]);

  return (
    <>
      <TrackViewContent contentName={procedureData.title} contentCategory="procedure" />
      <ProcedureDetail procedure={procedureData} />
      <MedicalDisclaimer />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center">
            {t("shared.proceduresWePerform")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {getSubProcedures(locale as Locale).map((sub) => {
              const inner = (
                <>
                  <span className="text-3xl">{sub.icon}</span>
                  <h3 className="text-xl font-bold text-navy-900 mt-3 group-hover:text-teal-700 transition-colors">{sub.title}</h3>
                  <p className="text-navy-600 mt-2">{sub.description}</p>
                </>
              );
              return sub.slug ? (
                <Link
                  key={sub.title}
                  href={sub.slug as any}
                  className="group bg-navy-50 rounded-2xl p-6 border border-navy-100 hover:border-teal-400/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 block"
                >
                  {inner}
                  <span className="inline-flex items-center gap-1.5 text-teal-600 text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all duration-200">
                    {t("shared.viewProcedure")}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ) : (
                <div key={sub.title} className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                  {inner}
                </div>
              );
            })}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
