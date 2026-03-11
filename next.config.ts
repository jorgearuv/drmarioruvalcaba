import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.facebook.com",
  "font-src 'self'",
  "frame-src https://www.google.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.facebook.com",
];

const nextConfig: NextConfig = {
  // Explicitly exclude source maps from production bundles to reduce bundle
  // size and avoid leaking implementation details to end users.
  productionBrowserSourceMaps: false,
  // Force blocking metadata rendering for all requests to avoid hydration
  // mismatch in MetadataWrapper (<div hidden> server vs client discrepancy).
  // Safe because all metadata in this site is static.
  // https://github.com/vercel/next.js/issues/XXXXX
  htmlLimitedBots: /./,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspDirectives.join("; "),
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
