'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail } from 'lucide-react';

export default function Waitlist() {
  const t = useTranslations('Waitlist');

  return (
    <section className="relative z-20 py-24 px-6 bg-[#0a0a0a] border-t border-[#1E1E1E] flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full text-center"
      >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">{t('title')}</h2>
        <p className="text-gray-400 mb-10 text-lg">{t('subtitle')}</p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input 
              type="email" 
              placeholder={t('placeholder')}
              className="w-full bg-[#121212] border border-[#2A2A2A] text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all placeholder:text-gray-600"
              required
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            {t('button')}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}