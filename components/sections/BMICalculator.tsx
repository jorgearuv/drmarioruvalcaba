"use client";

import { useState } from "react";
import { type Variants, motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/routing";

// ---------------------------------------------------------------------------
// Framer-motion easing constant
// ---------------------------------------------------------------------------

const CUBIC_EASE_OUT = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// BMI category data model and classification logic
// ---------------------------------------------------------------------------

interface BMICategory {
  key: string;
  color: string;
  borderColor: string;
  ringColor: string;
}

function getBMICategory(bmiValue: number): BMICategory {
  if (bmiValue < 18.5) {
    return {
      key: "underweight",
      color: "text-blue-600",
      borderColor: "border-blue-500",
      ringColor: "ring-blue-500/20",
    };
  }
  if (bmiValue < 25) {
    return {
      key: "normal",
      color: "text-green-600",
      borderColor: "border-green-500",
      ringColor: "ring-green-500/20",
    };
  }
  if (bmiValue < 30) {
    return {
      key: "overweight",
      color: "text-amber-600",
      borderColor: "border-amber-500",
      ringColor: "ring-amber-500/20",
    };
  }
  if (bmiValue < 35) {
    return {
      key: "obesityI",
      color: "text-orange-600",
      borderColor: "border-orange-500",
      ringColor: "ring-orange-500/20",
    };
  }
  if (bmiValue < 40) {
    return {
      key: "obesityII",
      color: "text-red-600",
      borderColor: "border-red-500",
      ringColor: "ring-red-500/20",
    };
  }
  return {
    key: "obesityIII",
    color: "text-red-700",
    borderColor: "border-red-700",
    ringColor: "ring-red-700/20",
  };
}

// ---------------------------------------------------------------------------
// BMI scale infographic — shown on the right before any result is calculated
// ---------------------------------------------------------------------------

interface BMIScaleBar {
  key: string;
  bmiRange: string;
  color: string;
  widthPercent: number;
}

const BMI_SCALE_BARS: BMIScaleBar[] = [
  { key: "underweight",  bmiRange: "< 18.5",      color: "#7B9DBF", widthPercent: 22 },
  { key: "normal",       bmiRange: "18.5 – 24.9", color: "#6AAF8D", widthPercent: 38 },
  { key: "overweight",   bmiRange: "25 – 29.9",   color: "#D4A853", widthPercent: 56 },
  { key: "obesityI",     bmiRange: "30 – 34.9",   color: "#C4802A", widthPercent: 72 },
  { key: "obesityII",    bmiRange: "35 – 39.9",   color: "#B85C4A", widthPercent: 88 },
  { key: "obesityIII",   bmiRange: "≥ 40",         color: "#8B3A3A", widthPercent: 100 },
];

interface BMIScaleVisualizationProps {
  t: (key: string, values?: Record<string, string>) => string;
}

const BMIScaleVisualization = ({ t }: BMIScaleVisualizationProps) => (
  <div
    role="img"
    aria-label={t("scale.ariaLabel")}
  >
    {/* Ornamental centered title */}
    <div className="flex items-center gap-3">
      <div
        className="h-px flex-1 bg-gradient-to-r from-transparent to-navy-200/60"
        aria-hidden="true"
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-navy-400">
        {t("scale.title")}
      </p>
      <div
        className="h-px flex-1 bg-gradient-to-r from-navy-200/60 to-transparent"
        aria-hidden="true"
      />
    </div>

    {/* Progress scale bars */}
    <div className="mt-6 space-y-4">
      {BMI_SCALE_BARS.map((scaleBar) => (
        <div key={scaleBar.key}>
          <div className="mb-1.5 flex items-baseline justify-between">
            <span className="text-[13px] font-semibold text-navy-700">
              {t(`categories.${scaleBar.key}.label`)}
            </span>
            <span className="text-[11px] font-medium tabular-nums text-navy-400">
              {scaleBar.bmiRange}
            </span>
          </div>
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-navy-100/60"
            aria-hidden="true"
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${scaleBar.widthPercent}%`,
                background: `linear-gradient(90deg, ${scaleBar.color}44, ${scaleBar.color})`,
                boxShadow: `0 0 6px ${scaleBar.color}20`,
              }}
            />
          </div>
        </div>
      ))}
    </div>

    <p className="mt-6 text-xs leading-relaxed text-navy-400">
      {t("scale.disclaimer")}
    </p>
  </div>
);

// ---------------------------------------------------------------------------
// BMIResultDisplay — animated result panel shown after calculation
// ---------------------------------------------------------------------------

interface BMIResultDisplayProps {
  calculatedBMI: number;
  bmiCategory: BMICategory;
  isCandidateForSurgery: boolean;
  shouldReduceMotion: boolean;
  whatsAppUrl: string;
  t: (key: string, values?: Record<string, string>) => string;
  tCta: (key: string, values?: Record<string, string>) => string;
}

const BMIResultDisplay = ({
  calculatedBMI,
  bmiCategory,
  isCandidateForSurgery,
  shouldReduceMotion,
  whatsAppUrl,
  t,
  tCta,
}: BMIResultDisplayProps) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.92,
      y: shouldReduceMotion ? 0 : 16,
    }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.96,
      y: shouldReduceMotion ? 0 : -8,
    }}
    transition={{
      duration: shouldReduceMotion ? 0 : 0.45,
      ease: CUBIC_EASE_OUT,
    }}
    className="w-full text-center"
  >
    {/* Circular BMI gauge */}
    <div
      className={`mx-auto flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 ring-4 bg-white shadow-lg ${bmiCategory.borderColor} ${bmiCategory.ringColor}`}
      role="img"
      aria-label={t("result.ariaLabel", { bmi: String(calculatedBMI) })}
    >
      <p className="text-xs font-medium text-navy-500">{t("result.yourBMI")}</p>
      <p className={`font-display text-4xl font-bold ${bmiCategory.color}`}>
        {calculatedBMI}
      </p>
    </div>

    {/* Category label */}
    <p className={`mt-5 font-display text-xl font-semibold ${bmiCategory.color}`}>
      {t(`categories.${bmiCategory.key}.label`)}
    </p>

    {/* Personalized description */}
    <p className="mt-3 text-sm leading-relaxed text-navy-600">
      {t(`categories.${bmiCategory.key}.description`)}
    </p>

    {/* Surgery candidate WhatsApp CTA */}
    {isCandidateForSurgery && (
      <motion.a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.4,
          delay: shouldReduceMotion ? 0 : 0.25,
          ease: CUBIC_EASE_OUT,
        }}
        className="animate-pulse-glow mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3 font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:from-primary-500 hover:to-primary-600 hover:shadow-primary-600/40"
        aria-label={tCta("scheduleBariatricAssessmentAria")}
      >
        {tCta("scheduleAssessment")}
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </motion.a>
    )}
  </motion.div>
);

// ---------------------------------------------------------------------------
// NumberInputField — shared input component enforcing 44px minimum touch target
// ---------------------------------------------------------------------------

interface NumberInputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  unitLabel: string;
  onChange: (value: string) => void;
}

const NumberInputField = ({
  id,
  label,
  placeholder,
  value,
  unitLabel,
  onChange,
}: NumberInputFieldProps) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy-500"
    >
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min="1"
        step="0.1"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-required="true"
        className="w-full rounded-xl border border-navy-200/60 bg-navy-50/50 px-4 py-3.5 text-base text-navy-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/15"
        style={{ minHeight: "44px" }}
      />
      {/* Unit badge */}
      <span
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md bg-navy-100 px-2 py-0.5 text-xs font-semibold text-navy-400"
        aria-hidden="true"
      >
        {unitLabel}
      </span>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Section-level animation variants
// ---------------------------------------------------------------------------

function buildSectionAnimationVariants(shouldReduceMotion: boolean): {
  fadeUp: Variants;
  slideInLeft: Variants;
  slideInRight: Variants;
  divider: Variants;
} {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (delaySeconds: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : delaySeconds,
        ease: CUBIC_EASE_OUT,
      },
    }),
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: CUBIC_EASE_OUT,
      },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : 0.1,
        ease: CUBIC_EASE_OUT,
      },
    },
  };

  const divider: Variants = {
    hidden: { scaleX: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return { fadeUp, slideInLeft, slideInRight, divider };
}

// ---------------------------------------------------------------------------
// BMICalculator — two-column editorial layout
// ---------------------------------------------------------------------------

export default function BMICalculator() {
  const [weightKg, setWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [calculatedBMI, setCalculatedBMI] = useState<number | null>(null);

  const t = useTranslations("home.bmi");
  const tCta = useTranslations("common.cta");
  const locale = useLocale() as Locale;
  const whatsAppUrl = getWhatsAppUrl(locale);

  const shouldReduceMotion = useReducedMotion() ?? false;
  const { fadeUp, slideInLeft, slideInRight, divider } =
    buildSectionAnimationVariants(shouldReduceMotion);

  const parsedWeight = parseFloat(weightKg);
  const parsedHeight = parseFloat(heightCm);
  const hasValidInputs =
    !isNaN(parsedWeight) &&
    !isNaN(parsedHeight) &&
    parsedWeight > 0 &&
    parsedHeight > 0;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hasValidInputs) return;

    const heightInMeters = parsedHeight / 100;
    const bmiResult = parsedWeight / (heightInMeters * heightInMeters);
    setCalculatedBMI(parseFloat(bmiResult.toFixed(1)));
  };

  const bmiCategory =
    calculatedBMI !== null ? getBMICategory(calculatedBMI) : null;
  const isCandidateForSurgery = calculatedBMI !== null && calculatedBMI >= 30;

  const sectionHeadingId = "bmi-calculator-heading";

  return (
    <section
      className="relative py-20 md:py-32"
      aria-labelledby={sectionHeadingId}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ----------------------------------------------------------------
            Centered section header
        ---------------------------------------------------------------- */}
        <div className="text-center">
          <motion.h2
            id={sectionHeadingId}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="heading-gradient mt-3 font-display text-4xl md:text-5xl"
          >
            {t("heading")}
          </motion.h2>

          <motion.div
            variants={divider}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-divider mx-auto mt-5 origin-left"
            aria-hidden="true"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true }}
            className="mt-5 text-lg text-navy-500"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* ----------------------------------------------------------------
            Two-column editorial layout
        ---------------------------------------------------------------- */}
        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-start md:gap-12">

          {/* Left column: calculator form card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:w-5/12"
          >
            <div className="card-premium card-glow p-8 md:p-10">
              <h3 className="font-display text-xl text-navy-900">
                {t("form.title")}
              </h3>
              <p className="mt-1 text-sm text-navy-400">
                {t("form.subtitle")}
              </p>

              <form
                onSubmit={handleFormSubmit}
                noValidate
                className="mt-6 space-y-5"
                aria-label={t("form.ariaLabel")}
              >
                <NumberInputField
                  id="weight-input"
                  label={t("form.weight")}
                  placeholder={t("form.weightPlaceholder")}
                  value={weightKg}
                  unitLabel="kg"
                  onChange={setWeightKg}
                />

                <NumberInputField
                  id="height-input"
                  label={t("form.height")}
                  placeholder={t("form.heightPlaceholder")}
                  value={heightCm}
                  unitLabel="cm"
                  onChange={setHeightCm}
                />

                <button
                  type="submit"
                  disabled={!hasValidInputs}
                  aria-disabled={!hasValidInputs}
                  className="mt-2 w-full rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 py-3.5 font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:from-primary-500 hover:to-primary-600 hover:shadow-primary-600/35 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:from-primary-600 disabled:hover:to-primary-700"
                  style={{ minHeight: "44px" }}
                >
                  {t("form.calculate")}
                </button>
              </form>

              {/* Legal disclaimer */}
              <p className="mt-5 text-[11px] leading-relaxed text-navy-400">
                {t("form.disclaimer")}
              </p>
            </div>
          </motion.div>

          {/* Right column: BMI scale infographic or animated result */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:w-7/12"
          >
            <div
              aria-live="polite"
              aria-atomic="true"
              aria-label={
                calculatedBMI !== null
                  ? t("result.ariaResult", { bmi: String(calculatedBMI), category: t(`categories.${bmiCategory?.key}.label`) })
                  : t("result.ariaPlaceholder")
              }
              className="card-premium flex min-h-[320px] items-center justify-center p-8 md:p-10"
            >
              <AnimatePresence mode="wait">
                {calculatedBMI !== null && bmiCategory ? (
                  <BMIResultDisplay
                    key="bmi-result"
                    calculatedBMI={calculatedBMI}
                    bmiCategory={bmiCategory}
                    isCandidateForSurgery={isCandidateForSurgery}
                    shouldReduceMotion={shouldReduceMotion}
                    whatsAppUrl={whatsAppUrl}
                    t={t}
                    tCta={tCta}
                  />
                ) : (
                  <motion.div
                    key="bmi-scale"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                    className="w-full"
                  >
                    <BMIScaleVisualization t={t} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* ----------------------------------------------------------------
            Bariatric surgery candidacy criteria
        ---------------------------------------------------------------- */}
        <BariatricCriteriaSection shouldReduceMotion={shouldReduceMotion} t={t} />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// BariatricCriteriaSection
// ---------------------------------------------------------------------------

const CRITERIA_KEYS = [
  "severObesity",
  "obesityWithComorbidities",
  "obesityWithDiabetes",
  "failedTreatments",
  "favorableEvaluation",
] as const;

interface BariatricCriteriaSectionProps {
  shouldReduceMotion: boolean;
  t: (key: string, values?: Record<string, string>) => string;
}

function BariatricCriteriaSection({
  shouldReduceMotion,
  t,
}: BariatricCriteriaSectionProps) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (delaySeconds: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : delaySeconds,
        ease: CUBIC_EASE_OUT,
      },
    }),
  };

  return (
    <div className="mt-20 md:mt-28">
      {/* Section heading */}
      <div className="text-center">
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600"
        >
          {t("candidacy.overline")}
        </motion.p>

        <motion.h3
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true }}
          className="mt-3 font-display text-3xl text-navy-900 md:text-4xl"
        >
          {t("candidacy.heading")}
        </motion.h3>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-base text-navy-500 md:text-lg"
        >
          {t("candidacy.description")}
        </motion.p>
      </div>

      {/* Criteria cards */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CRITERIA_KEYS.map((criterionKey, criterionIndex) => (
          <motion.article
            key={criterionKey}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.15 + criterionIndex * 0.1}
            viewport={{ once: true, margin: "-40px" }}
            className="card-premium card-glow flex items-start gap-4 p-6"
          >
            <div
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-md shadow-teal-600/25"
              aria-hidden="true"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-display text-base text-navy-900">
                {t(`candidacy.criteria.${criterionKey}.title`)}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                {t(`candidacy.criteria.${criterionKey}.description`)}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Disclaimer note */}
      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.5}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-navy-400"
      >
        {t("candidacy.disclaimer")}
      </motion.p>

      <motion.p
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.5}
        viewport={{ once: true }}
        className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-navy-300 italic"
      >
        {t("candidacy.reference")}
      </motion.p>
    </div>
  );
}
