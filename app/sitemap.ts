import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

const BASE_URL = "https://drmarioruvalcaba.com";
const LAST_CONTENT_UPDATE = new Date("2026-03-07");

/** Maps Spanish (canonical) paths to English translated slugs. */
const PATHNAME_MAP: Record<string, string> = {
  "/": "/",
  "/manga-gastrica-merida": "/gastric-sleeve-merida",
  "/bypass-gastrico-merida": "/gastric-bypass-merida",
  "/balon-intragastrico": "/intragastric-balloon",
  "/cirugia-minima-invasion": "/minimally-invasive-surgery",
  "/cirugia-diastasis-rectos": "/diastasis-recti-surgery",
  "/cirugias-urgencias": "/emergency-surgery",
  "/sobre-el-doctor": "/about-the-doctor",
  "/preguntas-frecuentes": "/faq",
  "/contacto": "/contact",
  "/blog": "/blog",
  "/aviso-de-privacidad": "/privacy-policy",
  "/politica-de-cookies": "/cookie-policy",
};

interface PageEntry {
  esPath: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}

const PAGES: PageEntry[] = [
  { esPath: "/", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 1 },
  { esPath: "/manga-gastrica-merida", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
  { esPath: "/bypass-gastrico-merida", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
  { esPath: "/balon-intragastrico", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
  { esPath: "/cirugia-minima-invasion", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.9 },
  { esPath: "/cirugia-diastasis-rectos", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
  { esPath: "/cirugias-urgencias", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
  { esPath: "/sobre-el-doctor", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
  { esPath: "/blog", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 0.7 },
  { esPath: "/preguntas-frecuentes", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.6 },
  { esPath: "/contacto", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.6 },
  { esPath: "/aviso-de-privacidad", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.3 },
  { esPath: "/politica-de-cookies", lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.3 },
];

function buildSitemapEntry(
  esPath: string,
  enPath: string,
  lastModified: Date,
  changeFrequency: "weekly" | "monthly" | "yearly",
  priority: number,
): MetadataRoute.Sitemap[number] {
  const esUrl = esPath === "/" ? `${BASE_URL}/es` : `${BASE_URL}/es${esPath}`;
  const enUrl = `${BASE_URL}/en${enPath}`;

  return {
    url: esUrl,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: esUrl,
        en: enUrl,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = PAGES.map((page) => {
    const enPath = PATHNAME_MAP[page.esPath] ?? page.esPath;
    return buildSitemapEntry(page.esPath, enPath, page.lastModified, page.changeFrequency, page.priority);
  });

  const blogEntries = getBlogPosts("es").map((post) => {
    const esPath = `/blog/${post.slug}`;
    const enPath = `/blog/${post.slug}`;
    return buildSitemapEntry(esPath, enPath, new Date(post.date), "monthly", 0.6);
  });

  return [...pageEntries, ...blogEntries];
}
