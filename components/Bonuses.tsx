import Image from "next/image";

export type Bonus = {
  n: string;
  img: string;
  title: string;
  desc: string;
  value: string;
};

export const BONUSES: Bonus[] = [
  {
    n: "1",
    img: "/images/bonus/bonus-1.webp",
    title: "Kit Completo de Letras para Painéis",
    desc: "Alfabeto decorativo, letras gigantes, cursivas, bastão e números — tudo pra montar qualquer painel em minutos.",
    value: "R$ 97",
  },
  {
    n: "2",
    img: "/images/bonus/bonus-2.webp",
    title: "Calendário Escolar Completo",
    desc: "Mais de 300 peças: meses, rotina diária, chamada, aniversariantes, emoções e muito mais pra organizar a sala.",
    value: "R$ 97",
  },
  {
    n: "3",
    img: "/images/bonus/bonus-3.webp",
    title: "Banco de Ideias para Datas Comemorativas",
    desc: "Sugestões de painel, atividades e lembrancinhas pra cada data do calendário letivo, o ano inteiro.",
    value: "R$ 147",
  },
  {
    n: "4",
    img: "/images/bonus/bonus-4.webp",
    title: "Atualizações Vitalícias + Novos Moldes",
    desc: "Novos moldes toda semana, sem custo extra — seu kit nunca fica desatualizado.",
    value: "R$ 197",
  },
  {
    n: "5",
    img: "/images/bonus/bonus-5.webp",
    title: "Grupo VIP com Novos Moldes Toda Semana",
    desc: "Comunidade exclusiva no WhatsApp com moldes novos, ideias e suporte direto com a equipe da Tia Rosi.",
    value: "R$ 67",
  },
];

export function BonusCard({ bonus }: { bonus: Bonus }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
      <div className="bg-ink px-3 py-2 text-center">
        <span className="font-display text-[11px] font-extrabold uppercase tracking-wide text-sunny">
          #{bonus.n} — Bônus hoje!
        </span>
      </div>

      <div className="relative aspect-video w-full">
        <Image
          src={bonus.img}
          alt={bonus.title}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-display text-sm font-bold leading-snug text-ink">
          {bonus.title}
        </h3>
        <p className="mt-1.5 text-xs text-ink/60">{bonus.desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-ink/40 line-through">
            De {bonus.value}
          </span>
          <span className="rounded-full bg-mint/15 px-2 py-0.5 text-[10px] font-bold uppercase text-mint-dark">
            Grátis hoje
          </span>
        </div>
      </div>
    </div>
  );
}

export function BonusGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-5 ${className}`}
    >
      {BONUSES.map((bonus) => (
        <BonusCard key={bonus.title} bonus={bonus} />
      ))}
    </div>
  );
}

export function Bonuses() {
  return (
    <section className="border-t border-white/10">
      <div className="bg-navy px-4 py-8 text-center text-white">
        <p className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/80">
          <Image
            src="/images/icons/icon-presente-real.webp"
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 flex-none"
          />
          Além do Kit Completo, ao garantir sua vaga hoje você leva
        </p>
        <h2 className="mt-1 font-display text-3xl font-extrabold uppercase sm:text-4xl">
          5 super bônus!
        </h2>
        <p className="mt-1 text-sm font-semibold underline underline-offset-2">
          (se comprar depois, não ganha)
        </p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-sunny">
          Bônus disponíveis somente no Kit Completo
        </p>
      </div>

      <div className="bg-cream-dark/40 px-4 py-14 sm:py-16">
        <BonusGrid />
      </div>
    </section>
  );
}
