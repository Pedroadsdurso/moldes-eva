import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-navy px-4 py-16 text-center text-white sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="font-display text-3xl font-extrabold uppercase sm:text-4xl">
          Seu próximo painel não precisa tomar seu fim de semana
        </h2>
        <p className="mt-3 text-white/85">
          +5000 moldes prontos esperando por você. Depois de hoje, o preço do
          Kit Completo volta ao normal.
        </p>

        <Button
          render={<a href="#precos" />}
          nativeButton={false}
          size="lg"
          className="mt-8 h-auto rounded-full bg-white px-10 py-5 font-display text-lg font-bold text-navy shadow-xl hover:bg-cream"
        >
          Quero garantir meu kit agora →
        </Button>
      </div>
    </section>
  );
}
