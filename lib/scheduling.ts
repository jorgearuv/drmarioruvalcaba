import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/routing";

export function getSchedulingUrl(locale: Locale): string {
  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;
  if (calendarUrl) return calendarUrl;
  return getWhatsAppUrl(locale);
}

export function isCalendarActive(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_CALENDAR_URL);
}
