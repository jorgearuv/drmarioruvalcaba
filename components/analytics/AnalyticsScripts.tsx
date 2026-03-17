"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_STORAGE_KEY = "cookie_consent";

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
}

function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return { analytics: false, marketing: false };
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return { analytics: false, marketing: false };
    const parsed = JSON.parse(stored) as Partial<ConsentState>;
    return {
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return { analytics: false, marketing: false };
  }
}

export default function AnalyticsScripts() {
  const [consent, setConsent] = useState<ConsentState>({ analytics: false, marketing: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());
    setMounted(true);

    const handleConsentChange = () => setConsent(getStoredConsent());
    window.addEventListener("cookie_consent_changed", handleConsentChange);
    return () => window.removeEventListener("cookie_consent_changed", handleConsentChange);
  }, []);

  if (!mounted) return null;

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gadsId = process.env.NEXT_PUBLIC_GADS_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {consent.analytics && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
                ${gadsId ? `gtag('config', '${gadsId}');` : ""}
              `,
            }}
          />
        </>
      )}
      {consent.marketing && pixelId && (
        <Script
          id="meta-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`,
          }}
        />
      )}
    </>
  );
}
