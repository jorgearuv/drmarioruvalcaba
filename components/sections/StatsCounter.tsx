"use client";

import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

// ---------------------------------------------------------------------------
// Framer-motion easing constant — typed as const tuple so TypeScript narrows
// it to [number, number, number, number] instead of number[], satisfying
// framer-motion's Easing union constraint.
// ---------------------------------------------------------------------------

const CUBIC_EASE_OUT = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// SVG icon components — each marked aria-hidden at usage site
// ---------------------------------------------------------------------------

const TrophyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0012 0V2z" />
  </svg>
);

const HeartPulseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.75-1.5 1.5 3 .75-1.5H20.78" />
  </svg>
);

const ScalpelIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v6a2 2 0 002 2h3l2.5 3h5l2.5-3H20a2 2 0 002-2V9a2 2 0 00-2-2h-3L14.5 4z" />
    <line x1="12" y1="9" x2="12" y2="15" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

// ---------------------------------------------------------------------------
// Bariatric benefit data — icons are static, text comes from translations
// ---------------------------------------------------------------------------

const BENEFIT_ICONS = [<TrophyIcon key="trophy" />, <HeartPulseIcon key="heart" />, <ScalpelIcon key="scalpel" />] as const;

const BENEFIT_KEYS = ["provenResults", "improvesDiseases", "minimalInvasion"] as const;

// ---------------------------------------------------------------------------
// Animation variant factories
// ---------------------------------------------------------------------------

function buildFadeUpVariants(shouldReduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: (delaySeconds: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : delaySeconds,
        ease: CUBIC_EASE_OUT,
      },
    }),
  };
}

function buildSlideInVariants(
  shouldReduceMotion: boolean,
  direction: "left" | "right"
): Variants {
  const xOffset = direction === "left" ? -32 : 32;
  return {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : xOffset,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: CUBIC_EASE_OUT,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// BenefitCard — individual card in the right-column vertical stack
// ---------------------------------------------------------------------------

interface BenefitCardProps {
  benefitKey: string;
  icon: React.ReactNode;
  cardIndex: number;
  shouldReduceMotion: boolean;
  t: (key: string) => string;
}

const BenefitCard = ({
  benefitKey,
  icon,
  cardIndex,
  shouldReduceMotion,
  t,
}: BenefitCardProps) => {
  const fadeUpVariants = buildFadeUpVariants(shouldReduceMotion);
  const animationDelaySeconds = 0.2 + cardIndex * 0.14;

  return (
    <motion.article
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      custom={animationDelaySeconds}
      viewport={{ once: true, margin: "-40px" }}
      className="card-premium card-glow flex items-start gap-5 p-6"
    >
      {/* Teal gradient icon container */}
      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-md shadow-teal-600/25"
        aria-hidden="true"
      >
        {icon}
      </div>

      <div>
        <h3 className="font-display text-lg text-navy-900">
          {t(`benefits.${benefitKey}.title`)}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-navy-500">
          {t(`benefits.${benefitKey}.description`)}
        </p>
      </div>
    </motion.article>
  );
};

// ---------------------------------------------------------------------------
// StatsCounter — "Why bariatric surgery?" empathy section
// ---------------------------------------------------------------------------

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("home.stats");
  const tCta = useTranslations("common.cta");

  const shouldReduceMotion = useReducedMotion() ?? false;
  const leftColumnVariants = buildSlideInVariants(shouldReduceMotion, "left");
  const fadeUpVariants = buildFadeUpVariants(shouldReduceMotion);

  const sectionHeadingId = "why-bariatric-heading";

  return (
    <section
      ref={sectionRef}
      className="gradient-mesh-light relative overflow-hidden py-20 md:py-28"
      aria-labelledby={sectionHeadingId}
    >
      {/* Decorative ambient blobs — purely visual, hidden from AT */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-teal-400/5 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-48 w-48 rounded-full bg-gold-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">

          {/* ----------------------------------------------------------------
              Left column (5/12 on md+): editorial text content
          ---------------------------------------------------------------- */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="md:w-5/12"
          >
            {/* Overline */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
              {t("overline")}
            </p>

            {/* Section heading */}
            <h2
              id={sectionHeadingId}
              className="heading-gradient mt-3 font-display text-3xl leading-tight md:text-4xl lg:text-5xl"
            >
              {t("heading")}
            </h2>

            {/* Teal/gold gradient divider */}
            <div className="section-divider mt-5" aria-hidden="true" />

            {/* Empathetic lead paragraph */}
            <p className="mt-6 text-base leading-relaxed text-navy-600 md:text-lg">
              {t("description")}
            </p>

            {/* Doctor profile CTA */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.35}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/sobre-el-doctor"
                className="inline-flex items-center gap-2 rounded-xl border border-teal-600/30 bg-teal-50 px-6 py-3 text-sm font-semibold text-teal-700 transition-all duration-300 hover:border-teal-600/60 hover:bg-teal-100 hover:shadow-md hover:shadow-teal-600/10"
                aria-label={t("meetDoctorAriaLabel")}
              >
                {tCta("meetDoctor")}
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
              </Link>
            </motion.div>
          </motion.div>

          {/* ----------------------------------------------------------------
              Right column (7/12 on md+): stacked benefit cards
          ---------------------------------------------------------------- */}
          <div
            className="flex flex-col gap-4 md:w-7/12"
            aria-label={t("benefitsAriaLabel")}
          >
            {BENEFIT_KEYS.map((benefitKey, benefitIndex) => (
              <BenefitCard
                key={benefitKey}
                benefitKey={benefitKey}
                icon={BENEFIT_ICONS[benefitIndex]}
                cardIndex={benefitIndex}
                shouldReduceMotion={shouldReduceMotion}
                t={t}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
