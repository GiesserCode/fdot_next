export type HabitType = 'daily' | 'weekly' | 'monthly';
export type HabitCategory =
  | 'Gesundheit'
  | 'Fitness'
  | 'Lernen'
  | 'Lifestyle'
  | 'Produktivität'
  | 'Soziales'
  | 'Finanzen'
  | 'Sonstiges';

export type ViewMode = 'day' | 'week' | 'month' | 'year' | 'stats' | 'notes';

export interface Habit {
  id: string;
  user_id: string;
  name: string;
  icon: string;
  category: HabitCategory;
  color: string;
  habit_type: HabitType;
  goal_count: number;
  target_per_day: number;
  is_counter: boolean;
  counter_goal: number | null;
  sort_order: number;
  archived: boolean;
  created_at: string;
  updated_at: string;
}

export interface HabitLog {
  id: string;
  habit_id: string;
  user_id: string;
  log_date: string;
  count: number;
  is_retroactive: boolean;
  created_at: string;
}

export interface HabitNote {
  id: string;
  user_id: string;
  note_date: string;
  plan_for_tomorrow: string;
  reflection_good: string;
  reflection_improve: string;
  mood: number | null;
  created_at: string;
  updated_at: string;
}

export interface HabitStreakFreeze {
  id: string;
  user_id: string;
  freeze_date: string;
  month_key: string;
  created_at: string;
}

export interface HabitUserStats {
  user_id: string;
  total_xp: number;
  level: number;
  achievements: string[];
  onboarding_completed: boolean;
  theme: 'dark' | 'light';
  created_at: string;
  updated_at: string;
}

export interface HabitFormData {
  name: string;
  icon: string;
  category: HabitCategory;
  color: string;
  habit_type: HabitType;
  goal_count: number;
  target_per_day: number;
  is_counter: boolean;
  counter_goal: number | null;
}

export interface StreakInfo {
  current: number;
  longest: number;
}

export interface AchievementDef {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExportData {
  version: 1;
  exportedAt: string;
  habits: Habit[];
  logs: HabitLog[];
  notes: HabitNote[];
  stats: HabitUserStats | null;
  freezes: HabitStreakFreeze[];
}
