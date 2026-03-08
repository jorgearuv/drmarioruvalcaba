import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/manga-gastrica-merida": {
      es: "/manga-gastrica-merida",
      en: "/gastric-sleeve-merida",
    },
    "/bypass-gastrico-merida": {
      es: "/bypass-gastrico-merida",
      en: "/gastric-bypass-merida",
    },
    "/balon-intragastrico": {
      es: "/balon-intragastrico",
      en: "/intragastric-balloon",
    },
    "/cirugia-minima-invasion": {
      es: "/cirugia-minima-invasion",
      en: "/minimally-invasive-surgery",
    },
    "/cirugia-diastasis-rectos": {
      es: "/cirugia-diastasis-rectos",
      en: "/diastasis-recti-surgery",
    },
    "/cirugias-urgencias": {
      es: "/cirugias-urgencias",
      en: "/emergency-surgery",
    },
    "/sobre-el-doctor": {
      es: "/sobre-el-doctor",
      en: "/about-the-doctor",
    },
    "/preguntas-frecuentes": {
      es: "/preguntas-frecuentes",
      en: "/faq",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
