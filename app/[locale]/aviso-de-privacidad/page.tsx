import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { DOCTOR_INFO } from "@/lib/constants";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Dr. Mario Ruvalcaba",
  description: "Aviso de privacidad conforme a la LFPDPPP del consultorio del Dr. Mario Ruvalcaba, cirujano bariátra en Mérida, Yucatán.",
  robots: { index: false, follow: false },
};

export default async function AvisoDePrivacidadPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Legal content always loads from ES regardless of locale
  const t = await getTranslations("legal.privacy");
  const tLegal = await getTranslations("legal");

  const simpleSections = [
    { title: t("s1Title"), content: t("s1Content") },
    { title: t("s2Title"), content: t("s2Content") },
    { title: t("s4Title"), content: t("s4Content") },
    { title: t("s5Title"), content: t("s5Content") },
    { title: t("s6Title"), content: t("s6Content") },
    { title: t("s7Title"), content: t("s7Content") },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-teal-600 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {tLegal("backToHome")}
      </Link>

      <h1 className="mt-8 font-display text-3xl text-navy-900 md:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-2 text-sm text-navy-500">{t("lastUpdated")}</p>

      <p className="mt-6 text-base leading-relaxed text-navy-600">{t("intro")}</p>

      <div className="mt-10 space-y-8">
        {/* Sections 1 and 2 */}
        {simpleSections.slice(0, 2).map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h2 className="text-lg font-semibold text-navy-900">{section.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-600">{section.content}</p>
          </section>
        ))}

        {/* Section 3 — complex (finalidades) */}
        <section>
          <h2 className="text-lg font-semibold text-navy-900">{t("s3Title")}</h2>
          <div className="mt-3 space-y-3 text-base leading-relaxed text-navy-600">
            <p className="font-medium text-navy-700">{t("s3Primary")}</p>
            <p className="whitespace-pre-line pl-2">{t("s3PrimaryItems")}</p>
            <p className="mt-4 font-medium text-navy-700">{t("s3Secondary")}</p>
            <p className="whitespace-pre-line pl-2">{t("s3SecondaryItems")}</p>
            <p className="mt-2 text-sm italic text-navy-500">{t("s3OptOut")}</p>
          </div>
        </section>

        {/* Sections 4–7 */}
        {simpleSections.slice(2).map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h2 className="text-lg font-semibold text-navy-900">{section.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-navy-600">{section.content}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50 px-6 py-5">
        <p className="text-sm text-navy-500">
          {DOCTOR_INFO.name} &middot; {DOCTOR_INFO.address}, {DOCTOR_INFO.city}, {DOCTOR_INFO.state} &middot;{" "}
          <a href={`mailto:${DOCTOR_INFO.email}`} className="underline hover:text-teal-600">
            {DOCTOR_INFO.email}
          </a>
        </p>
      </div>
    </main>
  );
}
