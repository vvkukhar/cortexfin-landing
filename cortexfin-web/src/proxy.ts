import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Ловить абсолютно всі запити, крім системних файлів, і редіректить на /uk
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};