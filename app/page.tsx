'use client';

import { FloatingNav } from '../components/FloatingNav';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Characters', link: '/characters' },
    { name: 'UCP', link: '/ucp' },
  ];

  const handleStart = () => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    } else {
      router.push('/auth/signin');
    }
  };

  const handleVideo = () => {
    // Ganti dengan link video permainan jika ada
    window.open('https://www.youtube.com/', '_blank');
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      {/* Animated Background Ornaments */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-700/30 via-indigo-500/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 via-indigo-500/20 to-blue-700/30 rounded-full blur-3xl"
        />
        {/* Simplified particle ornaments */}
        {[
          { top: '20%', left: '10%', color: 'blue', size: 2 },
          { top: '30%', left: '80%', color: 'purple', size: 3 },
          { top: '50%', left: '20%', color: 'pink', size: 4 },
          { top: '70%', left: '60%', color: 'blue', size: 5 },
          { top: '40%', left: '40%', color: 'purple', size: 6 },
          { top: '80%', left: '30%', color: 'pink', size: 7 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
            className={`absolute w-${particle.size} h-${particle.size} bg-${particle.color}-400 rounded-full blur-md opacity-60`}
            style={{
              top: particle.top,
              left: particle.left,
            }}
          />
        ))}
      </div>

      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl -z-10" />
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
            SOUTH ATLANTA<br />ROLEPLAY
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Bermain Online dengan dunia yang terbuka dan besar di mana
            Anda bisa menjadi siapa pun yang Anda inginkan!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStart}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Mulai permainan
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleVideo}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-gray-200 font-semibold text-base sm:text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.5 5.5v9l7-4.5-7-4.5z" /></svg>
              Video Permainan
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-2"
          >
            <motion.span 
              className="text-gray-400 text-xs sm:text-sm"
              animate={{
                opacity: [0.5, 1, 0.5],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Scroll untuk melihat lebih lanjut
            </motion.span>
            <motion.div
              className="relative"
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </svg>
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-400/20 rounded-full blur-sm"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* Enhanced Cards Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-300 ease-in-out" />
            <div className="relative bg-gradient-to-br from-blue-900/90 to-gray-900/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-700/30 h-full transition-all duration-300 ease-in-out">
              <div className="w-20 h-20 mb-6 relative">
                <Image 
                  src="/sarp.png" 
                  alt="GTA RP" 
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Real Roleplay Experience</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Rasakan pengalaman roleplay yang imersif seperti di server FiveM, dengan sistem interaksi dan skenario yang realistis.</p>
              <ul className="text-gray-400 text-left space-y-3 w-full mt-auto">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Sistem job & bisnis dinamis</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Faksi polisi, EMS, mafia, dan banyak lagi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Event komunitas & update rutin</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-300 ease-in-out" />
            <div className="relative bg-gradient-to-br from-blue-900/90 to-gray-900/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-700/30 h-full transition-all duration-300 ease-in-out">
              <div className="w-20 h-20 mb-6 relative">
                <Image 
                  src="/sarp.png" 
                  alt="Open World" 
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Open World & Customization</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Dunia luas, bebas eksplorasi, mod kendaraan, skin, dan properti sesuai keinginanmu.</p>
              <ul className="text-gray-400 text-left space-y-3 w-full mt-auto">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Map custom & spot unik</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Mod kendaraan & skin</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Sistem rumah & properti</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="relative group h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-300 ease-in-out" />
            <div className="relative bg-gradient-to-br from-blue-900/90 to-gray-900/90 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-700/30 h-full transition-all duration-300 ease-in-out">
              <div className="w-20 h-20 mb-6 relative">
                <Image 
                  src="/sarp.png" 
                  alt="Komunitas" 
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Komunitas Aktif & Support</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Gabung komunitas aktif, dapatkan support, dan buat cerita unikmu sendiri setiap hari!</p>
              <ul className="text-gray-400 text-left space-y-3 w-full mt-auto">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Forum & Discord support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Event harian & mingguan</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Staff ramah & responsif</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* GTA Roleplay Info Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl w-full bg-gray-900/80 border border-gray-800 rounded-xl shadow-2xl p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-center">Mainkan SAMP dengan SOUTH ATLANTA Roleplay!</h2>
          <p className="text-sm sm:text-base text-gray-200 mb-4 text-center">Benamkan diri Anda dalam dunia game terbuka dan rasakan seperti karakter apa pun, orang sungguhan yang terkenal, atau jalur khusus Anda sendiri – skenario peristiwa apa pun tersedia di sini.</p>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">sarp adalah game yang memulai sejarah SAMP</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">Cerita dimulai pada 2024. Berkat popularitas yang berkembang pesat, proyek ini telah berkembang, mencakup peningkatan jumlah pemain. Kini, SOUTH ATLANTA hadir sebagai server roleplay Indonesia yang seru dan penuh fitur!</p>
          <ul className="list-disc pl-6 text-sm sm:text-base text-gray-200 space-y-2 mb-4">
            <li>Rasakan sensasi roleplay realistis di dunia GTA San Andreas Multiplayer</li>
            <li>Coba berbagai profesi: polisi, mafia, pengusaha, supir taksi, dan banyak lagi</li>
            <li>Event seru dan komunitas aktif setiap hari</li>
            <li>Ekonomi dinamis, sistem kendaraan, properti, dan bisnis</li>
            <li>Gabung dan buat cerita unikmu sendiri!</li>
          </ul>
          <p className="text-xs sm:text-sm text-gray-400 text-center">*sarp bukan bagian dari sarp RP, ini hanya contoh deskripsi untuk server roleplay Indonesia.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-8 sm:pt-12 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 border-b border-gray-800 pb-8 sm:pb-12">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Brand Section */}
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">Mainkan SAMP dengan SOUTH ATLANTA Roleplay!</h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto md:mx-0">Benamkan diri Anda dalam dunia game terbuka dan rasakan seperti karakter apa pun, orang sungguhan yang terkenal, atau jalur khusus Anda sendiri – skenario peristiwa apa pun tersedia di sini.</p>
            </div>

            {/* Links Section */}
            <div className="flex-1 grid grid-cols-2 sm:flex sm:flex-row gap-8 justify-center md:justify-end">
              <div className="text-center sm:text-left">
                <h5 className="text-white font-semibold mb-3">Proyek</h5>
                <ul className="text-xs sm:text-sm text-gray-400 space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors inline-block">jaden RP</a></li>
                  <li><a href="#" className="hover:text-white transition-colors inline-block">jaden V</a></li>
                  <li><a href="#" className="hover:text-white transition-colors inline-block">jaden</a></li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h5 className="text-white font-semibold mb-3">Berguna</h5>
                <ul className="text-xs sm:text-sm text-gray-400 space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors inline-block">Forum</a></li>
                  <li><a href="#" className="hover:text-white transition-colors inline-block">Perjanjian Pengguna</a></li>
                  <li><a href="#" className="hover:text-white transition-colors inline-block">Kebijakan privasi</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <Image src="/playstore.svg" alt="Playstore" width={28} height={28} className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition-opacity" />
              <Image src="/visa.svg" alt="Visa" width={28} height={28} className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition-opacity" />
              <Image src="/mir.svg" alt="Mir" width={28} height={28} className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition-opacity" />
              <Image src="/idcheck.svg" alt="IDCheck" width={28} height={28} className="w-7 h-7 sm:w-8 sm:h-8 hover:opacity-80 transition-opacity" />
            </div>
            <a href="mailto:support@sarp.com" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
              support@sarp.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs pt-6">
          Pertandingan © sarp 2025
        </div>
      </footer>
    </div>
  );
}
