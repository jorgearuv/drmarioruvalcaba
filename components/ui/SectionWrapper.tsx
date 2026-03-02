"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  heading?: string;
  subheading?: string;
  overline?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  heading,
  subheading,
  overline,
  centered = true,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${dark ? "noise-overlay relative bg-navy-950 text-white" : ""} ${className}`}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        {(heading || subheading || overline) && (
          <div className={`mb-16 ${centered ? "text-center" : ""}`}>
            {overline && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
                {overline}
              </p>
            )}
            {heading && (
              <h2
                className={`mt-3 font-display text-4xl md:text-5xl ${
                  dark ? "text-white" : "heading-gradient"
                }`}
              >
                {heading}
              </h2>
            )}
            {centered && (
              <div
                className={`section-divider mt-5 ${centered ? "mx-auto" : ""}`}
              />
            )}
            {subheading && (
              <p
                className={`mx-auto mt-5 max-w-2xl text-lg ${dark ? "text-navy-400" : "text-navy-500"}`}
              >
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
