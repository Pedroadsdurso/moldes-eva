"use client";

import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const DISMISS_KEY = "floating_cta_dismissed";

export function FloatingCTA() {
  const [pastProductSection, setPastProductSection] = useState(false);
  const [inPricingSection, setInPricingSection] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Read after mount (not in a lazy useState initializer) so the client's
    // first render matches the server-rendered HTML and avoids a hydration mismatch.
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDismissed(true);
    }

    const productSection = document.getElementById("dentro-do-kit");
    const pricingSection = document.getElementById("precos");
    if (!productSection || !pricingSection) return;

    const productObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        setPastProductSection(true);
      } else if (entry.isIntersecting || entry.boundingClientRect.top > 0) {
        setPastProductSection(false);
      }
    });
    productObserver.observe(productSection);

    const pricingObserver = new IntersectionObserver(([entry]) => {
      setInPricingSection(entry.isIntersecting);
    });
    pricingObserver.observe(pricingSection);

    const onUpsellChange = (e: Event) => {
      setPopupOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    };
    window.addEventListener("upsell-dialog-change", onUpsellChange);

    return () => {
      productObserver.disconnect();
      pricingObserver.disconnect();
      window.removeEventListener("upsell-dialog-change", onUpsellChange);
    };
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  const visible =
    pastProductSection && !inPricingSection && !popupOpen && !dismissed;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(15,24,38,0.12)] transition-transform duration-300 ease-out md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex flex-none flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/45">
            Kit Essencial
          </span>
          <span className="font-display text-lg font-extrabold text-ink">
            R$ 13<span className="text-sm font-semibold text-ink/50">,90</span>
          </span>
        </div>

        <Button
          render={<a href="#precos" />}
          nativeButton={false}
          size="lg"
          className="h-auto flex-1 rounded-full bg-mint py-3 font-display text-sm font-bold text-white shadow-lg shadow-mint/30 hover:bg-mint-dark"
        >
          Quero meu kit →
        </Button>

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Fechar barra de oferta"
          className="flex-none rounded-full p-1.5 text-ink/35 hover:bg-ink/5 hover:text-ink/60"
        >
          <XIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
