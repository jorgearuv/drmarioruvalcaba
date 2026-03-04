"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="glass-dark whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-white"
              >
                ¿Necesitas ayuda?
              </motion.span>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl shadow-green-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
