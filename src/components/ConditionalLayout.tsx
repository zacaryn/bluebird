'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import AdTracking from './AdTracking';
import StickyPhoneCTA from './StickyPhoneCTA';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <AdTracking />
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <StickyPhoneCTA />
    </>
  );
}
