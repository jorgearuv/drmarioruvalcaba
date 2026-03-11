import type { AnalyticsProvider, AnalyticsEvent, PageContentEvent } from "../types";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

export const gtagProvider: AnalyticsProvider = {
  trackEvent(event: AnalyticsEvent) {
    gtag("event", event.name, event.params);
  },

  trackPageContent(event: PageContentEvent) {
    gtag("event", "view_content", {
      content_name: event.contentName,
      content_category: event.contentCategory,
    });
  },

  trackConversion(action: string) {
    gtag("event", "conversion", {
      send_to: `${process.env.NEXT_PUBLIC_GADS_ID}/${action}`,
    });
  },
};
