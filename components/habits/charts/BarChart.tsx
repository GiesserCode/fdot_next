'use client';

import { WEEKDAY_LABELS } from '@/lib/habits/dates';

interface Props {
  values: number[];
  width?: number;
  height?: number;
}

export default function BarChart({
  values,
  width = 280,
  height = 140,
}: Props) {
  const max = Math.max(...values, 1);
  const barW = (width - 40) / 7;

  return (
    <svg width={width} height={height}>
      {values.map((v, i) => {
        const barH = (v / max) * (height - 40);
        const x = 20 + i * barW;
        const y = height - 24 - barH;
        return (
          <g key={WEEKDAY_LABELS[i]}>
            <rect
              x={x + 4}
              y={y}
              width={barW - 8}
              height={barH}
              rx={3}
              fill="var(--habit-accent)"
              opacity={0.4 + (v / max) * 0.6}
            />
            <text
              x={x + barW / 2}
              y={height - 8}
              textAnchor="middle"
              className="fill-[var(--habit-muted)] text-[10px]"
            >
              {WEEKDAY_LABELS[i]}
            </text>
            <text
              x={x + barW / 2}
              y={y - 4}
              textAnchor="middle"
              className="fill-[var(--habit-text)] habits-mono text-[9px]"
            >
              {v}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}
