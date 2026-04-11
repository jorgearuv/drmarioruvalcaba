import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const PROCEDURE_LINKS: { labelKey: string; href: string }[] = [
  { labelKey: "bariatricMetabolicSurgery", href: "/cirugia-bariatrica-metabolica" },
  { labelKey: "gastricSleeve", href: "/manga-gastrica-merida" },
  { labelKey: "gastricBypass", href: "/bypass-gastrico-merida" },
  { labelKey: "intragastricBalloon", href: "/balon-intragastrico" },
  { labelKey: "intestinalBipartition", href: "/biparticion-transito-intestinal" },
  { labelKey: "sadiS", href: "/sadi-s" },
  { labelKey: "bariatricRevisionSurgery", href: "/cirugia-revision-bariatrica" },
  { labelKey: "bariatricConversionSurgery", href: "/cirugia-conversion-bariatrica" },
  { labelKey: "minimallyInvasiveSurgery", href: "/cirugia-minima-invasion" },
  { labelKey: "laparoscopicCholecystectomy", href: "/colecistectomia-laparoscopica" },
  { labelKey: "laparoscopicAppendectomy", href: "/apendicectomia-laparoscopica" },
  { labelKey: "antirefluxSurgery", href: "/funduplicatura-antirreflujo" },
  { labelKey: "achalasiaSurgery", href: "/cirugia-acalasia" },
  { labelKey: "inguinalHerniaRepair", href: "/cirugia-hernias-inguinales" },
  { labelKey: "umbilicalVentralHerniaRepair", href: "/cirugia-hernias-ventrales" },
  { labelKey: "singlePortSurgery", href: "/cirugia-puerto-unico" },
  { labelKey: "diastasisRectiSurgery", href: "/cirugia-diastasis-rectos" },
  { labelKey: "emergencySurgery", href: "/cirugias-urgencias" },
];

interface RelatedProceduresProps {
  /** The href of the current procedure page, used to exclude it from the list */
  currentHref: string;
}

export default async function RelatedProcedures({ currentHref }: RelatedProceduresProps) {
  const t = await getTranslations("procedures.shared");
  const tNav = await getTranslations("common.nav");

  const relatedProcedureLinks = PROCEDURE_LINKS.filter(
    (procedure) => procedure.href !== currentHref
  ).slice(0, 6);

  if (relatedProcedureLinks.length === 0) return null;

  return (
    <section className="py-16 bg-navy-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-10">
          {t("otherProcedures")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProcedureLinks.map((procedure) => (
            <Link
              key={procedure.href}
              href={procedure.href as any}
              className="group block bg-white rounded-2xl border border-navy-100 p-6 shadow-sm hover:shadow-md hover:border-teal-400 transition-all duration-200"
            >
              <span className="text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
                {tNav(procedure.labelKey)}
              </span>
              <span className="block mt-2 text-navy-500 text-sm">
                {t("viewProcedure")} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
