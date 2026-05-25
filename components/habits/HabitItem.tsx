'use client';

import { useState, useTransition } from 'react';
import type { Habit, HabitLog } from '@/lib/habits/types';
import { isHabitCompleteOnDate } from '@/lib/habits/streaks';
import { toggleHabitLog } from '@/app/habits/actions';
import { yesterdayStr, todayStr } from '@/lib/habits/dates';

interface Props {
  habit: Habit;
  log?: HabitLog;
  date: string;
  onEdit: (habit: Habit) => void;
  draggable?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: () => void;
  isDragOver?: boolean;
}

export default function HabitItem({
  habit,
  log,
  date,
  onEdit,
  draggable = false,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
  isDragOver,
}: Props) {
  const [animating, setAnimating] = useState(false);
  const [pending, startTransition] = useTransition();
  const complete = isHabitCompleteOnDate(habit, log, date);
  const isRetro = log?.is_retroactive;
  const isYesterday = date === yesterdayStr();
  const target = habit.is_counter
    ? habit.counter_goal || 1
    : habit.target_per_day;
  const count = log?.count || 0;

  const handleCheck = () => {
    const retro = date !== todayStr();
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
    startTransition(async () => {
      await toggleHabitLog(habit.id, date, retro);
    });
  };

  return (
    <div
      className={`habit-card p-3 flex items-center gap-3 habit-slide-in transition-all ${
        isDragOver ? 'habit-drag-over' : ''
      } ${draggable ? 'cursor-grab active:cursor-grabbing' : ''}`}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{ borderLeft: `3px solid ${habit.color}` }}
    >
      {draggable && (
        <span className="text-[var(--habit-muted)] select-none" aria-hidden>
          ⠿
        </span>
      )}
      <button
        type="button"
        onClick={handleCheck}
        disabled={pending}
        className={`shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg transition-all ${
          complete
            ? 'border-transparent text-white'
            : 'border-[var(--habit-border)]'
        } ${animating ? 'habit-check-animate' : ''}`}
        style={{
          background: complete ? habit.color : 'transparent',
        }}
        aria-label={complete ? 'Abhaken rückgängig' : 'Abhaken'}
      >
        {complete ? '✓' : habit.icon}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium truncate">{habit.name}</span>
          {isRetro && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400">
              nachträglich
            </span>
          )}
          {isYesterday && date !== todayStr() && (
            <span className="text-[10px] text-[var(--habit-muted)]">
              Gestern
            </span>
          )}
        </div>
        <p className="text-xs text-[var(--habit-muted)]">
          {habit.category} · {habit.habit_type}
        </p>
        {habit.is_counter && (
          <div className="mt-1 flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-[var(--habit-border)] overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${Math.min(100, (count / target) * 100)}%`,
                  background: habit.color,
                }}
              />
            </div>
            <span className="habits-mono text-xs">
              {count}/{target}
            </span>
          </div>
        )}
        {habit.target_per_day > 1 && !habit.is_counter && (
          <span className="habits-mono text-xs text-[var(--habit-muted)]">
            {count}/{habit.target_per_day} heute
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => onEdit(habit)}
        className="text-[var(--habit-muted)] hover:text-[var(--habit-text)] p-1"
        aria-label="Bearbeiten"
      >
        ⋯
      </button>
    </div>
  );
}
