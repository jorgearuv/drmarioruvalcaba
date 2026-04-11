import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Mario Ruvalcaba — Cirujano Bariátrico en Mérida",
    short_name: "Dr. Mario",
    description:
      "Cirujano general y bariátra certificado en Mérida, Yucatán. Manga gástrica, bypass gástrico, SADI-S, cirugía de mínima invasión.",
    id: "/",
    start_url: "/es",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fafbfc",
    theme_color: "#06c4ae",
    lang: "es-MX",
    dir: "ltr",
    categories: ["medical", "health", "lifestyle"],
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
