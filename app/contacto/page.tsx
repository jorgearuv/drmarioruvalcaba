import { createPageMetadata } from "@/lib/metadata";
import { DOCTOR_INFO, WHATSAPP_URL } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = createPageMetadata({
  title: "Contacto | Dr. Mario Ruvalcaba - Cirujano Bariátrico",
  description:
    "Contacta al Dr. Mario Ruvalcaba. Agenda tu consulta de cirugía bariátrica en Mérida, Yucatán. WhatsApp, teléfono, correo electrónico.",
  path: "/contacto",
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
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">Teléfono</h3>
                  <p className="mt-1 text-sm text-navy-600">
                    {DOCTOR_INFO.phone}
                  </p>
                  <p className="mt-1 text-xs text-navy-400">
                    Lunes a Viernes 9:00 am - 7:00 pm
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${DOCTOR_INFO.email}`}
                className="card-premium flex items-start gap-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
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
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
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
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy-900">Horario de Atención</h3>
                  <div className="mt-1 space-y-1 text-sm text-navy-600">
                    <p>Lunes a Viernes: 9:00 am - 7:00 pm</p>
                    <p>Sábados: 9:00 am - 2:00 pm</p>
                    <p className="text-navy-400">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-2xl border border-navy-100">
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-teal-600/10 to-navy-900/10">
                  <p className="text-sm text-navy-400">
                    Google Maps - Próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
