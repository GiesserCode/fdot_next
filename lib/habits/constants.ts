import type { AchievementDef, HabitCategory } from './types';

export const HABIT_CATEGORIES: HabitCategory[] = [
  'Gesundheit',
  'Fitness',
  'Lernen',
  'Lifestyle',
  'Produktivität',
  'Soziales',
  'Finanzen',
  'Sonstiges',
];

export const CATEGORY_COLORS: Record<HabitCategory, string> = {
  Gesundheit: '#22c55e',
  Fitness: '#f97316',
  Lernen: '#3b82f6',
  Lifestyle: '#a855f7',
  Produktivität: '#eab308',
  Soziales: '#ec4899',
  Finanzen: '#14b8a6',
  Sonstiges: '#6b7280',
};

export const HABIT_COLORS = [
  '#6366f1',
  '#22c55e',
  '#f97316',
  '#3b82f6',
  '#ec4899',
  '#eab308',
  '#14b8a6',
  '#ef4444',
];

export const LEVEL_TITLES: { minLevel: number; title: string }[] = [
  { minLevel: 1, title: 'Beginner' },
  { minLevel: 3, title: 'Consistent' },
  { minLevel: 6, title: 'Focused' },
  { minLevel: 10, title: 'Iron Will' },
  { minLevel: 15, title: 'Champion' },
  { minLevel: 20, title: 'Legend' },
];

export const XP_PER_CHECK = 10;
export const XP_STREAK_BONUS_PER_DAY = 2;
export const XP_LEVEL_BASE = 100;

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: 'first_check', title: 'Erster Schritt', description: 'Ersten Habit abgehakt', icon: '🎯' },
  { id: 'streak_7', title: '7-Tage-Streak', description: '7 Tage in Folge aktiv', icon: '🔥' },
  { id: 'streak_30', title: 'Monats-Streak', description: '30 Tage Streak', icon: '💎' },
  { id: 'perfect_week', title: 'Perfekte Woche', description: 'Alle Habits eine Woche lang', icon: '⭐' },
  { id: 'checks_100', title: '100 Abhakungen', description: '100 Habits erledigt', icon: '🏆' },
  { id: 'first_month', title: 'Erster Monat', description: '30 Tage Tracker genutzt', icon: '📅' },
  { id: 'level_10', title: 'Level 10', description: 'Level 10 erreicht', icon: '🚀' },
  { id: 'all_today', title: 'Perfekter Tag', description: 'Alle Habits an einem Tag', icon: '✨' },
];

export const MOTIVATIONAL_QUOTES = [
  'Kleine Schritte, große Wirkung.',
  'Heute ist der beste Tag zum Starten.',
  'Disziplin schlägt Motivation.',
  'Du bist stärker als deine Ausreden.',
  'Fortschritt, nicht Perfektion.',
  'Ein Habit nach dem anderen.',
  'Dein zukünftiges Ich wird dir danken.',
  'Konsistenz ist der Schlüssel.',
  'Jeder Tag ist eine neue Chance.',
  'Bleib dran – du schaffst das!',
];

export const DEMO_HABITS = [
  {
    name: 'Wasser trinken',
    icon: '💧',
    category: 'Gesundheit' as HabitCategory,
    color: '#3b82f6',
    habit_type: 'daily' as const,
    goal_count: 7,
    target_per_day: 1,
    is_counter: true,
    counter_goal: 8,
  },
  {
    name: '10 Minuten lesen',
    icon: '📚',
    category: 'Lernen' as HabitCategory,
    color: '#6366f1',
    habit_type: 'daily' as const,
    goal_count: 7,
    target_per_day: 1,
    is_counter: false,
    counter_goal: null,
  },
  {
    name: 'Spaziergang',
    icon: '🚶',
    category: 'Fitness' as HabitCategory,
    color: '#22c55e',
    habit_type: 'daily' as const,
    goal_count: 5,
    target_per_day: 1,
    is_counter: false,
    counter_goal: null,
  },
];
