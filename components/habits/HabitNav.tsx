'use client';

import type { ViewMode } from '@/lib/habits/types';

const TABS: { id: ViewMode; label: string }[] = [
  { id: 'day', label: 'Heute' },
  { id: 'week', label: 'Woche' },
  { id: 'month', label: 'Monat' },
  { id: 'year', label: 'Jahr' },
  { id: 'stats', label: 'Statistik' },
  { id: 'notes', label: 'Notizen' },
];

interface Props {
  view: ViewMode;
  onChange: (v: ViewMode) => void;
}

export default function HabitNav({ view, onChange }: Props) {
  return (
    <nav className="flex gap-1 overflow-x-auto pb-2 mb-4 scrollbar-hide">
      {TABS.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={`shrink-0 px-3 py-2 rounded-lg text-sm transition-colors ${
            view === t.id
              ? 'habit-btn'
              : 'habit-btn-ghost'
          }`}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
