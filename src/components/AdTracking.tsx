'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: Function;
    gtag?: Function;
    dataLayer?: any[];
  }
}

export default function AdTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page view when route changes
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_search: searchParams.toString(),
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Meta Pixel - Uncomment and add your pixel ID when ready */}
      {/* <Script id="facebook-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script> */}

      {/* Google Tag Manager - Uncomment and add your GTM ID when ready */}
      {/* <Script id="google-tag-manager">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','YOUR_GTM_ID');
        `}
      </Script> */}

      {/* Function to track form submissions */}
      <Script id="tracking-functions">
        {`
          function trackFormStep(step, data) {
            // Facebook Pixel tracking
            if (window.fbq) {
              window.fbq('track', 'Lead', {
                content_name: 'Mortgage Application',
                content_category: 'Form Step',
                step: step,
                ...data
              });
            }

            // Google Analytics tracking
            if (window.gtag) {
              window.gtag('event', 'form_step_complete', {
                event_category: 'Mortgage Application',
                event_label: step,
                ...data
              });
            }
          }

          function trackFormSubmission(data) {
            // Facebook Pixel tracking
            if (window.fbq) {
              window.fbq('track', 'SubmitApplication', {
                content_name: 'Mortgage Application',
                content_category: 'Form Submission',
                ...data
              });
            }

            // Google Analytics tracking
            if (window.gtag) {
              window.gtag('event', 'generate_lead', {
                event_category: 'Mortgage Application',
                event_label: 'Form Submission',
                ...data
              });
            }
          }
        `}
      </Script>
    </>
  );
} 