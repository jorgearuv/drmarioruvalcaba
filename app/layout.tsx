import type { ReactNode } from "react";

// This bare root layout exists solely to satisfy Next.js's requirement for a
// root layout.tsx alongside globals.css and static assets (favicon, robots,
// sitemap) that live outside the [locale] segment.  All real rendering happens
// in app/[locale]/layout.tsx.

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
