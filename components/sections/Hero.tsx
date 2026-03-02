"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WHATSAPP_URL, STATS } from "@/lib/constants";

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
      {/* Ambient light effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-float absolute -right-24 top-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/[0.07] blur-[100px]" />
        <div className="animate-float-delayed absolute -left-24 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gold-400/[0.05] blur-[80px]" />
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
            <span className="text-teal-200">Cirujano Bariátrico Certificado</span>
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
            const isTealWord = ["Transforma", "Bariátrica"].includes(word);
            const isGoldWord = ["Mérida"].includes(word);
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
        <motion.p
          {...animationProps(0.3)}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-300/90 md:text-xl"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...animationProps(0.45)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-b from-teal-500 to-teal-700 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-teal-700/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-600/30"
          >
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar Consulta Gratuita
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
                    <span className="text-teal-400">{stat.suffix}</span>
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
