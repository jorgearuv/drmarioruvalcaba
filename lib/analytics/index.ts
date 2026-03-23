import { gtagProvider } from "./providers/gtag";
import { metaPixelProvider } from "./providers/meta-pixel";
import type { AnalyticsEvent, PageContentEvent, AnalyticsProvider, ConversionAction, WhatsAppLocation } from "./types";

const providers: AnalyticsProvider[] = [gtagProvider, metaPixelProvider];

export function trackEvent(event: AnalyticsEvent) {
  providers.forEach((p) => p.trackEvent(event));
}

export function trackPageContent(event: PageContentEvent) {
  providers.forEach((p) => p.trackPageContent(event));
}

export function trackConversion(action: ConversionAction) {
  providers.forEach((p) => p.trackConversion?.(action));
}

export function trackWhatsAppClick(location: WhatsAppLocation) {
  trackEvent({ name: "whatsapp_click", params: { location } });
  trackConversion("whatsapp_click");
}

export function trackScheduleClick(location: WhatsAppLocation, calendarActive: boolean) {
  if (calendarActive) {
    trackEvent({ name: "calendar_click", params: { location } });
  } else {
    trackEvent({ name: "whatsapp_click", params: { location } });
    trackConversion("whatsapp_click");
  }
  trackConversion("schedule");
}

export type { AnalyticsEvent, PageContentEvent, ConversionAction, WhatsAppLocation } from "./types";
