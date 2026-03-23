export type WhatsAppLocation = "hero" | "navbar" | "footer" | "floating" | "cta" | "bmi" | "doctor_bio" | "contact_page";

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

export type ConversionAction = "schedule" | "contact_page_view" | "whatsapp_click";

type NamedEventConversion = { type: "named_event"; eventName: string };
type LabelConversion = { type: "label"; sendTo: string; value: number; currency: string };
export type ConversionConfig = NamedEventConversion | LabelConversion;

export const CONVERSION_CONFIG: Record<ConversionAction, ConversionConfig> = {
  schedule: { type: "named_event", eventName: "ads_conversion_Reservar_cita_1" },
  contact_page_view: { type: "named_event", eventName: "ads_conversion_Contactar_1" },
  whatsapp_click: { type: "label", sendTo: "AW-17983868749/sEVFCM7jpY4cEM2esP9C", value: 1.0, currency: "MXN" },
};

export interface AnalyticsProvider {
  trackEvent(event: AnalyticsEvent): void;
  trackPageContent(event: PageContentEvent): void;
  trackConversion?(action: ConversionAction): void;
}
