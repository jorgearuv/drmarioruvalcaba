import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { DOCTOR_INFO } from "@/lib/constants";
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  BeakerIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

interface Credential {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  key: string;
}

const CREDENTIALS: Credential[] = [
  { icon: AcademicCapIcon, key: "medicalDegree" },
  { icon: BuildingOffice2Icon, key: "generalSurgery" },
  { icon: BeakerIcon, key: "endoscopicSurgery" },
  { icon: GlobeAmericasIcon, key: "bariatricSurgery" },
  { icon: ShieldCheckIcon, key: "boardCertified" },
  { icon: BuildingLibraryIcon, key: "ifsoMember" },
];

const TIMELINE_KEYS = [
  "degree",
  "specialty",
  "endoscopicBariatric",
  "bariatricMetabolic",
] as const;

export default async function DoctorBio() {
  const t = await getTranslations("about");

  return (
    <>
      {/* Hero Area */}
      <section>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Left: Photo */}
          <div className="card-glow aspect-3/4 rounded-2xl overflow-hidden border border-navy-100 max-w-md mx-auto w-full relative">
            <Image
              src="/images/doctor/profile-web.webp"
              alt={t("hero.imageAlt")}
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
              {t("hero.badge")}
            </span>

            <h1 className="text-4xl md:text-5xl font-display text-navy-900 mt-4">
              {t("hero.name")}
            </h1>

            <h2 className="text-xl font-display text-teal-600 mt-2">
              {t("hero.specialty")}
            </h2>

            <div className="text-lg text-navy-600 mt-6 space-y-4">
              <p>{t("hero.bio1")}</p>
              <p>{t("hero.bio2")}</p>
            </div>

            <div className="text-sm text-navy-500 mt-4 space-y-1">
              <p>
                {t("hero.cedulaLabel")}: {DOCTOR_INFO.cedula}
              </p>
              <p>
                {t("hero.cedulaEspecialidadLabel")}: {DOCTOR_INFO.cedulaEspecialidad}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center font-display text-3xl text-navy-900">
            {t("credentials.heading")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {CREDENTIALS.map((credential) => (
              <div
                key={credential.key}
                className="card-premium bg-white rounded-2xl p-6"
              >
                <credential.icon
                  className="h-8 w-8 text-teal-600"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-navy-900 mt-3">
                  {t(`credentials.items.${credential.key}.title`)}
                </h3>
                <p className="text-navy-600 mt-2">
                  {t(`credentials.items.${credential.key}.institution`)}
                </p>
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
              {t("timeline.overline")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl heading-gradient mt-3">
              {t("timeline.heading")}
            </h2>
            <div className="section-divider mx-auto mt-5" />
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block mt-16">
            <div className="relative grid grid-cols-4 grid-rows-[1fr_auto_1fr]">
              {/* Horizontal gradient line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-linear-to-r from-teal-600 to-gold-500 -translate-y-1/2 pointer-events-none" />

              {TIMELINE_KEYS.map((timelineKey, itemIndex) => {
                const isAbove = itemIndex % 2 === 0;
                return (
                  <div
                    key={timelineKey}
                    className="col-start-auto row-span-3 grid grid-rows-subgrid items-end text-center"
                  >
                    {/* Row 1: above content */}
                    <div className={`pb-6 ${isAbove ? "" : "invisible"}`}>
                      <p className="text-2xl font-display heading-gold">
                        {t(`timeline.items.${timelineKey}.year`)}
                      </p>
                      <p className="text-sm text-navy-600 mt-2 max-w-45 mx-auto">
                        {t(`timeline.items.${timelineKey}.description`)}
                      </p>
                    </div>

                    {/* Row 2: dot on line */}
                    <div className="flex justify-center py-2">
                      <div className="w-3 h-3 rounded-full bg-teal-600 ring-4 ring-teal-100 relative z-10" />
                    </div>

                    {/* Row 3: below content */}
                    <div
                      className={`pt-6 self-start ${isAbove ? "invisible" : ""}`}
                    >
                      <p className="text-2xl font-display heading-gold">
                        {t(`timeline.items.${timelineKey}.year`)}
                      </p>
                      <p className="text-sm text-navy-600 mt-2 max-w-45 mx-auto">
                        {t(`timeline.items.${timelineKey}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden mt-10 space-y-4">
            {TIMELINE_KEYS.map((timelineKey) => (
              <div
                key={timelineKey}
                className="card-premium bg-white rounded-2xl p-6 border-l-2 border-teal-600"
              >
                <p className="text-xl font-display heading-gold">
                  {t(`timeline.items.${timelineKey}.year`)}
                </p>
                <p className="text-navy-600 mt-2">
                  {t(`timeline.items.${timelineKey}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
