"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSchedulingUrl, isCalendarActive } from "@/lib/scheduling";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { trackScheduleClick } from "@/lib/analytics";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";

interface NavLinkItem {
  labelKey: string;
  href?: string;
  children?: NavLinkItem[];
}

const NAV_LINKS: NavLinkItem[] = [
  { labelKey: "home", href: "/" },
  {
    labelKey: "procedures",
    children: [
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
    ],
  },
  { labelKey: "aboutDoctor", href: "/sobre-el-doctor" },
  { labelKey: "blog", href: "/blog" },
  { labelKey: "faq", href: "/preguntas-frecuentes" },
  { labelKey: "contact", href: "/contacto" },
];

// Renders a Link if href exists, otherwise a disabled span
function NavMenuEntry({
  item,
  t,
  onClick,
  className,
}: {
  item: NavLinkItem;
  t: (key: string) => string;
  onClick?: () => void;
  className: string;
}) {
  if (item.href) {
    return (
      // @ts-expect-error — href is a valid route
      <Link href={item.href} onClick={onClick} className={className}>
        {t(item.labelKey)}
      </Link>
    );
  }
  return (
    <span className={`${className} cursor-default opacity-50`}>
      {t(item.labelKey)}
    </span>
  );
}

// L2 category item inside the Procedimientos dropdown — shows a flyout submenu on hover
function CategoryItem({
  item,
  t,
}: {
  item: NavLinkItem;
  t: (key: string) => string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center justify-between gap-1 rounded-xl px-4 py-3 transition-all hover:bg-teal-50">
        <NavMenuEntry
          item={item}
          t={t}
          className="flex-1 text-sm font-medium text-navy-700 transition-colors hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
        />
        {hasChildren && (
          <svg
            className={`h-3.5 w-3.5 flex-shrink-0 text-navy-400 transition-colors ${isOpen ? "text-teal-500" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.15 }}
            // -ml-1 overlaps 4px to bridge the gap and prevent accidental close
            className="glass-nav-dropdown absolute left-full top-0 z-50 -ml-1 w-72 rounded-2xl p-2"
          >
            {item.children!.map((child) => (
              <NavMenuEntry
                key={child.labelKey}
                item={child}
                t={t}
                className="block rounded-xl px-4 py-2.5 text-sm text-navy-700 transition-all hover:bg-teal-50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavItem({ link, t }: { link: NavLinkItem; t: (key: string) => string }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasChildren = link.children && link.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        // @ts-expect-error — href is a valid route
        href={link.href!}
        className="text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-1 rounded-sm"
      >
        {t(link.labelKey)}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-1 rounded-sm"
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {t(link.labelKey)}
        <svg
          className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-nav-dropdown absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl p-2"
          >
            {link.children!.map((child) => (
              <CategoryItem key={child.labelKey} item={child} t={t} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Tracks which mobile accordion items are open by labelKey
  const [mobileOpenItems, setMobileOpenItems] = useState<Set<string>>(new Set());
  const t = useTranslations("common.nav");
  const tCta = useTranslations("common.cta");
  const tA11y = useTranslations("common.accessibility");
  const locale = useLocale() as Locale;
  const schedulingUrl = getSchedulingUrl(locale);
  const calendarActive = isCalendarActive();

  function toggleMobileItem(key: string) {
    setMobileOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    setMobileOpenItems(new Set());
  }

  function renderMobileLinks(links: NavLinkItem[], depth = 0) {
    return links.map((link) => {
      const hasChildren = link.children && link.children.length > 0;
      const isOpen = mobileOpenItems.has(link.labelKey);
      const paddingLeft = depth === 0 ? "px-4" : depth === 1 ? "pl-8 pr-4" : "pl-12 pr-4";

      if (!hasChildren) {
        return (
          <NavMenuEntry
            key={link.labelKey}
            item={link}
            t={t}
            onClick={link.href ? closeMobileMenu : undefined}
            className={`block rounded-xl ${paddingLeft} py-3 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:bg-teal-50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset`}
          />
        );
      }

      return (
        <div key={link.labelKey}>
          <div className="flex items-center">
            {/* If category has its own href, show a link icon to navigate */}
            {link.href && (
              <Link
                // @ts-expect-error — href is a valid route
                href={link.href}
                onClick={closeMobileMenu}
                className={`flex-1 rounded-xl ${paddingLeft} py-3 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:bg-teal-50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset`}
              >
                {t(link.labelKey)}
              </Link>
            )}
            <button
              onClick={() => toggleMobileItem(link.labelKey)}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className={`${link.href ? "px-3 py-3" : `flex w-full items-center justify-between rounded-xl ${paddingLeft} py-3`} text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:bg-teal-50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset`}
            >
              {!link.href && t(link.labelKey)}
              <svg
                className={`h-4 w-4 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {renderMobileLinks(link.children!, depth + 1)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });
  }

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-navy-200/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label={tA11y("goToHome")}>
          <div className="relative h-11 w-9">
            <Image
              src="/images/logo.svg"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <p className="font-display text-sm font-semibold leading-tight text-navy-900">
              Dr. Mario Ruvalcaba
            </p>
            <p className="text-[10px] uppercase tracking-widest text-navy-400">
              {locale === "en" ? "Bariatric Surgeon" : "Cirujano Bariátra"}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.labelKey} link={link} t={t} />
          ))}
          <LanguageToggle />
          <a
            href={schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackScheduleClick("navbar", calendarActive)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-primary-600 to-primary-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:shadow-xl hover:shadow-primary-600/30 hover:brightness-110"
          >
            {calendarActive ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ) : (
              <WhatsAppIcon className="h-4 w-4" />
            )}
            {tCta("scheduleAppointment")}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-1"
            aria-label={tA11y("navigationMenu")}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-nav-mobile overflow-hidden border-t border-navy-200/50 lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {renderMobileLinks(NAV_LINKS)}
              <a
                href={schedulingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackScheduleClick("navbar", calendarActive)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:shadow-xl hover:shadow-primary-600/30"
              >
                {calendarActive ? tCta("scheduleAppointment") : tCta("scheduleAppointmentWhatsApp")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
