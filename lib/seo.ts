import type { DoctorInfo, Procedure, FAQItem, Testimonial, BlogPost } from "@/types";
import { DOCTOR_INFO } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Physician (schema.org/Physician)
// ---------------------------------------------------------------------------

export function generatePhysicianJsonLd(doctor: DoctorInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${doctor.siteUrl}/#physician`,
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
      doctor.socialMedia.tiktok,
      doctor.socialMedia.doctoralia,
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Cédula Profesional",
        recognizedBy: { "@type": "Organization", name: "SEP — México" },
        identifier: doctor.cedula,
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Cédula de Especialidad",
        recognizedBy: { "@type": "Organization", name: "SEP — México" },
        identifier: doctor.cedulaEspecialidad,
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certificación Consejo Mexicano de Cirugía General",
        recognizedBy: { "@type": "Organization", name: "Consejo Mexicano de Cirugía General, A.C." },
        identifier: doctor.certificacionConsejo,
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Aviso de Publicidad COFEPRIS",
        recognizedBy: { "@type": "Organization", name: "COFEPRIS" },
        identifier: doctor.cofepris,
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// WebSite (schema.org/WebSite) — enables Google knowledge graph association
// ---------------------------------------------------------------------------

export function generateWebSiteJsonLd(doctor: DoctorInfo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${doctor.siteUrl}/#website`,
    url: doctor.siteUrl,
    name: doctor.name,
    description: doctor.title,
    inLanguage: ["es-MX", "en-US"],
    publisher: { "@id": `${doctor.siteUrl}/#physician` },
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
  locale: string = "es",
) {
  const localePrefix = locale === "en" ? "/en" : "/es";
  const pageUrl = `${DOCTOR_INFO.siteUrl}${localePrefix}/${procedure.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${pageUrl}#procedure`,
    name: procedure.title,
    description: procedure.description,
    url: pageUrl,
    howPerformed: procedure.longDescription,
    procedureType: "Surgical",
    inLanguage: locale === "en" ? "en" : "es",
    followup: procedure.recovery.map((step) => step.description).join(". "),
    ...(procedure.bodyLocation && { bodyLocation: procedure.bodyLocation }),
    ...(procedure.preparation && { preparation: procedure.preparation }),
    ...(procedure.relevantSpecialty && {
      relevantSpecialty: {
        "@type": "MedicalSpecialty",
        name: procedure.relevantSpecialty,
      },
    }),
    ...(procedure.imagePath && { image: `${DOCTOR_INFO.siteUrl}${procedure.imagePath}` }),
    performedBy: {
      "@type": "Physician",
      name: doctorName,
      url: DOCTOR_INFO.siteUrl,
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
function parseMonthYearToIso(timeAgo: string): string | undefined {
  const monthMap: Record<string, string> = {
    // Spanish
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
    // English
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };
  const parts = timeAgo.trim().toLowerCase().split(/\s+/);
  if (parts.length !== 2) return undefined;
  const month = monthMap[parts[0]];
  const year = parts[1];
  if (!month || !/^\d{4}$/.test(year)) return undefined;
  return `${year}-${month}-01`;
}

// ---------------------------------------------------------------------------
// Blog Article (schema.org/BlogPosting)
// ---------------------------------------------------------------------------

export function generateBlogArticleJsonLd(
  post: BlogPost,
  siteUrl: string,
  locale: string = "es",
) {
  const urlPrefix = locale === "en" ? "/en" : "";
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: locale === "en" ? "en" : "es",
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteUrl}${urlPrefix}/${locale === "en" ? "about-the-doctor" : "sobre-el-doctor"}`,
    },
    url: `${siteUrl}${urlPrefix}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${urlPrefix}/blog/${post.slug}`,
    },
    ...(post.imagePath && { image: `${siteUrl}${post.imagePath}` }),
  };
}

// ---------------------------------------------------------------------------
// Reviews / AggregateRating (schema.org/Physician + Review)
// ---------------------------------------------------------------------------

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
      const datePublished = parseMonthYearToIso(testimonial.timeAgo);
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
