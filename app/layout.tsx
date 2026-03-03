import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ThemeToggle from "@/components/layout/ThemeToggle";
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
    default: "Dr. Mario Ruvalcaba | Cirujano Bariatra en Mérida | Cirugía de Mínima Invasión en Yucatán",
    template: "%s | Dr. Mario Ruvalcaba",
  },
  description:
    "Cirujano general y bariatra certificado en Mérida, Yucatán. Manga gástrica, bypass gástrico, SADI-S, cirugía de mínima invasión. Agenda tu consulta: 999 260 3030.",
  keywords: [
    "cirujano bariatra Mérida",
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
  openGraph: {
    siteName: "Dr. Mario Ruvalcaba - Cirujano Bariatra en Mérida",
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
    <html lang="es" suppressHydrationWarning>

      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t&&t!=='original')document.documentElement.dataset.theme=t}catch(e){}})();`,
          }}
        />
      </head>
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
        <ThemeToggle />

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
