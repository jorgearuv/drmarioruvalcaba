"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/analytics";

export function ContactPageConversion() {
  useEffect(() => {
    trackConversion("contact_page_view");
  }, []);
  return null;
}
