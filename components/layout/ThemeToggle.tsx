"use client";

import { useEffect, useSyncExternalStore } from "react";

const THEME_OPTIONS = [
  { value: "original", label: "Original" },
  { value: "teal-gold-luxe", label: "Luxe" },
  { value: "noir-gold", label: "Noir" },
] as const;

type ThemeValue = (typeof THEME_OPTIONS)[number]["value"];

/* ------------------------------------------------------------------ */
/*  External theme store (localStorage)                                */
/* ------------------------------------------------------------------ */

let themeChangeListeners: (() => void)[] = [];

function subscribeToThemeChanges(listener: () => void) {
  themeChangeListeners = [...themeChangeListeners, listener];
  return () => {
    themeChangeListeners = themeChangeListeners.filter((l) => l !== listener);
  };
}

function getThemeFromStorage(): ThemeValue {
  const stored = localStorage.getItem("theme") as ThemeValue | null;
  if (stored && THEME_OPTIONS.some((option) => option.value === stored)) {
    return stored;
  }
  return "original";
}

function getServerTheme(): ThemeValue {
  return "original";
}

function persistTheme(themeValue: ThemeValue) {
  if (themeValue === "original") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", themeValue);
  }
  for (const listener of themeChangeListeners) {
    listener();
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ThemeToggle() {
  const activeTheme = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeFromStorage,
    getServerTheme,
  );

  // Sync data-theme attribute to DOM whenever activeTheme changes
  useEffect(() => {
    if (activeTheme === "original") {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = activeTheme;
    }
  }, [activeTheme]);

  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      role="radiogroup"
      aria-label="Selector de tema visual"
    >
      <div className="flex items-center gap-1 rounded-full border border-navy-200/60 bg-white/80 p-1 shadow-lg backdrop-blur-xl">
        {THEME_OPTIONS.map((option) => {
          const isActive = activeTheme === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => persistTheme(option.value)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-navy-500 hover:text-navy-700"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
