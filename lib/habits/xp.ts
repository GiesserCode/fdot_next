import { LEVEL_TITLES, XP_LEVEL_BASE, XP_PER_CHECK, XP_STREAK_BONUS_PER_DAY } from './constants';

export function xpForCheck(streakDays: number): number {
  return XP_PER_CHECK + streakDays * XP_STREAK_BONUS_PER_DAY;
}

export function levelFromXp(totalXp: number): number {
  let level = 1;
  let needed = XP_LEVEL_BASE;
  let accumulated = 0;
  while (accumulated + needed <= totalXp) {
    accumulated += needed;
    level++;
    needed = Math.floor(XP_LEVEL_BASE * (1 + level * 0.15));
  }
  return level;
}

export function xpProgressInLevel(totalXp: number): { current: number; needed: number; percent: number } {
  let level = 1;
  let needed = XP_LEVEL_BASE;
  let accumulated = 0;
  while (accumulated + needed <= totalXp) {
    accumulated += needed;
    level++;
    needed = Math.floor(XP_LEVEL_BASE * (1 + level * 0.15));
  }
  const current = totalXp - accumulated;
  return {
    current,
    needed,
    percent: Math.min(100, Math.round((current / needed) * 100)),
  };
}

export function titleForLevel(level: number): string {
  let title = LEVEL_TITLES[0].title;
  for (const t of LEVEL_TITLES) {
    if (level >= t.minLevel) title = t.title;
  }
  return title;
}
