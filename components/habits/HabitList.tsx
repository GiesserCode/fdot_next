'use client';

import { useState, useTransition, useEffect } from 'react';
import type { Habit, HabitLog } from '@/lib/habits/types';
import HabitItem from './HabitItem';
import { reorderHabits } from '@/app/habits/actions';
import { todayStr, yesterdayStr } from '@/lib/habits/dates';
import { quoteOfDay } from '@/lib/habits/messages';

interface Props {
  habits: Habit[];
  logs: HabitLog[];
  showArchived?: boolean;
  onEdit: (habit: Habit) => void;
}

export default function HabitList({
  habits,
  logs,
  showArchived = false,
  onEdit,
}: Props) {
  const [viewDate, setViewDate] = useState<'today' | 'yesterday'>('today');
  const [ordered, setOrdered] = useState(habits);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [overIdx, setOverIdx] = useState<number | null>(null);
  const [, startTransition] = useTransition();

  const filtered = ordered.filter((h) =>
    showArchived ? h.archived : !h.archived
  );
  const date = viewDate === 'today' ? todayStr() : yesterdayStr();

  const handleDrop = (toIdx: number) => {
    if (dragIdx === null || dragIdx === toIdx) return;
    const next = [...filtered];
    const [moved] = next.splice(dragIdx, 1);
    next.splice(toIdx, 0, moved);
    setOrdered(
      habits
        .filter((h) => h.archived !== !showArchived)
        .sort((a, b) => {
          const ai = next.findIndex((x) => x.id === a.id);
          const bi = next.findIndex((x) => x.id === b.id);
          if (ai === -1 && bi === -1) return a.sort_order - b.sort_order;
          if (ai === -1) return 1;
          if (bi === -1) return -1;
          return ai - bi;
        })
        .concat(habits.filter((h) => h.archived === !showArchived))
    );
    startTransition(() => reorderHabits(next.map((h) => h.id)));
    setDragIdx(null);
    setOverIdx(null);
  };

  useEffect(() => {
    setOrdered(habits);
  }, [habits]);

  return (
    <div className="space-y-3">
      {!showArchived && (
        <div className="flex gap-2 mb-2">
          <button
            type="button"
            className={`px-3 py-1.5 rounded-lg text-sm ${
              viewDate === 'today'
                ? 'habit-btn'
                : 'habit-btn-ghost'
            }`}
            onClick={() => setViewDate('today')}
          >
            Heute
          </button>
          <button
            type="button"
            className={`px-3 py-1.5 rounded-lg text-sm ${
              viewDate === 'yesterday'
                ? 'habit-btn'
                : 'habit-btn-ghost'
            }`}
            onClick={() => setViewDate('yesterday')}
          >
            Gestern nachtragen
          </button>
        </div>
      )}

<blockquote className="habit-card p-4 italic text-[var(--habit-muted)] border-l-4 border-[var(--habit-accent)]">
        „{quoteOfDay()}“
      </blockquote>

      {filtered.length === 0 ? (
        <p className="text-[var(--habit-muted)] text-center py-8">
          {showArchived
            ? 'Keine archivierten Habits'
            : 'Noch keine Habits – drücke N für neu'}
        </p>
      ) : (
        filtered.map((habit, idx) => (
          <HabitItem
            key={habit.id}
            habit={habit}
            log={logs.find(
              (l) => l.habit_id === habit.id && l.log_date === date
            )}
            date={date}
            onEdit={onEdit}
            draggable={!showArchived}
            onDragStart={() => setDragIdx(idx)}
            onDragEnd={() => {
              setDragIdx(null);
              setOverIdx(null);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setOverIdx(idx);
            }}
            onDrop={() => handleDrop(idx)}
            isDragOver={overIdx === idx && dragIdx !== idx}
          />
        ))
      )}
    </div>
  );
}
