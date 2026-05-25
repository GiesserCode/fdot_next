-- Habit Tracker Schema
-- Run in Supabase SQL Editor or via supabase db push

-- Habits
CREATE TABLE IF NOT EXISTS habits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT '✅',
  category TEXT NOT NULL DEFAULT 'Lifestyle',
  color TEXT NOT NULL DEFAULT '#6366f1',
  habit_type TEXT NOT NULL DEFAULT 'daily' CHECK (habit_type IN ('daily', 'weekly', 'monthly')),
  goal_count INTEGER NOT NULL DEFAULT 7,
  target_per_day INTEGER NOT NULL DEFAULT 1,
  is_counter BOOLEAN NOT NULL DEFAULT false,
  counter_goal INTEGER,
  sort_order INTEGER NOT NULL DEFAULT 0,
  archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Daily completions / counter logs
CREATE TABLE IF NOT EXISTS habit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  habit_id UUID NOT NULL REFERENCES habits(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  count INTEGER NOT NULL DEFAULT 1,
  is_retroactive BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (habit_id, log_date)
);

-- Streak freeze (1x per calendar month)
CREATE TABLE IF NOT EXISTS habit_streak_freezes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  freeze_date DATE NOT NULL,
  month_key TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, month_key)
);

-- Daily notes & reflection
CREATE TABLE IF NOT EXISTS habit_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  note_date DATE NOT NULL,
  plan_for_tomorrow TEXT DEFAULT '',
  reflection_good TEXT DEFAULT '',
  reflection_improve TEXT DEFAULT '',
  mood INTEGER CHECK (mood IS NULL OR (mood >= 1 AND mood <= 10)),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, note_date)
);

-- XP, level, achievements, preferences
CREATE TABLE IF NOT EXISTS habit_user_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  total_xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  achievements JSONB NOT NULL DEFAULT '[]'::jsonb,
  onboarding_completed BOOLEAN NOT NULL DEFAULT false,
  theme TEXT NOT NULL DEFAULT 'dark' CHECK (theme IN ('dark', 'light')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_habits_user_id ON habits(user_id);
CREATE INDEX IF NOT EXISTS idx_habits_user_sort ON habits(user_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_habit_logs_user_date ON habit_logs(user_id, log_date);
CREATE INDEX IF NOT EXISTS idx_habit_logs_habit_date ON habit_logs(habit_id, log_date);
CREATE INDEX IF NOT EXISTS idx_habit_notes_user_date ON habit_notes(user_id, note_date DESC);

-- updated_at trigger
CREATE OR REPLACE FUNCTION habits_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS habits_updated_at ON habits;
CREATE TRIGGER habits_updated_at
  BEFORE UPDATE ON habits
  FOR EACH ROW EXECUTE FUNCTION habits_set_updated_at();

DROP TRIGGER IF EXISTS habit_notes_updated_at ON habit_notes;
CREATE TRIGGER habit_notes_updated_at
  BEFORE UPDATE ON habit_notes
  FOR EACH ROW EXECUTE FUNCTION habits_set_updated_at();

DROP TRIGGER IF EXISTS habit_user_stats_updated_at ON habit_user_stats;
CREATE TRIGGER habit_user_stats_updated_at
  BEFORE UPDATE ON habit_user_stats
  FOR EACH ROW EXECUTE FUNCTION habits_set_updated_at();

-- RLS
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_streak_freezes ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_user_stats ENABLE ROW LEVEL SECURITY;

-- habits policies
CREATE POLICY "habits_select_own" ON habits FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "habits_insert_own" ON habits FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "habits_update_own" ON habits FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "habits_delete_own" ON habits FOR DELETE USING (auth.uid() = user_id);

-- habit_logs policies
CREATE POLICY "habit_logs_select_own" ON habit_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "habit_logs_insert_own" ON habit_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "habit_logs_update_own" ON habit_logs FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "habit_logs_delete_own" ON habit_logs FOR DELETE USING (auth.uid() = user_id);

-- habit_streak_freezes policies
CREATE POLICY "freezes_select_own" ON habit_streak_freezes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "freezes_insert_own" ON habit_streak_freezes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "freezes_delete_own" ON habit_streak_freezes FOR DELETE USING (auth.uid() = user_id);

-- habit_notes policies
CREATE POLICY "notes_select_own" ON habit_notes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "notes_insert_own" ON habit_notes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "notes_update_own" ON habit_notes FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "notes_delete_own" ON habit_notes FOR DELETE USING (auth.uid() = user_id);

-- habit_user_stats policies
CREATE POLICY "stats_select_own" ON habit_user_stats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "stats_insert_own" ON habit_user_stats FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "stats_update_own" ON habit_user_stats FOR UPDATE USING (auth.uid() = user_id);
