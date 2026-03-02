import type { Metadata } from "next";

const SITE_URL = "https://drmarioruvalcaba.com";
const SITE_NAME = "Dr. Mario Ruvalcaba - Cirujano Bariátrico en Mérida";

interface PageMetadataConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function createPageMetadata(config: PageMetadataConfig): Metadata {
  const { title, description, path, keywords } = config;
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
