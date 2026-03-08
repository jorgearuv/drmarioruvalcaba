"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL, HERO_TRUST_SIGNALS } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface HeroProps {
  headline: string;
  subheadline: string;
}

export default function Hero({ headline, subheadline }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const CUBIC_EASE_OUT = [0.22, 1, 0.36, 1] as const;

  const animationProps = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: CUBIC_EASE_OUT },
        };

  const imageAnimationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.9, delay: 0.3, ease: CUBIC_EASE_OUT },
      };

  return (
    <section
      className="gradient-mesh-hero noise-overlay relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Aurora background */}
      <div className="aurora-field" aria-hidden="true">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="aurora-orb aurora-orb-4" />
        <div className="aurora-orb aurora-orb-5" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-0 pt-28 md:pt-36 lg:pt-40">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-0">
          {/* ── Left column — text content ──────────────────────────── */}
          <div className="pb-20 md:pb-28 lg:col-span-7 lg:pb-36 xl:pb-40">
            {/* Overline badge */}
            <motion.div {...animationProps(0.05)}>
              <span className="glass-dark inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] px-5 py-2 text-[13px] tracking-wide">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
                </span>
                <span className="text-teal-200">Cirujano General y Bariátra Certificado</span>
                <span className="text-white/20" aria-hidden="true">|</span>
                <span className="text-gold-400">Mérida, Yucatán</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              {...animationProps(0.15)}
              className="mt-8 max-w-2xl font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] tracking-tight text-white"
            >
              {headline.split(" ").map((word, wordIndex) => {
                const isTealWord = ["Bariátra", "Mínima", "Invasión"].includes(word);
                const isGoldWord = ["Mérida", "Yucatán"].includes(word);
                if (isTealWord) {
                  return (
                    <span key={wordIndex} className="text-teal-400">
                      {word}{" "}
                    </span>
                  );
                }
                if (isGoldWord) {
                  return (
                    <span key={wordIndex} className="italic text-gold-400">
                      {word}{" "}
                    </span>
                  );
                }
                return <span key={wordIndex}>{word} </span>;
              })}
            </motion.h1>

            {/* Subheadline — only first paragraph for tighter hero */}
            <motion.div
              {...animationProps(0.3)}
              className="mt-6 max-w-xl"
            >
              {subheadline.split("\n\n").slice(0, 1).map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="text-lg leading-relaxed text-navy-300/90 md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...animationProps(0.45)}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-primary-500 to-primary-700 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-600/30"
              >
                <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                Agendar Cita
              </a>
              <Link
                href="#procedimientos"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/[0.12] px-8 py-4 text-lg font-medium text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                Conocer Procedimientos
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>

            {/* Trust credentials bar */}
            <motion.div
              {...animationProps(0.6)}
              className="mt-12"
              aria-label="Credenciales del doctor"
              role="list"
            >
              {/* Gradient accent line */}
              <div
                className="mb-4 h-px w-16"
                style={{ background: "linear-gradient(90deg, var(--color-teal-600), var(--color-gold-400))" }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-0">
                {/* Doctoralia — primary signal */}
                <a
                  href={HERO_TRUST_SIGNALS[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                  className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
                >
                  {/* Star cluster */}
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} className="h-3.5 w-3.5 text-gold-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="leading-none">
                    <span className="text-sm font-semibold text-white">5.0</span>
                    <span className="ml-1.5 text-xs text-navy-300/80 transition-colors duration-200 group-hover:text-teal-400">
                      Doctoralia
                    </span>
                    <span className="ml-0.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                      <svg className="inline h-2.5 w-2.5 text-navy-300/50" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 010-1.06l7.22-7.22H8.75a.75.75 0 010-1.5h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V6.06l-7.22 7.22a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="mt-1 text-[11px] tracking-wide text-navy-400/60">
                      23 opiniones verificadas
                    </p>
                  </div>
                </a>

                {/* Divider */}
                <div className="hidden h-10 w-px self-center bg-white/[0.06] sm:mx-6 sm:block md:mx-8" aria-hidden="true" />

                {/* Certification */}
                <div role="listitem" className="flex items-center gap-3">
                  <svg className="h-4 w-4 shrink-0 text-teal-500/60" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <div className="leading-none">
                    <p className="text-sm font-semibold text-white">Certificado</p>
                    <p className="mt-1 text-[11px] tracking-wide text-navy-400/60">
                      Consejo Mexicano de Cirugía General
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden h-10 w-px self-center bg-white/[0.06] sm:mx-6 sm:block md:mx-8" aria-hidden="true" />

                {/* Experience */}
                <div role="listitem" className="flex items-center gap-3">
                  <svg className="h-4 w-4 shrink-0 text-teal-500/60" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                  </svg>
                  <div className="leading-none">
                    <p className="text-sm font-semibold text-white">+5 años</p>
                    <p className="mt-1 text-[11px] tracking-wide text-navy-400/60">
                      Experiencia como Cirujano
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right column — doctor cutout ────────────────────────── */}
          <motion.div
            {...imageAnimationProps}
            className="relative hidden lg:col-span-5 lg:block"
          >
            {/* Radial glow behind the doctor */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-16 bottom-0 top-1/4 rounded-full bg-teal-500/[0.07] blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 bottom-1/4 h-64 w-64 rounded-full bg-gold-400/[0.06] blur-[60px]"
            />

            {/* Doctor image — emerges from section bottom */}
            <div className="relative mx-auto w-full max-w-md">
              <Image
                src="/images/doctor/hero-cutout.webp"
                alt="Dr. Mario Ruvalcaba — Cirujano General y Bariátra Certificado"
                width={1024}
                height={1536}
                sizes="(max-width: 1024px) 0px, 420px"
                className="relative z-10 h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                quality={85}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved section divider */}
      <div className="absolute -bottom-px left-0 right-0 z-20" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block h-12 w-full md:h-16 lg:h-20"
        >
          <path
            d="M0 80V40C240 8 480 0 720 8C960 16 1200 40 1440 40V80H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
