import Image from 'next/image'
import { DOCTOR_INFO } from '@/lib/constants'
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  BeakerIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'

interface Credential {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  institution: string
}

const CREDENTIALS: Credential[] = [
  {
    icon: AcademicCapIcon,
    title: 'Médico Cirujano',
    institution: 'Universidad Autónoma de Guadalajara',
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Especialidad en Cirugía General',
    institution: 'Universidad Autónoma de Yucatán',
  },
  {
    icon: BeakerIcon,
    title: 'Alta Especialidad en Cirugía Endoscópica y Robótica',
    institution:
      'Centro de Formación en Cirugía de Mínima Invasión, CDMX',
  },
  {
    icon: GlobeAmericasIcon,
    title: 'Alta Especialidad en Cirugía Bariátrica y Metabólica',
    institution: 'Universidad de las Américas Puebla',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Certificado por el Consejo Mexicano',
    institution: 'Consejo Mexicano de Cirugía General',
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Miembro IFSO',
    institution: 'International Federation for the Surgery of Obesity',
  },
]

const TIMELINE = [
  { year: '2019', description: 'Egreso de Licenciatura Médico Cirujano' },
  { year: '2020', description: 'Especialidad en Cirugía General' },
  {
    year: '2024',
    description: 'Alta Especialidad en Cirugía Endoscópica y Bariátrica',
  },
  {
    year: '2025',
    description: 'Alta Especialidad en Cirugía Bariátrica y Metabólica',
  },
] as const

export default function DoctorBio() {
  return (
    <>
      {/* Hero Area */}
      <section>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Left: Photo */}
          <div className="card-glow aspect-3/4 rounded-2xl overflow-hidden border border-navy-100 max-w-md mx-auto w-full relative">
            <Image
              src="/images/doctor/profile-web.webp"
              alt="Dr. Mario Ruvalcaba — Cirujano General y Bariátra Certificado en Mérida, Yucatán"
              fill
              sizes="(max-width: 768px) 90vw, 448px"
              className="object-cover"
              quality={95}
              priority
            />
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block glass px-4 py-1.5 rounded-full text-sm font-semibold text-teal-800">
              Cirujano Bariátra Certificado
            </span>

            <h1 className="text-4xl md:text-5xl font-display text-navy-900 mt-4">
              Dr. Mario Ruvalcaba
            </h1>

            <h2 className="text-xl font-display text-teal-600 mt-2">
              Especialista en Cirugía Bariátrica y Metabólica
            </h2>

            <div className="text-lg text-navy-600 mt-6 space-y-4">
              <p>
                Con más de 5 años de práctica como cirujano, el Dr. Mario
                Ruvalcaba ha desarrollado experiencia en múltiples
                procedimientos no solo de cirugía, sino también de cirugía
                bariátrica, manteniendo un enfoque integral y personalizado en
                cada paciente.
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
            {CREDENTIALS.map(credential => (
              <div
                key={credential.title}
                className="card-premium bg-white rounded-2xl p-6"
              >
                <credential.icon className="h-8 w-8 text-teal-600" aria-hidden="true" />
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
      <section className="py-20 md:py-32 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">
              Trayectoria
            </p>
            <h2 className="font-display text-3xl md:text-4xl heading-gradient mt-3">
              Trayectoria Profesional
            </h2>
            <div className="section-divider mx-auto mt-5" />
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block mt-16">
            <div className="relative grid grid-cols-4 grid-rows-[1fr_auto_1fr]">
              {/* Horizontal gradient line — sits in the middle row */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-linear-to-r from-teal-600 to-gold-500 -translate-y-1/2 pointer-events-none" />

              {TIMELINE.map((timelineItem, itemIndex) => {
                const isAbove = itemIndex % 2 === 0
                return (
                  <div
                    key={timelineItem.year}
                    className="col-start-auto row-span-3 grid grid-rows-subgrid items-end text-center"
                  >
                    {/* Row 1: above content */}
                    <div className={`pb-6 ${isAbove ? '' : 'invisible'}`}>
                      <p className="text-2xl font-display heading-gold">
                        {timelineItem.year}
                      </p>
                      <p className="text-sm text-navy-600 mt-2 max-w-45 mx-auto">
                        {timelineItem.description}
                      </p>
                    </div>

                    {/* Row 2: dot on line */}
                    <div className="flex justify-center py-2">
                      <div className="w-3 h-3 rounded-full bg-teal-600 ring-4 ring-teal-100 relative z-10" />
                    </div>

                    {/* Row 3: below content */}
                    <div className={`pt-6 self-start ${isAbove ? 'invisible' : ''}`}>
                      <p className="text-2xl font-display heading-gold">
                        {timelineItem.year}
                      </p>
                      <p className="text-sm text-navy-600 mt-2 max-w-45 mx-auto">
                        {timelineItem.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden mt-10 space-y-4">
            {TIMELINE.map(timelineItem => (
              <div
                key={timelineItem.year}
                className="card-premium bg-white rounded-2xl p-6 border-l-2 border-teal-600"
              >
                <p className="text-xl font-display heading-gold">
                  {timelineItem.year}
                </p>
                <p className="text-navy-600 mt-2">
                  {timelineItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
