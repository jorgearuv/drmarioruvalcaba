"use client";

import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppContactCardProps {
  href: string;
  phoneNumber: string;
  noteText: string;
  titleText: string;
}

export default function WhatsAppContactCard({ href, phoneNumber, noteText, titleText }: WhatsAppContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("contact_page")}
      className="card-glow flex items-start gap-4 rounded-2xl border border-green-200 bg-green-50 p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-500 text-white">
        <WhatsAppIcon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-display font-bold text-green-800">{titleText}</h3>
        <p className="mt-1 text-sm text-green-700">{phoneNumber}</p>
        <p className="mt-1 text-xs text-green-600">{noteText}</p>
      </div>
    </a>
  );
}
