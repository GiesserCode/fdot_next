'use client';

import type { Habit, HabitLog, HabitUserStats, HabitStreakFreeze } from '@/lib/habits/types';
import CompletionRing from './CompletionRing';
import StreakFlame from './StreakFlame';
import { completionRateForRange, calculateStreak, weeklyScore } from '@/lib/habits/streaks';
import { getWeekDates, todayStr, addDays } from '@/lib/habits/dates';
import { timeGreeting, remainingMessage } from '@/lib/habits/messages';
import { titleForLevel, xpProgressInLevel } from '@/lib/habits/xp';

interface Props {
  habits: Habit[];
  logs: HabitLog[];
  stats: HabitUserStats;
  freezes: HabitStreakFreeze[];
}

export default function HabitHeader({
  habits,
  logs,
  stats,
  freezes,
}: Props) {
  const today = todayStr();
  const percent = completionRateForRange(habits, logs, [today]);
  const streak = calculateStreak(habits, logs, freezes);
  const thisWeek = getWeekDates(today);
  const lastWeek = getWeekDates(addDays(today, -7));
  const scoreNow = weeklyScore(habits, logs, thisWeek);
  const scorePrev = weeklyScore(habits, logs, lastWeek);
  const trend = scoreNow >= scorePrev ? '↑' : '↓';
  const xpProg = xpProgressInLevel(stats.total_xp);

  return (
    <header className="habit-card p-4 mb-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-[200px]">
          <p className="text-sm text-[var(--habit-muted)]">{timeGreeting()}</p>
          <p className="font-medium mt-1">{remainingMessage(habits, logs, today)}</p>
          <div className="mt-2 flex items-center gap-3 text-sm">
            <span>
              Level {stats.level}{' '}
              <span className="text-[var(--habit-muted)]">
                ({titleForLevel(stats.level)})
              </span>
            </span>
            <span className="habits-mono text-xs">
              {stats.total_xp} XP · {xpProg.percent}% zum nächsten Level
            </span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-[var(--habit-border)] max-w-xs overflow-hidden">
            <div
              className="h-full bg-[var(--habit-accent)] transition-all"
              style={{ width: `${xpProg.percent}%` }}
            />
          </div>
        </div>

        <CompletionRing percent={percent} />

        <StreakFlame streak={streak.current} />

        <div className="text-center">
          <p className="text-xs text-[var(--habit-muted)]">Wochen-Score</p>
          <p className="habits-mono text-xl font-bold">
            {scoreNow} {trend}
          </p>
          <p className="text-xs text-[var(--habit-muted)]">
            vs. {scorePrev} Vorwoche
          </p>
        </div>
      </div>
    </header>
  );
}
