"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useId,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const AUTOPLAY_INTERVAL_MS = 5000;
const VISIBLE_CARDS_DESKTOP = 3;
const VISIBLE_CARDS_TABLET = 2;
const VISIBLE_CARDS_MOBILE = 1;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Derives the number of visible cards based on a CSS-driven breakpoint sentinel.
 * Falls back to VISIBLE_CARDS_DESKTOP during SSR.
 */
const deriveVisibleCardCount = (): number => {
  if (typeof window === "undefined") return VISIBLE_CARDS_DESKTOP;
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 640) return VISIBLE_CARDS_MOBILE;
  if (viewportWidth < 1024) return VISIBLE_CARDS_TABLET;
  return VISIBLE_CARDS_DESKTOP;
};

/**
 * Computes which testimonials are visible for a given page start index.
 * Wraps around the testimonials array to fill any remaining slots.
 */
const deriveVisibleTestimonials = (
  allTestimonials: Testimonial[],
  pageStartIndex: number,
  visibleCount: number
): Testimonial[] =>
  Array.from(
    { length: visibleCount },
    (_, slotIndex) =>
      allTestimonials[
        (pageStartIndex + slotIndex) % allTestimonials.length
      ]
  );

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials = TESTIMONIALS,
}: TestimonialCarouselProps) {
  const shouldReduceMotion = useReducedMotion();

  const sectionHeadingId = useId();
  const carouselLiveRegionId = useId();

  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [visibleCardCount, setVisibleCardCount] = useState(
    VISIBLE_CARDS_DESKTOP
  );

  const carouselRegionRef = useRef<HTMLDivElement>(null);

  // Sync visible card count with viewport width
  useEffect(() => {
    const handleResize = () => {
      setVisibleCardCount(deriveVisibleCardCount());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalTestimonials = testimonials.length;

  const navigateToNext = useCallback(() => {
    setPageStartIndex(
      (previousIndex) => (previousIndex + 1) % totalTestimonials
    );
  }, [totalTestimonials]);

  const navigateToPrevious = useCallback(() => {
    setPageStartIndex(
      (previousIndex) =>
        (previousIndex - 1 + totalTestimonials) % totalTestimonials
    );
  }, [totalTestimonials]);

  const navigateToDot = useCallback((dotIndex: number) => {
    setPageStartIndex(dotIndex);
  }, []);

  // Auto-play: disabled entirely when user prefers reduced motion
  useEffect(() => {
    if (shouldReduceMotion || isAutoPlayPaused) return;

    const autoPlayTimer = setInterval(navigateToNext, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(autoPlayTimer);
  }, [shouldReduceMotion, isAutoPlayPaused, navigateToNext]);

  // Pause auto-play when focus enters the carousel region
  const handleCarouselFocusIn = useCallback(() => {
    setIsAutoPlayPaused(true);
  }, []);

  const handleCarouselFocusOut = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const focusMovedOutsideCarousel = !carouselRegionRef.current?.contains(
        event.relatedTarget as Node
      );
      if (focusMovedOutsideCarousel) {
        setIsAutoPlayPaused(false);
      }
    },
    []
  );

  const visibleTestimonials = deriveVisibleTestimonials(
    testimonials,
    pageStartIndex,
    visibleCardCount
  );

  const slideAnimationVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : direction * 40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : direction * -40,
    }),
  };

  // Derive dot count: one dot per logical "page" step
  const dotCount = totalTestimonials;

  return (
    <section
      aria-labelledby={sectionHeadingId}
      className="gradient-mesh-light py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p
            aria-hidden="true"
            className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600"
          >
            Testimonios
          </p>
          <h2
            id={sectionHeadingId}
            className="mt-3 font-display text-4xl text-navy-900 md:text-5xl"
          >
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <div aria-hidden="true" className="section-divider mx-auto mt-4 mb-2" />
        </div>

        {/* Carousel region */}
        <div
          ref={carouselRegionRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonios de pacientes"
          aria-labelledby={carouselLiveRegionId}
          className="mt-12"
          onMouseEnter={() => setIsAutoPlayPaused(true)}
          onMouseLeave={() => setIsAutoPlayPaused(false)}
          onFocusCapture={handleCarouselFocusIn}
          onBlurCapture={handleCarouselFocusOut}
        >
          {/* Live region announces current slide to screen readers */}
          <p
            id={carouselLiveRegionId}
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            Mostrando testimonios {pageStartIndex + 1} a{" "}
            {Math.min(pageStartIndex + visibleCardCount, totalTestimonials)} de{" "}
            {totalTestimonials}
          </p>

          {/* Arrow + cards row */}
          <div className="flex items-center gap-4">
            {/* Previous button */}
            <button
              type="button"
              aria-label="Testimonio anterior"
              onClick={navigateToPrevious}
              className="flex-shrink-0 rounded-full border border-navy-200 bg-white p-3 text-navy-600 shadow-sm transition-all duration-200 hover:border-teal-400 hover:text-teal-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Slide viewport */}
            <div className="min-w-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={pageStartIndex}
                  custom={1}
                  variants={slideAnimationVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.4, ease: "easeInOut" }
                  }
                  className={`grid gap-6 ${
                    visibleCardCount === 1
                      ? "grid-cols-1"
                      : visibleCardCount === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                  }`}
                >
                  {visibleTestimonials.map((testimonial, slotIndex) => (
                    <TestimonialCard
                      key={`${testimonial.id}-slot-${slotIndex}`}
                      testimonial={testimonial}
                      cardPosition={pageStartIndex + slotIndex + 1}
                      totalCards={totalTestimonials}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <button
              type="button"
              aria-label="Siguiente testimonio"
              onClick={navigateToNext}
              className="flex-shrink-0 rounded-full border border-navy-200 bg-white p-3 text-navy-600 shadow-sm transition-all duration-200 hover:border-teal-400 hover:text-teal-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dot navigation */}
          <div
            role="group"
            aria-label="Navegación de testimonios"
            className="mt-8 flex justify-center gap-2"
          >
            {Array.from({ length: dotCount }, (_, dotIndex) => {
              const isActiveDot = dotIndex === pageStartIndex;
              return (
                <button
                  key={dotIndex}
                  type="button"
                  aria-current={isActiveDot ? "true" : undefined}
                  aria-label={`Ir al testimonio ${dotIndex + 1}`}
                  onClick={() => navigateToDot(dotIndex)}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
                    isActiveDot
                      ? "w-6 bg-primary-600"
                      : "w-2 bg-navy-200 hover:bg-navy-400"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
