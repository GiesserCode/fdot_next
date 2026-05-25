'use client';

import { useState, useTransition } from 'react';
import type { Habit, HabitFormData, HabitCategory } from '@/lib/habits/types';
import {
  HABIT_CATEGORIES,
  HABIT_COLORS,
  CATEGORY_COLORS,
} from '@/lib/habits/constants';
import {
  createHabit,
  updateHabit,
  deleteHabit,
  archiveHabit,
} from '@/app/habits/actions';

interface Props {
  habit?: Habit | null;
  onClose: () => void;
}

const defaultForm: HabitFormData = {
  name: '',
  icon: '✅',
  category: 'Lifestyle',
  color: HABIT_COLORS[0],
  habit_type: 'daily',
  goal_count: 7,
  target_per_day: 1,
  is_counter: false,
  counter_goal: null,
};

export default function HabitForm({ habit, onClose }: Props) {
  const [form, setForm] = useState<HabitFormData>(
    habit
      ? {
          name: habit.name,
          icon: habit.icon,
          category: habit.category,
          color: habit.color,
          habit_type: habit.habit_type,
          goal_count: habit.goal_count,
          target_per_day: habit.target_per_day,
          is_counter: habit.is_counter,
          counter_goal: habit.counter_goal,
        }
      : defaultForm
  );
  const [pending, startTransition] = useTransition();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (habit) await updateHabit(habit.id, form);
      else await createHabit(form);
      onClose();
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-4">
      <form
        onSubmit={submit}
        className="habit-card w-full max-w-md p-5 max-h-[90vh] overflow-y-auto habit-slide-in"
      >
        <h2 className="text-xl font-bold mb-4">
          {habit ? 'Habit bearbeiten' : 'Neuer Habit'}
        </h2>

        <label className="block text-sm mb-1">Name</label>
        <input
          className="habit-input mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <label className="block text-sm mb-1">Icon (Emoji)</label>
        <input
          className="habit-input mb-3 w-20 text-center text-2xl"
          value={form.icon}
          onChange={(e) => setForm({ ...form, icon: e.target.value })}
          maxLength={4}
        />

        <label className="block text-sm mb-1">Kategorie</label>
        <select
          className="habit-input mb-3"
          value={form.category}
          onChange={(e) => {
            const cat = e.target.value as HabitCategory;
            setForm({
              ...form,
              category: cat,
              color: CATEGORY_COLORS[cat],
            });
          }}
        >
          {HABIT_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <label className="block text-sm mb-1">Farbe</label>
        <div className="flex gap-2 mb-3 flex-wrap">
          {HABIT_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              className={`w-8 h-8 rounded-full border-2 ${
                form.color === c ? 'border-white' : 'border-transparent'
              }`}
              style={{ background: c }}
              onClick={() => setForm({ ...form, color: c })}
            />
          ))}
        </div>

        <label className="block text-sm mb-1">Typ</label>
        <select
          className="habit-input mb-3"
          value={form.habit_type}
          onChange={(e) =>
            setForm({
              ...form,
              habit_type: e.target.value as HabitFormData['habit_type'],
            })
          }
        >
          <option value="daily">Täglich</option>
          <option value="weekly">Wöchentlich</option>
          <option value="monthly">Monatlich</option>
        </select>

        {(form.habit_type === 'weekly' || form.habit_type === 'monthly') && (
          <>
            <label className="block text-sm mb-1">Ziel pro Periode</label>
            <input
              type="number"
              className="habit-input mb-3 habits-mono"
              min={1}
              value={form.goal_count}
              onChange={(e) =>
                setForm({ ...form, goal_count: Number(e.target.value) })
              }
            />
          </>
        )}

        <label className="block text-sm mb-1">Mal pro Tag</label>
        <input
          type="number"
          className="habit-input mb-3 habits-mono"
          min={1}
          max={10}
          value={form.target_per_day}
          onChange={(e) =>
            setForm({ ...form, target_per_day: Number(e.target.value) })
          }
        />

        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.is_counter}
            onChange={(e) =>
              setForm({
                ...form,
                is_counter: e.target.checked,
                counter_goal: e.target.checked ? 8 : null,
              })
            }
          />
          <span className="text-sm">Zähler (z.B. Gläser Wasser)</span>
        </label>

        {form.is_counter && (
          <>
            <label className="block text-sm mb-1">Ziel-Anzahl</label>
            <input
              type="number"
              className="habit-input mb-3 habits-mono"
              min={1}
              value={form.counter_goal || 8}
              onChange={(e) =>
                setForm({
                  ...form,
                  counter_goal: Number(e.target.value),
                })
              }
            />
          </>
        )}

        <div className="flex gap-2 mt-4 flex-wrap">
          <button type="submit" className="habit-btn flex-1" disabled={pending}>
            {habit ? 'Speichern' : 'Erstellen'}
          </button>
          <button type="button" className="habit-btn-ghost px-4 py-2 rounded-lg" onClick={onClose}>
            Abbrechen
          </button>
        </div>

        {habit && (
          <div className="mt-4 pt-4 border-t border-[var(--habit-border)] flex gap-2">
            <button
              type="button"
              className="habit-btn-ghost px-3 py-2 rounded-lg text-sm flex-1"
              onClick={() =>
                startTransition(async () => {
                  await archiveHabit(habit.id, !habit.archived);
                  onClose();
                })
              }
            >
              {habit.archived ? 'Wiederherstellen' : 'Archivieren'}
            </button>
            <button
              type="button"
              className="text-red-400 text-sm px-3 py-2"
              onClick={() => {
                if (confirm('Habit wirklich löschen?')) {
                  startTransition(async () => {
                    await deleteHabit(habit.id);
                    onClose();
                  });
                }
              }}
            >
              Löschen
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
