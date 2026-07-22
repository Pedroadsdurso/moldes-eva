"use client";

import { useEffect, useState } from "react";

/**
 * Notificações de exemplo — substituir por eventos de compra reais
 * (via webhook da plataforma de pagamento) antes de publicar a página.
 */
const EVENTS = [
  { name: "Fernanda", city: "Belo Horizonte", color: "bg-navy" },
  { name: "Carlos", city: "Curitiba", color: "bg-mint" },
  { name: "Mariana", city: "Fortaleza", color: "bg-sunny" },
  { name: "Juliana", city: "Recife", color: "bg-plum" },
];

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const hideTimer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(hideTimer);
  }, [visible, index]);

  useEffect(() => {
    if (visible) return;
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % EVENTS.length);
      setVisible(true);
    }, 5000);
    return () => clearTimeout(nextTimer);
  }, [visible]);

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
        onClick={() => setVisible(false)}
        aria-label="Fechar notificação"
        className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-ink/80 text-[10px] text-white"
      >
        ✕
      </button>
      <div className="flex items-center gap-2.5">
        <span
          className={`grid h-9 w-9 flex-none place-items-center rounded-full ${event.color} text-xs font-bold text-white`}
        >
          {event.name[0]}
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
