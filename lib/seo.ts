import type { DoctorInfo, Procedure, FAQItem } from "@/types";

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
