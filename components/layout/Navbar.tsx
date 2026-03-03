"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import type { NavLink } from "@/types";

function NavItem({ link }: { link: NavLink }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasChildren = link.children && link.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className="text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:text-teal-600"
      >
        {link.label}
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
        className="flex items-center gap-1 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:text-teal-600"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {link.label}
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
                href={child.href}
                className="block rounded-xl px-4 py-3 text-sm text-navy-700 transition-all hover:bg-teal-50/50 hover:text-teal-600"
              >
                {child.label}
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

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-navy-200/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-navy-900">
            {/* Gradient border ring */}
            <span
              className="absolute inset-0 rounded-full p-[2px]"
              style={{
                background: "var(--logo-ring-gradient)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            MR
          </div>
          <div>
            <p className="font-display text-sm font-semibold leading-tight text-navy-900">
              Dr. Mario Ruvalcaba
            </p>
            <p className="text-[10px] uppercase tracking-widest text-navy-400">
              Cirujano Bariatra
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-primary-600 to-primary-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:shadow-xl hover:shadow-primary-600/30 hover:brightness-110"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar Cita
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-navy-50 lg:hidden"
          aria-label="Menú de navegación"
        >
          <svg className="h-6 w-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
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
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:bg-teal-50/50 hover:text-teal-600"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <div key={link.href}>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === link.label ? null : link.label
                        )
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[13px] font-medium uppercase tracking-wide text-navy-600 transition-all hover:bg-teal-50/50 hover:text-teal-600"
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${mobileDropdownOpen === link.label ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen === link.label && (
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
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block rounded-xl py-2 pl-8 pr-4 text-sm text-navy-500 transition-all hover:bg-teal-50/50 hover:pl-9 hover:text-teal-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all hover:shadow-xl hover:shadow-primary-600/30"
              >
                Agendar Cita por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
