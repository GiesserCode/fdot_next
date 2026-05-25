import type { Metadata } from 'next';
import { habitMono, habitSans } from './fonts';
import '@/components/habits/habits.css';

export const metadata: Metadata = {
  title: 'Habit Tracker',
  description: 'Deine täglichen Gewohnheiten im Blick',
};

export default function HabitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${habitSans.variable} ${habitMono.variable} habits-root min-h-screen`}
    >
      {children}
    </div>
  );
}
