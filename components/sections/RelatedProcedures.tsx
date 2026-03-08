import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const PROCEDURE_LINKS: { labelKey: string; href: string }[] = [
  { labelKey: "gastricSleeve", href: "/manga-gastrica-merida" },
  { labelKey: "gastricBypass", href: "/bypass-gastrico-merida" },
  { labelKey: "intragastricBalloon", href: "/balon-intragastrico" },
  { labelKey: "minimallyInvasiveSurgery", href: "/cirugia-minima-invasion" },
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
  );

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
