import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { DOCTOR_INFO } from "@/lib/constants";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: "Política de Cookies | Dr. Mario Ruvalcaba",
  description: "Política de cookies del sitio web del Dr. Mario Ruvalcaba, cirujano bariátra en Mérida, Yucatán.",
  robots: { index: false, follow: false },
};

export default async function PoliticaDeCookiesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Legal content always loads from ES regardless of locale
  const t = await getTranslations("legal.cookies");
  const tLegal = await getTranslations("legal");

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
        <section>
          <h2 className="text-lg font-semibold text-navy-900">{t("s1Title")}</h2>
          <p className="mt-3 text-base leading-relaxed text-navy-600">{t("s1Content")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy-900">{t("s2Title")}</h2>
          <div className="mt-3 space-y-3">
            {([
              { key: "s2Essential" },
              { key: "s2Analytics" },
              { key: "s2Marketing" },
            ] as const).map(({ key }) => (
              <div key={key} className="rounded-xl border border-navy-100 bg-navy-50 px-4 py-3">
                <p className="text-sm leading-relaxed text-navy-600">{t(key)}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy-900">{t("s3Title")}</h2>
          <p className="mt-3 text-base leading-relaxed text-navy-600">{t("s3Content")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy-900">{t("s4Title")}</h2>
          <p className="mt-3 text-base leading-relaxed text-navy-600">{t("s4Content")}</p>
        </section>
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
