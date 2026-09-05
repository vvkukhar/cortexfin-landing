'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'uk' ? 'en' : 'uk';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button 
      onClick={toggleLocale}
      className="text-gray-500 hover:text-white font-black text-sm tracking-widest uppercase transition-colors px-4 border-r border-[#2A2A2A] mr-4"
    >
      {locale === 'uk' ? 'EN' : 'UK'}
    </button>
  );
}