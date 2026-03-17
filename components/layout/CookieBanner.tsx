"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Locale } from "@/i18n/routing";

const CONSENT_STORAGE_KEY = "cookie_consent";
const CONSENT_DURATION_MS = 12 * 30 * 24 * 60 * 60 * 1000; // 12 months

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as ConsentState;
    if (Date.now() - parsed.timestamp > CONSENT_DURATION_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean): void {
  const consentState: ConsentState = { analytics, marketing, timestamp: Date.now() };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentState));
  window.dispatchEvent(new Event("cookie_consent_changed"));
}

const COPY = {
  es: {
    heading: "Respetamos tu privacidad",
    message: "Usamos cookies para analizar el tráfico y personalizar anuncios.",
    learnMore: "Política de Cookies",
    acceptAll: "Aceptar todo",
    rejectNonEssential: "Solo esenciales",
    customize: "Personalizar",
    customizeTitle: "Preferencias de privacidad",
    essentialLabel: "Esenciales",
    analyticsLabel: "Analíticas",
    marketingLabel: "Publicidad",
    savePreferences: "Guardar preferencias",
    essentialAlwaysOn: "Siempre activas",
    back: "Volver",
  },
  en: {
    heading: "We respect your privacy",
    message: "We use cookies to analyze traffic and personalize ads.",
    learnMore: "Cookie Policy",
    acceptAll: "Accept all",
    rejectNonEssential: "Essential only",
    customize: "Customize",
    customizeTitle: "Privacy preferences",
    essentialLabel: "Essentials",
    analyticsLabel: "Analytics",
    marketingLabel: "Advertising",
    savePreferences: "Save preferences",
    essentialAlwaysOn: "Always on",
    back: "Back",
  },
} as const;

function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-teal-400"
    >
      <path
        d="M8 1.5L2 4v4c0 3.3 2.5 6.4 6 7 3.5-.6 6-3.7 6-7V4L8 1.5z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8l1.75 1.75L10.5 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel: string;
}

function ToggleSwitch({ checked, onChange, ariaLabel }: ToggleSwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 ${
        checked ? "bg-teal-600" : "bg-navy-700"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);
  const locale = useLocale() as Locale;
  const copy = COPY[locale] ?? COPY.es;
  const shouldReduceMotion = useReducedMotion();
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const bodyTextId = "cookie-banner-body";

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) setIsVisible(true);
  }, []);

  // Auto-focus first button when banner appears
  useEffect(() => {
    if (isVisible && firstButtonRef.current) {
      const timer = setTimeout(
        () => firstButtonRef.current?.focus(),
        shouldReduceMotion ? 0 : 1600
      );
      return () => clearTimeout(timer);
    }
  }, [isVisible, shouldReduceMotion]);

  const handleAcceptAll = useCallback(() => {
    saveConsent(true, true);
    setIsVisible(false);
  }, []);

  const handleRejectNonEssential = useCallback(() => {
    saveConsent(false, false);
    setIsVisible(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    saveConsent(analyticsEnabled, marketingEnabled);
    setIsVisible(false);
  }, [analyticsEnabled, marketingEnabled]);

  // Escape key — reject non-essential and dismiss
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleRejectNonEssential();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, handleRejectNonEssential]);

  const entranceTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 1.5 };

  const exitTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const };

  const contentTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label={copy.heading}
          aria-describedby={bodyTextId}
          layout
          initial={
            shouldReduceMotion ? {} : { opacity: 0, y: 24, scale: 0.98 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? {} : { opacity: 0, y: 16, scale: 0.98 }}
          transition={isVisible ? entranceTransition : exitTransition}
          className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-full sm:max-w-[420px]"
        >
          {/* Card surface */}
          <div className="noise-overlay relative overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/40 [background:rgba(10,16,30,0.92)] [backdrop-filter:blur(20px)_saturate(180%)] [-webkit-backdrop-filter:blur(20px)_saturate(180%)]">
            {/* Gold accent line at top */}
            <div className="h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

            <div className="p-6">
              <AnimatePresence mode="wait">
                {!showCustomize ? (
                  <motion.div
                    key="default"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? {} : { opacity: 0, y: -6 }}
                    transition={contentTransition}
                  >
                    {/* Heading row */}
                    <div className="flex items-center gap-2">
                      <ShieldIcon />
                      <h2 className="font-display text-base font-semibold text-white">
                        {copy.heading}
                      </h2>
                    </div>

                    {/* Body */}
                    <p
                      id={bodyTextId}
                      className="mt-2 text-sm leading-relaxed text-navy-300"
                    >
                      {copy.message}{" "}
                      <Link
                        href="/politica-de-cookies"
                        className="text-teal-400 underline underline-offset-2 hover:text-teal-300 transition-colors duration-200"
                      >
                        {copy.learnMore}
                      </Link>
                    </p>

                    {/* Secondary buttons */}
                    <div className="mt-5 flex gap-2">
                      <button
                        ref={firstButtonRef}
                        onClick={() => setShowCustomize(true)}
                        className="flex-1 rounded-full border border-navy-700 px-4 py-2.5 text-sm font-medium text-navy-400 transition-all duration-200 hover:border-navy-500 hover:bg-white/[0.03] hover:text-navy-300"
                      >
                        {copy.customize}
                      </button>
                      <button
                        onClick={handleRejectNonEssential}
                        className="flex-1 rounded-full border border-navy-700 px-4 py-2.5 text-sm font-medium text-navy-400 transition-all duration-200 hover:border-navy-500 hover:bg-white/[0.03] hover:text-navy-300"
                      >
                        {copy.rejectNonEssential}
                      </button>
                    </div>

                    {/* Primary CTA */}
                    <button
                      onClick={handleAcceptAll}
                      className="mt-3 w-full rounded-full bg-gradient-to-b from-primary-600 to-primary-700 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-primary-600/30"
                    >
                      {copy.acceptAll}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="customize"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? {} : { opacity: 0, y: -6 }}
                    transition={contentTransition}
                  >
                    {/* Heading */}
                    <h2 className="font-display text-base font-semibold text-white">
                      {copy.customizeTitle}
                    </h2>

                    {/* Toggle group */}
                    <div className="mt-4 overflow-hidden rounded-xl border border-navy-800/50 divide-y divide-navy-800/50">
                      {/* Essentials — always on */}
                      <div className="flex items-center justify-between px-4 py-3.5">
                        <span className="text-sm text-navy-300">
                          {copy.essentialLabel}
                        </span>
                        <span className="text-xs font-medium text-teal-400/80">
                          {copy.essentialAlwaysOn}
                        </span>
                      </div>

                      {/* Analytics */}
                      <label className="flex cursor-pointer items-center justify-between px-4 py-3.5">
                        <span className="text-sm text-navy-300">
                          {copy.analyticsLabel}
                        </span>
                        <ToggleSwitch
                          checked={analyticsEnabled}
                          onChange={() => setAnalyticsEnabled((prev) => !prev)}
                          ariaLabel={`${copy.analyticsLabel}: ${analyticsEnabled ? copy.essentialAlwaysOn : "desactivado"}`}
                        />
                      </label>

                      {/* Marketing */}
                      <label className="flex cursor-pointer items-center justify-between px-4 py-3.5">
                        <span className="text-sm text-navy-300">
                          {copy.marketingLabel}
                        </span>
                        <ToggleSwitch
                          checked={marketingEnabled}
                          onChange={() => setMarketingEnabled((prev) => !prev)}
                          ariaLabel={`${copy.marketingLabel}: ${marketingEnabled ? copy.essentialAlwaysOn : "desactivado"}`}
                        />
                      </label>
                    </div>

                    {/* Action row */}
                    <div className="mt-5 flex gap-2">
                      <button
                        ref={firstButtonRef}
                        onClick={() => setShowCustomize(false)}
                        className="flex-1 rounded-full border border-navy-700 px-4 py-2.5 text-sm font-medium text-navy-400 transition-all duration-200 hover:border-navy-500 hover:bg-white/[0.03] hover:text-navy-300"
                      >
                        ← {copy.back}
                      </button>
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 rounded-full bg-gradient-to-b from-primary-600 to-primary-700 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-primary-600/30"
                      >
                        {copy.savePreferences}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
