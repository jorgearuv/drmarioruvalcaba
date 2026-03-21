import { gtagProvider } from "./providers/gtag";
import { metaPixelProvider } from "./providers/meta-pixel";
import type { AnalyticsEvent, PageContentEvent, AnalyticsProvider, ConversionAction } from "./types";

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

export type { AnalyticsEvent, PageContentEvent, ConversionAction } from "./types";
