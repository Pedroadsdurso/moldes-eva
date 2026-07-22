import type { Metadata } from "next";
import { OfferPage } from "@/components/OfferPage";
import { FAQS } from "@/components/FAQ";
import { ExitIntentRedirect } from "@/components/ExitIntentRedirect";

export const metadata: Metadata = {
  title: "Oferta Exclusiva | Kit Completo com Desconto — Só Nesta Visita",
  robots: { index: false, follow: false },
};

const CTA_HREF = "https://pay.kirvano.com/855260ae-3a36-4b1f-add5-4e48105fd0a6";

const REDUCED_FAQ = [FAQS[0], FAQS[4], FAQS[5], FAQS[3], FAQS[2]];

export default function Oferta1990() {
  return (
    <>
      <ExitIntentRedirect
        storageKey="offer_990_shown"
        redirectTo="/oferta-990"
      />
      <OfferPage
        scarcityMessage="OFERTA ÚNICA — só nesta visita"
        scarcityMinutes={10}
        headlinePrefix="Espere! Você ainda pode levar o"
        headlineHighlight="Kit Completo"
        headlineSuffix="com desconto exclusivo"
        oldPrice="R$ 29,90"
        newPriceWhole="19"
        savingsText="Economize R$ 10"
        ctaText="Quero meu desconto →"
        ctaHref={CTA_HREF}
        finalBadgeText="Oferta Exclusiva"
        finalOldPrice="R$ 29,90"
        faqItems={REDUCED_FAQ}
      />
    </>
  );
}
