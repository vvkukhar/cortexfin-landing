'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Ініціалізуємо Supabase тільки якщо є ключі, щоб не крашнуло при білді
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email')?.toString();
  
  if (!email) {
    return { error: 'Email is required.' };
  }

  if (!supabase) {
    // Заглушка, якщо ти ще не вписав ключі в .env.local
    console.log('Mock save email:', email);
    return { success: true }; 
  }

  // Пушимо в таблицю 'waitlist'
  const { error } = await supabase
    .from('waitlist')
    .insert([{ email }]);

  if (error) {
    // Код 23505 означає, що такий email вже є в базі
    if (error.code === '23505') {
      return { error: 'Цей email вже є у списку очікування!' };
    }
    return { error: error.message };
  }

  return { success: true };
}