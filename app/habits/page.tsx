import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { ensureUserStats } from './actions';
import HabitTrackerApp from '@/components/habits/HabitTrackerApp';
import MigrationRequired from '@/components/habits/MigrationRequired';
import { normalizeHabitStats } from '@/lib/habits/normalize';

export const dynamic = 'force-dynamic';

function isMissingTableError(error: { code?: string; message?: string } | null) {
  if (!error) return false;
  const msg = error.message?.toLowerCase() ?? '';
  return (
    error.code === '42P01' ||
    error.code === 'PGRST205' ||
    msg.includes('does not exist') ||
    msg.includes('schema cache')
  );
}

export default async function HabitsPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: activeSession } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!activeSession || !user) {
    redirect('/login');
  }

  try {
    await ensureUserStats();
  } catch (e) {
    const err = e as { message?: string };
    if (err.message?.includes('does not exist') || err.message?.includes('habit_user_stats')) {
      return <MigrationRequired message={err.message} />;
    }
    throw e;
  }

  const [
    { data: habits, error: habitsError },
    { data: logs, error: logsError },
    { data: notes, error: notesError },
    { data: stats, error: statsError },
    { data: freezes, error: freezesError },
  ] = await Promise.all([
    supabase
      .from('habits')
      .select('*')
      .eq('user_id', user.id)
      .order('sort_order', { ascending: true }),
    supabase.from('habit_logs').select('*').eq('user_id', user.id),
    supabase
      .from('habit_notes')
      .select('*')
      .eq('user_id', user.id)
      .order('note_date', { ascending: false })
      .limit(30),
    supabase
      .from('habit_user_stats')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle(),
    supabase.from('habit_streak_freezes').select('*').eq('user_id', user.id),
  ]);

  const dbError =
    habitsError || logsError || notesError || statsError || freezesError;
  if (isMissingTableError(dbError)) {
    return <MigrationRequired message={dbError?.message} />;
  }

  return (
    <HabitTrackerApp
      initialHabits={habits || []}
      initialLogs={logs || []}
      initialNotes={notes || []}
      initialStats={normalizeHabitStats(stats, user.id)}
      initialFreezes={freezes || []}
      userId={user.id}
    />
  );
}
