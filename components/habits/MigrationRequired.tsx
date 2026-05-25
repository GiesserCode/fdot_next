export default function MigrationRequired({ message }: { message?: string }) {
  return (
    <main className="habits-root min-h-screen flex items-center justify-center p-6">
      <div className="habit-card max-w-lg p-6 space-y-4">
        <h1 className="text-xl font-bold">Datenbank einrichten</h1>
        <p className="text-[var(--habit-muted)] text-sm">
          Die Habit-Tracker-Tabellen fehlen in Supabase. Führe die Migration aus,
          damit die Seite funktioniert.
        </p>
        <ol className="text-sm list-decimal list-inside space-y-2 text-[var(--habit-muted)]">
          <li>Supabase Dashboard → SQL Editor öffnen</li>
          <li>
            Inhalt von{' '}
            <code className="text-[var(--habit-text)]">
              supabase/migrations/20250523_habits.sql
            </code>{' '}
            einfügen und ausführen
          </li>
          <li>Seite neu laden</li>
        </ol>
        {message && (
          <pre className="text-xs p-3 rounded bg-[var(--habit-bg)] overflow-x-auto text-red-400">
            {message}
          </pre>
        )}
      </div>
    </main>
  );
}
