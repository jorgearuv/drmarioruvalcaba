import { getTranslations } from "next-intl/server";

export default async function MedicalDisclaimer() {
  const t = await getTranslations("procedures.shared");

  return (
    <div className="border-y border-navy-100/80 bg-navy-50" role="note" aria-label="Aviso médico">
      <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-5">

          {/* Info badge — squared, clinical */}
          <div
            className="shrink-0 flex h-9 w-9 items-center justify-center rounded-md border border-teal-600/20 bg-white shadow-xs"
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4 text-teal-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>

          {/* Vertical divider */}
          <div className="hidden h-8 w-px shrink-0 bg-navy-200/70 sm:block" aria-hidden="true" />

          {/* Label + text */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="shrink-0 font-mono text-[10px] font-semibold tracking-[0.2em] text-teal-700 uppercase">
                {t("disclaimerLabel")}
              </span>
              <p className="text-[13px] leading-relaxed text-navy-500">
                {t("disclaimer")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
