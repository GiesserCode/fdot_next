'use client';

interface Slice {
  category: string;
  percent: number;
  color?: string;
}

const SLICE_COLORS = [
  '#6366f1',
  '#22c55e',
  '#f97316',
  '#3b82f6',
  '#ec4899',
  '#eab308',
  '#14b8a6',
];

interface Props {
  slices: Slice[];
  size?: number;
}

export default function DonutChart({ slices, size = 160 }: Props) {
  if (slices.length === 0) {
    return (
      <p className="text-sm text-[var(--habit-muted)]">Noch keine Daten</p>
    );
  }

  const r = size / 2 - 12;
  const cx = size / 2;
  const cy = size / 2;
  let angle = -Math.PI / 2;

  const paths = slices.map((s, i) => {
    const sliceAngle = (s.percent / 100) * Math.PI * 2;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    angle += sliceAngle;
    const x2 = cx + r * Math.cos(angle);
    const y2 = cy + r * Math.sin(angle);
    const large = sliceAngle > Math.PI ? 1 : 0;
    const color = s.color || SLICE_COLORS[i % SLICE_COLORS.length];
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    return { d, color, ...s };
  });

  return (
    <div className="flex flex-wrap items-center gap-4">
      <svg width={size} height={size}>
        {paths.map((p) => (
          <path key={p.category} d={p.d} fill={p.color} opacity={0.85} />
        ))}
        <circle cx={cx} cy={cy} r={r * 0.55} fill="var(--habit-card)" />
      </svg>
      <ul className="text-sm space-y-1">
        {paths.map((p) => (
          <li key={p.category} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ background: p.color }}
            />
            {p.category}: {p.percent}%
          </li>
        ))}
      </ul>
    </div>
  );
}
