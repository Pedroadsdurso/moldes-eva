"use client";

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

export function pad(n: number) {
  return n.toString().padStart(2, "0");
}

/** Counts down from now for `durationMinutes` minutes, or to the next midnight if omitted. */
export function useCountdown(durationMinutes?: number) {
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

  return { remaining, hours, minutes, seconds };
}
