import Image from "next/image";

const CATEGORIES = [
  {
    img: "/images/categorias/bichos-e-animais.webp",
    label: "Bichinhos e Animais da Fazenda",
    desc: "Vaca, cavalo, porquinho, pintinho e mais — prontos pra encantar a turma.",
    count: "260+ moldes",
  },
  {
    img: "/images/categorias/crachas.webp",
    label: "Nomes, Crachás e Etiquetas",
    desc: "Crachás personalizados e plaquinhas prontas pra identificar cada aluno.",
    count: "160+ moldes",
  },
  {
    img: "/images/categorias/festa-junina.webp",
    label: "Festa Junina, Páscoa e Natal",
    desc: "Casal caipira, bandeirinhas e enfeites — decoração pronta, sem desenhar nada.",
    count: "320+ moldes",
  },
  {
    img: "/images/categorias/formas-geometricas.webp",
    label: "Formas Geométricas e Cores",
    desc: "Círculo, triângulo, cores e mais — moldes prontos pra ensinar brincando.",
    count: "150+ moldes",
  },
  {
    img: "/images/categorias/historias-biblicas-infantis.webp",
    label: "Histórias Bíblicas Infantis",
    desc: "Arca de Noé, Davi e Golias, Jonas e mais — as histórias favoritas em EVA.",
    count: "190+ moldes",
  },
  {
    img: "/images/categorias/numeros-e-alfabeto.webp",
    label: "Números, Letras e Alfabeto",
    desc: "Letras de A a Z e números de 0 a 9, coloridos e prontos pra montar.",
    count: "180+ moldes",
  },
  {
    img: "/images/categorias/paineis-bordas-e-molduras.webp",
    label: "Painéis, Bordas e Molduras",
    desc: "Molduras, bordas e enfeites pra deixar qualquer painel com cara de profissional.",
    count: "210+ moldes",
  },
  {
    img: "/images/categorias/dia-das-profissoes.webp",
    label: "Dia das Profissões",
    desc: "Médica, bombeiro, professora, astronauta — todas as profissões em um clique.",
    count: "140+ moldes",
  },
];

const LOOP = [...CATEGORIES, ...CATEGORIES];

export function ProductCarousel() {
  return (
    <section
      id="dentro-do-kit"
      className="border-t border-ink/10 bg-cream-dark/40 px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-2xl font-extrabold uppercase text-ink sm:text-3xl">
          Veja alguns dos moldes que tem dentro do material
        </h2>
        <p className="mt-3 text-ink/70">
          Tudo separado por categoria, fácil de achar e de montar.
        </p>
      </div>

      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div
          className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "55s" }}
        >
          {LOOP.map((cat, i) => (
            <div
              key={`${cat.label}-${i}`}
              className="w-72 flex-none overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-ink/5 sm:w-80"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={cat.img}
                  alt={`Exemplos de moldes de EVA da categoria ${cat.label}`}
                  fill
                  sizes="(min-width: 640px) 320px, 288px"
                  className="object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
                  {cat.count}
                </span>
              </div>
              <div className="p-5">
                <p className="font-display text-base font-bold leading-snug text-ink">
                  {cat.label}
                </p>
                <p className="mt-1.5 text-sm text-ink/60">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
