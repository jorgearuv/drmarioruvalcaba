import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import localFont from "next/font/local";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,             // a11y: never block user zoom
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbfc" }, // --background
    { media: "(prefers-color-scheme: dark)",  color: "#0c1426" }, // navy-900
  ],
  colorScheme: "light",        // site is light-only; flip to "light dark" when dark mode is added
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;
  const lang =
    locale && hasLocale(routing.locales, locale)
      ? locale
      : routing.defaultLocale;

  return (
    <html lang={lang} data-theme="noir-gold" className={cn("font-sans", geist.variable)}>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
