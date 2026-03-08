import { DOCTOR_INFO } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

const MESSAGES: Record<Locale, string> = {
  es: "Hola Dr. Ruvalcaba, me gustaría agendar una consulta para cirugía bariátrica.",
  en: "Hello Dr. Ruvalcaba, I would like to schedule a consultation for bariatric surgery.",
};

export function getWhatsAppUrl(locale: Locale): string {
  const whatsAppNumber = DOCTOR_INFO.whatsapp.replace(/\+/g, "");
  const encodedMessage = encodeURIComponent(MESSAGES[locale]);
  return `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
}
