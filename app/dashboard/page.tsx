'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [hasUcp, setHasUcp] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isMounted = true;

    const checkUcpStatus = async () => {
      if (!session?.user?.discordId) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);

        // Add timeout
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error('Request timeout - The server is taking too long to respond. Please try again.'));
          }, 15000); // 15 seconds timeout
        });

        const fetchPromise = fetch(`/api/characters/${session.user.discordId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
          signal: AbortSignal.timeout(15000), // Add AbortSignal timeout
        });

        const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to check UCP status');
        }

        const data = await response.json();
        
        if (!data || typeof data.success !== 'boolean') {
          throw new Error('Invalid response format');
        }

        if (!data.success) {
          throw new Error(data.error || 'Failed to check UCP status');
        }

        if (isMounted) {
          setHasUcp(data.hasUcp);
          setRetryCount(0);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error checking UCP status:', error);
        
        if (isMounted) {
          setError(error instanceof Error ? error.message : 'Failed to check UCP status');
          
          // Implement retry logic with exponential backoff
          if (retryCount < 3) { // Max 3 retries
            const delay = Math.min(1000 * Math.pow(2, retryCount), 5000); // Max 5s delay
            setTimeout(() => {
              if (isMounted) {
                setRetryCount(prev => prev + 1);
                checkUcpStatus();
              }
            }, delay);
          } else {
            setHasUcp(false);
            setLoading(false);
            setError('Unable to connect to the server after multiple attempts. Please refresh the page or try again later.');
          }
        }
      }
    };

    if (session?.user?.discordId) {
      checkUcpStatus();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      setLoading(false);
    };
  }, [session?.user?.discordId, retryCount]);

  if (status === 'loading' || loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <p className="text-gray-300 text-lg font-medium">
            {error ? (
              <span className="text-red-400">{error}</span>
            ) : retryCount > 0 ? (
              `Retrying... (${retryCount}/3)`
            ) : (
              'Loading your dashboard...'
            )}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-700/30 via-indigo-500/20 to-purple-400/20 rounded-full blur-3xl animate-blob1" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400/20 via-indigo-500/20 to-blue-700/30 rounded-full blur-3xl animate-blob2" />
        {/* Particle ornaments */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full blur-md opacity-60 animate-pulse" />
        <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full blur-sm opacity-50 animate-pulse" />
      </div>

      <div className="h-full w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:shadow-blue-500/5"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
              <div className="text-center sm:text-left">
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-2"
                >
                  Welcome, <span className="capitalize bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{session?.user?.name}</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-400 text-base sm:text-lg"
                >
                  {hasUcp ? 'Manage your account and characters' : 'Create your UCP account to get started'}
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center"
              >
                {session?.user?.image ? (
                  <div className="relative group">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                    <div className="relative w-32 h-32">
                      <Image
                        src={session.user.image}
                        alt={session.user.name || 'Profile'}
                        fill
                        className="rounded-full object-cover border-4 border-white/10"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                    {session?.user?.name?.[0]?.toUpperCase()}
                  </div>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/characters"
                  className="group bg-gray-800/80 hover:bg-gray-900/80 rounded-xl p-6 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] flex flex-col min-h-[160px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-200">
                      Characters
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 flex-1">
                    {hasUcp ? "Manage your game characters and their progress" : "Create a UCP account to manage your characters"}
                  </p>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/ucp/change-password"
                  className="group bg-gray-800/80 hover:bg-gray-900/80 rounded-xl p-6 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] flex flex-col min-h-[160px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-200">
                      Change Password
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 flex-1">
                    {hasUcp ? "Update your UCP account password" : "Create a UCP account to manage your password"}
                  </p>
                </Link>
              </motion.div>

              {!hasUcp && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    href="/ucp/create"
                    className="group bg-gray-800/80 hover:bg-gray-900/80 rounded-xl p-6 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-[1.02] flex flex-col min-h-[160px]"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-200">
                        Create UCP
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 flex-1">
                      Create your UCP account to start managing your characters
                    </p>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
