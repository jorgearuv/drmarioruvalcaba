import { DOCTOR_INFO } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

const SCHEDULING_MESSAGES: Record<Locale, string> = {
  es: "Hola Dr. Ruvalcaba, me gustaría agendar una consulta para cirugía bariátrica.",
  en: "Hello Dr. Ruvalcaba, I would like to schedule a consultation for bariatric surgery.",
};

const QUESTION_MESSAGES: Record<Locale, string> = {
  es: "Hola Dr. Ruvalcaba, tengo una pregunta sobre sus procedimientos.",
  en: "Hello Dr. Ruvalcaba, I have a question about your procedures.",
};

function buildWhatsAppUrl(locale: Locale, messages: Record<Locale, string>): string {
  const whatsAppNumber = DOCTOR_INFO.whatsapp.replace(/\+/g, "");
  const encodedMessage = encodeURIComponent(messages[locale]);
  return `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
}

export function getWhatsAppUrl(locale: Locale): string {
  return buildWhatsAppUrl(locale, SCHEDULING_MESSAGES);
}

export function getWhatsAppQuestionUrl(locale: Locale): string {
  return buildWhatsAppUrl(locale, QUESTION_MESSAGES);
}
