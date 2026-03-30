'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, Suspense } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackLeadFormConversion() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11010865100/VHzTCM3xmPIaEMzvsYIp',
    });
    console.log('Lead form conversion fired');
  }
}

function AdTrackingInner() {
  const pathname = usePathname();

  useEffect(() => {
    const handlePhoneClick = () => {
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11010865100/isqhCO7_xJIcEMzvsYIp',
          value: 1.0,
          currency: 'USD',
        });
        console.log('Phone conversion fired');
      }
    };

    const attachPhoneListeners = () => {
      const links = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="tel:"]:not([data-phone-tracked])'
      );
      links.forEach((link) => {
        link.setAttribute('data-phone-tracked', 'true');
        link.addEventListener('click', handlePhoneClick);
      });
    };

    // Small delay so the DOM settles after Next.js client-side navigation
    const timer = setTimeout(attachPhoneListeners, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11010865100"
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11010865100');
        `}
      </Script>
    </>
  );
}

export default function AdTracking() {
  return (
    <Suspense fallback={null}>
      <AdTrackingInner />
    </Suspense>
  );
}
