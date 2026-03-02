"use client";

import { useState } from "react";

const CONSULTATION_REASONS = [
  "",
  "Manga Gástrica",
  "Bypass Gástrico",
  "Balón Intragástrico",
  "Cirugía de Mínima Invasión",
  "Otra consulta",
] as const;

const INPUT_CLASS =
  "w-full rounded-xl border border-navy-200/60 bg-navy-50/30 px-4 py-3.5 text-navy-900 placeholder:text-navy-400 focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all duration-200";

const LABEL_CLASS =
  "block text-xs uppercase tracking-wider text-navy-500 font-semibold mb-2.5";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [consultationReason, setConsultationReason] = useState("");
  const [messageBody, setMessageBody] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName("");
    setPhoneNumber("");
    setEmailAddress("");
    setConsultationReason("");
    setMessageBody("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="card-premium p-10 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-2xl font-bold text-white shadow-lg shadow-teal-600/20">
          &#10003;
        </div>
        <h3 className="font-display text-2xl text-navy-900">
          &#161;Mensaje Enviado!
        </h3>
        <p className="mt-3 text-navy-500">
          Nos pondremos en contacto contigo pronto.
        </p>
        <button
          type="button"
          onClick={handleResetForm}
          className="mt-8 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-3 font-semibold text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="card-premium p-8">
      <form onSubmit={handleFormSubmit} className="space-y-5">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASS}>
            Nombre completo
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className={INPUT_CLASS}
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className={LABEL_CLASS}>
              Teléfono
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className={INPUT_CLASS}
              placeholder="Tu número de teléfono"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={LABEL_CLASS}>
              Correo electrónico
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
              className={INPUT_CLASS}
              placeholder="tu@correo.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-reason" className={LABEL_CLASS}>
            Motivo de consulta
          </label>
          <select
            id="contact-reason"
            required
            value={consultationReason}
            onChange={(event) => setConsultationReason(event.target.value)}
            className={INPUT_CLASS}
          >
            <option value="" disabled>
              Selecciona un motivo
            </option>
            {CONSULTATION_REASONS.filter((reason) => reason !== "").map(
              (reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ),
            )}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className={LABEL_CLASS}>
            Mensaje
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={messageBody}
            onChange={(event) => setMessageBody(event.target.value)}
            className={INPUT_CLASS}
            placeholder="Cuéntanos más sobre tu consulta (opcional)"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 py-4 text-lg font-semibold text-white shadow-lg shadow-teal-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-teal-500 hover:to-teal-600 hover:shadow-xl"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
