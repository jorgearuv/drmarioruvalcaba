"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TRUST_BADGES } from "@/lib/constants";
import type { TrustBadge } from "@/types";

// ---------------------------------------------------------------------------
// Visual config per badge type — icon, color palette, label
// ---------------------------------------------------------------------------

interface BadgeTypeVisuals {
  label: string;
  iconContainerClass: string;
  icon: React.ReactNode;
}

const BADGE_TYPE_VISUALS: Record<TrustBadge["type"], BadgeTypeVisuals> = {
  hospital: {
    label: "Hospital",
    iconContainerClass:
      "bg-gradient-to-br from-teal-50 to-teal-100 text-teal-700 ring-1 ring-teal-200/60",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h1" />
        <path d="M9 13h1" />
        <path d="M9 17h1" />
      </svg>
    ),
  },
  certification: {
    label: "Certificación",
    iconContainerClass:
      "bg-gradient-to-br from-gold-50 to-gold-100 text-gold-700 ring-1 ring-gold-200/60",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  association: {
    label: "Asociación",
    iconContainerClass:
      "bg-gradient-to-br from-navy-50 to-navy-100 text-navy-600 ring-1 ring-navy-200/60",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
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
      className="group flex items-start gap-4 rounded-2xl border border-navy-100/60 bg-white p-5 transition-all duration-300 hover:border-teal-200/80 hover:shadow-lg hover:shadow-teal-600/[0.06]"
    >
      {/* Icon container */}
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${visuals.iconContainerClass}`}
        aria-hidden="true"
      >
        {visuals.icon}
      </div>

      {/* Text content */}
      <div className="min-w-0 pt-0.5">
        <p className="text-sm font-semibold leading-snug text-navy-900">
          {badge.name}
        </p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-400">
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
            Certificaciones y Membresías Profesionales
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
          aria-label="Certificaciones y membresías profesionales"
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
