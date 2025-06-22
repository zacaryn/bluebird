'use client';

import { usePathname } from 'next/navigation';
import { AdminProvider } from '@/contexts/AdminContext';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't apply the blue theme to login page (it already has it)
  if (pathname === '/admin/login') {
    return <div>{children}</div>;
  }

  // Apply blue theme to all other admin pages
  return (
    <AdminProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#00659C] to-[#005483]">
        {children}
      </div>
    </AdminProvider>
  );
} 