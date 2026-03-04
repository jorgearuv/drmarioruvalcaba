import { DOCTOR_INFO } from "@/lib/constants";

const CREDENTIALS = [
  {
    icon: "\u{1F393}",
    title: "Médico Cirujano",
    institution: "Universidad Autónoma de Yucatán",
  },
  {
    icon: "\u{1F3E5}",
    title: "Especialidad en Cirugía General",
    institution: "Hospital General de México",
  },
  {
    icon: "\u2695\uFE0F",
    title: "Subespecialidad en Cirugía Bariátrica",
    institution:
      "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán",
  },
  {
    icon: "\u{1F30D}",
    title: "Fellowship Internacional",
    institution: "Centro de Excelencia en Cirugía Bariátrica, EE.UU.",
  },
  {
    icon: "\u2705",
    title: "Certificado por el Consejo Mexicano",
    institution: "Consejo Mexicano de Cirugía General",
  },
  {
    icon: "\u{1F3DB}\uFE0F",
    title: "Miembro IFSO",
    institution: "International Federation for the Surgery of Obesity",
  },
] as const;

const TIMELINE = [
  { year: "2003", description: "Egreso de la Licenciatura en Medicina" },
  { year: "2007", description: "Especialidad en Cirugía General" },
  {
    year: "2009",
    description: "Subespecialidad en Cirugía Bariátrica y Metabólica",
  },
  { year: "2010", description: "Fellowship Internacional" },
  {
    year: "2011",
    description: "Inicio de práctica privada en Mérida, Yucatán",
  },
] as const;

export default function DoctorBio() {
  return (
    <>
      {/* Hero Area */}
      <section>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Left: Photo Placeholder */}
          <div className="card-glow aspect-[3/4] rounded-2xl bg-gradient-to-br from-teal-600/20 to-navy-900/20 border border-navy-100 max-w-md mx-auto flex items-center justify-center w-full">
            <span className="text-navy-400">Foto del Dr. Ruvalcaba</span>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block glass px-4 py-1.5 rounded-full text-sm font-semibold text-teal-800">
              Cirujano Bariátrico Certificado
            </span>

            <h1 className="text-4xl md:text-5xl font-display text-navy-900 mt-4">
              Dr. Mario Ruvalcaba
            </h1>

            <h2 className="text-xl font-display text-teal-600 mt-2">
              Especialista en Cirugía Bariátrica y Metabólica
            </h2>

            <div className="text-lg text-navy-600 mt-6 space-y-4">
              <p>
                El Dr. Mario Ruvalcaba es uno de los cirujanos bariátricos más
                reconocidos del sureste de México, con más de 15 años de
                experiencia y más de 3,000 procedimientos realizados
                exitosamente.
              </p>
              <p>
                Su preparación incluye entrenamiento con cirujanos de referencia
                y actualización continua en cirugía de mínima invasión y
                bariátrica, lo que le permite ofrecer un abordaje integral en
                diversos procedimientos con altos estándares de calidad y
                seguridad.
              </p>
            </div>

            <div className="text-sm text-navy-500 mt-4 space-y-1">
              <p>Cédula Profesional: {DOCTOR_INFO.cedula}</p>
              <p>Cédula Especialidad: {DOCTOR_INFO.cedulaEspecialidad}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center font-display text-3xl text-navy-900">
            Formación y Credenciales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {CREDENTIALS.map((credential) => (
              <div
                key={credential.title}
                className="card-premium bg-white rounded-2xl p-6"
              >
                <span className="text-3xl">{credential.icon}</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3">
                  {credential.title}
                </h3>
                <p className="text-navy-600 mt-2">{credential.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Timeline */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center font-display text-3xl text-navy-900">
            Trayectoria Profesional
          </h2>

          <div className="space-y-0 mt-10">
            {TIMELINE.map((timelineItem, itemIndex) => (
              <div key={timelineItem.year} className="flex gap-6 relative">
                {/* Year circle */}
                <div className="h-10 w-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                  {timelineItem.year}
                </div>

                {/* Connecting line */}
                {itemIndex < TIMELINE.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-teal-200" />
                )}

                {/* Content */}
                <div className="pb-8">
                  <p className="font-bold text-navy-900">
                    {timelineItem.year}
                  </p>
                  <p className="text-navy-600 mt-1">
                    {timelineItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
