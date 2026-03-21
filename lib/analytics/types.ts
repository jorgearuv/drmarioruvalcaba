export type WhatsAppLocation = "hero" | "navbar" | "footer" | "floating" | "cta" | "bmi" | "doctor_bio";

export type AnalyticsEvent =
  | { name: "contact_form_submit"; params: { consultation_reason: string } }
  | { name: "whatsapp_click"; params: { location: WhatsAppLocation } }
  | { name: "calendar_click"; params: { location: WhatsAppLocation } }
  | { name: "phone_click"; params?: Record<string, string> }
  | { name: "bmi_calculate"; params: { bmi_value: number; bmi_category: string } };

export interface PageContentEvent {
  contentName: string;
  contentCategory: "procedure" | "blog_post";
}

export type ConversionAction = "schedule" | "contact_page_view";

export const CONVERSION_EVENT_NAMES: Record<ConversionAction, string> = {
  schedule: "ads_conversion_Reservar_cita_1",
  contact_page_view: "ads_conversion_Contactar_1",
};

export interface AnalyticsProvider {
  trackEvent(event: AnalyticsEvent): void;
  trackPageContent(event: PageContentEvent): void;
  trackConversion?(action: ConversionAction): void;
}
