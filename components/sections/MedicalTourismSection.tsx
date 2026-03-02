import { WHATSAPP_URL } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const MERIDA_HIGHLIGHTS = [
  {
    icon: "🏛️",
    title: "Ciudad Patrimonio Cultural",
    description:
      "Mérida es reconocida como Capital Americana de la Cultura, con una rica historia maya y colonial.",
  },
  {
    icon: "✈️",
    title: "Conectividad Aérea",
    description:
      "Vuelos directos desde las principales ciudades de México, EE.UU. y Canadá.",
  },
  {
    icon: "💰",
    title: "Costos Accesibles",
    description:
      "Ahorra hasta un 60% comparado con cirugías en Estados Unidos, con la misma calidad.",
  },
  {
    icon: "🌡️",
    title: "Clima Ideal",
    description:
      "Clima cálido todo el año, perfecto para una recuperación cómoda.",
  },
  {
    icon: "🏥",
    title: "Hospitales de Primer Nivel",
    description:
      "Infraestructura hospitalaria con tecnología de punta y estándares internacionales.",
  },
  {
    icon: "🍽️",
    title: "Gastronomía y Cultura",
    description:
      "Disfruta de la reconocida gastronomía yucateca durante tu recuperación.",
  },
];

const LOGISTICS_STEPS = [
  {
    icon: "📞",
    title: "Consulta Virtual",
    description:
      "Contacta al Dr. Ruvalcaba para una evaluación inicial por videollamada.",
  },
  {
    icon: "📋",
    title: "Evaluación Médica",
    description:
      "Envía tus estudios médicos para revisión y planificación del procedimiento.",
  },
  {
    icon: "✈️",
    title: "Viaje a Mérida",
    description:
      "Te ayudamos con la logística de vuelos, hospedaje y traslados.",
  },
  {
    icon: "⚕️",
    title: "Procedimiento",
    description:
      "Cirugía en hospital certificado con el Dr. Ruvalcaba.",
  },
  {
    icon: "🏠",
    title: "Seguimiento",
    description:
      "Seguimiento postoperatorio virtual y presencial según necesidad.",
  },
];

interface TourismPackage {
  title: string;
  features: string[];
  highlighted: boolean;
}

const PACKAGES: TourismPackage[] = [
  {
    title: "Paquete Básico",
    features: [
      "Consulta preoperatoria",
      "Cirugía bariátrica",
      "Hospitalización",
      "Seguimiento postoperatorio",
    ],
    highlighted: false,
  },
  {
    title: "Paquete Premium",
    features: [
      "Todo el Paquete Básico",
      "Traslados aeropuerto-hotel-hospital",
      "3 noches de hotel",
      "Acompañante incluido",
      "Kit de recuperación",
    ],
    highlighted: true,
  },
  {
    title: "Paquete VIP",
    features: [
      "Todo el Paquete Premium",
      "Suite hospitalaria privada",
      "5 noches en hotel boutique",
      "Tour cultural por Mérida",
      "Chef privado para dieta postoperatoria",
    ],
    highlighted: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MedicalTourismSection() {
  return (
    <div>
      {/* ---- Why Mérida ---- */}
      <section className="py-16 md:py-24">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
            Destino Médico
          </p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 md:text-4xl">
            ¿Por Qué Elegir Mérida para tu Cirugía?
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {MERIDA_HIGHLIGHTS.map((highlight) => (
            <div
              key={highlight.title}
              className="card-premium card-glow rounded-2xl bg-white p-6"
            >
              <span className="text-3xl">{highlight.icon}</span>
              <h3 className="mt-3 font-display text-lg text-navy-900">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm text-navy-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- How it works ---- */}
      <section className="noise-overlay relative overflow-hidden bg-navy-950 py-16 md:py-24">
        <div className="relative z-10">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-400">
              Proceso
            </p>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              ¿Cómo Funciona el Turismo Médico?
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-5">
            {LOGISTICS_STEPS.map((step, stepIndex) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 font-display text-lg text-white shadow-lg shadow-teal-600/20">
                  {stepIndex + 1}
                </div>
                <p className="mt-4 font-display text-sm text-white">
                  {step.icon} {step.title}
                </p>
                <p className="mt-1 text-xs text-navy-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Packages ---- */}
      <section className="py-16 md:py-24">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
            Paquetes
          </p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 md:text-4xl">
            Paquetes de Turismo Médico
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
          {PACKAGES.map((packageItem) => (
            <div
              key={packageItem.title}
              className={`card-premium relative rounded-2xl p-6 ${
                packageItem.highlighted
                  ? "card-glow border-teal-500/40 shadow-xl shadow-teal-600/10"
                  : ""
              }`}
            >
              {packageItem.highlighted && (
                <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-teal-600/20">
                  Más Popular
                </span>
              )}

              <h3 className="font-display text-xl text-navy-900">
                {packageItem.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {packageItem.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                      ✓
                    </span>
                    <span className="text-navy-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block w-full rounded-xl py-3.5 text-center font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  packageItem.highlighted
                    ? "bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-600/20 hover:shadow-xl"
                    : "border border-navy-200/60 text-navy-700 hover:border-teal-400 hover:text-teal-700"
                }`}
              >
                Solicitar información
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
