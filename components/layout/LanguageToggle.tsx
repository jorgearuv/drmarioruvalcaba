"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { motion, useReducedMotion } from "framer-motion";

const LOCALES: { value: Locale; label: string }[] = [
  { value: "es", label: "ES" },
  { value: "en", label: "EN" },
];

const SLIDE_TRANSITION = {
  type: "tween" as const,
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};

const INSTANT_TRANSITION = { duration: 0 };

const SEGMENT_WIDTH = 42;

export default function LanguageToggle() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const activeIndex = LOCALES.findIndex(({ value }) => value === currentLocale);

  const handleSwitch = (locale: Locale) => {
    if (locale === currentLocale) return;
    router.replace(
      // @ts-expect-error — pathname is a valid route at runtime
      { pathname },
      { locale },
    );
  };

  const ariaLabel =
    currentLocale === "es" ? "Seleccionar idioma" : "Select language";

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="group relative inline-flex h-9 items-center rounded-full border border-navy-200/40 bg-navy-100/50 p-0.5 transition-all duration-200 hover:border-navy-200/70 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2"
    >
      {/* Sliding indicator — always rendered, positioned via animate */}
      <motion.div
        className="absolute top-0.5 left-0.5 h-8 w-[42px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, white 0%, var(--color-navy-50) 100%)",
          boxShadow:
            "0 1px 3px rgba(12,20,38,0.08), 0 0 0 1px rgba(1,158,143,0.12)",
        }}
        animate={{ x: activeIndex * SEGMENT_WIDTH }}
        transition={
          prefersReducedMotion ? INSTANT_TRANSITION : SLIDE_TRANSITION
        }
      />

      {LOCALES.map(({ value, label }) => {
        const isActive = value === currentLocale;

        return (
          <motion.button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => handleSwitch(value)}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
            className="relative z-10 flex h-8 w-[42px] cursor-pointer items-center justify-center rounded-full text-[11px] font-semibold uppercase tracking-widest outline-none transition-colors duration-150"
          >
            <motion.span
              className={
                isActive
                  ? "text-navy-900"
                  : "text-navy-400 transition-colors duration-150 group-hover:text-navy-500 hover:!text-teal-600"
              }
              animate={{ opacity: isActive ? 1 : 0.6 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.15 }
                  : {
                      duration: isActive ? 0.2 : 0.15,
                      delay: isActive ? 0.1 : 0,
                    }
              }
            >
              {label}
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
}
