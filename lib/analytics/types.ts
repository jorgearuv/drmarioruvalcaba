export type WhatsAppLocation = "hero" | "navbar" | "footer" | "floating" | "cta" | "bmi";

export type AnalyticsEvent =
  | { name: "contact_form_submit"; params: { consultation_reason: string } }
  | { name: "whatsapp_click"; params: { location: WhatsAppLocation } }
  | { name: "phone_click"; params?: Record<string, string> }
  | { name: "bmi_calculate"; params: { bmi_value: number; bmi_category: string } };

export interface PageContentEvent {
  contentName: string;
  contentCategory: "procedure" | "blog_post";
}

export interface AnalyticsProvider {
  trackEvent(event: AnalyticsEvent): void;
  trackPageContent(event: PageContentEvent): void;
  trackConversion?(action: string): void;
}
