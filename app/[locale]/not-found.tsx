"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("common.notFound");

  return (
    <section className="gradient-mesh-light flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-[120px] leading-none tracking-tight text-navy-100 md:text-[180px]">
          404
        </p>
        <h1 className="heading-gradient -mt-4 font-display text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <div className="section-divider mx-auto mt-5" />
        <p className="mx-auto mt-5 max-w-md text-lg text-navy-500">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {t("goHome")}
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-2xl border border-navy-200 px-8 py-4 font-semibold text-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 hover:shadow-lg"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
