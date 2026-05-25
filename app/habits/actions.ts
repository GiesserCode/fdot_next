'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import type { HabitFormData } from '@/lib/habits/types';
import { DEMO_HABITS } from '@/lib/habits/constants';
import { xpForCheck, levelFromXp } from '@/lib/habits/xp';
import { todayStr, monthKey } from '@/lib/habits/dates';
import { calculateStreak } from '@/lib/habits/streaks';
import { checkNewAchievements } from '@/lib/habits/achievements';
import { normalizeAchievements } from '@/lib/habits/normalize';

async function getSupabase() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error('Nicht angemeldet');
  return { supabase, user };
}

export async function ensureUserStats() {
  const { supabase, user } = await getSupabase();
  const { data } = await supabase
    .from('habit_user_stats')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle();
  if (!data) {
    const { error } = await supabase
      .from('habit_user_stats')
      .insert({ user_id: user.id });
    if (error) throw new Error(error.message);
  }
}

export async function createHabit(form: HabitFormData) {
  const { supabase, user } = await getSupabase();
  const { data: maxOrder } = await supabase
    .from('habits')
    .select('sort_order')
    .eq('user_id', user.id)
    .order('sort_order', { ascending: false })
    .limit(1)
    .maybeSingle();

  const { error } = await supabase.from('habits').insert({
    user_id: user.id,
    ...form,
    sort_order: (maxOrder?.sort_order ?? -1) + 1,
  });
  if (error) throw new Error(error.message);
  revalidatePath('/habits');
}

export async function updateHabit(id: string, form: HabitFormData) {
  const { supabase, user } = await getSupabase();
  const { error } = await supabase
    .from('habits')
    .update(form)
    .eq('id', id)
    .eq('user_id', user.id);
  if (error) throw new Error(error.message);
  revalidatePath('/habits');
}

export async function deleteHabit(id: string) {
  const { supabase, user } = await getSupabase();
  const { error } = await supabase
    .from('habits')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);
  if (error) throw new Error(error.message);
  revalidatePath('/habits');
}

export async function archiveHabit(id: string, archived: boolean) {
  const { supabase, user } = await getSupabase();
  const { error } = await supabase
    .from('habits')
    .update({ archived })
    .eq('id', id)
    .eq('user_id', user.id);
  if (error) throw new Error(error.message);
  revalidatePath('/habits');
}

export async function reorderHabits(orderedIds: string[]) {
  const { supabase, user } = await getSupabase();
  for (let i = 0; i < orderedIds.length; i++) {
    await supabase
      .from('habits')
      .update({ sort_order: i })
      .eq('id', orderedIds[i])
      .eq('user_id', user.id);
  }
  revalidatePath('/habits');
}

export async function toggleHabitLog(
  habitId: string,
  date: string,
  isRetroactive: boolean,
  increment = true
) {
  const { supabase, user } = await getSupabase();

  const { data: habit } = await supabase
    .from('habits')
    .select('*')
    .eq('id', habitId)
    .single();

  if (!habit) throw new Error('Habit nicht gefunden');

  const { data: existing } = await supabase
    .from('habit_logs')
    .select('*')
    .eq('habit_id', habitId)
    .eq('log_date', date)
    .maybeSingle();

  const target = habit.is_counter
    ? habit.counter_goal || 1
    : habit.target_per_day;

  if (existing) {
    let newCount = existing.count;
    if (habit.is_counter && increment) {
      newCount = existing.count >= target ? 0 : existing.count + 1;
    } else if (!habit.is_counter) {
      newCount = existing.count >= target ? 0 : target;
    } else {
      newCount = Math.max(0, existing.count - 1);
    }

    if (newCount <= 0) {
      await supabase.from('habit_logs').delete().eq('id', existing.id);
    } else {
      await supabase
        .from('habit_logs')
        .update({ count: newCount, is_retroactive: isRetroactive })
        .eq('id', existing.id);
    }
  } else {
    await supabase.from('habit_logs').insert({
      habit_id: habitId,
      user_id: user.id,
      log_date: date,
      count: habit.is_counter ? 1 : target,
      is_retroactive: isRetroactive,
    });
    await addXp(user.id, supabase);
  }

  revalidatePath('/habits');
}

async function addXp(
  userId: string,
  supabase: ReturnType<typeof createClient>
) {
  const [{ data: habits }, { data: logs }, { data: freezes }, { data: stats }] =
    await Promise.all([
      supabase.from('habits').select('*').eq('user_id', userId),
      supabase.from('habit_logs').select('*').eq('user_id', userId),
      supabase.from('habit_streak_freezes').select('*').eq('user_id', userId),
      supabase.from('habit_user_stats').select('*').eq('user_id', userId).single(),
    ]);

  const streak = calculateStreak(habits || [], logs || [], freezes || []);
  const gain = xpForCheck(streak.current);
  const newXp = (stats?.total_xp || 0) + gain;
  const newLevel = levelFromXp(newXp);

  const achievements = checkNewAchievements(
    habits || [],
    logs || [],
    {
      ...(stats || {
        user_id: userId,
        total_xp: 0,
        level: 1,
        achievements: [],
        onboarding_completed: false,
        theme: 'dark',
        created_at: '',
        updated_at: '',
      }),
      total_xp: newXp,
      level: newLevel,
    },
    freezes || []
  );

  const merged = normalizeAchievements(stats?.achievements).concat(achievements);
  const allAchievements = Array.from(new Set(merged));

  const { error: xpError } = await supabase
    .from('habit_user_stats')
    .update({
      total_xp: newXp,
      level: newLevel,
      achievements: allAchievements,
    })
    .eq('user_id', userId);
  if (xpError) throw new Error(xpError.message);
}

export async function useStreakFreeze(freezeDate: string) {
  const { supabase, user } = await getSupabase();
  const key = monthKey(freezeDate);
  const { data: existing } = await supabase
    .from('habit_streak_freezes')
    .select('*')
    .eq('user_id', user.id)
    .eq('month_key', key)
    .maybeSingle();
  if (existing) throw new Error('Streak-Schutz diesen Monat bereits genutzt');

  const { error } = await supabase.from('habit_streak_freezes').insert({
    user_id: user.id,
    freeze_date: freezeDate,
    month_key: key,
  });
  if (error) throw new Error(error.message);
  revalidatePath('/habits');
}

export async function saveNote(
  date: string,
  data: {
    plan_for_tomorrow?: string;
    reflection_good?: string;
    reflection_improve?: string;
    mood?: number | null;
  }
) {
  const { supabase, user } = await getSupabase();
  const { error } = await supabase.from('habit_notes').upsert(
    {
      user_id: user.id,
      note_date: date,
      ...data,
    },
    { onConflict: 'user_id,note_date' }
  );
  if (error) throw new Error(error.message);
  revalidatePath('/habits');
}

export async function completeOnboarding() {
  const { supabase, user } = await getSupabase();
  await ensureUserStats();

  const { count } = await supabase
    .from('habits')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  if (!count || count === 0) {
  const rows = DEMO_HABITS.map((habit, i) => ({
    user_id: user.id,
    name: habit.name,
    icon: habit.icon,
    category: habit.category,
    color: habit.color,
    habit_type: habit.habit_type,
    goal_count: habit.goal_count,
    target_per_day: habit.target_per_day,
    is_counter: habit.is_counter,
    counter_goal: habit.counter_goal,
    archived: false,
    sort_order: i,
  }));

  const { error: habitsError } = await supabase.from('habits').insert(rows);
  if (habitsError) {
    throw new Error(`Demo-Habits konnten nicht erstellt werden: ${habitsError.message}`);
  }
  }

  const { error: statsError } = await supabase
    .from('habit_user_stats')
    .update({ onboarding_completed: true })
    .eq('user_id', user.id);
  if (statsError) {
    throw new Error(`Onboarding konnte nicht gespeichert werden: ${statsError.message}`);
  }

  revalidatePath('/habits');
}

export async function skipOnboarding() {
  const { supabase, user } = await getSupabase();
  await ensureUserStats();

  const { error } = await supabase
    .from('habit_user_stats')
    .update({ onboarding_completed: true })
    .eq('user_id', user.id);
  if (error) {
    throw new Error(`Onboarding konnte nicht gespeichert werden: ${error.message}`);
  }

  revalidatePath('/habits');
}

export async function setTheme(theme: 'dark' | 'light') {
  const { supabase, user } = await getSupabase();
  await ensureUserStats();
  const { error } = await supabase
    .from('habit_user_stats')
    .update({ theme })
    .eq('user_id', user.id);
  if (error) throw new Error(error.message);
  revalidatePath('/habits');
}

export async function importHabitData(json: string) {
  const { supabase, user } = await getSupabase();
  const data = JSON.parse(json);
  if (data.habits) {
    for (const h of data.habits) {
      const { id: _id, user_id: _uid, ...rest } = h;
      await supabase.from('habits').insert({ ...rest, user_id: user.id });
    }
  }
  if (data.logs) {
    for (const l of data.logs) {
      const { id: _id, user_id: _uid, ...rest } = l;
      await supabase.from('habit_logs').upsert(
        { ...rest, user_id: user.id },
        { onConflict: 'habit_id,log_date', ignoreDuplicates: true }
      );
    }
  }
  revalidatePath('/habits');
}
