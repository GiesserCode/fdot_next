'use client';

import { getAchievement } from '@/lib/habits/achievements';

interface Props {
  achievementId: string | null;
  onClose: () => void;
}

export default function AchievementToast({ achievementId, onClose }: Props) {
  if (!achievementId) return null;
  const a = getAchievement(achievementId);
  if (!a) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 habit-achievement-toast habit-card px-6 py-4 shadow-2xl flex items-center gap-4 max-w-sm"
      role="alert"
    >
      <span className="text-3xl">{a.icon}</span>
      <div className="flex-1">
        <p className="font-bold">Achievement freigeschaltet!</p>
        <p className="text-sm text-[var(--habit-muted)]">{a.title}</p>
        <p className="text-xs">{a.description}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-[var(--habit-muted)] hover:text-[var(--habit-text)]"
        aria-label="Schließen"
      >
        ✕
      </button>
    </div>
  );
}
