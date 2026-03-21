"use client";

import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { trackEvent, trackConversion } from "@/lib/analytics";

interface DoctorBioCTAProps {
  schedulingUrl: string;
  whatsAppUrl: string;
  calendarActive: boolean;
  scheduleLabel: string;
  askLabel: string;
  opensNewTabLabel: string;
}

export default function DoctorBioCTA({
  schedulingUrl,
  whatsAppUrl,
  calendarActive,
  scheduleLabel,
  askLabel,
  opensNewTabLabel,
}: DoctorBioCTAProps) {
  const handleScheduleClick = () => {
    calendarActive
      ? trackEvent({ name: "calendar_click", params: { location: "doctor_bio" } })
      : trackEvent({ name: "whatsapp_click", params: { location: "doctor_bio" } });
    trackConversion("schedule");
  };

  const handleAskClick = () =>
    trackEvent({ name: "whatsapp_click", params: { location: "doctor_bio" } });

  const CalendarIcon = () => (
    <svg
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <a
        href={schedulingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleScheduleClick}
        aria-label={`${scheduleLabel} — ${opensNewTabLabel}`}
        className="flex items-center justify-center gap-2.5 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition-all duration-200 hover:bg-teal-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        {calendarActive ? <CalendarIcon /> : <WhatsAppIcon className="h-5 w-5 flex-shrink-0" />}
        {scheduleLabel}
      </a>

      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleAskClick}
        aria-label={`${askLabel} — ${opensNewTabLabel}`}
        className="flex items-center justify-center gap-2.5 rounded-xl border border-navy-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy-700 shadow-sm transition-all duration-200 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        <WhatsAppIcon className="h-5 w-5 flex-shrink-0" />
        {askLabel}
      </a>
    </div>
  );
}
