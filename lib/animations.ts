import type { Variants, Transition } from "framer-motion";

// ---------------------------------------------------------------------------
// Fade variants
// ---------------------------------------------------------------------------

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ---------------------------------------------------------------------------
// Scale variant
// ---------------------------------------------------------------------------

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ---------------------------------------------------------------------------
// Section reveal (fadeUp style with viewport trigger settings exported separately)
// ---------------------------------------------------------------------------

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const sectionRevealViewport = { once: true, margin: "-100px" as const };

// ---------------------------------------------------------------------------
// Stagger container + stagger item
// ---------------------------------------------------------------------------

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ---------------------------------------------------------------------------
// Card hover
// ---------------------------------------------------------------------------

export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// ---------------------------------------------------------------------------
// Transition helpers
// ---------------------------------------------------------------------------

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const CUBIC_EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: CUBIC_EASE_OUT,
};

// ---------------------------------------------------------------------------
// Viewport config
// ---------------------------------------------------------------------------

export const defaultViewport = { once: true, margin: "-100px" as const };
