"use client";

import { Link } from "@/i18n/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { DOCTOR_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useId } from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/i18n/routing";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface CTASectionProps {
  variant?: "teal" | "navy";
  heading: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** Clock icon for the urgency / response time line. */
const ClockIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 flex-shrink-0 opacity-70"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/** Renders the WhatsApp contact card shown in the right column. */
interface ContactCardProps {
  buttonText: string;
  buttonHref: string;
  isExternalLink: boolean;
  tWhatsapp: (key: string, values?: Record<string, string>) => string;
}

const ContactCard = ({
  buttonText,
  buttonHref,
  isExternalLink,
  tWhatsapp,
}: ContactCardProps) => {
  const formattedWhatsAppNumber = DOCTOR_INFO.whatsapp;

  const whatsAppButtonClasses =
    "group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:from-green-400 hover:to-green-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900";

  return (
    <div className="glass-dark rounded-3xl p-8">
      <h3 className="font-display text-2xl text-white">{tWhatsapp("scheduleConsultation")}</h3>

      {/* WhatsApp number display */}
      <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
        <WhatsAppIcon className="h-5 w-5 flex-shrink-0" />
        <a
          href={`https://wa.me/${formattedWhatsAppNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tWhatsapp("writeUsAria", { number: formattedWhatsAppNumber })}
          className="font-mono text-sm tracking-wide text-white/90 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
        >
          {formattedWhatsAppNumber}
        </a>
      </div>

      {/* Primary WhatsApp CTA */}
      <div className="mt-5">
        {isExternalLink ? (
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent({ name: "whatsapp_click", params: { location: "cta" } })}
            aria-label={`${buttonText} — ${tWhatsapp("opensNewTab")}`}
            className={whatsAppButtonClasses}
          >
            <WhatsAppIcon className="h-5 w-5 flex-shrink-0" />
            {buttonText}
          </a>
        ) : (
          <a
            href={buttonHref}
            onClick={() => trackEvent({ name: "whatsapp_click", params: { location: "cta" } })}
            aria-label={buttonText}
            className={whatsAppButtonClasses}
          >
            <WhatsAppIcon className="h-5 w-5 flex-shrink-0" />
            {buttonText}
          </a>
        )}
      </div>

      {/* Trust micro-copy */}
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-white/50">
        <ClockIcon />
        {tWhatsapp("responseTime")}
      </p>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function CTASection({
  variant = "teal",
  heading,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionHeadingId = useId();

  const tCta = useTranslations("common.cta");
  const tWhatsapp = useTranslations("common.whatsapp");
  const tAvailability = useTranslations("common.availability");
  const locale = useLocale() as Locale;
  const whatsAppUrl = getWhatsAppUrl(locale);

  const resolvedButtonText = buttonText ?? tCta("scheduleAppointment");
  const resolvedButtonHref = buttonHref ?? whatsAppUrl;

  const isTealVariant = variant === "teal";
  const isExternalLink = resolvedButtonHref.startsWith("http");

  const sectionBackgroundClass = isTealVariant
    ? "gradient-mesh-cta"
    : "bg-navy-950";

  const descriptionTextClass = isTealVariant
    ? "text-white/80"
    : "text-navy-300";

  // Animation helpers — instant when reduced motion is preferred
  const buildFadeUpVariant = (delaySeconds: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true } as const,
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.55, delay: delaySeconds },
  });

  return (
    <section
      aria-labelledby={sectionHeadingId}
      className={`noise-overlay relative overflow-hidden py-20 md:py-28 ${sectionBackgroundClass}`}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Decorative background orbs                                          */}
      {/* ------------------------------------------------------------------ */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {isTealVariant ? (
          <>
            <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-white/[0.03] blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold-400/[0.05] blur-3xl" />
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-300/[0.06] blur-2xl" />
          </>
        ) : (
          <>
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-teal-600/[0.07] blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-gold-400/[0.05] blur-3xl" />
            <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-teal-800/[0.10] blur-2xl" />
          </>
        )}
      </div>

      {/* Top edge highlight — decorative */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* ------------------------------------------------------------------ */}
      {/* Content grid                                                        */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Left column — 7/12 on desktop */}
          <div className="w-full text-center lg:w-7/12 lg:text-left">
            <motion.h2
              id={sectionHeadingId}
              {...buildFadeUpVariant(0)}
              className="font-display text-4xl text-white md:text-5xl lg:text-[3.25rem] lg:leading-tight"
            >
              {heading}
            </motion.h2>

            <motion.p
              {...buildFadeUpVariant(0.15)}
              className={`mt-5 max-w-xl text-lg leading-relaxed ${descriptionTextClass} mx-auto lg:mx-0`}
            >
              {description}
            </motion.p>

            {/* Urgency line */}
            <motion.p
              {...buildFadeUpVariant(0.25)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              {/* Pulsing green dot — decorative urgency indicator */}
              <span
                aria-hidden="true"
                className="relative flex h-2.5 w-2.5 flex-shrink-0"
              >
                <span
                  className={`absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 ${
                    shouldReduceMotion ? "" : "animate-ping"
                  }`}
                />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              {tAvailability("consultationsAvailable")}
            </motion.p>
          </div>

          {/* Right column — 5/12 on desktop */}
          <motion.div
            {...buildFadeUpVariant(0.3)}
            className="w-full lg:w-5/12"
          >
            <ContactCard
              buttonText={resolvedButtonText}
              buttonHref={resolvedButtonHref}
              isExternalLink={isExternalLink}
              tWhatsapp={tWhatsapp}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
