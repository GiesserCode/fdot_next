'use client';

import type { Habit, HabitLog } from '@/lib/habits/types';
import { getWeekDates, todayStr, WEEKDAY_LABELS } from '@/lib/habits/dates';
import { isHabitCompleteOnDate } from '@/lib/habits/streaks';

interface Props {
  habits: Habit[];
  logs: HabitLog[];
}

export default function WeekView({ habits, logs }: Props) {
  const dates = getWeekDates(todayStr());
  const active = habits.filter((h) => !h.archived && h.habit_type === 'daily');

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[480px]">
        <thead>
          <tr>
            <th className="text-left p-2 text-[var(--habit-muted)]">Habit</th>
            {dates.map((d, i) => (
              <th
                key={d}
                className={`p-2 text-center habits-mono text-xs ${
                  d === todayStr() ? 'text-[var(--habit-accent)]' : ''
                }`}
              >
                {WEEKDAY_LABELS[i]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {active.map((h) => (
            <tr key={h.id} className="border-t border-[var(--habit-border)]">
              <td className="p-2 flex items-center gap-2">
                <span>{h.icon}</span>
                <span className="truncate max-w-[100px]">{h.name}</span>
              </td>
              {dates.map((d) => {
                const log = logs.find(
                  (l) => l.habit_id === h.id && l.log_date === d
                );
                const done = isHabitCompleteOnDate(h, log, d);
                return (
                  <td key={d} className="p-2 text-center">
                    <span
                      className="inline-block w-6 h-6 rounded-md"
                      style={{
                        background: done ? h.color : 'var(--habit-border)',
                        opacity: done ? 1 : 0.3,
                      }}
                      title={done ? 'Erledigt' : 'Offen'}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
