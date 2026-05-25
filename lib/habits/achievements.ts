import { ACHIEVEMENTS } from './constants';
import type { Habit, HabitLog, HabitUserStats } from './types';
import { addDays, todayStr } from './dates';
import { calculateStreak, isDayFullyComplete } from './streaks';

export function checkNewAchievements(
  habits: Habit[],
  logs: HabitLog[],
  stats: HabitUserStats,
  freezes: { freeze_date: string }[]
): string[] {
  const unlocked = new Set(stats.achievements || []);
  const newly: string[] = [];
  const totalChecks = logs.reduce((s, l) => s + l.count, 0);
  const streak = calculateStreak(habits, logs, freezes as never);
  const today = todayStr();

  const tryUnlock = (id: string) => {
    if (!unlocked.has(id) && !newly.includes(id)) {
      newly.push(id);
      unlocked.add(id);
    }
  };

  if (totalChecks >= 1) tryUnlock('first_check');
  if (totalChecks >= 100) tryUnlock('checks_100');
  if (streak.current >= 7 || streak.longest >= 7) tryUnlock('streak_7');
  if (streak.current >= 30 || streak.longest >= 30) tryUnlock('streak_30');
  if (stats.level >= 10) tryUnlock('level_10');

  if (isDayFullyComplete(habits, logs, today)) tryUnlock('all_today');

  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(today, -6 + i));
  const perfect = weekDates.every((d) =>
    isDayFullyComplete(habits, logs, d)
  );
  if (perfect && habits.filter((h) => !h.archived).length > 0) {
    tryUnlock('perfect_week');
  }

  const oldest = logs.length > 0
    ? logs.reduce((min, l) => (l.log_date < min ? l.log_date : min), today)
    : today;
  const daysUsed = Math.abs(
    Math.floor(
      (new Date(today).getTime() - new Date(oldest).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );
  if (daysUsed >= 30) tryUnlock('first_month');

  return newly;
}

export function getAchievement(id: string) {
  return ACHIEVEMENTS.find((a) => a.id === id);
}
