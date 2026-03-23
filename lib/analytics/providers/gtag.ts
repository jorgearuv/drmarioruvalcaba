import type { AnalyticsProvider, AnalyticsEvent, PageContentEvent, ConversionAction } from "../types";
import { CONVERSION_CONFIG } from "../types";

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

  trackConversion(action: ConversionAction) {
    const config = CONVERSION_CONFIG[action];
    if (config.type === "named_event") {
      gtag("event", config.eventName);
    } else {
      gtag("event", "conversion", { send_to: config.sendTo, value: config.value, currency: config.currency });
    }
  },
};
