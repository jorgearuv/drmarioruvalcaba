import type { AnalyticsProvider, AnalyticsEvent, PageContentEvent } from "../types";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
}

export const metaPixelProvider: AnalyticsProvider = {
  trackEvent(event: AnalyticsEvent) {
    switch (event.name) {
      case "contact_form_submit":
        fbq("track", "Lead", { content_name: event.params.consultation_reason });
        break;
      case "whatsapp_click":
        fbq("track", "Contact", { content_category: event.params.location });
        break;
      case "phone_click":
        fbq("track", "Contact", { content_category: "phone" });
        break;
      case "bmi_calculate":
        fbq("trackCustom", "BMICalculation", {
          bmi_value: event.params.bmi_value,
          bmi_category: event.params.bmi_category,
        });
        break;
    }
  },

  trackPageContent(event: PageContentEvent) {
    fbq("track", "ViewContent", {
      content_name: event.contentName,
      content_category: event.contentCategory,
    });
  },
};
