"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { DOCTOR_INFO } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const CONSULTATION_REASON_KEYS = [
  "gastricSleeve",
  "gastricBypass",
  "intragastricBalloon",
  "minimallyInvasiveSurgery",
  "otherInquiry",
] as const;

const FIELD_LIMITS = {
  fullName: 120,
  phoneNumber: 30,
  emailAddress: 254,
  messageBody: 2000,
} as const;

const INPUT_CLASS =
  "w-full rounded-xl border border-navy-200/60 bg-navy-50/30 px-4 py-3.5 text-navy-900 placeholder:text-navy-400 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all duration-200";

const LABEL_CLASS =
  "block text-xs uppercase tracking-wider text-navy-500 font-semibold mb-2.5";

function buildWhatsAppUrl(
  fullName: string,
  phoneNumber: string,
  emailAddress: string,
  consultationReason: string,
  messageBody: string,
  introMessage: string,
): string {
  const whatsAppNumber = DOCTOR_INFO.whatsapp.replace(/\D/g, "");
  const messageLines = [
    introMessage,
    ``,
    `*${fullName}*`,
    `*${phoneNumber}*`,
    `*${emailAddress}*`,
    `*${consultationReason}*`,
  ];
  if (messageBody.trim()) {
    messageLines.push(`*${messageBody}*`);
  }
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`;
}

function buildMailtoUrl(
  fullName: string,
  consultationReason: string,
  messageBody: string,
  subjectPrefix: string,
  defaultBody: string,
): string {
  const subject = encodeURIComponent(`${subjectPrefix}: ${consultationReason} — ${fullName}`);
  const body = encodeURIComponent(messageBody || defaultBody);
  return `mailto:${DOCTOR_INFO.email}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const t = useTranslations("contact");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [consultationReason, setConsultationReason] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim()) {
      setValidationError(t("validation.nameRequired"));
      return;
    }
    if (!phoneNumber.trim()) {
      setValidationError(t("validation.phoneRequired"));
      return;
    }
    if (!emailAddress.trim()) {
      setValidationError(t("validation.emailRequired"));
      return;
    }
    if (!consultationReason) {
      setValidationError(t("validation.reasonRequired"));
      return;
    }

    setValidationError("");

    const whatsAppUrl = buildWhatsAppUrl(
      fullName,
      phoneNumber,
      emailAddress,
      consultationReason,
      messageBody,
      t("whatsappIntro"),
    );
    trackEvent({ name: "contact_form_submit", params: { consultation_reason: consultationReason } });
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName("");
    setPhoneNumber("");
    setEmailAddress("");
    setConsultationReason("");
    setMessageBody("");
    setValidationError("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="card-premium p-10 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-2xl font-bold text-white shadow-lg shadow-teal-600/20">
          &#10003;
        </div>
        <h3 className="font-display text-2xl text-navy-900">
          {t("success.heading")}
        </h3>
        <p className="mt-3 text-navy-500">
          {t("success.fallback")}{" "}
          <a
            href={buildMailtoUrl(
              fullName,
              consultationReason,
              messageBody,
              t("emailSubjectPrefix"),
              t("emailDefaultBody"),
            )}
            className="font-semibold text-teal-600 underline underline-offset-2 hover:text-teal-700"
          >
            {t("success.sendEmail")}
          </a>{" "}
          {t("success.followUp")}
        </p>
        <button
          type="button"
          onClick={handleResetForm}
          className="mt-8 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3 font-semibold text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          {t("success.sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <div className="card-premium p-8">
      <form onSubmit={handleFormSubmit} className="space-y-5">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASS}>
            {t("form.name")}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            maxLength={FIELD_LIMITS.fullName}
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className={INPUT_CLASS}
            placeholder={t("form.namePlaceholder")}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className={LABEL_CLASS}>
              {t("form.phone")}
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              maxLength={FIELD_LIMITS.phoneNumber}
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className={INPUT_CLASS}
              placeholder={t("form.phonePlaceholder")}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={LABEL_CLASS}>
              {t("form.email")}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              maxLength={FIELD_LIMITS.emailAddress}
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
              className={INPUT_CLASS}
              placeholder={t("form.emailPlaceholder")}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-reason" className={LABEL_CLASS}>
            {t("form.reason")}
          </label>
          <select
            id="contact-reason"
            required
            value={consultationReason}
            onChange={(event) => setConsultationReason(event.target.value)}
            className={INPUT_CLASS}
          >
            <option value="" disabled>
              {t("form.reasonPlaceholder")}
            </option>
            {CONSULTATION_REASON_KEYS.map((reasonKey) => (
              <option key={reasonKey} value={t(`form.reasons.${reasonKey}`)}>
                {t(`form.reasons.${reasonKey}`)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={LABEL_CLASS}>
            {t("form.message")}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            maxLength={FIELD_LIMITS.messageBody}
            value={messageBody}
            onChange={(event) => setMessageBody(event.target.value)}
            className={INPUT_CLASS}
            placeholder={t("form.messagePlaceholder")}
          />
        </div>

        {/* Inline validation error */}
        {validationError && (
          <p
            role="alert"
            aria-live="polite"
            className="text-sm font-medium text-red-600"
          >
            {validationError}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 py-4 text-lg font-semibold text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-teal-500 hover:to-teal-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
          {t("form.submit")}
        </button>
      </form>
    </div>
  );
}
