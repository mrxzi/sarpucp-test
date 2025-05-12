'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UserCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Character {
  ID: number;
  CharacterName: string;
  Level: number;
  Money: number;
  BankMoney: number;
  PhoneNumber: string;
  Job: string;
  Faction: string;
  Gender: number;
  Skin: number;
  Health: number;
  Armor: number;
  PosX: number;
  PosY: number;
  PosZ: number;
  PosA: number;
  LastLogin: string | null;
}

export default function CharactersPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const fetchCharacters = useCallback(async () => {
    if (!session?.user?.discordId) {
      setError('No user session found');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`/api/characters/${session.user.discordId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to fetch characters');
      }

      const data = await response.json();
      
      if (!data || !Array.isArray(data.characters)) {
        throw new Error('Invalid response format');
      }

      setCharacters(data.characters);
      setError('');
      setRetryCount(0);
    } catch (err) {
      console.error('Error fetching characters:', err);
      setError(err instanceof Error ? err.message : 'Failed to load characters. Please try again.');
      
      if (retryCount < 3) {
        const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchCharacters();
        }, delay);
      }
    } finally {
      setLoading(false);
    }
  }, [session?.user?.discordId, retryCount]);

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    fetchCharacters();
    
    const intervalId = setInterval(() => {
      if (retryCount === 0) {
        fetchCharacters();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [session, router, retryCount, fetchCharacters]);

  if (!session) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="h-full w-full flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Please login first</h2>
            <p className="text-gray-400">You need to be logged in to view your characters</p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="h-full w-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="mt-4 text-gray-300 text-lg">Loading your characters...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-700/30 via-indigo-500/20 to-purple-400/20 rounded-full blur-3xl animate-blob1" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400/20 via-indigo-500/20 to-blue-700/30 rounded-full blur-3xl animate-blob2" />
      </div>

      <main className="flex-1 w-full flex flex-col items-center justify-start px-4 pb-4">
        {characters.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center max-w-md mx-auto mt-8"
          >
            <div className="text-gray-300 text-lg">
              <p>You don&apos;t have any characters yet.</p>
              <p className="mt-2 text-sm">Create a character in-game to get started!</p>
            </div>
          </motion.div>
        ) : (
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {characters.map((character, idx) => (
                <motion.div 
                  key={character.ID}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  {/* Character content */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-lg opacity-50 group-hover:opacity-80 transition-all duration-300" />
                      <div className="relative w-24 h-24">
                        <Image
                          src={`https://assets.open.mp/assets/images/skins/${character.Skin}.png`}
                          alt={`Skin ${character.Skin}`}
                          fill
                          className="object-contain rounded-full border-2 border-gray-800 bg-gray-900"
                          onError={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.src = 'https://assets.open.mp/assets/images/skins/0.png';
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-white mb-2">{character.CharacterName}</h2>
                    <div className="flex justify-center gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        Level {character.Level}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        character.Gender === 1 
                          ? 'bg-blue-500/20 text-blue-300' 
                          : 'bg-pink-500/20 text-pink-300'
                      }`}>
                        {character.Gender === 1 ? 'Male' : 'Female'}
                      </span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/50 rounded-xl p-3">
                      <div className="text-gray-400 text-sm mb-1">Cash</div>
                      <div className="text-white font-semibold">${character.Money.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-3">
                      <div className="text-gray-400 text-sm mb-1">Bank</div>
                      <div className="text-white font-semibold">${character.BankMoney.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-3 col-span-2">
                      <div className="text-gray-400 text-sm mb-1">Phone</div>
                      <div className="text-white font-semibold">{character.PhoneNumber}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-3 col-span-2">
                      <div className="text-gray-400 text-sm mb-1">Job</div>
                      <div className="text-white font-semibold">{character.Job || 'Unemployed'}</div>
                    </div>
                  </div>

                  {/* Health and Armor Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Health</span>
                        <span>{character.Health}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${character.Health}%` }}
                          className="h-full bg-gradient-to-r from-green-400 to-green-600"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Armor</span>
                        <span>{character.Armor}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${character.Armor}%` }}
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 