'use client';

interface Props {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
}

export default function LineChart({
  data,
  width = 320,
  height = 140,
}: Props) {
  if (data.length === 0) return null;

  const pad = { t: 12, r: 12, b: 24, l: 32 };
  const w = width - pad.l - pad.r;
  const h = height - pad.t - pad.b;
  const max = Math.max(...data.map((d) => d.value), 1);

  const points = data.map((d, i) => {
    const x = pad.l + (i / Math.max(data.length - 1, 1)) * w;
    const y = pad.t + h - (d.value / max) * h;
    return `${x},${y}`;
  });

  return (
    <svg width={width} height={height} className="w-full max-w-full">
      <polyline
        fill="none"
        stroke="var(--habit-accent)"
        strokeWidth={2}
        points={points.join(' ')}
      />
      {data.map((d, i) => {
        const x = pad.l + (i / Math.max(data.length - 1, 1)) * w;
        const y = pad.t + h - (d.value / max) * h;
        return (
          <g key={d.label}>
            <circle cx={x} cy={y} r={3} fill="var(--habit-accent)" />
            {i % Math.ceil(data.length / 6) === 0 && (
              <text
                x={x}
                y={height - 4}
                textAnchor="middle"
                className="fill-[var(--habit-muted)] text-[9px]"
              >
                {d.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
