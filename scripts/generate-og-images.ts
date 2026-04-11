/**
 * Generates category OG images for social sharing.
 * Run: bunx tsx scripts/generate-og-images.ts
 *
 * Output:
 *   public/images/og-bariatrica.png       (Cirugía Bariátrica)
 *   public/images/og-minima-invasion.png  (Cirugía de Mínima Invasión)
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public", "images");

// Brand colors
const NAVY_900 = "#0c1426";
const NAVY_800 = "#1b2640";
const TEAL_500 = "#06c4ae";
const TEAL_400 = "#1ee0c7";
const WHITE = "#ffffff";

const WIDTH = 1200;
const HEIGHT = 630;

function buildSvg(
  categoryTitle: string,
  categorySubtitle: string,
  tagline: string,
): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${NAVY_900};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${NAVY_800};stop-opacity:1" />
    </linearGradient>
    <!-- Accent gradient -->
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${TEAL_500};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${TEAL_400};stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />

  <!-- Decorative teal circles -->
  <circle cx="1100" cy="80" r="200" fill="${TEAL_500}" opacity="0.06" />
  <circle cx="150" cy="550" r="180" fill="${TEAL_500}" opacity="0.05" />
  <circle cx="900" cy="580" r="120" fill="${TEAL_400}" opacity="0.04" />

  <!-- Left accent bar -->
  <rect x="0" y="0" width="6" height="${HEIGHT}" fill="url(#accent)" />

  <!-- Top accent line -->
  <rect x="80" y="80" width="60" height="5" rx="2.5" fill="url(#accent)" />

  <!-- Doctor name (top label) -->
  <text x="80" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="${TEAL_500}" letter-spacing="2">DR. MARIO RUVALCABA</text>

  <!-- Category title -->
  <text x="80" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="800" fill="${WHITE}" letter-spacing="-1">${categoryTitle}</text>

  <!-- Category subtitle (if multi-line) -->
  <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="800" fill="${WHITE}" letter-spacing="-1">${categorySubtitle}</text>

  <!-- Teal separator line -->
  <rect x="80" y="390" width="120" height="4" rx="2" fill="url(#accent)" />

  <!-- Tagline -->
  <text x="80" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="400" fill="${TEAL_500}" opacity="0.9">${tagline}</text>

  <!-- Location badge -->
  <rect x="80" y="530" width="320" height="48" rx="24" fill="${TEAL_500}" opacity="0.15" />
  <text x="240" y="562" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" fill="${TEAL_400}" text-anchor="middle">📍 Mérida, Yucatán, México</text>

  <!-- Website -->
  <text x="${WIDTH - 80}" y="${HEIGHT - 40}" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="${WHITE}" opacity="0.4" text-anchor="end">drmarioruvalcaba.com</text>
</svg>`;
}

async function generateImage(
  svg: string,
  outputPath: string,
  label: string,
): Promise<void> {
  const buffer = Buffer.from(svg);
  await sharp(buffer)
    .png({ quality: 90, compressionLevel: 9 })
    .resize(WIDTH, HEIGHT)
    .toFile(outputPath);

  const { size } = await import("fs").then((fs) =>
    fs.promises.stat(outputPath)
  );
  const sizeKb = Math.round(size / 1024);
  console.log(`✓ ${label}: ${outputPath} (${sizeKb} KB)`);
}

async function main() {
  const images = [
    {
      filename: "og-bariatrica.png",
      line1: "Cirugía",
      line2: "Bariátrica",
      tagline: "Manga Gástrica · Bypass · SADI-S · Bipartición",
    },
    {
      filename: "og-minima-invasion.png",
      line1: "Cirugía de",
      line2: "Mínima Invasión",
      tagline: "Colecistectomía · Hernias · Reflujo · Acalasia",
    },
  ];

  for (const img of images) {
    const svg = buildSvg(img.line1, img.line2, img.tagline);
    const outputPath = path.join(publicDir, img.filename);
    await generateImage(svg, outputPath, img.filename);
  }

  console.log("\n✅ OG images generated successfully.");
}

main().catch((err) => {
  console.error("Error generating OG images:", err);
  process.exit(1);
});
