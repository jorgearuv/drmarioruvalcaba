import { createPageMetadata } from "@/lib/metadata";
import { DOCTOR_INFO, WHATSAPP_URL } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const metadata = createPageMetadata({
  title: "Contacto | Dr. Mario Ruvalcaba - Cirujano Bariátrico",
  description:
    "Contacta al Dr. Mario Ruvalcaba, cirujano bariátrico en Mérida. Agenda tu consulta vía WhatsApp, teléfono o correo. Atención de lunes a viernes.",
  path: "/contacto",
  ogImage: "/images/og-contacto.png",
});

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">Contacto</p>
          <h1 className="mt-4 text-4xl font-display text-white md:text-5xl">
            Contáctanos
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-navy-300">
            Estamos aquí para ayudarte. Agenda tu consulta o envíanos un
            mensaje.
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
                Envíanos un Mensaje
              </h2>
              <p className="mt-2 text-navy-600">
                Completa el formulario y nos pondremos en contacto contigo a la
                brevedad.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-navy-900">
                Información de Contacto
              </h2>

              {/* WhatsApp Card */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex items-start gap-4 rounded-2xl border border-green-200 bg-green-50 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-green-800">WhatsApp</h3>
                  <p className="mt-1 text-sm text-green-700">
                    {DOCTOR_INFO.whatsapp}
                  </p>
                  <p className="mt-1 text-xs text-green-600">
                    Respuesta rápida · Lun a Vie 9am - 7pm
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${DOCTOR_INFO.phone}`}
                className="card-premium flex items-start gap-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">Teléfono</h3>
                  <p className="mt-1 text-sm text-navy-600">
                    {DOCTOR_INFO.phone}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-red-600">
                    URGENCIAS 24 horas
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
                  <h3 className="font-display font-bold text-navy-900">Correo Electrónico</h3>
                  <p className="mt-1 text-sm text-navy-600">
                    {DOCTOR_INFO.email}
                  </p>
                  <p className="mt-1 text-xs text-navy-400">
                    Respuesta en 24-48 horas
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <div className="card-premium flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">Consultorio</h3>
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
                  <h3 className="font-display font-bold text-navy-900">Horario de Atención Consultas</h3>
                  <div className="mt-1 space-y-1 text-sm text-navy-600">
                    <p>Lunes a Viernes: 3:00 pm - 9:00 pm</p>
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
                  title="Ubicación del consultorio del Dr. Mario Ruvalcaba en Mérida"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
