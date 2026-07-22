"use client";

import { useEffect, useRef } from "react";

type UseExitIntentOptions = {
  /** sessionStorage key used to ensure this offer only redirects once per session. */
  storageKey: string;
  /** Path to redirect to (query params from the current URL are merged in). */
  redirectTo: string;
  /** Delay before arming the listeners, in ms. */
  delayMs?: number;
  enabled?: boolean;
};

/**
 * Redirects once per session when the user shows exit intent:
 * - Desktop: cursor leaves through the top edge of the viewport (mouseout, clientY <= 0).
 * - Mobile: back gesture/button, intercepted via an extra history entry + popstate.
 */
export function useExitIntent({
  storageKey,
  redirectTo,
  delayMs = 4000,
  enabled = true,
}: UseExitIntentOptions) {
  const armedRef = useRef(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    // Already shown this offer this session — let the user leave freely.
    if (sessionStorage.getItem(storageKey) === "true") return;

    let mouseoutHandler: ((e: MouseEvent) => void) | null = null;
    let popstateHandler: (() => void) | null = null;

    function fire() {
      if (firedRef.current) return;
      firedRef.current = true;
      sessionStorage.setItem(storageKey, "true");

      const target = new URL(redirectTo, window.location.origin);
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((value, key) => {
        if (!target.searchParams.has(key)) target.searchParams.set(key, value);
      });

      window.location.href = target.pathname + target.search;
    }

    const armTimer = window.setTimeout(() => {
      armedRef.current = true;

      mouseoutHandler = (e: MouseEvent) => {
        if (!armedRef.current || firedRef.current) return;
        if (e.clientY <= 0 && !e.relatedTarget) {
          fire();
        }
      };
      document.addEventListener("mouseout", mouseoutHandler);

      // Extra history entry so the back gesture/button triggers popstate
      // instead of actually navigating away.
      window.history.pushState(
        { exitIntentGuard: true },
        "",
        window.location.href
      );
      popstateHandler = () => {
        if (!armedRef.current || firedRef.current) return;
        window.history.pushState(
          { exitIntentGuard: true },
          "",
          window.location.href
        );
        fire();
      };
      window.addEventListener("popstate", popstateHandler);
    }, delayMs);

    return () => {
      window.clearTimeout(armTimer);
      if (mouseoutHandler) document.removeEventListener("mouseout", mouseoutHandler);
      if (popstateHandler) window.removeEventListener("popstate", popstateHandler);
    };
  }, [storageKey, redirectTo, delayMs, enabled]);
}
