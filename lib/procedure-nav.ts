export interface ProcedureNavItem {
  labelKey: string;
  href: string;
}

export interface ProcedureCategory {
  labelKey: string;
  href: string;
  children: ProcedureNavItem[];
}

export const PROCEDURE_CATEGORIES: ProcedureCategory[] = [
  {
    labelKey: "minimallyInvasiveSurgery",
    href: "/cirugia-minima-invasion",
    children: [
      { labelKey: "laparoscopicCholecystectomy", href: "/colecistectomia-laparoscopica" },
      { labelKey: "laparoscopicAppendectomy", href: "/apendicectomia-laparoscopica" },
      { labelKey: "inguinalHerniaRepair", href: "/cirugia-hernias-inguinales" },
      { labelKey: "umbilicalVentralHerniaRepair", href: "/cirugia-hernias-ventrales" },
      { labelKey: "antirefluxSurgery", href: "/funduplicatura-antirreflujo" },
      { labelKey: "achalasiaSurgery", href: "/cirugia-acalasia" },
      { labelKey: "singlePortSurgery", href: "/cirugia-puerto-unico" },
    ],
  },
  {
    labelKey: "bariatricMetabolicSurgery",
    href: "/cirugia-bariatrica-metabolica",
    children: [
      { labelKey: "intragastricBalloon", href: "/balon-intragastrico" },
      { labelKey: "gastricSleeve", href: "/manga-gastrica-merida" },
      { labelKey: "gastricBypass", href: "/bypass-gastrico-merida" },
      { labelKey: "intestinalBipartition", href: "/biparticion-transito-intestinal" },
      { labelKey: "sadiS", href: "/sadi-s" },
      { labelKey: "bariatricRevisionSurgery", href: "/cirugia-revision-bariatrica" },
      { labelKey: "bariatricConversionSurgery", href: "/cirugia-conversion-bariatrica" },
    ],
  },
];

export const STANDALONE_PROCEDURES: ProcedureNavItem[] = [
  { labelKey: "diastasisRectiSurgery", href: "/cirugia-diastasis-rectos" },
  { labelKey: "emergencySurgery", href: "/cirugias-urgencias" },
];

/** Returns the parent category of a child href, or undefined if not found */
export function getParentCategory(childHref: string): ProcedureCategory | undefined {
  return PROCEDURE_CATEGORIES.find((category) =>
    category.children.some((child) => child.href === childHref)
  );
}

/**
 * Returns sibling procedures for the given href (same parent branch, excluding self).
 * - Child procedures → siblings in same category
 * - Parent/category pages → all children of that category (excluding self)
 * - Standalone procedures → all procedures across both categories (excluding self)
 */
export function getSiblingProcedures(currentHref: string): ProcedureNavItem[] {
  // Check if it's a parent/category page
  const asCategory = PROCEDURE_CATEGORIES.find((c) => c.href === currentHref);
  if (asCategory) {
    return asCategory.children;
  }

  // Check if it's a child of a category
  const parentCategory = getParentCategory(currentHref);
  if (parentCategory) {
    return parentCategory.children.filter((child) => child.href !== currentHref);
  }

  // Standalone procedure — fallback to all procedures across both categories
  return getAllProcedureLinks().filter((item) => item.href !== currentHref);
}

/** Flat list of all procedures: categories + their children + standalones */
export function getAllProcedureLinks(): ProcedureNavItem[] {
  const allItems: ProcedureNavItem[] = [];
  for (const category of PROCEDURE_CATEGORIES) {
    allItems.push({ labelKey: category.labelKey, href: category.href });
    allItems.push(...category.children);
  }
  allItems.push(...STANDALONE_PROCEDURES);
  return allItems;
}
