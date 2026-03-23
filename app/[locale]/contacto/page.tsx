import { setRequestLocale, getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { DOCTOR_INFO } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import ContactForm from "@/components/sections/ContactForm";
import { ContactPageConversion } from "@/components/analytics/ContactPageConversion";
import WhatsAppContactCard from "@/components/sections/WhatsAppContactCard";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import type { Locale } from "@/i18n/routing";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (locale === "en") {
    return createPageMetadata({
      title: "Contact | Dr. Mario Ruvalcaba - Bariatric Surgeon",
      description: "Contact Dr. Mario Ruvalcaba, bariatric surgeon in Mérida. Schedule your consultation via WhatsApp, phone, or email.",
      path: "/contacto",
      locale: "en",
      alternateLocalePath: "/contacto",
      ogImage: "/images/og-contacto.png",
    });
  }

  return createPageMetadata({
    title: "Contacto | Dr. Mario Ruvalcaba - Cirujano Bariátrico",
    description:
      "Contacta al Dr. Mario Ruvalcaba, cirujano bariátrico en Mérida. Agenda tu consulta vía WhatsApp, teléfono o correo. Atención de lunes a viernes.",
    path: "/contacto",
    locale: "es",
    alternateLocalePath: "/contacto",
    ogImage: "/images/og-contacto.png",
  });
}

export default async function ContactoPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contact" });
  const whatsAppUrl = getWhatsAppUrl(locale as Locale);

  return (
    <>
      <ContactPageConversion />
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">
            {t("heroLabel")}
          </p>
          <h1 className="mt-4 text-4xl font-display text-white md:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-navy-300">
            {t("heroDescription")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                {t("formTitle")}
              </h2>
              <p className="mt-2 text-navy-600">
                {t("formDescription")}
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-900">
                {t("infoTitle")}
              </h2>

              {/* WhatsApp Card */}
              <WhatsAppContactCard
                href={whatsAppUrl}
                phoneNumber={DOCTOR_INFO.whatsapp}
                noteText={t("whatsappNote")}
                titleText="WhatsApp"
              />

              {/* Phone Card */}
              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="card-premium flex items-start gap-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">{t("phoneLabel")}</h3>
                  <p className="mt-1 text-sm text-navy-600">
                    {DOCTOR_INFO.phone}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-red-600">
                    {t("emergencyNote")}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${DOCTOR_INFO.email}`}
                className="card-premium flex items-start gap-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">{t("emailLabel")}</h3>
                  <p className="mt-1 text-sm text-navy-600">
                    {DOCTOR_INFO.email}
                  </p>
                  <p className="mt-1 text-xs text-navy-400">
                    {t("emailNote")}
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="card-premium flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">{t("officeLabel")}</h3>
                  <p className="mt-1 text-sm text-navy-600">
                    {DOCTOR_INFO.address}
                  </p>
                  <p className="mt-1 text-sm text-navy-600">
                    {DOCTOR_INFO.city}, {DOCTOR_INFO.state}, {DOCTOR_INFO.country}
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="card-premium flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">{t("hoursLabel")}</h3>
                  <div className="mt-1 space-y-1 text-sm text-navy-600">
                    <p>{t("hoursValue")}</p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="overflow-hidden rounded-2xl border border-navy-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.752418271581!2d-89.60473116164039!3d21.00255928109106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5676cbf27c0fdd%3A0x7d7a6cb1bd9d727f!2sLaboratorio%20Cl%C3%ADnico%20en%20M%C3%A9rida%20-%20Quimialab%20Laboratorio%20de%20An%C3%A1lisis%20Cl%C3%ADnicos!5e0!3m2!1ses-419!2smx!4v1772921950149!5m2!1ses-419!2smx"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("mapTitle")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
