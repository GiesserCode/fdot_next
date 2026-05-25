'use client';

import type { Habit, HabitLog } from '@/lib/habits/types';
import { getMonthDays } from '@/lib/habits/dates';
import { heatmapLevels } from '@/lib/habits/streaks';

interface Props {
  habits: Habit[];
  logs: HabitLog[];
}

const LEVEL_COLORS = [
  'var(--habit-border)',
  '#1e3a2f',
  '#166534',
  '#22c55e',
  '#4ade80',
];

export default function MonthView({ habits, logs }: Props) {
  const now = new Date();
  const days = getMonthDays(now.getFullYear(), now.getMonth());
  const levels = heatmapLevels(habits, logs, days);
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const pad = firstDay === 0 ? 6 : firstDay - 1;

  const monthName = now.toLocaleDateString('de-DE', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <h3 className="font-medium mb-3 capitalize">{monthName}</h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-[var(--habit-muted)] mb-1">
        {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: pad }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {days.map((d) => {
          const level = levels[d] ?? 0;
          const dayNum = parseInt(d.split('-')[2], 10);
          return (
            <div
              key={d}
              className="aspect-square rounded-md flex flex-col items-center justify-center habits-mono text-xs"
              style={{ background: LEVEL_COLORS[level] }}
              title={`${d}: ${level}/4`}
            >
              {dayNum}
            </div>
          );
        })}
      </div>
    </div>
  );
}
