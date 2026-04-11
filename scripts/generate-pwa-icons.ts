/**
 * Generates PWA icon variants required by app/manifest.ts.
 * Source: public/images/logo-apple-touch-icon.png (180×180 RGBA)
 * Run: bun run scripts/generate-pwa-icons.ts
 *
 * Output:
 *   public/images/icon-192.png          (192×192, transparent bg)
 *   public/images/icon-512.png          (512×512, transparent bg)
 *   public/images/icon-maskable-512.png (512×512, navy-900 bg, 20% safe zone)
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");
const sourcePng = path.join(imagesDir, "logo-apple-touch-icon.png");

// W3C maskable safe zone: inner 80% of the canvas (20% padding each side)
const NAVY_900 = { r: 12, g: 20, b: 38, alpha: 1 } as const; // #0c1426

async function generateIcon(
  size: number,
  outputFilename: string,
  options: { maskable?: boolean } = {},
): Promise<void> {
  const outputPath = path.join(imagesDir, outputFilename);

  if (options.maskable) {
    // Safe zone = 80% of canvas; icon occupies the inner square
    const iconSize = Math.round(size * 0.6); // 60% inner → 20% padding each side
    const offset = Math.round((size - iconSize) / 2);

    const resizedIcon = await sharp(sourcePng)
      .resize(iconSize, iconSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: NAVY_900,
      },
    })
      .composite([{ input: resizedIcon, top: offset, left: offset }])
      .png({ compressionLevel: 9 })
      .toFile(outputPath);
  } else {
    await sharp(sourcePng)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(outputPath);
  }

  const { size: fileSize } = await import("fs").then((fs) =>
    fs.promises.stat(outputPath),
  );
  console.log(`✓ ${outputFilename}: ${size}×${size} (${Math.round(fileSize / 1024)} KB)`);
}

async function main() {
  await generateIcon(192, "icon-192.png");
  await generateIcon(512, "icon-512.png");
  await generateIcon(512, "icon-maskable-512.png", { maskable: true });
  console.log("\n✅ PWA icons generated successfully.");
}

main().catch((err) => {
  console.error("Error generating PWA icons:", err);
  process.exit(1);
});
