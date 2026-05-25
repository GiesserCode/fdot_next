'use client';

interface Props {
  levels: Record<string, number>;
  dates: string[];
  cellSize?: number;
}

const LEVEL_COLORS = [
  'var(--habit-border)',
  '#1e3a2f',
  '#166534',
  '#22c55e',
  '#4ade80',
];

export default function HeatmapChart({
  levels,
  dates,
  cellSize = 11,
}: Props) {
  const weeks: string[][] = [];
  let week: string[] = [];
  const first = dates[0];
  if (first) {
    const pad = new Date(first).getDay();
    const padCount = pad === 0 ? 6 : pad - 1;
    for (let i = 0; i < padCount; i++) week.push('');
  }
  dates.forEach((d) => {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length) {
    while (week.length < 7) week.push('');
    weeks.push(week);
  }

  return (
    <div className="overflow-x-auto">
      <div
        className="inline-grid gap-[3px]"
        style={{
          gridTemplateColumns: `repeat(${weeks.length}, ${cellSize}px)`,
          gridTemplateRows: `repeat(7, ${cellSize}px)`,
          gridAutoFlow: 'column',
        }}
      >
        {weeks.map((w, wi) =>
          w.map((d, di) => (
            <div
              key={`${wi}-${di}`}
              title={d ? `${d}: Level ${levels[d] ?? 0}` : ''}
              style={{
                width: cellSize,
                height: cellSize,
                borderRadius: 2,
                background: d
                  ? LEVEL_COLORS[levels[d] ?? 0]
                  : 'transparent',
              }}
            />
          ))
        )}
      </div>
      <p className="text-xs text-[var(--habit-muted)] mt-2">
        Letztes Jahr – dunkler = weniger erledigt
      </p>
    </div>
  );
}
