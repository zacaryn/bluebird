'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from 'react';

declare global {
  interface Window {
    fbq?: Function;
    gtag?: Function;
    dataLayer?: any[];
  }
}

function AdTrackingInner() {
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

      {/* Google Ads Global Site Tag */}
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
            // Google Ads Conversion Tracking - Lead Form Submission
            if (window.gtag) {
              window.gtag('event', 'conversion', {
                'send_to': 'AW-11010865100/VHzTCM3xmPIaEMzvsYIp',
                'value': 125.0,
                'currency': 'USD',
                'event_callback': function() {
                  console.log('Lead form conversion tracked');
                }
              });
              
              // Enhanced conversion with user data (optional)
              window.gtag('event', 'conversion', {
                'send_to': 'AW-11010865100/VHzTCM3xmPIaEMzvsYIp',
                'user_data': {
                  'email_address': data.email,
                  'phone_number': data.phone
                }
              });
            }

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
                campaign_source: data.utm_source || 'direct',
                campaign_medium: data.utm_medium || 'none',
                campaign_name: data.utm_campaign || 'none',
                ...data
              });
            }
          }

          // Phone call tracking function
          function trackPhoneCall(phoneNumber) {
            // Google Ads Phone Call Conversion - Contact category
            if (window.gtag) {
              window.gtag('event', 'conversion', {
                'send_to': 'AW-11010865100/KV67CIHeoPIaEMzvsYIp',
                'value': 225.0,
                'currency': 'USD'
              });
            }

            // Google Analytics phone call event
            if (window.gtag) {
              window.gtag('event', 'phone_call', {
                event_category: 'Contact',
                event_label: phoneNumber,
                value: 100
              });
            }
          }

          // Auto-setup phone call tracking on page load
          document.addEventListener('DOMContentLoaded', function() {
            // Track clicks on phone links
            const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
            phoneLinks.forEach(function(link) {
              link.addEventListener('click', function() {
                const phoneNumber = this.getAttribute('href').replace('tel:', '');
                trackPhoneCall(phoneNumber);
              });
            });
          });
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