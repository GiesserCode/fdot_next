'use client';

import { useRef, useTransition } from 'react';
import type { ExportData, Habit, HabitLog, HabitNote, HabitStreakFreeze, HabitUserStats } from '@/lib/habits/types';
import { importHabitData } from '@/app/habits/actions';

interface Props {
  habits: Habit[];
  logs: HabitLog[];
  notes: HabitNote[];
  stats: HabitUserStats;
  freezes: HabitStreakFreeze[];
}

export default function ExportImport({
  habits,
  logs,
  notes,
  stats,
  freezes,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();

  const exportJson = () => {
    const data: ExportData = {
      version: 1,
      exportedAt: new Date().toISOString(),
      habits,
      logs,
      notes,
      stats,
      freezes,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `habits-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      startTransition(async () => {
        await importHabitData(reader.result as string);
        window.location.reload();
      });
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        type="button"
        className="habit-btn-ghost px-3 py-2 rounded-lg text-sm"
        onClick={exportJson}
      >
        📤 Export JSON
      </button>
      <button
        type="button"
        className="habit-btn-ghost px-3 py-2 rounded-lg text-sm"
        disabled={pending}
        onClick={() => inputRef.current?.click()}
      >
        📥 Import
      </button>
      <input
        ref={inputRef}
        type="file"
        accept=".json"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) importJson(f);
        }}
      />
    </div>
  );
}
