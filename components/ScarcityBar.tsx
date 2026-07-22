"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function getNextMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(23, 59, 59, 999);
  if (midnight.getTime() <= now.getTime()) {
    midnight.setDate(midnight.getDate() + 1);
  }
  return midnight;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type ScarcityBarProps = {
  message?: string;
  icon?: string;
  /** If set, counts down from now for this many minutes instead of to midnight. */
  durationMinutes?: number;
};

export function ScarcityBar({
  message = "Oferta especial: 60% OFF só hoje",
  icon = "/images/icons/icon-urgente-fogo.svg",
  durationMinutes,
}: ScarcityBarProps) {
  const [target] = useState(() =>
    durationMinutes
      ? new Date(Date.now() + durationMinutes * 60_000)
      : getNextMidnight()
  );
  const [remaining, setRemaining] = useState<number>(0);

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);

  return (
    <div className="sticky top-0 z-50 w-full bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide sm:text-sm">
          <Image
            src={icon}
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 flex-none"
          />
          {message}
        </p>
        <span
          className="font-display text-xs font-bold tabular-nums text-white/80 sm:text-sm"
          aria-label="Tempo restante da oferta"
        >
          · encerra em {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
      </div>
    </div>
  );
}
