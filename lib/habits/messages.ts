import type { Habit } from './types';
import { isHabitCompleteOnDate } from './streaks';
import type { HabitLog } from './types';

export function timeGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Guten Morgen! Starte stark.';
  if (h < 17) return 'Guten Tag! Bleib am Ball.';
  if (h < 21) return 'Guten Abend! Noch ein paar Habits?';
  return 'Gute Nacht! Reflektiere deinen Tag.';
}

export function remainingMessage(
  habits: Habit[],
  logs: HabitLog[],
  date: string
): string {
  const active = habits.filter((h) => !h.archived && h.habit_type === 'daily');
  const remaining = active.filter((h) => {
    const log = logs.find((l) => l.habit_id === h.id && l.log_date === date);
    return !isHabitCompleteOnDate(h, log, date);
  }).length;
  if (remaining === 0) return 'Alle Habits erledigt – fantastisch!';
  if (remaining === 1) return 'Noch 1 Habit übrig!';
  return `Noch ${remaining} Habits übrig!`;
}

export function quoteOfDay(): string {
  const quotes = [
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
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  return quotes[day % quotes.length];
}
