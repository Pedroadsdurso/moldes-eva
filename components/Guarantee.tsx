import Image from "next/image";
import { Button } from "@/components/ui/button";

type GuaranteeProps = {
  href?: string;
  ctaLabel?: string;
};

export function Guarantee({
  href = "#precos",
  ctaLabel = "Quero garantir meu acesso →",
}: GuaranteeProps) {
  return (
    <section className="border-t border-ink/10 px-4 py-16 text-center sm:py-20">
      <Image
        src="/images/icons/icon-garantia-30-dias.webp"
        alt="Selo de garantia de 30 dias"
        width={128}
        height={128}
        className="mx-auto h-32 w-32"
      />

      <h2 className="mx-auto mt-6 max-w-xl font-display text-2xl font-extrabold uppercase text-ink sm:text-3xl">
        30 dias para testar sem risco
      </h2>
      <div className="mx-auto mt-3 max-w-md space-y-1 text-ink/65">
        <p>Baixe, escolha seus moldes preferidos e teste no seu ritmo.</p>
        <p>Se não for pra você: basta uma mensagem, reembolso total, sem perguntas.</p>
      </div>

      <Button
        render={<a href={href} />}
        nativeButton={false}
        size="lg"
        className="mt-6 h-auto rounded-full bg-mint px-8 py-3.5 font-display text-sm font-bold text-white hover:bg-mint-dark"
      >
        {ctaLabel}
      </Button>
    </section>
  );
}
