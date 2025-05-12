'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Special handling for home and characters pages
  if (pathname === '/' || pathname.startsWith('/characters')) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-700/30 via-indigo-500/20 to-purple-400/20 rounded-full blur-3xl animate-blob1" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400/20 via-indigo-500/20 to-blue-700/30 rounded-full blur-3xl animate-blob2" />
        {/* Particle ornaments */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full blur-md opacity-60 animate-pulse" />
        <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full blur-sm opacity-50 animate-pulse" />
      </div>

      <main className="relative min-h-screen">
        {children}
      </main>
    </div>
  );
} 