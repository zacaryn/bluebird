'use client';

import { useState, useEffect } from 'react';

export default function StickyPhoneCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-300"
      aria-label="Call Bluebird Mortgage"
    >
      {/* Desktop pill */}
      <a
        href="tel:719-428-1038"
        className="hidden sm:inline-flex items-center gap-2.5 rounded-full bg-[#00659C] px-5 py-3.5 text-white font-semibold text-sm shadow-2xl hover:bg-[#005483] active:scale-95 transition-all duration-150 ring-2 ring-white/20"
      >
        <PhoneIcon />
        (719) 428-1038
      </a>

      {/* Mobile round button */}
      <a
        href="tel:719-428-1038"
        className="sm:hidden flex items-center justify-center w-14 h-14 rounded-full bg-[#00659C] text-white shadow-2xl hover:bg-[#005483] active:scale-95 transition-all duration-150 ring-2 ring-white/20"
        aria-label="Call (719) 428-1038"
      >
        <PhoneIcon large />
      </a>
    </div>
  );
}

function PhoneIcon({ large = false }: { large?: boolean }) {
  const size = large ? 'w-6 h-6' : 'w-4 h-4';
  return (
    <svg
      className={`${size} flex-shrink-0`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
