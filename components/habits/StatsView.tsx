'use client';

import { useState } from 'react';
import type { Habit, HabitLog, HabitStreakFreeze } from '@/lib/habits/types';
import {
  calculateStreak,
  completionRateForRange,
  weekdayStats,
  categoryBreakdown,
  heatmapLevels,
  canUseFreezeThisMonth,
} from '@/lib/habits/streaks';
import { getLastNDays, getYearHeatmapDates, todayStr } from '@/lib/habits/dates';
import HeatmapChart from './charts/HeatmapChart';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import DonutChart from './charts/DonutChart';
import StreakFlame from './StreakFlame';
import { useStreakFreeze } from '@/app/habits/actions';
import { useTransition } from 'react';

interface Props {
  habits: Habit[];
  logs: HabitLog[];
  freezes: HabitStreakFreeze[];
}

type Range = 7 | 30 | 90 | 365;

export default function StatsView({ habits, logs, freezes }: Props) {
  const [range, setRange] = useState<Range>(30);
  const [pending, startTransition] = useTransition();
  const streak = calculateStreak(habits, logs, freezes);
  const dates = getLastNDays(range);
  const lineData = dates.map((d) => ({
    label: d.slice(5),
    value: completionRateForRange(habits, logs, [d]),
  }));
  const weekdays = weekdayStats(habits, logs, range);
  const categories = categoryBreakdown(habits, logs, range);
  const yearDates = getYearHeatmapDates();
  const heatLevels = heatmapLevels(habits, logs, yearDates);
  const canFreeze = canUseFreezeThisMonth(freezes, todayStr());

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-6 habit-card p-4">
        <StreakFlame streak={streak.current} />
        <div>
          <p className="text-sm text-[var(--habit-muted)]">Aktueller Streak</p>
          <p className="habits-mono text-2xl font-bold">{streak.current} Tage</p>
        </div>
        <div>
          <p className="text-sm text-[var(--habit-muted)]">Längster Streak</p>
          <p className="habits-mono text-2xl font-bold">{streak.longest} Tage</p>
        </div>
        {canFreeze && (
          <button
            type="button"
            className="habit-btn-ghost px-3 py-2 rounded-lg text-sm"
            disabled={pending}
          >
            ❄️ Streak-Schutz nutzen
          </button>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        {([7, 30, 90, 365] as Range[]).map((r) => (
          <button
            key={r}
            type="button"
            className={`px-3 py-1 rounded-lg text-sm ${
              range === r ? 'habit-btn' : 'habit-btn-ghost'
            }`}
            onClick={() => setRange(r)}
          >
            {r === 365 ? '1 Jahr' : `${r} Tage`}
          </button>
        ))}
      </div>

      <div className="habit-card p-4">
        <h3 className="font-medium mb-3">Completion-Rate</h3>
        <LineChart data={lineData} />
      </div>

      <div className="habit-card p-4">
        <h3 className="font-medium mb-3">Wochentags-Analyse</h3>
        <BarChart values={weekdays} />
      </div>

      <div className="habit-card p-4">
        <h3 className="font-medium mb-3">Kategorien</h3>
        <DonutChart slices={categories} />
      </div>

      <div className="habit-card p-4">
        <h3 className="font-medium mb-3">Jahres-Heatmap</h3>
        <HeatmapChart levels={heatLevels} dates={yearDates} />
      </div>
    </div>
  );
}
