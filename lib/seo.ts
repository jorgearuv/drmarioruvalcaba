import type { DoctorInfo, Procedure, FAQItem, Testimonial } from "@/types";

// ---------------------------------------------------------------------------
// Physician (schema.org/Physician)
// ---------------------------------------------------------------------------

export function generatePhysicianJsonLd(doctor: DoctorInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.title,
    medicalSpecialty: doctor.specialties,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: doctor.zipCode,
      addressCountry: doctor.country,
    },
    telephone: doctor.phone,
    url: doctor.siteUrl,
    sameAs: [
      doctor.socialMedia.facebook,
      doctor.socialMedia.instagram,
      doctor.socialMedia.youtube,
      doctor.socialMedia.tiktok,
      doctor.socialMedia.doctoralia,
    ],
  };
}

// ---------------------------------------------------------------------------
// Local Business / MedicalBusiness (schema.org/MedicalBusiness)
// ---------------------------------------------------------------------------

export function generateLocalBusinessJsonLd(doctor: DoctorInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: doctor.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: doctor.zipCode,
      addressCountry: doctor.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: doctor.latitude,
      longitude: doctor.longitude,
    },
    telephone: doctor.phone,
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
    priceRange: "$$",
  };
}

// ---------------------------------------------------------------------------
// Medical Procedure (schema.org/MedicalProcedure)
// ---------------------------------------------------------------------------

export function generateMedicalProcedureJsonLd(
  procedure: Procedure,
  doctorName: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: procedure.title,
    description: procedure.description,
    howPerformed: procedure.longDescription,
    procedureType: "Surgical",
    followup: procedure.recovery.map((step) => step.description).join(". "),
    performedBy: {
      "@type": "Physician",
      name: doctorName,
    },
  };
}

// ---------------------------------------------------------------------------
// FAQ Page (schema.org/FAQPage)
// ---------------------------------------------------------------------------

export function generateFAQPageJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Breadcrumb List (schema.org/BreadcrumbList)
// ---------------------------------------------------------------------------

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// Reviews / AggregateRating (schema.org/Physician + Review)
// ---------------------------------------------------------------------------

/**
 * Converts a Spanish month-year string like "Noviembre 2025" to an ISO date.
 * Falls back to undefined if parsing fails.
 */
function parseSpanishDateToIso(timeAgo: string): string | undefined {
  const monthMap: Record<string, string> = {
    enero: "01",
    febrero: "02",
    marzo: "03",
    abril: "04",
    mayo: "05",
    junio: "06",
    julio: "07",
    agosto: "08",
    septiembre: "09",
    octubre: "10",
    noviembre: "11",
    diciembre: "12",
  };
  const parts = timeAgo.trim().toLowerCase().split(/\s+/);
  if (parts.length !== 2) return undefined;
  const month = monthMap[parts[0]];
  const year = parts[1];
  if (!month || !/^\d{4}$/.test(year)) return undefined;
  return `${year}-${month}-01`;
}

export function generateReviewsJsonLd(
  doctor: DoctorInfo,
  testimonials: Testimonial[],
) {
  const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const averageRating =
    testimonials.length > 0
      ? Math.round((totalRating / testimonials.length) * 10) / 10
      : 0;

  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    url: doctor.siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating,
      reviewCount: testimonials.length,
      bestRating: 5,
    },
    review: testimonials.map((testimonial) => {
      const datePublished = parseSpanishDateToIso(testimonial.timeAgo);
      return {
        "@type": "Review",
        author: { "@type": "Person", name: testimonial.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: testimonial.rating,
        },
        reviewBody: testimonial.text,
        ...(datePublished && { datePublished }),
      };
    }),
  };
}
