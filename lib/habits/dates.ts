export function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parseDate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function todayStr(): string {
  return formatDate(new Date());
}

export function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return formatDate(d);
}

export function addDays(dateStr: string, days: number): string {
  const d = parseDate(dateStr);
  d.setDate(d.getDate() + days);
  return formatDate(d);
}

export function daysBetween(a: string, b: string): number {
  const da = parseDate(a);
  const db = parseDate(b);
  return Math.round((db.getTime() - da.getTime()) / (1000 * 60 * 60 * 24));
}

export function getWeekDates(anchor: string): string[] {
  const d = parseDate(anchor);
  const day = d.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(d);
  monday.setDate(d.getDate() + mondayOffset);
  return Array.from({ length: 7 }, (_, i) => {
    const x = new Date(monday);
    x.setDate(monday.getDate() + i);
    return formatDate(x);
  });
}

export function getMonthDays(year: number, month: number): string[] {
  const days: string[] = [];
  const last = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= last; i++) {
    days.push(formatDate(new Date(year, month, i)));
  }
  return days;
}

export function getLastNDays(n: number, endDate = todayStr()): string[] {
  return Array.from({ length: n }, (_, i) => addDays(endDate, -(n - 1 - i)));
}

export function getYearHeatmapDates(): string[] {
  const end = todayStr();
  return getLastNDays(365, end);
}

export function monthKey(dateStr: string): string {
  return dateStr.slice(0, 7);
}

export function weekdayIndex(dateStr: string): number {
  const d = parseDate(dateStr).getDay();
  return d === 0 ? 6 : d - 1;
}

export const WEEKDAY_LABELS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

export function isSameMonth(a: string, b: string): boolean {
  return a.slice(0, 7) === b.slice(0, 7);
}
