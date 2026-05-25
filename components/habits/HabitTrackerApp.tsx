'use client';

import { useCallback, useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import type {
  Habit,
  HabitLog,
  HabitNote,
  HabitStreakFreeze,
  HabitUserStats,
  ViewMode,
} from '@/lib/habits/types';
import HabitHeader from './HabitHeader';
import HabitNav from './HabitNav';
import HabitList from './HabitList';
import HabitForm from './HabitForm';
import WeekView from './WeekView';
import MonthView from './MonthView';
import StatsView from './StatsView';
import NotesView from './NotesView';
import OnboardingModal from './OnboardingModal';
import ExportImport from './ExportImport';
import Confetti from './Confetti';
import AchievementToast from './AchievementToast';
import HeatmapChart from './charts/HeatmapChart';
import { setTheme, toggleHabitLog } from '@/app/habits/actions';
import {
  completionRateForRange,
  heatmapLevels,
  isDayFullyComplete,
} from '@/lib/habits/streaks';
import { getYearHeatmapDates, todayStr } from '@/lib/habits/dates';
import { getAchievement } from '@/lib/habits/achievements';
import { normalizeAchievements } from '@/lib/habits/normalize';

interface Props {
  initialHabits: Habit[];
  initialLogs: HabitLog[];
  initialNotes: HabitNote[];
  initialStats: HabitUserStats;
  initialFreezes: HabitStreakFreeze[];
  userId: string;
}

export default function HabitTrackerApp({
  initialHabits,
  initialLogs,
  initialNotes,
  initialStats,
  initialFreezes,
}: Props) {
  const router = useRouter();
  const [view, setView] = useState<ViewMode>('day');
  const [showForm, setShowForm] = useState(false);
  const [editHabit, setEditHabit] = useState<Habit | null>(null);
  const [showArchived, setShowArchived] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [toastId, setToastId] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const habits = initialHabits;
  const logs = initialLogs;
  const stats = initialStats;
  const theme = stats.theme || 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('habits-light', theme === 'light');
    const root = document.querySelector('.habits-root');
    root?.classList.toggle('habits-light', theme === 'light');
  }, [theme]);

  const activeHabits = habits.filter((h) => !h.archived && h.habit_type === 'daily');
  const todayComplete = isDayFullyComplete(habits, logs, todayStr());
  const todayPercent = completionRateForRange(habits, logs, [todayStr()]);

  useEffect(() => {
    if (todayPercent === 100 && activeHabits.length > 0) {
      setConfetti(true);
      const t = setTimeout(() => setConfetti(false), 4000);
      return () => clearTimeout(t);
    }
  }, [todayPercent, activeHabits.length]);

  useEffect(() => {
    const prev = JSON.parse(
      sessionStorage.getItem('habit-achievements') || '[]'
    ) as string[];
    const current = normalizeAchievements(stats.achievements);
    const newOne = current.find((id) => !prev.includes(id));
    if (newOne) {
      setToastId(newOne);
      sessionStorage.setItem(
        'habit-achievements',
        JSON.stringify(current)
      );
      const t = setTimeout(() => setToastId(null), 5000);
      return () => clearTimeout(t);
    }
    sessionStorage.setItem('habit-achievements', JSON.stringify(current));
  }, [stats.achievements]);

  const openNew = useCallback(() => {
    setEditHabit(null);
    setShowForm(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        openNew();
      }
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) {
        const h = activeHabits[num - 1];
        if (h) {
          e.preventDefault();
          startTransition(() => toggleHabitLog(h.id, todayStr(), false));
        }
      }
    },
    [activeHabits, openNew]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const yearDates = getYearHeatmapDates();
  const heatLevels = heatmapLevels(habits, logs, yearDates);

  return (
    <main className="max-w-2xl mx-auto px-4 py-6 pb-24">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="habit-btn-ghost w-10 h-10 rounded-lg"
            onClick={() =>
              startTransition(() =>
                setTheme(theme === 'dark' ? 'light' : 'dark')
              )
            }
            aria-label="Theme wechseln"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            type="button"
            className="habit-btn px-4 py-2"
            onClick={openNew}
          >
            + Neu
          </button>
        </div>
      </div>

      <HabitHeader
        habits={habits}
        logs={logs}
        stats={stats}
        freezes={initialFreezes}
      />

      <HabitNav view={view} onChange={setView} />

      {view === 'day' && (
        <>
          <HabitList
            habits={habits}
            logs={logs}
            showArchived={showArchived}
            onEdit={(h) => {
              setEditHabit(h);
              setShowForm(true);
            }}
          />
          <button
            type="button"
            className="text-sm text-[var(--habit-muted)] mt-4"
            onClick={() => setShowArchived(!showArchived)}
          >
            {showArchived ? 'Aktive anzeigen' : 'Archiv anzeigen'}
          </button>
        </>
      )}

      {view === 'week' && <WeekView habits={habits} logs={logs} />}
      {view === 'month' && <MonthView habits={habits} logs={logs} />}
      {view === 'year' && (
        <div className="habit-card p-4">
          <HeatmapChart levels={heatLevels} dates={yearDates} cellSize={12} />
        </div>
      )}
      {view === 'stats' && (
        <StatsView habits={habits} logs={logs} freezes={initialFreezes} />
      )}
      {view === 'notes' && <NotesView notes={initialNotes} />}

      <footer className="mt-8 pt-4 border-t border-[var(--habit-border)] space-y-4">
        <ExportImport
          habits={habits}
          logs={logs}
          notes={initialNotes}
          stats={stats}
          freezes={initialFreezes}
        />
        {stats.achievements && stats.achievements.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {stats.achievements.map((id) => {
              const a = getAchievement(id);
              return a ? (
                <span
                  key={id}
                  className="habit-card px-2 py-1 text-xs"
                  title={a.description}
                >
                  {a.icon} {a.title}
                </span>
              ) : null;
            })}
          </div>
        )}
        <p className="text-xs text-[var(--habit-muted)]">
          Shortcuts: N = neu, 1–9 = abhaken
        </p>
      </footer>

      {showForm && (
        <HabitForm
          habit={editHabit}
          onClose={() => {
            setShowForm(false);
            setEditHabit(null);
            router.refresh();
          }}
        />
      )}

      {!stats.onboarding_completed && habits.length === 0 && (
        <OnboardingModal />
      )}

      <Confetti active={confetti && todayComplete} />
      <AchievementToast
        achievementId={toastId}
        onClose={() => setToastId(null)}
      />
    </main>
  );
}
