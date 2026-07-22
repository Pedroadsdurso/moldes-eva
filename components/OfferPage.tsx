import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScarcityBar } from "@/components/ScarcityBar";
import { BonusGrid } from "@/components/Bonuses";
import { FeaturedPriceCard } from "@/components/FeaturedPriceCard";
import { Guarantee } from "@/components/Guarantee";
import { FAQ, type FaqItem } from "@/components/FAQ";
import { SiteFooter } from "@/components/SiteFooter";

const DEFAULT_CHECKLIST = [
  "+5000 moldes prontos, separados por tema",
  "Material pronto pra imprimir ou usar direto na tela",
  "Os 5 Super Bônus exclusivos inclusos",
  "Grupo VIP no WhatsApp com moldes novos toda semana",
  "Acesso vitalício — use quando e quantas vezes quiser",
];

type OfferPageProps = {
  scarcityMessage: string;
  scarcityMinutes?: number;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  oldPrice: string;
  newPriceWhole: string;
  newPriceCents?: string;
  savingsText: string;
  disappearText?: string;
  ctaText: string;
  ctaHref: string;
  checklist?: string[];
  finalBadgeText: string;
  finalOldPriceLabel?: string;
  finalOldPrice: string;
  faqItems?: FaqItem[];
};

export function OfferPage({
  scarcityMessage,
  scarcityMinutes,
  headlinePrefix,
  headlineHighlight,
  headlineSuffix,
  oldPrice,
  newPriceWhole,
  newPriceCents = "90",
  savingsText,
  disappearText = "Esta oferta desaparece quando você sair desta página.",
  ctaText,
  ctaHref,
  checklist = DEFAULT_CHECKLIST,
  finalBadgeText,
  finalOldPriceLabel = "Valor anterior",
  finalOldPrice,
  faqItems,
}: OfferPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScarcityBar message={scarcityMessage} durationMinutes={scarcityMinutes} />

      <main className="flex-1">
        {/* Hero: headline + price block + CTA */}
        <section className="px-4 pt-14 pb-12 text-center sm:pt-20">
          <h1 className="mx-auto max-w-2xl font-display text-2xl font-extrabold uppercase leading-tight text-navy sm:text-4xl">
            {headlinePrefix}{" "}
            <span className="text-mint-dark">{headlineHighlight}</span>
            {headlineSuffix ? ` ${headlineSuffix}` : ""}
          </h1>

          <div className="mx-auto mt-8 max-w-sm rounded-3xl bg-white p-6 shadow-xl ring-1 ring-ink/5">
            <p className="text-sm font-semibold text-ink/40 line-through">
              De {oldPrice}
            </p>
            <div className="mt-1 font-display text-5xl font-extrabold text-mint-dark">
              R$ {newPriceWhole}
              <span className="text-2xl font-semibold text-ink/40">
                ,{newPriceCents}
              </span>
            </div>
            <p className="mt-2 font-display text-sm font-bold text-terracota-dark">
              {savingsText}
            </p>
            <p className="mt-3 text-xs text-ink/50">{disappearText}</p>

            <Button
              render={<a href={ctaHref} />}
              nativeButton={false}
              size="lg"
              className="animate-pulse-soft mt-5 h-auto w-full rounded-full bg-mint py-4 font-display text-base font-bold text-white shadow-lg shadow-mint/30 hover:bg-mint-dark"
            >
              {ctaText}
            </Button>
          </div>

          <div className="relative mx-auto mt-10 aspect-[1310/1201] w-full max-w-[260px]">
            <Image
              src="/images/pricing/kit-completo-hero.webp"
              alt="Kit Tia Rosi com +5000 moldes prontos e os 5 super bônus"
              fill
              sizes="260px"
              className="object-contain"
            />
          </div>

          <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-ink/60">
            <span className="flex items-center gap-1.5">
              <Image
                src="/images/icons/icon-mais-escolhido.svg"
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5 flex-none"
              />
              Acesso imediato
            </span>
            <span className="flex items-center gap-1.5">
              <Image
                src="/images/icons/icon-garanta-acesso.svg"
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5 flex-none"
              />
              Compra segura
            </span>
            <span className="flex items-center gap-1.5">
              <Image
                src="/images/icons/icon-escudo-mint.svg"
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5 flex-none"
              />
              Garantia de 30 dias
            </span>
          </div>
        </section>

        {/* Checklist: tudo o que você recebe */}
        <section className="border-t border-white/10 bg-ink px-4 py-14 text-center sm:py-16">
          <h2 className="mx-auto max-w-lg font-display text-xl font-extrabold uppercase text-cream sm:text-2xl">
            Tudo o que você recebe com o{" "}
            <span className="text-mint">Kit Completo</span>
          </h2>

          <ul className="mx-auto mt-6 max-w-md space-y-3 rounded-3xl bg-white p-6 text-left shadow-xl sm:p-8">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-mint/15 text-[10px] font-bold text-mint-dark">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Bônus grátis */}
        <section className="border-t border-ink/10 bg-cream-dark/40 px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-xl font-extrabold uppercase text-ink sm:text-2xl">
              Além disso você recebe grátis{" "}
              <span className="text-mint-dark">estes bônus</span>
            </h2>
          </div>
          <div className="mt-8">
            <BonusGrid />
          </div>
        </section>

        {/* Card de preço final */}
        <section className="border-t border-white/10 bg-ink px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-md">
            <FeaturedPriceCard
              id="oferta-final"
              badgeText={finalBadgeText}
              checklist={checklist}
              oldPriceLabel={finalOldPriceLabel}
              oldPrice={finalOldPrice}
              priceWhole={newPriceWhole}
              priceCents={newPriceCents}
              ctaText={ctaText}
              ctaHref={ctaHref}
              className=""
            />
          </div>
        </section>

        <Guarantee href={ctaHref} ctaLabel={ctaText} />

        <FAQ items={faqItems} />
      </main>

      <SiteFooter />
    </div>
  );
}
