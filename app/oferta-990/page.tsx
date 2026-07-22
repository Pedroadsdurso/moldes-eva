import type { Metadata } from "next";
import { OfferPage } from "@/components/OfferPage";
import { FAQS } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Última Oportunidade | Kit Completo pelo Melhor Preço",
  robots: { index: false, follow: false },
};

const CTA_HREF = "https://pay.kirvano.com/89955c03-2720-4190-afb6-3286b4c717c3";

const REDUCED_FAQ = [FAQS[0], FAQS[4], FAQS[5], FAQS[3], FAQS[2]];

export default function Oferta990() {
  return (
    <OfferPage
      scarcityMessage="ÚLTIMA OPORTUNIDADE — esta oferta desaparece ao fechar a página"
      headlinePrefix="Espere... nós liberamos nosso"
      headlineHighlight="melhor preço"
      headlineSuffix="só para sua visita"
      oldPrice="R$ 19,90"
      newPriceWhole="9"
      savingsText="Economize R$ 20 no total"
      ctaText="Sim, quero aproveitar esta oferta →"
      ctaHref={CTA_HREF}
      finalBadgeText="Último desconto disponível"
      finalOldPrice="R$ 19,90"
      faqItems={REDUCED_FAQ}
    />
  );
}
