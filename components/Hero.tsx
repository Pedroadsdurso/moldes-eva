import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-20 lg:pt-16">
      <div className="mx-auto max-w-2xl lg:grid lg:max-w-6xl lg:grid-cols-[11fr_9fr] lg:items-center lg:gap-x-14 lg:gap-y-8">
        {/* Group A: badge + headline — 1st/2nd on mobile, top-left on desktop */}
        <div className="text-center lg:col-start-1 lg:row-start-1 lg:text-left">
          <span className="animate-fade-in-up inline-flex items-center gap-1.5 rounded-full border border-mint/30 bg-mint/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-mint-dark">
            <Image
              src="/images/icons/icon-avaliacao.svg"
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5 flex-none"
            />
            4.9/5 · +3.400 educadoras já trocaram a tesoura pelo atalho
          </span>

          <h1
            className="animate-fade-in-up mt-6 text-3xl font-extrabold uppercase leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "100ms" }}
          >
            Chega de perder o fim de semana{" "}
            <span className="text-navy">desenhando molde de EVA à mão</span>
          </h1>
        </div>

        {/* Hero Image — 3rd on mobile, right column (spanning both rows) on desktop */}
        <div
          className="animate-fade-in-up relative mx-auto mt-8 w-full max-w-[380px] sm:max-w-[440px] lg:col-start-2 lg:row-start-1 lg:row-end-3 lg:mx-0 lg:mt-0 lg:max-w-[520px]"
          style={{ animationDelay: "200ms" }}
        >
          <div className="animate-pulse-soft">
            <Image
              src="/images/hero-main.png"
              alt="Kit Tia Rosi — +5000 moldes prontos de EVA com 5 super bônus"
              width={840}
              height={840}
              priority
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Group B: subtitle + CTA + social proof — 4th/5th/6th on mobile, bottom-left on desktop */}
        <div className="text-center lg:col-start-1 lg:row-start-2 lg:text-left">
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-md text-base text-ink/70 lg:mx-0 lg:mt-0 lg:max-w-lg"
            style={{ animationDelay: "300ms" }}
          >
            Mais de 5.000 moldes prontos, separados por tema. Escolha o que
            precisa, use direto na tela do celular ou no papel — e recorte na
            hora. Zero desenho, zero EVA desperdiçado, zero madrugada em
            claro antes da entrega.
          </p>

          <div
            className="animate-fade-in-up mt-6 flex justify-center lg:justify-start"
            style={{ animationDelay: "400ms" }}
          >
            <Button
              render={<a href="#precos" />}
              nativeButton={false}
              size="lg"
              className="animate-pulse-soft h-auto rounded-full bg-mint px-8 py-4 font-display text-base font-bold text-white shadow-lg shadow-mint/30 hover:bg-mint-dark"
            >
              Quero recuperar meu tempo agora →
            </Button>
          </div>

          <div
            className="animate-fade-in-up mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink/60 lg:justify-start"
            style={{ animationDelay: "500ms" }}
          >
            <span>
              <strong className="text-ink">+3.400 educadoras</strong> já
              usam
            </span>
            <span className="text-sunny-dark">
              ★★★★★ <span className="font-semibold text-ink/70">4.9/5</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
