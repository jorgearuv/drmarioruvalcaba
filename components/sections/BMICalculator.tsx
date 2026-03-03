"use client";

import { useState } from "react";
import { type Variants, motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Framer-motion easing constant — typed as const tuple so TypeScript narrows
// it to [number, number, number, number] instead of number[], satisfying
// framer-motion's Easing union constraint.
// ---------------------------------------------------------------------------

const CUBIC_EASE_OUT = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// BMI category data model and classification logic
// ---------------------------------------------------------------------------

interface BMICategory {
  label: string;
  color: string;
  borderColor: string;
  ringColor: string;
  description: string;
}

function getBMICategory(bmiValue: number): BMICategory {
  if (bmiValue < 18.5) {
    return {
      label: "Bajo peso",
      color: "text-blue-600",
      borderColor: "border-blue-500",
      ringColor: "ring-blue-500/20",
      description:
        "Tu peso está por debajo del rango saludable. Te recomendamos consultar con un especialista en nutrición para alcanzar un peso adecuado.",
    };
  }
  if (bmiValue < 25) {
    return {
      label: "Normal",
      color: "text-green-600",
      borderColor: "border-green-500",
      ringColor: "ring-green-500/20",
      description:
        "¡Felicidades! Tu peso se encuentra dentro del rango saludable. Mantén tus hábitos de alimentación y actividad física.",
    };
  }
  if (bmiValue < 30) {
    return {
      label: "Sobrepeso",
      color: "text-amber-600",
      borderColor: "border-amber-500",
      ringColor: "ring-amber-500/20",
      description:
        "Tu peso está por encima del rango saludable. Un cambio en hábitos alimenticios y ejercicio regular pueden ayudarte. Considera una consulta médica.",
    };
  }
  if (bmiValue < 35) {
    return {
      label: "Obesidad Grado I",
      color: "text-orange-600",
      borderColor: "border-orange-500",
      ringColor: "ring-orange-500/20",
      description:
        "Tu IMC indica obesidad grado I. La cirugía bariátrica podría ser una opción para ti. Te recomendamos agendar una valoración médica.",
    };
  }
  if (bmiValue < 40) {
    return {
      label: "Obesidad Grado II",
      color: "text-red-600",
      borderColor: "border-red-500",
      ringColor: "ring-red-500/20",
      description:
        "Tu IMC indica obesidad grado II. Eres un candidato potencial para cirugía bariátrica. Agenda una valoración para conocer tus opciones.",
    };
  }
  return {
    label: "Obesidad Grado III / Mórbida",
    color: "text-red-700",
    borderColor: "border-red-700",
    ringColor: "ring-red-700/20",
    description:
      "Tu IMC indica obesidad mórbida. La cirugía bariátrica es altamente recomendada en tu caso. Es importante que busques atención médica especializada lo antes posible.",
  };
}

// ---------------------------------------------------------------------------
// BMI scale infographic — shown on the right before any result is calculated
// ---------------------------------------------------------------------------

interface BMIScaleBar {
  label: string;
  bmiRange: string;
  colorClass: string;
  widthClass: string;
}

const BMI_SCALE_BARS: BMIScaleBar[] = [
  {
    label: "Bajo peso",
    bmiRange: "< 18.5",
    colorClass: "bg-blue-400",
    widthClass: "w-3/12",
  },
  {
    label: "Normal",
    bmiRange: "18.5 – 24.9",
    colorClass: "bg-green-500",
    widthClass: "w-5/12",
  },
  {
    label: "Sobrepeso",
    bmiRange: "25 – 29.9",
    colorClass: "bg-amber-400",
    widthClass: "w-8/12",
  },
  {
    label: "Obesidad I",
    bmiRange: "30 – 34.9",
    colorClass: "bg-orange-500",
    widthClass: "w-9/12",
  },
  {
    label: "Obesidad II",
    bmiRange: "35 – 39.9",
    colorClass: "bg-red-500",
    widthClass: "w-10/12",
  },
  {
    label: "Obesidad III",
    bmiRange: "≥ 40",
    colorClass: "bg-red-700",
    widthClass: "w-full",
  },
];

const BMIScaleVisualization = () => (
  <div
    role="img"
    aria-label="Infografía de categorías de IMC: Bajo peso menos de 18.5, Normal 18.5 a 24.9, Sobrepeso 25 a 29.9, Obesidad I 30 a 34.9, Obesidad II 35 a 39.9, Obesidad III 40 o más"
  >
    <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-navy-400">
      Escala de IMC
    </p>
    <div className="space-y-3">
      {BMI_SCALE_BARS.map((scaleBar) => (
        <div key={scaleBar.label} className="flex items-center gap-3">
          {/* Proportional colored bar — decorative, meaning communicated via aria-label above */}
          <div
            className={`h-7 ${scaleBar.widthClass} ${scaleBar.colorClass} flex-shrink-0 rounded-md opacity-80`}
            aria-hidden="true"
          />
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="text-xs font-semibold text-navy-700">
              {scaleBar.label}
            </span>
            <span className="text-[11px] text-navy-400">{scaleBar.bmiRange}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="mt-6 text-xs leading-relaxed text-navy-400">
      El Índice de Masa Corporal (IMC) es una medida de referencia. Consulta
      siempre a un médico para una evaluación completa e individualizada.
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
}

const BMIResultDisplay = ({
  calculatedBMI,
  bmiCategory,
  isCandidateForSurgery,
  shouldReduceMotion,
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
      aria-label={`Tu IMC es ${calculatedBMI}`}
    >
      <p className="text-xs font-medium text-navy-500">Tu IMC</p>
      <p className={`font-display text-4xl font-bold ${bmiCategory.color}`}>
        {calculatedBMI}
      </p>
    </div>

    {/* Category label */}
    <p className={`mt-5 font-display text-xl font-semibold ${bmiCategory.color}`}>
      {bmiCategory.label}
    </p>

    {/* Personalized description */}
    <p className="mt-3 text-sm leading-relaxed text-navy-600">
      {bmiCategory.description}
    </p>

    {/* Surgery candidate WhatsApp CTA */}
    {isCandidateForSurgery && (
      <motion.a
        href={WHATSAPP_URL}
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
        aria-label="Agendar valoración bariátrica por WhatsApp con el Dr. Mario Ruvalcaba"
      >
        Agendar Valoración
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
      {/* Unit badge — decorative, unit is also communicated via label text */}
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
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600"
          >
            Herramienta Interactiva
          </motion.p>

          <motion.h2
            id={sectionHeadingId}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="heading-gradient mt-3 font-display text-4xl md:text-5xl"
          >
            Calcula tu Índice de Masa Corporal
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
            Descubre si eres candidato para cirugía bariátrica
          </motion.p>
        </div>

        {/* ----------------------------------------------------------------
            Two-column editorial layout
            Mobile: stacked (form on top, result/scale below)
            md+:    form 5/12 left | result or scale 7/12 right
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
                Ingresa tus medidas
              </h3>
              <p className="mt-1 text-sm text-navy-400">
                Usa valores reales para obtener un resultado preciso.
              </p>

              <form
                onSubmit={handleFormSubmit}
                noValidate
                className="mt-6 space-y-5"
                aria-label="Formulario de cálculo de IMC"
              >
                <NumberInputField
                  id="weight-input"
                  label="Peso"
                  placeholder="Ej: 85"
                  value={weightKg}
                  unitLabel="kg"
                  onChange={setWeightKg}
                />

                <NumberInputField
                  id="height-input"
                  label="Altura"
                  placeholder="Ej: 170"
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
                  Calcular IMC
                </button>
              </form>

              {/* Legal disclaimer */}
              <p className="mt-5 text-[11px] leading-relaxed text-navy-400">
                Esta herramienta es de referencia informativa. Los resultados
                no sustituyen una evaluación médica profesional.
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
            {/*
              aria-live="polite" announces result changes to screen readers
              without interrupting ongoing speech. aria-atomic="true" ensures
              the full region is announced as a unit on each update.
            */}
            <div
              aria-live="polite"
              aria-atomic="true"
              aria-label={
                calculatedBMI !== null
                  ? `Resultado: IMC ${calculatedBMI}, categoría ${bmiCategory?.label}`
                  : "El resultado del cálculo aparecerá aquí"
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
                    <BMIScaleVisualization />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* ----------------------------------------------------------------
            Bariatric surgery candidacy criteria
        ---------------------------------------------------------------- */}
        <BariatricCriteriaSection shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// BariatricCriteriaSection — "¿Quiénes son candidatos?"
// ---------------------------------------------------------------------------

interface CriterionData {
  title: string;
  description: string;
}

const BARIATRIC_CRITERIA: CriterionData[] = [
  {
    title: "IMC ≥ 40 (obesidad severa)",
    description:
      "Pacientes con índice de masa corporal igual o mayor a 40, aun sin enfermedades asociadas.",
  },
  {
    title: "IMC ≥ 35 con comorbilidades",
    description:
      "Diabetes tipo 2, hipertensión arterial, apnea obstructiva del sueño, dislipidemia, enfermedad articular degenerativa o esteatohepatitis no alcohólica.",
  },
  {
    title: "IMC 30–34.9 con diabetes tipo 2 mal controlada",
    description:
      "Pacientes con obesidad grado I y diabetes tipo 2 que no logran control metabólico adecuado con tratamiento médico (cirugía metabólica).",
  },
  {
    title: "Fracaso de tratamientos previos",
    description:
      "Pacientes que han intentado bajar de peso con dieta, ejercicio y/o medicamentos sin resultados sostenidos durante al menos 6 meses.",
  },
  {
    title: "Evaluación integral favorable",
    description:
      "Valoración multidisciplinaria (nutricional, psicológica, médica) que confirme al paciente como candidato apto y comprometido con los cambios de estilo de vida.",
  },
];

interface BariatricCriteriaSectionProps {
  shouldReduceMotion: boolean;
}

function BariatricCriteriaSection({
  shouldReduceMotion,
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
          Criterios de Candidatura
        </motion.p>

        <motion.h3
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true }}
          className="heading-gradient mt-3 font-display text-3xl md:text-4xl"
        >
          ¿Quiénes son candidatos a cirugía bariátrica?
        </motion.h3>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-base text-navy-500 md:text-lg"
        >
          De acuerdo con criterios internacionales, pueden ser candidatos a
          cirugía bariátrica los pacientes que cumplan con alguna de las
          siguientes condiciones:
        </motion.p>
      </div>

      {/* Criteria cards */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {BARIATRIC_CRITERIA.map((criterion, criterionIndex) => (
          <motion.article
            key={criterion.title}
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
                {criterion.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
                {criterion.description}
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
        La indicación final siempre debe realizarse de manera individualizada
        por un cirujano bariatra certificado, tomando en cuenta la historia
        clínica completa, expectativas del paciente y riesgos asociados.
      </motion.p>
    </div>
  );
}
