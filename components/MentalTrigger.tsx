"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const WITHOUT = [
  "Fim de semana inteiro desenhando molde à mão",
  "EVA desperdiçado em molde torto ou no tamanho errado",
  "Aperto no peito na véspera da entrega ou do painel",
  "Resultado \"caseiro\" que te deixa com vergonha de postar",
];

const WITH = [
  "Abre o material, escolhe o molde e já recorta",
  "Molde certinho, sem desperdiçar EVA",
  "Aula, painel ou encomenda pronta com dias de antecedência",
  "Resultado profissional que você tem orgulho de mostrar",
  "Nunca fica sem molde na hora H",
  "Ache o molde certo sem procurar em 10 grupos",
  "Sem jogar dinheiro fora em EVA",
];

export function MentalTrigger() {
  const [value, setValue] = useState(50);
  const [tab, setTab] = useState<"sem" | "com">("sem");

  return (
    <section className="border-t border-ink/10 bg-cream-dark/40 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
          Você já viveu os <span className="underline decoration-navy/40 decoration-4 underline-offset-4">dois lados</span>.
          <br />
          Qual deles você quer na próxima entrega?
        </h2>
        <p className="mt-3 text-ink/60">Arraste o traço pra focar em cada lado da transformação.</p>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-3xl select-none overflow-hidden rounded-3xl shadow-xl aspect-[1672/941]">
        <Image
          src="/images/antes-depois/antes-depois.webp"
          alt="Antes: professora estressada desenhando molde à mão de madrugada, mesa cheia de recortes. Depois: professora sorrindo, escolhendo o molde pronto no tablet e recortando o EVA em minutos."
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />

        {/* Blur-focus mask: dims/desfoca o lado oposto ao ponto arrastado */}
        <div
          className="pointer-events-none absolute inset-0 bg-ink/10 backdrop-blur-md"
          style={{ clipPath: `inset(0 0 0 ${value}%)` }}
        />

        {/* Divider handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.15)]"
          style={{ left: `${value}%` }}
        >
          <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg">
            <span className="text-xs">↔</span>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Arraste para focar entre antes e depois"
          className="ba-slider"
        />
      </div>

      {/* Mobile (<768px): single card with a toggle between "dor" and "alívio" */}
      <div className="mx-auto mt-6 max-w-md md:hidden">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
          <div className="mx-auto flex w-fit rounded-full bg-cream-dark/60 p-1">
            <button
              type="button"
              onClick={() => setTab("sem")}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200",
                tab === "sem"
                  ? "bg-white text-red-500 shadow-sm"
                  : "text-ink/40"
              )}
            >
              Sem o Kit
            </button>
            <button
              type="button"
              onClick={() => setTab("com")}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200",
                tab === "com"
                  ? "bg-white text-mint-dark shadow-sm"
                  : "text-ink/40"
              )}
            >
              Com o Kit
            </button>
          </div>

          <ul key={tab} className="animate-fade-in-up mt-5 space-y-3">
            {(tab === "sem" ? WITHOUT : WITH).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-ink/75"
              >
                <span
                  className={cn(
                    "mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full text-[10px] font-bold",
                    tab === "sem"
                      ? "bg-red-100 text-red-500"
                      : "bg-mint/15 text-mint-dark"
                  )}
                >
                  {tab === "sem" ? "✕" : "✓"}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop (>=768px): two cards side by side, unchanged */}
      <div className="mx-auto mt-8 hidden max-w-3xl gap-6 md:grid md:grid-cols-2">
        <div className="rounded-3xl border-2 border-red-200 bg-red-50 p-6">
          <p className="font-display text-lg font-bold text-red-500">
            Sem os moldes certos
          </p>
          <ul className="mt-4 space-y-3">
            {WITHOUT.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                <span className="mt-0.5 text-red-400">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border-2 border-mint/30 bg-mint/10 p-6">
          <p className="font-display text-lg font-bold text-mint-dark">
            Com o Kit Tia Rosi
          </p>
          <ul className="mt-4 space-y-3">
            {WITH.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                <span className="mt-0.5 text-mint-dark">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
