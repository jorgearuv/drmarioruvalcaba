"use client";

import Accordion from "@/components/ui/Accordion";
import { generateFAQPageJsonLd } from "@/lib/seo";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
  showSchema?: boolean;
}

export default function FAQAccordion({
  items,
  showSchema = true,
}: FAQAccordionProps) {
  const faqJsonLd = generateFAQPageJsonLd(items);

  return (
    <div>
      <Accordion items={items} />
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </div>
  );
}
