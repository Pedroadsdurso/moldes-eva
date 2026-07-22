"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FeaturedPriceCard } from "@/components/FeaturedPriceCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const CHECKOUT_ESSENCIAL = "https://pay.kirvano.com/b613bd9f-83b8-408f-bfb0-9d018b13fd87";
const CHECKOUT_COMPLETO = "https://pay.kirvano.com/abc08e87-7069-483d-8c42-ee69e034c3d2";
const CHECKOUT_COMPLETO_POPUP = "https://pay.kirvano.com/c8bda6b1-3e61-4ba4-a8f0-b5706db019b6";

export function Pricing() {
  const [upsellOpen, setUpsellOpen] = useState(false);

  const handleBuyEssencial = () => setUpsellOpen(true);

  const handleUpsellOpenChange = (open: boolean) => {
    setUpsellOpen(open);
    window.dispatchEvent(
      new CustomEvent("upsell-dialog-change", { detail: { open } })
    );
  };

  return (
    <section
      id="precos"
      className="border-t border-white/10 bg-ink px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
          <Image
            src="/images/icons/icon-relogio-real.webp"
            alt=""
            width={14}
            height={14}
            className="h-3.5 w-3.5 flex-none"
          />
          Oferta válida por tempo limitado
        </span>
        <h2 className="mt-3 font-display text-2xl font-extrabold text-cream sm:text-3xl">
          Aproveite enquanto o{" "}
          <span className="text-sunny">Kit Completo</span> está em promoção
        </h2>
        <p className="mt-3 text-cream/60">
          Pagamento único. Sem mensalidade. Acesso imediato após a
          confirmação.
        </p>
      </div>

      {/* Pricing cards — stacked on mobile (<768px), side by side from md (>=768px) */}
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-6">
        {/* Plano Essencial */}
        <div className="rounded-3xl bg-white p-6 md:h-full">
          <p className="text-center font-display text-lg font-bold text-ink">
            Kit Essencial
          </p>
          <p className="text-center text-xs text-ink/50">Pagamento único</p>

          <div className="mt-4 text-center">
            <div className="font-display text-4xl font-extrabold text-ink">
              R$ 13<span className="text-lg font-semibold text-ink/40">,90</span>
            </div>
          </div>

          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-ink/75">
              <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-mint/15 text-[10px] font-bold text-mint-dark">
                ✓
              </span>
              <span>
                <strong className="text-ink">+5000 moldes</strong> prontos —
                material principal completo
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-ink/60">
              <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-red-100 text-[10px] font-bold text-red-500">
                ✕
              </span>
              <span>
                <strong className="text-ink/80">5 Super Bônus</strong>
                <span className="block text-xs text-ink/40">
                  bônus exclusivos não incluídos neste plano
                </span>
              </span>
            </li>
          </ul>

          <Button
            onClick={handleBuyEssencial}
            size="lg"
            className="mt-6 h-auto w-full rounded-full bg-mint py-3.5 font-display text-sm font-bold text-white hover:bg-mint-dark"
          >
Quero só o Essencial
          </Button>

          <a
            href="#kit-completo"
            className="mt-4 block rounded-xl bg-ink/5 px-4 py-3 text-center transition hover:bg-ink/10"
          >
            <span className="block text-xs font-bold text-navy">
              Você ainda está a tempo de levar a melhor opção!
            </span>
            <span className="mt-0.5 block text-xs text-ink/60">
              Leve mais e pague menos: 97% escolhem a{" "}
              <span className="font-bold text-mint-dark">super oferta ↓</span>
            </span>
          </a>
        </div>

        {/* Plano Completo — destacado */}
        <FeaturedPriceCard
          priceWhole="29"
          priceCents="90"
          installment="ou 5x de R$ 5,98 no cartão"
          ctaHref={CHECKOUT_COMPLETO}
          valueAnchor={
            <>
              Por apenas <strong className="text-mint-dark">R$ 16 a mais</strong>{" "}
              que o Essencial, você destrava os{" "}
              <strong className="text-ink">5 Bônus Exclusivos</strong> e leva a
              experiência completa.
            </>
          }
        />
      </div>

      <Dialog open={upsellOpen} onOpenChange={handleUpsellOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center pt-2 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sunny px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
              <Image
                src="/images/icons/icon-relogio-real.webp"
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5 flex-none"
              />
              Oferta única — só nesta tela
            </span>

            <DialogTitle className="mt-4 font-display text-2xl leading-tight font-extrabold text-navy">
              Leve o <span className="text-mint-dark">Kit Completo</span> por
              só +R$ 11
            </DialogTitle>

            <DialogDescription className="sr-only">
              Oferta especial de upgrade para o Kit Completo antes de
              finalizar a compra do Kit Essencial.
            </DialogDescription>

            <ul className="mt-5 grid w-full grid-cols-3 gap-2">
              <li className="flex flex-col items-center gap-1.5">
                <Image
                  src="/images/icons/icon-presente-real.webp"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="text-[11px] leading-tight font-semibold text-ink/70">
                  5 Super Bônus
                </span>
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <Image
                  src="/images/icons/icon-whatsapp-real.webp"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="text-[11px] leading-tight font-semibold text-ink/70">
                  Grupo VIP no WhatsApp
                </span>
              </li>
              <li className="flex flex-col items-center gap-1.5">
                <Image
                  src="/images/icons/icon-atualizacao-vitalicia.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="text-[11px] leading-tight font-semibold text-ink/70">
                  Atualizações vitalícias
                </span>
              </li>
            </ul>

            <div className="mt-5 w-full rounded-2xl bg-cream-dark/50 p-4">
              <p className="text-sm font-semibold text-ink/40 line-through">
                R$ 29,90
              </p>
              <p className="font-display text-4xl font-extrabold text-mint-dark">
                R$ 24,90
              </p>
              <p className="mt-1 text-xs text-ink/50">
                Pagamento único · acesso imediato
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pb-1">
            <Button
              render={<a href={CHECKOUT_COMPLETO_POPUP} />}
              nativeButton={false}
              size="lg"
              className="h-auto w-full rounded-full bg-mint py-4 font-display text-base font-bold text-white shadow-lg shadow-mint/30 hover:bg-mint-dark"
            >
              Sim, quero o Kit Completo →
            </Button>

            <a
              href={CHECKOUT_ESSENCIAL}
              className="text-xs font-semibold text-ink/40 underline underline-offset-2 hover:text-ink/60"
            >
              Não, prefiro continuar só com o Essencial
            </a>

            <p className="text-center text-[11px] text-ink/40">
              Essa condição não aparece novamente depois que você sair desta
              tela.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
