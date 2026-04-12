import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieBanner from "@/components/layout/CookieBanner";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";
import { DOCTOR_INFO } from "@/lib/constants";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";
import {
  generatePhysicianJsonLd,
  generateLocalBusinessJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/seo";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    title: {
      default: isEn
        ? "Bariatric Surgeon in Mérida | Dr. Mario Ruvalcaba"
        : "Cirujano Bariátrico en Mérida | Dr. Mario Ruvalcaba",
      template: "%s | Dr. Mario Ruvalcaba",
    },
    description: isEn
      ? "Board-certified general and bariatric surgeon in Mérida, Yucatán. Gastric sleeve, gastric bypass, minimally invasive surgery. Schedule your consultation: +52 999 260 3030."
      : "Cirujano general y bariátra certificado en Mérida, Yucatán. Manga gástrica, bypass gástrico, cirugía de mínima invasión. Agenda tu consulta: 999 260 3030.",
    keywords: isEn
      ? [
          "bariatric surgeon Merida",
          "bariatric surgery Yucatan",
          "minimally invasive surgery Yucatan",
          "gastric sleeve Merida",
          "gastric bypass Merida",
          "SADI-S",
          "bariatric revision surgery",
          "intragastric balloon",
          "weight loss surgery",
          "Dr. Mario Ruvalcaba",
          "weight loss",
          "metabolic surgery",
        ]
      : [
          "cirujano bariátra Mérida",
          "cirugía bariátrica Yucatán",
          "cirugía de mínima invasión Yucatán",
          "manga gástrica Mérida",
          "bypass gástrico Mérida",
          "SADI-S",
          "cirugía de revisión bariátrica",
          "balón intragástrico",
          "cirugía para obesidad",
          "Dr. Mario Ruvalcaba",
          "pérdida de peso",
          "cirugía metabólica",
        ],
    metadataBase: new URL(DOCTOR_INFO.siteUrl),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/images/logo.svg", type: "image/svg+xml" },
      ],
      apple: "/images/logo-apple-touch-icon.png",
    },
    openGraph: {
      siteName: isEn
        ? "Dr. Mario Ruvalcaba - Bariatric Surgeon in Mérida"
        : "Dr. Mario Ruvalcaba - Cirujano Bariátra en Mérida",
      locale: isEn ? "en_US" : "es_MX",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const physicianJsonLd = generatePhysicianJsonLd(DOCTOR_INFO);
  const localBusinessJsonLd = generateLocalBusinessJsonLd(DOCTOR_INFO);
  const webSiteJsonLd = generateWebSiteJsonLd(DOCTOR_INFO);

  const skipToContentLabel =
    locale === "en" ? "Skip to main content" : "Saltar al contenido principal";

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <a href="#main-content" className="skip-to-content">
          {skipToContentLabel}
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </NextIntlClientProvider>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteJsonLd),
        }}
      />
      <AnalyticsScripts />
    </>
  );
}
