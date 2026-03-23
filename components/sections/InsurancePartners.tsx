"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CUBIC_EASE_OUT = [0.22, 1, 0.36, 1] as const;

const INSURANCE_PARTNERS = [
  { name: "GNP Seguros", shortName: "GNP", logoPath: "/images/logos/gnp.webp" },
  { name: "AXA Seguros", shortName: "AXA", logoPath: "/images/logos/axa.webp" },
  { name: "MetLife", shortName: "MetLife", logoPath: "/images/logos/metlife.webp" },
  { name: "Mapfre", shortName: "Mapfre", logoPath: "/images/logos/mapfre.webp" },
] as const;

export default function InsurancePartners() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("home.insurance");

  const sectionHeadingId = "insurance-partners-heading";

  return (
    <section
      aria-labelledby={sectionHeadingId}
      className="relative overflow-hidden py-16 md:py-20"
    >
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-50/40 via-transparent to-navy-50/40"
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
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
            {t("overline")}
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
            className="mx-auto mt-3 max-w-2xl font-display text-2xl text-navy-900 md:text-3xl"
          >
            {t("heading")}
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

        {/* Insurance partner cards */}
        <ul
          role="list"
          aria-label={t("listAriaLabel")}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {INSURANCE_PARTNERS.map((partner, partnerIndex) => (
            <motion.li
              key={partner.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 0.5,
                      delay: partnerIndex * 0.1,
                      ease: CUBIC_EASE_OUT,
                    }
              }
              className="group flex flex-col items-center justify-center rounded-2xl border border-navy-100/60 bg-white px-6 py-6 transition-all duration-300 hover:border-teal-200/80 hover:shadow-lg hover:shadow-teal-600/[0.06]"
            >
              {/* Partner logo */}
              <div className="relative h-14 w-24 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={partner.logoPath}
                  alt={partner.shortName}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Footnote */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.5, delay: 0.5, ease: CUBIC_EASE_OUT }
          }
          className="mt-8 text-center text-sm text-navy-400"
        >
          {t("footnote")}
        </motion.p>
      </div>
    </section>
  );
}
