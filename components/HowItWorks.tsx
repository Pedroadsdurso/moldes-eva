import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="border-t border-ink/10 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Simples de usar:{" "}
          <span className="text-mint-dark underline decoration-mint/40 decoration-4 underline-offset-4">
            comece em 2 minutos
          </span>
        </h2>
        <p className="mt-3 text-ink/70">
          Sem desenhar, sem complicação. Veja como é fácil ter o molde certo
          em mãos hoje mesmo.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl">
        {/* Connector line: horizontal on desktop, vertical on mobile */}
        <div
          aria-hidden
          className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-terracota/30 via-mint/40 to-mint sm:left-0 sm:right-0 sm:top-6 sm:h-px sm:w-auto sm:bg-gradient-to-r sm:from-terracota/30 sm:via-mint/40 sm:to-mint"
        />

        <div className="relative grid gap-10 sm:grid-cols-4 sm:gap-6">
          {/* Step 1 */}
          <div className="relative flex gap-4 sm:flex-col sm:gap-0 sm:text-center">
            <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-2 border-terracota bg-cream font-display text-lg font-extrabold text-terracota-dark sm:mx-auto">
              1
            </span>
            <div className="sm:mt-5">
              <div className="mx-0 grid h-14 w-14 place-items-center sm:mx-auto">
                <Image
                  src="/images/icons/icon-garanta-acesso.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <p className="mt-2 font-display font-bold text-ink">
                Garanta seu acesso
              </p>
              <p className="mt-1.5 text-sm text-ink/60">
                Pagamento único, sem mensalidade. Leva menos de 2 minutos.
              </p>
            </div>
          </div>

          {/* Step 2 — email mockup as proof */}
          <div className="relative flex gap-4 sm:flex-col sm:gap-0 sm:text-center">
            <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-2 border-terracota bg-cream font-display text-lg font-extrabold text-terracota-dark sm:mx-auto">
              2
            </span>
            <div className="sm:mt-5">
              <div className="mx-0 w-full max-w-[168px] rounded-xl bg-white p-2.5 text-left shadow-md ring-1 ring-ink/10 sm:mx-auto">
                <div className="flex items-center gap-1.5 border-b border-ink/10 pb-1.5">
                  <span className="h-2 w-2 rounded-full bg-terracota" />
                  <span className="h-2 w-2 rounded-full bg-sunny" />
                  <span className="h-2 w-2 rounded-full bg-mint" />
                </div>
                <p className="mt-1.5 text-[10px] font-bold text-ink">
                  📩 Seu Kit chegou!
                </p>
                <p className="mt-0.5 text-[9px] leading-snug text-ink/50">
                  Kit Tia Rosi &lt;contato@kittiarosi.com&gt;
                </p>
                <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-mint/20" />
                <div className="mt-1 h-1.5 w-3/5 rounded-full bg-ink/10" />
              </div>
              <p className="mt-3 font-display font-bold text-ink">
                Receba na hora
              </p>
              <p className="mt-1.5 text-sm text-ink/60">
                O material chega no seu e-mail imediatamente, pronto para
                abrir.
              </p>
            </div>
          </div>

          {/* Step 3 — phone mockup as proof */}
          <div className="relative flex gap-4 sm:flex-col sm:gap-0 sm:text-center">
            <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-2 border-mint bg-cream font-display text-lg font-extrabold text-mint-dark sm:mx-auto">
              3
            </span>
            <div className="sm:mt-5">
              <div className="mx-0 w-[86px] rounded-[14px] border-4 border-ink bg-white p-1 shadow-md sm:mx-auto">
                <div className="grid grid-cols-2 gap-1 rounded-lg bg-cream-dark/50 p-1">
                  <div className="aspect-square rounded bg-mint/25" />
                  <div className="aspect-square rounded bg-sunny/30" />
                  <div className="aspect-square rounded bg-terracota/25" />
                  <div className="aspect-square rounded bg-plum/20" />
                </div>
              </div>
              <p className="mt-3 font-display font-bold text-ink">
                Escolha: tela ou papel
              </p>
              <p className="mt-1.5 text-sm text-ink/60">
                Use direto no celular pra decalcar, ou imprima em casa. Você
                decide.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex gap-4 sm:flex-col sm:gap-0 sm:text-center">
            <span className="relative z-10 grid h-12 w-12 flex-none place-items-center rounded-full border-2 border-mint bg-cream font-display text-lg font-extrabold text-mint-dark sm:mx-auto">
              4
            </span>
            <div className="sm:mt-5">
              <div className="mx-0 grid h-14 w-14 place-items-center sm:mx-auto">
                <Image
                  src="/images/icons/icon-comece-recortar.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <p className="mt-2 font-display font-bold text-ink">
                Comece a recortar
              </p>
              <p className="mt-1.5 text-sm text-ink/60">
                Em minutos sua aula, painel ou encomenda já está pronta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
