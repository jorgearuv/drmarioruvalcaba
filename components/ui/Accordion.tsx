"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-navy-100/60 last:border-b-0">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-6 text-left transition-all"
        aria-expanded={isOpen}
      >
        <span className={`pr-6 font-display text-lg transition-colors ${isOpen ? "text-teal-700" : "text-navy-900 group-hover:text-teal-600"}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-teal-200 bg-teal-50 text-teal-600"
              : "border-navy-200/60 text-navy-400 group-hover:border-teal-300 group-hover:text-teal-500"
          }`}
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-14 leading-relaxed text-navy-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setOpenIndices((previousIndices) => {
      const nextIndices = new Set(allowMultiple ? previousIndices : []);
      if (previousIndices.has(index)) {
        nextIndices.delete(index);
      } else {
        nextIndices.add(index);
      }
      return nextIndices;
    });
  };

  return (
    <div className={`card-premium p-3 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndices.has(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
