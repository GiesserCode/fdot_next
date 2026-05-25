import { DM_Mono, DM_Sans } from 'next/font/google';

export const habitMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-habit-mono',
});

export const habitSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-habit-sans',
});
