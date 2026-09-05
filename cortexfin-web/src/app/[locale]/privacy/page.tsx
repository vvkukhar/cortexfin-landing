'use client';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import { Link } from '../../../i18n/routing';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  const t = useTranslations('Privacy');
  const tFooter = useTranslations('Footer');

  const policies = [
    { title: t('p1Title'), desc: t('p1Desc') },
    { title: t('p2Title'), desc: t('p2Desc') },
    { title: t('p3Title'), desc: t('p3Desc') }
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
          <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {tFooter('home')}
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
            <Shield className="h-3.5 w-3.5 mr-1 text-white" />
            <span>{t('lastUpdated')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{t('title')}</h1>
          <p className="text-lg text-gray-400 mb-12 font-medium">{t('subtitle')}</p>

          <div className="space-y-8">
            {policies.map((item, i) => (
              <div key={i} className="bg-[#181818] p-8 rounded-2xl border border-[#2A2A2A]">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1E1E1E] bg-[#0a0a0a] py-10 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div>CORTEX<span className="text-gray-600">FIN</span> INC.</div>
          <div>{tFooter('rights')}</div>
        </div>
      </footer>

    </div>
  );
}