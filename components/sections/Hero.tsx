"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL, STATS } from "@/lib/constants";
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

  return (
    <section
      className="gradient-mesh-hero noise-overlay relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Aurora background — always in motion */}
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

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-32 text-center md:pb-36 md:pt-40 lg:pb-40 lg:pt-48">
        {/* Overline badge */}
        <motion.div {...animationProps(0.05)}>
          <span className="glass-dark inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] px-5 py-2 text-[13px] tracking-wide">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            <span className="text-teal-200">Cirujano General y Bariatra Certificado</span>
            <span className="text-white/20" aria-hidden="true">|</span>
            <span className="text-gold-400">Mérida, Yucatán</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          {...animationProps(0.15)}
          className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-white"
        >
          {headline.split(" ").map((word, wordIndex) => {
            const isTealWord = ["Bariatra", "Mínima", "Invasión"].includes(word);
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

        {/* Subheadline */}
        <motion.div
          {...animationProps(0.3)}
          className="mx-auto mt-6 max-w-2xl"
        >
          {subheadline.split("\n\n").map((paragraph, paragraphIndex) => (
            <p
              key={paragraphIndex}
              className={
                paragraphIndex === 0
                  ? "text-lg leading-relaxed text-navy-300/90 md:text-xl"
                  : "mt-4 text-base leading-relaxed text-navy-400/80"
              }
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...animationProps(0.45)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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

        {/* Trust indicators — compact inline stats */}
        <motion.div
          {...animationProps(0.6)}
          className="mt-14"
          role="list"
          aria-label="Logros del doctor"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
            {STATS.map((stat, statIndex) => (
              <div
                key={stat.label}
                role="listitem"
                className="flex items-center gap-3"
              >
                {statIndex > 0 && (
                  <div
                    className="hidden h-8 w-px bg-white/[0.1] md:block"
                    aria-hidden="true"
                    style={{ marginLeft: "-1.5rem" }}
                  />
                )}
                <div className="text-center">
                  <p className="font-display text-2xl text-white md:text-3xl">
                    {stat.value.toLocaleString()}
                    <span className="text-primary-400">{stat.suffix}</span>
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-navy-400">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Curved section divider — organic transition to next section */}
      <div className="absolute -bottom-px left-0 right-0" aria-hidden="true">
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
