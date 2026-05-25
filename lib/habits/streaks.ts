import type { Habit, HabitLog, HabitStreakFreeze } from './types';
import { addDays, formatDate, parseDate, todayStr } from './dates';

export function isHabitCompleteOnDate(
  habit: Habit,
  log: HabitLog | undefined,
  date: string
): boolean {
  if (!log) return false;
  if (habit.is_counter && habit.counter_goal) {
    return log.count >= habit.counter_goal;
  }
  return log.count >= habit.target_per_day;
}

export function isDayFullyComplete(
  habits: Habit[],
  logs: HabitLog[],
  date: string
): boolean {
  const active = habits.filter((h) => !h.archived && h.habit_type === 'daily');
  if (active.length === 0) return false;
  return active.every((h) => {
    const log = logs.find((l) => l.habit_id === h.id && l.log_date === date);
    return isHabitCompleteOnDate(h, log, date);
  });
}

function isFrozen(date: string, freezes: HabitStreakFreeze[]): boolean {
  return freezes.some((f) => f.freeze_date === date);
}

export function calculateStreak(
  habits: Habit[],
  logs: HabitLog[],
  freezes: HabitStreakFreeze[],
  upToDate = todayStr()
): { current: number; longest: number } {
  const dailyHabits = habits.filter((h) => !h.archived && h.habit_type === 'daily');
  if (dailyHabits.length === 0) return { current: 0, longest: 0 };

  const start = addDays(upToDate, -400);
  let longest = 0;
  let run = 0;
  let current = 0;
  let foundToday = false;

  for (let d = start; d <= upToDate; d = addDays(d, 1)) {
    const complete =
      isDayFullyComplete(dailyHabits, logs, d) || isFrozen(d, freezes);
    if (complete) {
      run++;
      if (d === upToDate) {
        current = run;
        foundToday = true;
      }
      longest = Math.max(longest, run);
    } else {
      if (d < upToDate) run = 0;
      if (d === upToDate) current = 0;
    }
  }

  if (!foundToday && !isDayFullyComplete(dailyHabits, logs, upToDate)) {
    let c = 0;
    let d = addDays(upToDate, -1);
    while (d >= start) {
      if (
        isDayFullyComplete(dailyHabits, logs, d) ||
        isFrozen(d, freezes)
      ) {
        c++;
        d = addDays(d, -1);
      } else break;
    }
    current = c;
  }

  return { current, longest };
}

export function canUseFreezeThisMonth(
  freezes: HabitStreakFreeze[],
  dateStr: string
): boolean {
  const key = dateStr.slice(0, 7);
  return !freezes.some((f) => f.month_key === key);
}

export function completionRateForRange(
  habits: Habit[],
  logs: HabitLog[],
  dates: string[]
): number {
  const active = habits.filter((h) => !h.archived);
  if (active.length === 0 || dates.length === 0) return 0;
  let total = 0;
  let done = 0;
  for (const date of dates) {
    for (const h of active) {
      if (h.habit_type !== 'daily') continue;
      total++;
      const log = logs.find((l) => l.habit_id === h.id && l.log_date === date);
      if (isHabitCompleteOnDate(h, log, date)) done++;
    }
  }
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

export function weekdayStats(
  habits: Habit[],
  logs: HabitLog[],
  days: number
): number[] {
  const counts = [0, 0, 0, 0, 0, 0, 0];
  const totals = [0, 0, 0, 0, 0, 0, 0];
  const end = todayStr();
  for (let i = 0; i < days; i++) {
    const d = addDays(end, -i);
    const wd = parseDate(d).getDay();
    const idx = wd === 0 ? 6 : wd - 1;
    const active = habits.filter((h) => !h.archived && h.habit_type === 'daily');
    for (const h of active) {
      totals[idx]++;
      const log = logs.find((l) => l.habit_id === h.id && l.log_date === d);
      if (isHabitCompleteOnDate(h, log, d)) counts[idx]++;
    }
  }
  return counts.map((c, i) => (totals[i] > 0 ? Math.round((c / totals[i]) * 100) : 0));
}

export function categoryBreakdown(
  habits: Habit[],
  logs: HabitLog[],
  days: number
): { category: string; count: number; percent: number }[] {
  const map = new Map<string, number>();
  const end = todayStr();
  for (let i = 0; i < days; i++) {
    const d = addDays(end, -i);
    for (const h of habits.filter((x) => !x.archived)) {
      const log = logs.find((l) => l.habit_id === h.id && l.log_date === d);
      if (isHabitCompleteOnDate(h, log, d)) {
        map.set(h.category, (map.get(h.category) || 0) + 1);
      }
    }
  }
  const total = Array.from(map.values()).reduce((a, b) => a + b, 0) || 1;
  return Array.from(map.entries())
    .map(([category, count]) => ({
      category,
      count,
      percent: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count);
}

export function heatmapLevels(
  habits: Habit[],
  logs: HabitLog[],
  dates: string[]
): Record<string, number> {
  const result: Record<string, number> = {};
  const active = habits.filter((h) => !h.archived && h.habit_type === 'daily');
  for (const date of dates) {
    if (active.length === 0) {
      result[date] = 0;
      continue;
    }
    const done = active.filter((h) => {
      const log = logs.find((l) => l.habit_id === h.id && l.log_date === date);
      return isHabitCompleteOnDate(h, log, date);
    }).length;
    result[date] = Math.round((done / active.length) * 4);
  }
  return result;
}

export function weeklyScore(
  habits: Habit[],
  logs: HabitLog[],
  weekDates: string[]
): number {
  let score = 0;
  const active = habits.filter((h) => !h.archived && h.habit_type === 'daily');
  for (const date of weekDates) {
    for (const h of active) {
      const log = logs.find((l) => l.habit_id === h.id && l.log_date === date);
      if (isHabitCompleteOnDate(h, log, date)) score += 10;
    }
  }
  return score;
}
