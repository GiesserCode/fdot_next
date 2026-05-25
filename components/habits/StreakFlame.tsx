'use client';

interface Props {
  streak: number;
}

export default function StreakFlame({ streak }: Props) {
  const scale = Math.min(1.8, 0.7 + streak * 0.03);
  const brightness = Math.min(1.5, 0.8 + streak * 0.02);
  const opacity = Math.min(1, 0.5 + streak * 0.05);

  return (
    <div
      className="habit-flame flex flex-col items-center"
      style={{
        transform: `scale(${scale})`,
        filter: `brightness(${brightness})`,
        opacity,
      }}
      title={`${streak} Tage Streak`}
    >
      <span className="text-3xl" role="img" aria-label="Streak">
        🔥
      </span>
      <span className="habits-mono text-sm font-medium">{streak}</span>
      <span className="text-xs text-[var(--habit-muted)]">Streak</span>
    </div>
  );
}
