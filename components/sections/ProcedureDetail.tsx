import Image from 'next/image'
import type { Procedure } from '@/types'

interface ProcedureDetailProps {
  procedure: Procedure
}

export default function ProcedureDetail({ procedure }: ProcedureDetailProps) {
  const descriptionParagraphs = procedure.longDescription.split('\n\n')

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-mesh-hero noise-overlay relative overflow-hidden py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm font-medium text-teal-300">
            <span>{procedure.icon}</span>
            <span>{procedure.shortTitle}</span>
          </span>

          <h1 className="text-4xl md:text-5xl font-display text-white mt-4">
            {procedure.heroHeadline}
          </h1>

          <p className="text-xl text-navy-300 mt-4 max-w-3xl">
            {procedure.heroSubheadline}
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <span className="glass-dark text-white px-4 py-2 rounded-full text-sm">
              {'\u23F1\uFE0F'} {procedure.duration}
            </span>
            <span className="glass-dark text-white px-4 py-2 rounded-full text-sm">
              {'\u{1F3E5}'} {procedure.hospitalStay}
            </span>
            {procedure.costRange && (
              <span className="glass-dark text-white px-4 py-2 rounded-full text-sm">
                {'\u{1F4B0}'} {procedure.costRange}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Description Section — editorial layout with optional image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Text column */}
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl text-navy-900">
                ¿Qué es la {procedure.shortTitle}?
              </h2>

              <div className="mt-6 space-y-6">
                {descriptionParagraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-lg text-navy-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image column */}
            <div className="relative mx-auto w-full max-w-lg lg:mx-0">
              <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-50 shadow-lg">
                {procedure.imagePath ? (
                  <Image
                    src={procedure.imagePath}
                    alt={`Ilustración del procedimiento de ${procedure.shortTitle}`}
                    width={800}
                    height={600}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                ) : (
                  <div className="flex aspect-4/3 flex-col items-center justify-center p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-4xl">
                      {procedure.icon}
                    </div>
                    <p className="mt-4 text-sm font-medium text-navy-400">
                      Ilustración del procedimiento
                    </p>
                    <p className="mt-1 text-xs text-navy-300">
                      {procedure.shortTitle}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center font-display text-3xl text-navy-900">
            Beneficios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {procedure.benefits.map(benefit => (
              <div
                key={benefit.title}
                className="card-premium bg-white rounded-2xl p-6"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-navy-900 mt-3">
                  {benefit.title}
                </h3>
                <p className="text-navy-600 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl text-navy-900">
            ¿Quién es Candidato?
          </h2>

          <ul className="space-y-4 mt-8">
            {procedure.candidates.map(candidateDescription => (
              <li key={candidateDescription} className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-linear-to-br from-teal-50 to-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-lg text-navy-700">
                  {candidateDescription}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center font-display text-3xl text-navy-900">
            Proceso de Recuperación
          </h2>

          <div className="mt-10">
            {procedure.recovery.map((recoveryStep, stepIndex) => (
              <div key={recoveryStep.period} className="flex gap-6 relative">
                {/* Step number circle */}
                <div className="h-10 w-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {stepIndex + 1}
                </div>

                {/* Connecting line */}
                {stepIndex < procedure.recovery.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-teal-200" />
                )}

                {/* Content */}
                <div className="pb-8">
                  <p className="font-bold text-navy-900">
                    {recoveryStep.period}
                  </p>
                  <p className="text-navy-600 mt-1">
                    {recoveryStep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl text-navy-900">
            Preguntas Frecuentes sobre {procedure.shortTitle}
          </h2>

          <div className="mt-8">
            {procedure.faq.map(faqItem => (
              <div
                key={faqItem.question}
                className="border-b border-navy-100 py-6"
              >
                <h3 className="text-lg font-semibold text-navy-900">
                  {faqItem.question}
                </h3>
                <p className="text-navy-600 mt-2">{faqItem.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
