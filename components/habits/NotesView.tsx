'use client';

import { useState, useTransition } from 'react';
import type { HabitNote } from '@/lib/habits/types';
import { saveNote } from '@/app/habits/actions';
import { todayStr, addDays } from '@/lib/habits/dates';
import { quoteOfDay } from '@/lib/habits/messages';

interface Props {
  notes: HabitNote[];
}

export default function NotesView({ notes }: Props) {
  const today = todayStr();
  const tomorrow = addDays(today, 1);
  const todayNote = notes.find((n) => n.note_date === today);
  const [plan, setPlan] = useState(todayNote?.plan_for_tomorrow || '');
  const [good, setGood] = useState(todayNote?.reflection_good || '');
  const [improve, setImprove] = useState(todayNote?.reflection_improve || '');
  const [mood, setMood] = useState(todayNote?.mood ?? 5);
  const [search, setSearch] = useState('');
  const [pending, startTransition] = useTransition();

  const save = () => {
    startTransition(async () => {
      await saveNote(today, {
        plan_for_tomorrow: plan,
        reflection_good: good,
        reflection_improve: improve,
        mood,
      });
    });
  };

  const filtered = notes.filter(
    (n) =>
      n.note_date.includes(search) ||
      n.plan_for_tomorrow.toLowerCase().includes(search.toLowerCase()) ||
      n.reflection_good.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <blockquote className="habit-card p-4 italic text-[var(--habit-muted)] border-l-4 border-[var(--habit-accent)]">
        „{quoteOfDay()}“
      </blockquote>

      <section className="habit-card p-4 space-y-3">
        <h3 className="font-medium">Plan für morgen ({tomorrow})</h3>
        <textarea
          className="habit-input min-h-[80px] resize-y"
          placeholder="Was möchtest du morgen erreichen?"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          onBlur={save}
        />
      </section>

      <section className="habit-card p-4 space-y-4">
        <h3 className="font-medium">Abend-Reflexion</h3>
        <div>
          <label className="text-sm text-[var(--habit-muted)]">
            Was lief gut?
          </label>
          <input
            className="habit-input mt-1"
            value={good}
            onChange={(e) => setGood(e.target.value)}
            onBlur={save}
          />
        </div>
        <div>
          <label className="text-sm text-[var(--habit-muted)]">
            Was verbessern?
          </label>
          <input
            className="habit-input mt-1"
            value={improve}
            onChange={(e) => setImprove(e.target.value)}
            onBlur={save}
          />
        </div>
        <div>
          <label className="text-sm text-[var(--habit-muted)]">
            Stimmung: {mood}/10
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={mood}
            className="w-full mt-2"
            onChange={(e) => setMood(Number(e.target.value))}
            onMouseUp={save}
            onTouchEnd={save}
          />
        </div>
        <button
          type="button"
          className="habit-btn w-full"
          onClick={save}
          disabled={pending}
        >
          Speichern
        </button>
      </section>

      <section className="habit-card p-4">
        <h3 className="font-medium mb-3">Archiv (letzte 30)</h3>
        <input
          className="habit-input mb-3"
          placeholder="Suchen…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="space-y-3 max-h-64 overflow-y-auto">
          {filtered.map((n) => (
            <li
              key={n.id}
              className="text-sm border-b border-[var(--habit-border)] pb-2"
            >
              <span className="habits-mono text-[var(--habit-muted)]">
                {n.note_date}
              </span>
              {n.plan_for_tomorrow && (
                <p className="mt-1">📋 {n.plan_for_tomorrow}</p>
              )}
              {n.reflection_good && (
                <p className="text-[var(--habit-muted)]">✓ {n.reflection_good}</p>
              )}
              {n.mood && (
                <p className="habits-mono text-xs">Stimmung: {n.mood}/10</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
