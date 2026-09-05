'use client';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import { Link } from '../../../i18n/routing';
import { motion } from 'framer-motion';
import { Database, Zap, ShieldCheck, Eye, ArrowLeft } from 'lucide-react';

export default function ArchitecturePage() {
  const t = useTranslations('Architecture');
  const tFooter = useTranslations('Footer');

  const specs = [
    {
      icon: Database,
      title: t('core1Title'),
      desc: t('core1Desc'),
      badge: 'Latency < 2ms'
    },
    {
      icon: Zap,
      title: t('core2Title'),
      desc: t('core2Desc'),
      badge: 'Edge Handshake'
    },
    {
      icon: ShieldCheck,
      title: t('core3Title'),
      desc: t('core3Desc'),
      badge: 'Zero-Knowledge'
    },
    {
      icon: Eye,
      title: t('core4Title'),
      desc: t('core4Desc'),
      badge: 'Computer Vision'
    }
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

      {/* HERO OF ARCHITECTURE */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
            <span>{t('badge')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* SPECIFICATION GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#181818] p-10 rounded-3xl border border-[#2A2A2A] hover:border-gray-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="bg-[#121212] p-4 rounded-2xl border border-[#2A2A2A]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest bg-[#121212] px-3 py-1.5 rounded-lg border border-[#2A2A2A]">
                      {spec.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{spec.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">{spec.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1E1E1E] bg-[#0a0a0a] py-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div>CORTEX<span className="text-gray-600">FIN</span> INC.</div>
          <div>{tFooter('rights')}</div>
        </div>
      </footer>

    </div>
  );
}