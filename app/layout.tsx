import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { DOCTOR_INFO } from "@/lib/constants";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";
import { generatePhysicianJsonLd, generateLocalBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = localFont({
  src: [
    {
      path: "../public/fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cirujano Bariátrico en Mérida | Dr. Mario Ruvalcaba",
    template: "%s | Dr. Mario Ruvalcaba",
  },
  description:
    "Cirujano general y bariátra certificado en Mérida, Yucatán. Manga gástrica, bypass gástrico, cirugía de mínima invasión. Agenda tu consulta: 999 260 3030.",
  keywords: [
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
    apple: "/images/logo-apple-touch.png",
  },
  openGraph: {
    siteName: "Dr. Mario Ruvalcaba - Cirujano Bariátra en Mérida",
    locale: "es_MX",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const physicianJsonLd = generatePhysicianJsonLd(DOCTOR_INFO);
  const localBusinessJsonLd = generateLocalBusinessJsonLd(DOCTOR_INFO);

  return (
    <html lang="es" data-theme="noir-gold">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />

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
      </body>
    </html>
  );
}
