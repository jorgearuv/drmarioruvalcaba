import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { DOCTOR_INFO } from "@/lib/constants";
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
    default: "Dr. Mario Ruvalcaba | Cirujano Bariátrico en Mérida, Yucatán",
    template: "%s | Dr. Mario Ruvalcaba",
  },
  description:
    "Especialista en cirugía bariátrica y metabólica en Mérida, Yucatán. Manga gástrica, bypass gástrico, balón intragástrico. +3,000 cirugías exitosas. Agenda tu consulta.",
  keywords: [
    "cirujano bariátrico Mérida",
    "cirugía bariátrica Yucatán",
    "manga gástrica Mérida",
    "bypass gástrico Mérida",
    "balón intragástrico",
    "cirugía para obesidad",
    "Dr. Mario Ruvalcaba",
    "pérdida de peso",
    "cirugía metabólica",
  ],
  metadataBase: new URL(DOCTOR_INFO.siteUrl),
  openGraph: {
    siteName: "Dr. Mario Ruvalcaba - Cirujano Bariátrico en Mérida",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
    <html lang="es">
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
