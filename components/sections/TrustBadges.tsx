"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TRUST_BADGES } from "@/lib/constants";
import type { TrustBadge } from "@/types";

// ---------------------------------------------------------------------------
// Visual config per badge type — icon, color palette, label
// ---------------------------------------------------------------------------

interface BadgeTypeVisuals {
  label: string;
  containerClass: string;
  textClass: string;
}

const BADGE_TYPE_VISUALS: Record<TrustBadge["type"], BadgeTypeVisuals> = {
  hospital: {
    label: "Hospital",
    containerClass:
      "bg-gradient-to-br from-teal-50 to-teal-100 ring-1 ring-teal-200/60",
    textClass: "text-teal-700",
  },
  certification: {
    label: "Certificación",
    containerClass:
      "bg-gradient-to-br from-gold-50 to-gold-100 ring-1 ring-gold-200/60",
    textClass: "text-gold-700",
  },
  association: {
    label: "Asociación",
    containerClass:
      "bg-gradient-to-br from-navy-50 to-navy-100 ring-1 ring-navy-200/60",
    textClass: "text-navy-600",
  },
};

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------

const CUBIC_EASE_OUT = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// Badge card sub-component
// ---------------------------------------------------------------------------

interface TrustBadgeCardProps {
  badge: TrustBadge;
  animationDelaySeconds: number;
  shouldReduceMotion: boolean | null;
}

const TrustBadgeCard = ({
  badge,
  animationDelaySeconds,
  shouldReduceMotion,
}: TrustBadgeCardProps) => {
  const visuals = BADGE_TYPE_VISUALS[badge.type];

  return (
    <motion.li
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 16 }
      }
      whileInView={
        shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "-40px" }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.5,
              delay: animationDelaySeconds,
              ease: CUBIC_EASE_OUT,
            }
      }
      className="group flex w-full flex-col items-center rounded-2xl border border-navy-100/60 bg-white px-6 py-8 text-center transition-all duration-300 hover:border-gold-300/70 hover:shadow-lg hover:shadow-gold-500/[0.08] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
    >
      {/* Logo or typographic abbreviation fallback */}
      <div
        className="flex h-28 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105"
      >
        {badge.logoPath ? (
          <Image
            src={badge.logoPath}
            alt={badge.name}
            width={160}
            height={160}
            sizes="160px"
            className="h-full w-full object-contain"
          />
        ) : (
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-2xl ${visuals.containerClass}`}
          >
            <span className={`text-lg font-bold tracking-wide ${visuals.textClass}`}>
              {badge.abbreviation}
            </span>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className="mt-5 min-w-0">
        <p className="text-sm font-semibold leading-snug text-navy-900">
          {badge.name}
        </p>
        <p className="mt-2.5 inline-block rounded-full bg-navy-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-navy-400">
          {visuals.label}
        </p>
      </div>
    </motion.li>
  );
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function TrustBadges() {
  const shouldReduceMotion = useReducedMotion();

  const sectionHeadingId = "trust-badges-heading";

  return (
    <section
      aria-labelledby={sectionHeadingId}
      className="relative overflow-hidden py-16 md:py-20"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-50/30 via-transparent to-navy-50/30"
      />

      {/* Top / bottom fine lines */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-200/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200/60 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.5, ease: CUBIC_EASE_OUT }
            }
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600"
          >
            Confianza y Respaldo
          </motion.p>

          <motion.h2
            id={sectionHeadingId}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.5, delay: 0.08, ease: CUBIC_EASE_OUT }
            }
            className="mx-auto mt-3 max-w-lg font-display text-2xl text-navy-900 md:text-3xl"
          >
            Certificaciones y Asociaciones a Sociedades Médicas
          </motion.h2>

          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.6, delay: 0.2, ease: "easeOut" }
            }
            className="section-divider mx-auto mt-4 origin-center"
            aria-hidden="true"
          />
        </div>

        {/* Badge grid — 3 cols desktop, 2 cols tablet/mobile */}
        <ul
          role="list"
          aria-label="Certificaciones y asociaciones a sociedades médicas"
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          {TRUST_BADGES.map((badge, badgeIndex) => (
            <TrustBadgeCard
              key={badge.name}
              badge={badge}
              animationDelaySeconds={badgeIndex * 0.08}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
