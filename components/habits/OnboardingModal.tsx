'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { completeOnboarding, skipOnboarding } from '@/app/habits/actions';
import { DEMO_HABITS } from '@/lib/habits/constants';

export default function OnboardingModal() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const run = (action: () => Promise<void>) => {
    setError(null);
    startTransition(async () => {
      try {
        await action();
        router.refresh();
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unbekannter Fehler');
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="habit-card max-w-md p-6 habit-slide-in">
        <h2 className="text-2xl font-bold mb-2">Willkommen! 👋</h2>
        <p className="text-[var(--habit-muted)] mb-4">
          Starte mit 3 Demo-Habits oder lege eigene an.
        </p>
        <ul className="space-y-2 mb-6">
          {DEMO_HABITS.map((h) => (
            <li
              key={h.name}
              className="flex items-center gap-2 text-sm habit-card p-2"
            >
              <span>{h.icon}</span>
              <span>{h.name}</span>
              <span className="text-[var(--habit-muted)]">· {h.category}</span>
            </li>
          ))}
        </ul>

        {error && (
          <p className="text-sm text-red-400 mb-4 p-3 rounded-lg bg-red-500/10">
            {error}
          </p>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            className="habit-btn flex-1"
            disabled={pending}
            onClick={() => run(completeOnboarding)}
          >
            {pending ? 'Lädt…' : 'Demo-Habits laden'}
          </button>
          <button
            type="button"
            className="habit-btn-ghost px-4 py-2 rounded-lg"
            disabled={pending}
            onClick={() => run(skipOnboarding)}
          >
            Überspringen
          </button>
        </div>
        <p className="text-xs text-[var(--habit-muted)] mt-4">
          Tastatur: N = neuer Habit, 1–9 = Habits abhaken
        </p>
      </div>
    </div>
  );
}
