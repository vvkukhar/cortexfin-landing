'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Loader2, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { joinWaitlist } from '../actions/waitlist';

export default function Waitlist() {
  const t = useTranslations('Waitlist');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setErrorMsg('');
    
    const result = await joinWaitlist(formData);
    
    if (result.error) {
      setErrorMsg(result.error);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  }

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
        
        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center bg-[#121212] border border-green-500/30 p-8 rounded-2xl max-w-xl mx-auto"
          >
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Заявку прийнято</h3>
            <p className="text-gray-400">Твій email успішно додано. Ми повідомимо тебе першим.</p>
          </motion.div>
        ) : (
          <form action={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
              <input 
                name="email"
                type="email" 
                placeholder={t('placeholder')}
                className="w-full bg-[#121212] border border-[#2A2A2A] text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all placeholder:text-gray-600"
                required
                disabled={loading}
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center min-w-[160px] disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin h-5 w-5" /> : t('button')}
            </motion.button>
          </form>
        )}

        {errorMsg && (
          <p className="text-red-400 mt-4 text-sm font-medium">{errorMsg}</p>
        )}

      </motion.div>
    </section>
  );
}