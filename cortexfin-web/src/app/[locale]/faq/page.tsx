'use client';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import { Link } from '../../../i18n/routing';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const tFAQ = useTranslations('FAQ');
  const tFooter = useTranslations('Footer');
  const tHero = useTranslations('Hero'); // Для кнопки завантаження в хедері

  const faqs = [
    { q: tFAQ('q1'), a: tFAQ('a1') },
    { q: tFAQ('q2'), a: tFAQ('a2') },
    { q: tFAQ('q3'), a: tFAQ('a3') }
  ];

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col text-gray-200 font-sans">
      
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full border-b border-[#1E1E1E]">
        <Link href="/" className="text-2xl font-black text-white tracking-tighter hover:opacity-80 transition-opacity">
          CORTEX<span className="text-gray-600">FIN</span>
        </Link>
        <div className="flex items-center">
          <LanguageSwitcher />
          <Link href="/" className="bg-white text-black px-5 py-2 rounded-md font-bold text-sm hover:bg-gray-200 transition-colors">
            {tFooter('home')}
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{tFAQ('title')}</h1>
          <p className="text-xl text-gray-400 mb-16">{tFAQ('subtitle')}</p>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#181818] p-8 rounded-2xl border border-[#2A2A2A]">
                <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

    </div>
  );
}