type WhatsAppLocation = "hero" | "navbar" | "footer" | "floating" | "cta" | "bmi";

type AnalyticsEvent =
  | { name: "contact_form_submit"; params: { consultation_reason: string } }
  | { name: "whatsapp_click"; params: { location: WhatsAppLocation } }
  | { name: "phone_click"; params?: Record<string, string> }
  | { name: "bmi_calculate"; params: { bmi_value: number; bmi_category: string } };

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

export function trackEvent(event: AnalyticsEvent) {
  gtag("event", event.name, event.params);
}

export function trackConversion(conversionAction: string) {
  gtag("event", "conversion", {
    send_to: `${process.env.NEXT_PUBLIC_GADS_ID}/${conversionAction}`,
  });
}
