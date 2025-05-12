import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useSession, signIn } from 'next-auth/react';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const { data: session, status } = useSession();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className={cn(
          "fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-[5000] w-[98vw] sm:w-[90vw] md:w-[70vw] px-2 sm:px-6 py-2 flex items-center justify-between gap-2 rounded-xl border shadow backdrop-blur-md bg-white/70 dark:bg-white/10 border-gray-300/10 dark:border-white/10 overflow-x-hidden",
          className
        )}
        style={{ maxWidth: '1200px' }}
      >
        {/* Kiri: Logo dan Nav Items */}
        <div className="flex items-center gap-2 sm:gap-6 min-w-0 w-0 flex-1">
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-8 w-[70px] sm:w-[120px]">
              <Image
                src="/sarp.png"
                alt="Logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 70px, 120px"
              />
            </div>
          </Link>
          <div className="h-6 border-l border-gray-400 dark:border-white/20 mx-1 sm:mx-3" />
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 overflow-x-auto">
            {navItems.slice(0, 2).map((item, index) => (
              <Link
                key={`nav-${index}`}
                href={item.link}
                className="font-semibold text-xs sm:text-sm text-neutral-800 dark:text-white hover:text-black dark:hover:text-neutral-300 transition-colors flex items-center gap-1 whitespace-nowrap truncate px-1"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Kanan: Aksi */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {status === 'authenticated' && session?.user ? (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-transparent text-white font-semibold text-xs sm:text-sm transition duration-300 whitespace-nowrap max-w-[120px] sm:max-w-[150px]"
            >
              {session.user.image && (
                <div className="relative w-8 h-8">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'Profile'}
                    fill
                    className="rounded-full border-2 border-white object-cover"
                    sizes="32px"
                  />
                </div>
              )}
              <span className="truncate max-w-[60px] sm:max-w-[90px]">{session.user.name}</span>
            </Link>
          ) : (
            <button
              onClick={() => signIn('discord')}
              className="font-semibold bg-black text-white text-xs sm:text-sm py-1.5 px-3 rounded-md flex items-center gap-1 hover:bg-gray-800 transition duration-300 whitespace-nowrap"
            >
              MASUK
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <Link
            href="#launcher"
            className="font-semibold bg-red-500 text-white text-xs sm:text-sm py-1.5 px-3 rounded-md flex items-center gap-1 hover:bg-red-600 transition duration-300 whitespace-nowrap"
          >
            MULAI
            <Download className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}; 