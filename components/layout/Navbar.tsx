"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSchedulingUrl, isCalendarActive } from "@/lib/scheduling";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { trackEvent } from "@/lib/analytics";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";

interface NavLinkItem {
  labelKey: string;
  href: string;
  children?: NavLinkItem[];
}

const NAV_LINKS: NavLinkItem[] = [
  { labelKey: "home", href: "/" },
  {
    labelKey: "procedures",
    href: "/procedimientos",
    children: [
      { labelKey: "gastricSleeve", href: "/manga-gastrica-merida" },
      { labelKey: "gastricBypass", href: "/bypass-gastrico-merida" },
      { labelKey: "intragastricBalloon", href: "/balon-intragastrico" },
      { labelKey: "minimallyInvasiveSurgery", href: "/cirugia-minima-invasion" },
    ],
  },
  { labelKey: "aboutDoctor", href: "/sobre-el-doctor" },
  { labelKey: "blog", href: "/blog" },
  { labelKey: "faq", href: "/preguntas-frecuentes" },
  { labelKey: "contact", href: "/contacto" },
];

function NavItem({ link, t }: { link: NavLinkItem; t: (key: string) => string }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasChildren = link.children && link.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        // @ts-expect-error — href is a valid route
        href={link.href}
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
            className="glass-nav-dropdown absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl p-2"
          >
            {link.children!.map((child) => (
              <Link
                key={child.href}
                // @ts-expect-error — href is a valid route
                href={child.href}
                className="block rounded-xl px-4 py-3 text-sm text-navy-700 transition-all hover:bg-teal-50/50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
              >
                {t(child.labelKey)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const t = useTranslations("common.nav");
  const tCta = useTranslations("common.cta");
  const tA11y = useTranslations("common.accessibility");
  const locale = useLocale() as Locale;
  const schedulingUrl = getSchedulingUrl(locale);
  const calendarActive = isCalendarActive();

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-navy-200/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label={tA11y("goToHome")}>
          <Image
            src="/images/logo.svg"
            alt=""
            width={36}
            height={44}
            className="h-11 w-auto"
            priority
          />
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
            <NavItem key={link.href} link={link} t={t} />
          ))}
          <LanguageToggle />
          <a
            href={schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              calendarActive
                ? trackEvent({ name: "calendar_click", params: { location: "navbar" } })
                : trackEvent({ name: "whatsapp_click", params: { location: "navbar" } })
            }
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
              {NAV_LINKS.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                if (!hasChildren) {
                  return (
                    <Link
                      key={link.href}
                      // @ts-expect-error — href is a valid route
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:bg-teal-50/50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
                    >
                      {t(link.labelKey)}
                    </Link>
                  );
                }
                return (
                  <div key={link.href}>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === link.labelKey ? null : link.labelKey
                        )
                      }
                      aria-expanded={mobileDropdownOpen === link.labelKey}
                      aria-haspopup="true"
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:bg-teal-50/50 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
                    >
                      {t(link.labelKey)}
                      <svg
                        className={`h-4 w-4 transition-transform ${mobileDropdownOpen === link.labelKey ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen === link.labelKey && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {link.children!.map((child) => (
                            <Link
                              key={child.href}
                              // @ts-expect-error — href is a valid route
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block rounded-xl py-2 pl-8 pr-4 text-sm text-navy-500 transition-all hover:bg-teal-50/50 hover:pl-9 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-inset"
                            >
                              {t(child.labelKey)}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <a
                href={schedulingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  calendarActive
                    ? trackEvent({ name: "calendar_click", params: { location: "navbar" } })
                    : trackEvent({ name: "whatsapp_click", params: { location: "navbar" } })
                }
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
