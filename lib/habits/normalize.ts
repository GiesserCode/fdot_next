import type { HabitUserStats } from './types';

/** JSONB achievements can arrive as array or JSON string from Supabase */
export function normalizeAchievements(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((x): x is string => typeof x === 'string');
  }
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed)
        ? parsed.filter((x): x is string => typeof x === 'string')
        : [];
    } catch {
      return [];
    }
  }
  return [];
}

export function normalizeHabitStats(
  stats: Partial<HabitUserStats> | null,
  userId: string
): HabitUserStats {
  return {
    user_id: stats?.user_id ?? userId,
    total_xp: stats?.total_xp ?? 0,
    level: stats?.level ?? 1,
    achievements: normalizeAchievements(stats?.achievements),
    onboarding_completed: stats?.onboarding_completed ?? false,
    theme: stats?.theme === 'light' ? 'light' : 'dark',
    created_at: stats?.created_at ?? new Date().toISOString(),
    updated_at: stats?.updated_at ?? new Date().toISOString(),
  };
}
