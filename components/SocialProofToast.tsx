"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Notificações de exemplo — substituir por eventos de compra reais
 * (via webhook da plataforma de pagamento) antes de publicar a página.
 */
const EVENTS = [
  { name: "Fernanda", city: "Belo Horizonte" },
  { name: "Carlos", city: "Curitiba" },
  { name: "Mariana", city: "Fortaleza" },
  { name: "Juliana", city: "Recife" },
];

const DISMISS_KEY = "social_proof_dismissed";
const INITIAL_DELAY_MS = 9000;
const VISIBLE_DURATION_MS = 4500;
const MIN_GAP_MS = 12000;
const MAX_GAP_MS = 20000;

function randomGap() {
  return MIN_GAP_MS + Math.random() * (MAX_GAP_MS - MIN_GAP_MS);
}

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const dismissedRef = useRef(false);
  const timersRef = useRef<{
    show?: ReturnType<typeof setTimeout>;
    hide?: ReturnType<typeof setTimeout>;
  }>({});

  useEffect(() => {
    const timers = timersRef.current;

    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      dismissedRef.current = true;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDismissed(true);
      return;
    }

    const scheduleShow = (delay: number) => {
      timers.show = setTimeout(() => {
        if (dismissedRef.current) return;
        setVisible(true);
        timers.hide = setTimeout(() => {
          if (dismissedRef.current) return;
          setVisible(false);
          setIndex((i) => (i + 1) % EVENTS.length);
          scheduleShow(randomGap());
        }, VISIBLE_DURATION_MS);
      }, delay);
    };

    scheduleShow(INITIAL_DELAY_MS);

    return () => {
      clearTimeout(timers.show);
      clearTimeout(timers.hide);
    };
  }, []);

  const handleDismiss = () => {
    dismissedRef.current = true;
    clearTimeout(timersRef.current.show);
    clearTimeout(timersRef.current.hide);
    sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
    // Delayed so the existing fade-out transition can play before unmounting.
    setTimeout(() => setDismissed(true), 500);
  };

  if (dismissed) return null;

  const event = EVENTS[index];

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 max-w-[260px] rounded-2xl bg-white p-3 shadow-xl ring-1 ring-ink/10 transition-all duration-500 md:bottom-4 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      <button
        onClick={handleDismiss}
        aria-label="Fechar notificação"
        className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-ink/80 text-[10px] text-white"
      >
        ✕
      </button>
      <div className="flex items-center gap-2.5">
        <span className="relative grid h-9 w-9 flex-none place-items-center overflow-hidden rounded-full bg-white ring-1 ring-ink/10">
          <Image
            src="/images/pricing/kit-completo-hero.webp"
            alt=""
            fill
            sizes="36px"
            className="object-contain p-1"
          />
        </span>
        <p className="text-xs leading-snug text-ink/80">
          <strong className="text-ink">
            {event.name} de {event.city}
          </strong>{" "}
          <span className="text-mint-dark">✓</span>
          <br />
          garantiu o Kit Tia Rosi agora há pouco
        </p>
      </div>
    </div>
  );
}
