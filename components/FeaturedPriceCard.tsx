import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type FeaturedPriceCardProps = {
  id?: string;
  badgeText?: string;
  checklist?: string[];
  valueAnchor?: ReactNode;
  oldPriceLabel?: string;
  oldPrice?: string;
  priceWhole: string;
  priceCents?: string;
  priceCaption?: string;
  installment?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  trustLine?: string;
  className?: string;
};

export function FeaturedPriceCard({
  id = "kit-completo",
  badgeText = "Mais escolhido — Kit Completo",
  checklist = [
    "+5000 moldes + 5 Super Bônus",
    "Grupo VIP no WhatsApp",
    "Envio imediato por e-mail",
    "Acesso vitalício — use quando e quantas vezes quiser",
  ],
  valueAnchor,
  oldPriceLabel = "Valor total",
  oldPrice = "R$ 597",
  priceWhole,
  priceCents = "90",
  priceCaption = "Hoje, pagamento único",
  installment,
  ctaText = "Quero o Kit Completo com os bônus",
  ctaHref,
  onCtaClick,
  trustLine = "Compra 100% segura · Acesso instantâneo · 30 dias de garantia",
  className = "md:-mt-4",
}: FeaturedPriceCardProps) {
  return (
    <div id={id} className={className}>
      <div className="flex items-center justify-center gap-1.5 rounded-t-2xl bg-sunny px-4 py-2 text-center">
        <Image
          src="/images/icons/icon-mais-escolhido.svg"
          alt=""
          width={16}
          height={16}
          className="h-4 w-4 flex-none"
        />
        <span className="font-display text-xs font-extrabold uppercase tracking-wide text-ink">
          {badgeText}
        </span>
      </div>

      <div className="rounded-b-2xl border-2 border-t-0 border-sunny bg-white p-6 shadow-xl">
        <p className="flex items-center justify-center gap-1.5 text-center text-xs font-bold uppercase tracking-wide text-mint-dark">
          <span className="grid h-4 w-4 flex-none place-items-center rounded-full bg-mint/15 text-[9px] font-bold text-mint-dark">
            ✓
          </span>
          Todos os bônus incluídos
        </p>

        <div className="relative mx-auto mt-4 aspect-[1310/1201] w-full max-w-[280px]">
          <Image
            src="/images/pricing/kit-completo-hero.webp"
            alt="Kit Tia Rosi com +5000 moldes prontos e os 5 super bônus: Letras para Painéis, Calendário Escolar, Datas Comemorativas, Atualizações Vitalícias e Grupo VIP"
            fill
            sizes="280px"
            className="object-contain"
          />
        </div>
        <p className="mt-3 text-center text-xs font-bold text-ink/50">
          Acesso completo ao material (receba na hora)
        </p>

        <ul className="mt-5 space-y-2.5 text-sm text-ink/75">
          {checklist.map((item, i) => (
            <li key={item} className={i === 0 ? "flex items-center gap-2.5" : "flex items-center gap-2.5 text-ink/60"}>
              <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-mint/15 text-[10px] font-bold text-mint-dark">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {valueAnchor && (
          <div className="mt-5 rounded-xl bg-mint/10 p-3 text-center text-xs text-ink/70">
            {valueAnchor}
          </div>
        )}

        <div className="mt-5 text-center">
          <p className="text-xs font-semibold text-ink/40 line-through">
            {oldPriceLabel} {oldPrice}
          </p>
          <p className="text-xs font-bold text-ink/50">{priceCaption}</p>
          <div className="font-display text-4xl font-extrabold text-navy">
            R$ {priceWhole}
            <span className="text-lg font-semibold text-ink/40">
              ,{priceCents}
            </span>
          </div>
          {installment && (
            <p className="text-xs text-ink/40">{installment}</p>
          )}
        </div>

        <Button
          render={ctaHref ? <a href={ctaHref} /> : undefined}
          nativeButton={!ctaHref}
          onClick={onCtaClick}
          size="lg"
          className="mt-5 h-auto w-full rounded-full bg-navy py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-navy/30 hover:bg-navy-dark"
        >
          {ctaText}
        </Button>

        <p className="mt-3 text-center text-[11px] text-ink/40">
          {trustLine}
        </p>
      </div>
    </div>
  );
}
