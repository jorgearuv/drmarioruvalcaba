import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";

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
  locale?: Locale;
  /** Canonical path for the alternate locale (used for hreflang). */
  alternateLocalePath?: string;
  keywords?: string[];
  ogImage?: string;
}

export function createPageMetadata(config: PageMetadataConfig): Metadata {
  const {
    title,
    description,
    path,
    locale = "es",
    alternateLocalePath,
    keywords,
    ogImage,
  } = config;

  const isEnglish = locale === "en";
  const canonicalUrl = `${SITE_URL}/${locale}${path}`;
  const ogLocale = isEnglish ? "en_US" : "es_MX";

  const ogImageObject = ogImage
    ? { url: ogImage, width: 1200, height: 630, alt: title }
    : DEFAULT_OG_IMAGE;

  const alternates: Metadata["alternates"] = {
    canonical: canonicalUrl,
  };

  if (alternateLocalePath !== undefined) {
    const esUrl = `${SITE_URL}/es${isEnglish ? alternateLocalePath : path}`;
    const enUrl = `${SITE_URL}/en${isEnglish ? path : alternateLocalePath}`;
    alternates.languages = {
      "es": esUrl,
      "en": enUrl,
      "x-default": esUrl,
    };
  }

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: ogLocale,
      type: "website",
      images: [ogImageObject],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageObject],
    },
    alternates,
  };
}
