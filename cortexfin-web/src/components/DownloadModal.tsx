'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { X, Download, Smartphone, Apple } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const t = useTranslations('DownloadModal');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#181818] border border-[#2A2A2A] rounded-3xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)] z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl bg-[#121212] border border-[#2A2A2A] text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
              {t('title')}
            </h2>
            <p className="text-gray-400 text-sm mb-8 font-medium">
              {t('subtitle')}
            </p>

            {/* Platforms Stack */}
            <div className="space-y-4">
              {/* Android APK Direct */}
              <a 
                href="#waitlist"
                onClick={onClose}
                className="flex items-center justify-between p-5 rounded-2xl bg-[#121212] border border-[#2A2A2A] hover:border-gray-500 transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#2A2A2A] group-hover:bg-white group-hover:text-black transition-colors">
                    <Download className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      {t('apkTitle')}
                      <span className="text-[10px] uppercase font-black bg-white text-black px-2 py-0.5 rounded">
                        {t('apkBadge')}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-0.5">{t('apkDesc')}</div>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#121212]/60 border border-[#2A2A2A] opacity-80">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#2A2A2A] text-gray-400">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-300 text-base flex items-center gap-2">
                      {t('playTitle')}
                      <span className="text-[10px] uppercase font-black bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                        {t('playBadge')}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-0.5">{t('playDesc')}</div>
                  </div>
                </div>
              </div>

              {/* iOS TestFlight */}
              <div className="flex items-center justify-between p-5 rounded-2xl bg-[#121212]/60 border border-[#2A2A2A] opacity-80">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-[#2A2A2A] text-gray-400">
                    <Apple className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-300 text-base flex items-center gap-2">
                      {t('iosTitle')}
                      <span className="text-[10px] uppercase font-black bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                        {t('iosBadge')}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 font-medium mt-0.5">{t('iosDesc')}</div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}