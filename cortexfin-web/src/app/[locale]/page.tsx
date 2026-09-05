'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Smartphone, ChevronRight, WifiOff, Zap, Users } from 'lucide-react';

export default function Home() {
  const tHero = useTranslations('Hero');
  const tFeatures = useTranslations('Features');

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col relative overflow-hidden">
      
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full z-20">
        <div className="text-2xl font-black text-white tracking-tighter">CORTEX<span className="text-gray-600">FIN</span></div>
        <button className="bg-white text-black px-5 py-2 rounded-md font-bold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {tHero('downloadBtn')}
        </button>
      </header>

      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center text-center px-6 relative z-20 pt-20 pb-32">
        {/* Фоновий глітч-градієнт */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>{tHero('betaStatus')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            {tHero('title1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
              {tHero('title2')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            {tHero('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#121212] px-8 py-4 rounded-lg font-black flex items-center justify-center transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              {tHero('downloadBtn')}
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#181818] border border-gray-800 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center hover:border-gray-500 transition-colors"
            >
              {tHero('exploreBtn')} <ChevronRight className="ml-2 h-5 w-5 text-gray-500" />
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* FEATURES BENTO GRID */}
      <section className="relative z-20 bg-[#0a0a0a] border-t border-[#1E1E1E] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white mb-16 text-center tracking-tight"
          >
            {tFeatures('sectionTitle')}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Карточка 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#121212] p-8 rounded-2xl border border-[#1E1E1E] hover:border-gray-600 transition-colors group"
            >
              <div className="bg-[#1a1a1a] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <WifiOff className="h-6 w-6 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tFeatures('offlineTitle')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {tFeatures('offlineDesc')}
              </p>
            </motion.div>

            {/* Карточка 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#121212] p-8 rounded-2xl border border-[#1E1E1E] hover:border-gray-600 transition-colors group"
            >
              <div className="bg-[#1a1a1a] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tFeatures('syncTitle')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {tFeatures('syncDesc')}
              </p>
            </motion.div>

            {/* Карточка 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#121212] p-8 rounded-2xl border border-[#1E1E1E] hover:border-gray-600 transition-colors group"
            >
              <div className="bg-[#1a1a1a] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tFeatures('sharedTitle')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {tFeatures('sharedDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}