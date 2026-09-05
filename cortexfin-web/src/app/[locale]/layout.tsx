import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CortexFin | Absolute Control',
  description: 'Офлайн-first фінансова ОС з миттєвою синхронізацією. Керуй бюджетом за корпоративними стандартами.',
  openGraph: {
    title: 'CortexFin | Financial OS',
    description: 'Будуй капітал, а не просто рахуй витрати. Wislet Beta 0.4.4 is Live.',
    siteName: 'CortexFin Inc.',
    type: 'website',
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-[#121212] text-gray-200 antialiased selection:bg-gray-600">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}