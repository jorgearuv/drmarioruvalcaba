"use client";

import { useTranslations } from "next-intl";
import type { Testimonial } from "@/types";

// ---------------------------------------------------------------------------
// StarRating
// ---------------------------------------------------------------------------

interface StarRatingProps {
  rating: number;
  maximumRating?: number;
  starsLabel: string;
}

export const StarRating = ({ rating, maximumRating = 5, starsLabel }: StarRatingProps) => (
  <div
    role="img"
    aria-label={starsLabel}
    className="flex gap-1"
  >
    {Array.from({ length: maximumRating }, (_, starIndex) => (
      <span
        key={starIndex}
        aria-hidden="true"
        className={`text-lg leading-none ${
          starIndex < rating ? "text-gold-400" : "text-navy-200"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// TestimonialCard
// ---------------------------------------------------------------------------

interface TestimonialCardProps {
  testimonial: Testimonial;
  cardPosition?: number;
  totalCards?: number;
}

export const TestimonialCard = ({
  testimonial,
  cardPosition,
  totalCards,
}: TestimonialCardProps) => {
  const t = useTranslations("home.testimonials");

  const ariaLabel =
    cardPosition != null && totalCards != null
      ? t("slideLabel", { position: cardPosition, total: totalCards })
      : t("testimonialOf", { name: testimonial.name });

  const isCarouselContext = cardPosition != null && totalCards != null;

  return (
    <article
      {...(isCarouselContext
        ? { role: "group", "aria-roledescription": "slide" }
        : {})}
      aria-label={ariaLabel}
      className="card-premium card-glow flex h-full flex-col p-8"
    >
      {/* Decorative quotation mark */}
      <span
        aria-hidden="true"
        className="font-display pointer-events-none select-none text-6xl leading-none text-primary-100"
      >
        &ldquo;
      </span>

      <div className="mt-1 flex flex-1 flex-col">
        <StarRating rating={testimonial.rating} starsLabel={t("stars", { rating: testimonial.rating, max: 5 })} />

        <p className="mt-4 flex-1 font-serif text-base italic leading-relaxed text-navy-700 md:text-[17px]">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="mt-6">
          {/* Teal horizontal divider */}
          <div
            aria-hidden="true"
            className="mb-4 h-px w-10 bg-teal-600"
          />

          <p className="font-semibold text-navy-900">{testimonial.name}</p>
          {(testimonial.age || testimonial.procedure) && (
            <p className="mt-0.5 text-sm text-navy-500">
              {testimonial.age ? t("years", { age: testimonial.age }) : ""}
              {testimonial.age && testimonial.procedure ? " · " : ""}
              {testimonial.procedure ?? ""}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {testimonial.weightLost && (
              <span className="inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                {t("weightLost", { amount: testimonial.weightLost })}
              </span>
            )}
            {testimonial.source && (
              <span className="inline-flex items-center gap-1 rounded-full border border-navy-200 px-3 py-1 text-[11px] font-medium text-navy-500">
                <svg aria-hidden="true" className="h-3 w-3 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {testimonial.source}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
