import type { Metadata } from "next";

const SITE_URL = "https://drmarioruvalcaba.com";
const SITE_NAME = "Dr. Mario Ruvalcaba - Cirujano Bariátrico en Mérida";

export const DEFAULT_OG_IMAGE = {
  url: "/images/og-default.png",
  width: 1200,
  height: 630,
  alt: "Dr. Mario Ruvalcaba — Cirujano Bariátra en Mérida",
};

interface PageMetadataConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function createPageMetadata(config: PageMetadataConfig): Metadata {
  const { title, description, path, keywords, ogImage } = config;
  const canonicalUrl = `${SITE_URL}${path}`;

  const ogImageObject = ogImage
    ? { url: ogImage, width: 1200, height: 630, alt: title }
    : DEFAULT_OG_IMAGE;

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
      images: [ogImageObject],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageObject],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
