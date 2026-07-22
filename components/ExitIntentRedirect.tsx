"use client";

import { useExitIntent } from "@/hooks/useExitIntent";

type ExitIntentRedirectProps = {
  storageKey: string;
  redirectTo: string;
  delayMs?: number;
};

export function ExitIntentRedirect({
  storageKey,
  redirectTo,
  delayMs,
}: ExitIntentRedirectProps) {
  useExitIntent({ storageKey, redirectTo, delayMs });
  return null;
}
