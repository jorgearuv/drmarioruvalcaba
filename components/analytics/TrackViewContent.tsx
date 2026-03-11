"use client";

import { useEffect } from "react";
import { trackPageContent } from "@/lib/analytics";
import type { PageContentEvent } from "@/lib/analytics";

export default function TrackViewContent({
  contentName,
  contentCategory,
}: PageContentEvent) {
  useEffect(() => {
    trackPageContent({ contentName, contentCategory });
  }, [contentName, contentCategory]);

  return null;
}
