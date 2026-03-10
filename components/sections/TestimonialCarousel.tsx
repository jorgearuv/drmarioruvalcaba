"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useId,
} from "react";
import { useAnimationFrame, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SCROLL_SPEED_PX_PER_SEC = 60;
const MANUAL_PAUSE_DURATION_MS = 3000;
const GAP_PX = 24; // Tailwind gap-6

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("home.testimonials");

  const sectionHeadingId = useId();
  const carouselLiveRegionId = useId();

  const totalCards = testimonials.length;

  // Refs for animation state (no re-renders in the loop)
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);
  const isManuallyPausedRef = useRef(false);
  const manualPauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const cardStepWidthRef = useRef(0);
  const halfStripWidthRef = useRef(0);

  // State for active dot (only updates when index changes)
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  // Ref for the outer container (focus management)
  const carouselRegionRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------
  // Measure card width + half strip via ResizeObserver
  // -------------------------------------------------------------------------
  useEffect(() => {
    const stripElement = stripRef.current;
    if (!stripElement) return;

    const measureDimensions = () => {
      const firstCard = stripElement.children[0] as HTMLElement | undefined;
      if (firstCard) {
        cardStepWidthRef.current = firstCard.offsetWidth + GAP_PX;
      }
      // Half strip = one full set of cards
      halfStripWidthRef.current = cardStepWidthRef.current * totalCards;
    };

    measureDimensions();

    const resizeObserver = new ResizeObserver(measureDimensions);
    resizeObserver.observe(stripElement);

    return () => resizeObserver.disconnect();
  }, [totalCards]);

  // -------------------------------------------------------------------------
  // Continuous scroll via useAnimationFrame
  // -------------------------------------------------------------------------
  useAnimationFrame((_time, delta) => {
    if (shouldReduceMotion) return;
    if (isPausedRef.current) return;

    const stripElement = stripRef.current;
    if (!stripElement) return;

    const halfWidth = halfStripWidthRef.current;
    if (halfWidth <= 0) return;

    // Advance scroll position
    scrollPositionRef.current -= SCROLL_SPEED_PX_PER_SEC * (delta / 1000);

    // Seamless loop: when we've scrolled past one full set, reset
    if (Math.abs(scrollPositionRef.current) >= halfWidth) {
      scrollPositionRef.current += halfWidth;
    }

    stripElement.style.transform = `translateX(${scrollPositionRef.current}px)`;

    // Update active dot (only when index changes)
    const cardStep = cardStepWidthRef.current;
    if (cardStep > 0) {
      const newDotIndex =
        Math.floor(Math.abs(scrollPositionRef.current) / cardStep) % totalCards;
      setActiveDotIndex((previousIndex) =>
        previousIndex === newDotIndex ? previousIndex : newDotIndex
      );
    }
  });

  // -------------------------------------------------------------------------
  // Pause / resume helpers
  // -------------------------------------------------------------------------
  const clearManualPauseTimer = useCallback(() => {
    if (manualPauseTimerRef.current !== null) {
      clearTimeout(manualPauseTimerRef.current);
      manualPauseTimerRef.current = null;
    }
  }, []);

  const pauseForManualNavigation = useCallback(() => {
    clearManualPauseTimer();
    isPausedRef.current = true;
    isManuallyPausedRef.current = true;

    manualPauseTimerRef.current = setTimeout(() => {
      isManuallyPausedRef.current = false;
      isPausedRef.current = false;
      manualPauseTimerRef.current = null;
    }, MANUAL_PAUSE_DURATION_MS);
  }, [clearManualPauseTimer]);

  // Cleanup timer on unmount
  useEffect(() => clearManualPauseTimer, [clearManualPauseTimer]);

  // -------------------------------------------------------------------------
  // Hover handlers
  // -------------------------------------------------------------------------
  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Don't resume if we're in a manual pause window (arrow/dot click)
    if (!isManuallyPausedRef.current) {
      isPausedRef.current = false;
    }
  }, []);

  // -------------------------------------------------------------------------
  // Focus handlers (accessibility – pause on focus)
  // -------------------------------------------------------------------------
  const handleCarouselFocusIn = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleCarouselFocusOut = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const focusMovedOutsideCarousel =
        !carouselRegionRef.current?.contains(event.relatedTarget as Node);
      if (focusMovedOutsideCarousel && !isManuallyPausedRef.current) {
        isPausedRef.current = false;
      }
    },
    []
  );

  // -------------------------------------------------------------------------
  // Navigation: snap scroll position and apply transform immediately
  // -------------------------------------------------------------------------
  const applyScrollPosition = useCallback(() => {
    const stripElement = stripRef.current;
    if (stripElement) {
      stripElement.style.transform = `translateX(${scrollPositionRef.current}px)`;
    }
  }, []);

  const navigateToNext = useCallback(() => {
    const cardStep = cardStepWidthRef.current;
    if (cardStep <= 0) return;

    scrollPositionRef.current -= cardStep;

    // Seamless loop
    const halfWidth = halfStripWidthRef.current;
    if (halfWidth > 0 && Math.abs(scrollPositionRef.current) >= halfWidth) {
      scrollPositionRef.current += halfWidth;
    }

    applyScrollPosition();
    pauseForManualNavigation();

    const newDotIndex =
      Math.floor(Math.abs(scrollPositionRef.current) / cardStep) % totalCards;
    setActiveDotIndex(newDotIndex);
  }, [totalCards, applyScrollPosition, pauseForManualNavigation]);

  const navigateToPrevious = useCallback(() => {
    const cardStep = cardStepWidthRef.current;
    if (cardStep <= 0) return;

    scrollPositionRef.current += cardStep;

    // Wrap around: if position goes positive, jump to the end of one set
    const halfWidth = halfStripWidthRef.current;
    if (scrollPositionRef.current > 0 && halfWidth > 0) {
      scrollPositionRef.current -= halfWidth;
    }

    applyScrollPosition();
    pauseForManualNavigation();

    const newDotIndex =
      Math.floor(Math.abs(scrollPositionRef.current) / cardStep) % totalCards;
    setActiveDotIndex(newDotIndex);
  }, [totalCards, applyScrollPosition, pauseForManualNavigation]);

  const navigateToDot = useCallback(
    (dotIndex: number) => {
      const cardStep = cardStepWidthRef.current;
      if (cardStep <= 0) return;

      scrollPositionRef.current = -(dotIndex * cardStep);
      applyScrollPosition();
      pauseForManualNavigation();
      setActiveDotIndex(dotIndex);
    },
    [applyScrollPosition, pauseForManualNavigation]
  );

  // -------------------------------------------------------------------------
  // Duplicated card list for seamless loop
  // -------------------------------------------------------------------------
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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
            {t("overline")}
          </p>
          <h2
            id={sectionHeadingId}
            className="mt-3 font-display text-4xl text-navy-900 md:text-5xl"
          >
            {t("heading")}
          </h2>
          <div
            aria-hidden="true"
            className="section-divider mx-auto mt-4 mb-2"
          />
        </div>

        {/* Carousel region */}
        <div
          ref={carouselRegionRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={t("carouselAriaLabel")}
          aria-labelledby={carouselLiveRegionId}
          className="mt-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
            {t("showingTestimonials", {
              start: activeDotIndex + 1,
              end: Math.min(activeDotIndex + 1, totalCards),
              total: totalCards,
            })}
          </p>

          {/* Arrow + cards row */}
          <div className="flex items-center gap-4">
            {/* Previous button */}
            <button
              type="button"
              aria-label={t("previousAriaLabel")}
              onClick={navigateToPrevious}
              className="flex-shrink-0 rounded-full border border-navy-200 bg-white p-3 text-navy-600 shadow-sm transition-all duration-200 hover:border-teal-400 hover:text-teal-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
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

            {/* Scrolling strip viewport */}
            <div className="relative min-w-0 flex-1 overflow-hidden">
              <div
                ref={stripRef}
                className="flex gap-6"
                style={{ willChange: "transform" }}
              >
                {duplicatedTestimonials.map((testimonial, slotIndex) => (
                  <div
                    key={`${testimonial.id}-${slotIndex}`}
                    className="w-full flex-shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      cardPosition={(slotIndex % totalCards) + 1}
                      totalCards={totalCards}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              type="button"
              aria-label={t("nextAriaLabel")}
              onClick={navigateToNext}
              className="flex-shrink-0 rounded-full border border-navy-200 bg-white p-3 text-navy-600 shadow-sm transition-all duration-200 hover:border-teal-400 hover:text-teal-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
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
            aria-label={t("dotNavigationAriaLabel")}
            className="mt-8 flex justify-center gap-2"
          >
            {Array.from({ length: totalCards }, (_, dotIndex) => {
              const isActiveDot = dotIndex === activeDotIndex;
              return (
                <button
                  key={dotIndex}
                  type="button"
                  aria-current={isActiveDot ? "true" : undefined}
                  aria-label={t("goToTestimonial", { number: dotIndex + 1 })}
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
