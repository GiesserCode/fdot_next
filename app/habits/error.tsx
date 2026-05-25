'use client';

export default function HabitsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="habits-root min-h-screen flex items-center justify-center p-6">
      <div className="habit-card max-w-lg p-6 space-y-4">
        <h1 className="text-xl font-bold">Habit Tracker – Fehler</h1>
        <p className="text-sm text-[var(--habit-muted)]">{error.message}</p>
        <p className="text-sm text-[var(--habit-muted)]">
          Prüfe, ob die Supabase-Migration ausgeführt wurde und du angemeldet bist.
        </p>
        <button type="button" className="habit-btn" onClick={reset}>
          Erneut versuchen
        </button>
      </div>
    </main>
  );
}
