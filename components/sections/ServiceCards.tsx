"use client";

import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Procedure, SubProcedure } from "@/types";

// ---------------------------------------------------------------------------
// Framer-motion variant factories
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
  benefitsLabel: string;
}

const ProcedureBenefitList = ({
  benefits,
  maxItems = 3,
  benefitsLabel,
}: ProcedureBenefitListProps) => {
  const visibleBenefits = benefits.slice(0, maxItems);

  return (
    <ul className="mt-4 space-y-2" aria-label={benefitsLabel}>
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
  learnMoreLabel: string;
  benefitsLabel: string;
  viewMoreAboutLabel: string;
}

const ProcedureCard = ({
  procedure,
  isFeatured,
  animationDelaySeconds,
  shouldReduceMotion,
  learnMoreLabel,
  benefitsLabel,
  viewMoreAboutLabel,
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
        href={`/${procedure.slug}` as any}
        className="group block h-full"
        aria-label={`${viewMoreAboutLabel} ${procedure.title}`}
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
            <ProcedureBenefitList
              benefits={procedure.benefits}
              maxItems={3}
              benefitsLabel={benefitsLabel}
            />
          )}

          {/* Flex spacer pushes CTA to the bottom on compact cards */}
          {!isFeatured && <div className="flex-grow" />}

          {/* Conocer más CTA */}
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-teal-600 transition-all duration-300 group-hover:gap-3">
            <span>{learnMoreLabel}</span>
            <ArrowRightIcon />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// ---------------------------------------------------------------------------
// Bento grid configuration
// ---------------------------------------------------------------------------

const BENTO_GRID_CONFIGS = [
  { isFeatured: true,  colSpan: "md:col-span-7", delaySeconds: 0.0  },
  { isFeatured: false, colSpan: "md:col-span-5", delaySeconds: 0.12 },
  { isFeatured: false, colSpan: "md:col-span-5", delaySeconds: 0.24 },
  { isFeatured: true,  colSpan: "md:col-span-7", delaySeconds: 0.36 },
  { isFeatured: true,  colSpan: "md:col-span-7", delaySeconds: 0.48 },
  { isFeatured: false, colSpan: "md:col-span-5", delaySeconds: 0.60 },
] as const;

interface ServiceCardsProps {
  procedures: Procedure[];
  bariatricSubProcedures: SubProcedure[];
  subProcedures: SubProcedure[];
}

export default function ServiceCards({
  procedures,
  bariatricSubProcedures,
  subProcedures,
}: ServiceCardsProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUpVariants = buildFadeUpVariants(shouldReduceMotion);
  const dividerVariants = buildDividerVariants(shouldReduceMotion);

  const t = useTranslations("home.services");
  const tCta = useTranslations("common.cta");

  const proceduresForBento = procedures.slice(0, 6);

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
            {t("overline")}
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
            {t("heading")}
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
            {t("subtitle")}
          </motion.p>
        </div>

        {/* ----------------------------------------------------------------
            Asymmetric bento grid
        ---------------------------------------------------------------- */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          {proceduresForBento.map((procedure, procedureIndex) => {
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
                  learnMoreLabel={tCta("learnMore")}
                  benefitsLabel={t("mainBenefits")}
                  viewMoreAboutLabel={t("viewMoreAbout")}
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
            {t("allProcedures")}
          </h3>
          <div className="section-divider mx-auto mt-4" aria-hidden="true" />

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Bariatric procedures */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
                {t("bariatricSurgery")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bariatricSubProcedures.map((subProcedure) => (
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
                {t("minimallyInvasiveSurgery")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {subProcedures.map((subProcedure) => (
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
