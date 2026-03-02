"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL, DOCTOR_INFO } from "@/lib/constants";
import { useId } from "react";

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

/** WhatsApp SVG icon — extracted to keep JSX readable. */
const WhatsAppIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
}

const ContactCard = ({
  buttonText,
  buttonHref,
  isExternalLink,
}: ContactCardProps) => {
  const formattedWhatsAppNumber = DOCTOR_INFO.whatsapp;

  const whatsAppButtonClasses =
    "group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-green-400 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:from-green-400 hover:to-green-300 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900";

  return (
    <div className="glass-dark rounded-3xl p-8">
      <h3 className="font-display text-2xl text-white">Agenda tu consulta</h3>

      {/* WhatsApp number display */}
      <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
        <WhatsAppIcon />
        <a
          href={`https://wa.me/${formattedWhatsAppNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escríbenos por WhatsApp al ${formattedWhatsAppNumber}`}
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
            aria-label={`${buttonText} — abre WhatsApp en una nueva pestaña`}
            className={whatsAppButtonClasses}
          >
            <WhatsAppIcon />
            {buttonText}
          </a>
        ) : (
          <Link
            href={buttonHref}
            aria-label={buttonText}
            className={whatsAppButtonClasses}
          >
            <WhatsAppIcon />
            {buttonText}
          </Link>
        )}
      </div>

      {/* Trust micro-copy */}
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-white/50">
        <ClockIcon />
        Respuesta en menos de 2 horas
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
  buttonText = "Agendar Consulta Gratuita",
  buttonHref = WHATSAPP_URL,
}: CTASectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionHeadingId = useId();

  const isTealVariant = variant === "teal";
  const isExternalLink = buttonHref.startsWith("http");

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
              Consultas disponibles esta semana
            </motion.p>
          </div>

          {/* Right column — 5/12 on desktop */}
          <motion.div
            {...buildFadeUpVariant(0.3)}
            className="w-full lg:w-5/12"
          >
            <ContactCard
              buttonText={buttonText}
              buttonHref={buttonHref}
              isExternalLink={isExternalLink}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
