"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PROCEDURES, BARIATRIC_SUB_PROCEDURES, SUB_PROCEDURES } from "@/lib/procedures";
import type { Procedure } from "@/types";

// ---------------------------------------------------------------------------
// Framer-motion variant factories
//
// All bezier easing values are typed as `const` tuples so TypeScript narrows
// them to `[number, number, number, number]` rather than `number[]`, which
// satisfies framer-motion's `Easing` union type.
// ---------------------------------------------------------------------------

const CUBIC_EASE_OUT = [0.22, 1, 0.36, 1] as const;

function buildFadeUpVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
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
}

function buildDividerVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      scaleX: shouldReduceMotion ? 1 : 0,
      opacity: shouldReduceMotion ? 1 : 0,
    },
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
}

// ---------------------------------------------------------------------------
// Inline SVG icons — extracted to avoid repetition in JSX
// ---------------------------------------------------------------------------

const ArrowRightIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
);

const CheckCircleIcon = () => (
  <svg
    className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// ---------------------------------------------------------------------------
// ProcedureBenefitList — rendered only inside the wider (featured) card slots
// ---------------------------------------------------------------------------

interface ProcedureBenefitListProps {
  benefits: Procedure["benefits"];
  maxItems?: number;
}

const ProcedureBenefitList = ({
  benefits,
  maxItems = 3,
}: ProcedureBenefitListProps) => {
  const visibleBenefits = benefits.slice(0, maxItems);

  return (
    <ul className="mt-4 space-y-2" aria-label="Beneficios principales">
      {visibleBenefits.map((benefit) => (
        <li key={benefit.title} className="flex items-start gap-2">
          <CheckCircleIcon />
          <span className="text-sm leading-snug text-navy-600">
            {benefit.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

// ---------------------------------------------------------------------------
// ProcedureCard — shared card shell for both featured and compact bento slots
// ---------------------------------------------------------------------------

interface ProcedureCardProps {
  procedure: Procedure;
  isFeatured: boolean;
  animationDelaySeconds: number;
  shouldReduceMotion: boolean;
}

const ProcedureCard = ({
  procedure,
  isFeatured,
  animationDelaySeconds,
  shouldReduceMotion,
}: ProcedureCardProps) => {
  const fadeUpVariants = buildFadeUpVariants(shouldReduceMotion);

  return (
    <motion.article
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      custom={animationDelaySeconds}
      viewport={{ once: true, margin: "-60px" }}
    >
      <Link
        href={`/${procedure.slug}`}
        className="group block h-full"
        aria-label={`Ver más sobre ${procedure.title}`}
      >
        <div
          className={`card-premium card-glow flex h-full flex-col ${
            isFeatured ? "p-8 md:p-10" : "p-7"
          }`}
        >
          {/* Procedure icon container */}
          <div
            className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-100 ${
              isFeatured ? "h-16 w-16 text-4xl" : "h-14 w-14 text-3xl"
            }`}
            aria-hidden="true"
          >
            {procedure.icon}
          </div>

          {/* Procedure title */}
          <h3
            className={`mt-5 font-display text-navy-900 transition-colors group-hover:text-teal-700 ${
              isFeatured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {procedure.title}
          </h3>

          {/* Procedure description */}
          <p
            className={`mt-3 leading-relaxed text-navy-500 ${
              isFeatured ? "text-base" : "flex-grow text-sm"
            }`}
          >
            {procedure.description}
          </p>

          {/* Key benefits list — featured (wider) cards only */}
          {isFeatured && procedure.benefits.length > 0 && (
            <ProcedureBenefitList benefits={procedure.benefits} maxItems={3} />
          )}

          {/* Flex spacer pushes CTA to the bottom on compact cards */}
          {!isFeatured && <div className="flex-grow" />}

          {/* Conocer más CTA */}
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-600 transition-all duration-300 group-hover:gap-3">
            <span>Conocer más</span>
            <ArrowRightIcon />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// ---------------------------------------------------------------------------
// Bento grid configuration
//
// Layout (12-column grid):
//   Row 1: [0] 7 cols — featured | [1] 5 cols — compact
//   Row 2: [2] 5 cols — compact  | [3] 7 cols — featured
//
// This alternating wide/narrow rhythm creates visual hierarchy without a
// rigid 4-equal-column grid.
// ---------------------------------------------------------------------------

const BENTO_GRID_CONFIGS = [
  { isFeatured: true,  colSpan: "md:col-span-7", delaySeconds: 0.0  },
  { isFeatured: false, colSpan: "md:col-span-5", delaySeconds: 0.12 },
  { isFeatured: false, colSpan: "md:col-span-5", delaySeconds: 0.24 },
  { isFeatured: true,  colSpan: "md:col-span-7", delaySeconds: 0.36 },
] as const;

const PROCEDURES_FOR_BENTO = PROCEDURES.slice(0, 4);

export default function ServiceCards() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUpVariants = buildFadeUpVariants(shouldReduceMotion);
  const dividerVariants = buildDividerVariants(shouldReduceMotion);

  const sectionHeadingId = "service-cards-heading";

  return (
    <section
      id="procedimientos"
      className="gradient-mesh-light relative py-20 md:py-32"
      aria-labelledby={sectionHeadingId}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ----------------------------------------------------------------
            Section header
        ---------------------------------------------------------------- */}
        <div className="text-center">
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true }}
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600"
          >
            Especialidades
          </motion.p>

          <motion.h2
            id={sectionHeadingId}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="heading-gradient mt-3 font-display text-4xl md:text-5xl"
          >
            Nuestros Procedimientos
          </motion.h2>

          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-divider mx-auto mt-5 origin-left"
            aria-hidden="true"
          />

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.4}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-lg text-navy-500"
          >
            Soluciones quirúrgicas personalizadas a las necesidades de cada
            paciente
          </motion.p>
        </div>

        {/* ----------------------------------------------------------------
            Asymmetric bento grid
            Mobile:  single-column stack
            md+:     12-column grid with alternating 7/5 column spans
        ---------------------------------------------------------------- */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          {PROCEDURES_FOR_BENTO.map((procedure, procedureIndex) => {
            const bentoConfig = BENTO_GRID_CONFIGS[procedureIndex];

            return (
              <div
                key={procedure.slug}
                className={`col-span-1 ${bentoConfig.colSpan}`}
              >
                <ProcedureCard
                  procedure={procedure}
                  isFeatured={bentoConfig.isFeatured}
                  animationDelaySeconds={bentoConfig.delaySeconds}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>
            );
          })}
        </div>

        {/* ----------------------------------------------------------------
            All procedures — chip/tag subsection
        ---------------------------------------------------------------- */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="heading-gradient text-center font-display text-2xl md:text-3xl">
            Todos Nuestros Procedimientos
          </h3>
          <div className="section-divider mx-auto mt-4" aria-hidden="true" />

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Bariatric procedures */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
                Cirugía Bariátrica
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {BARIATRIC_SUB_PROCEDURES.map((subProcedure) => (
                  <span
                    key={subProcedure.title}
                    className="rounded-full border border-navy-200 px-4 py-2 text-sm text-navy-600 transition hover:border-teal-300 hover:text-teal-700"
                  >
                    {subProcedure.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Minimally invasive procedures */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
                Cirugía General de Mínima Invasión
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUB_PROCEDURES.map((subProcedure) => (
                  <span
                    key={subProcedure.title}
                    className="rounded-full border border-navy-200 px-4 py-2 text-sm text-navy-600 transition hover:border-teal-300 hover:text-teal-700"
                  >
                    {subProcedure.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
