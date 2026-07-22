import Image from "next/image";

export function Creator() {
  return (
    <section className="border-t border-white/10 bg-ink px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-2xl font-extrabold text-cream sm:text-3xl">
          De professora pra professora:{" "}
          <span className="text-mint">história real por trás do kit</span>
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:grid-cols-[420px_1fr]">
        <div className="relative aspect-square w-full sm:aspect-auto">
          <Image
            src="/images/creator/tia-rosi.webp"
            alt="Tia Rosi, professora de Educação Infantil e criadora do Kit, sorrindo em sua sala de aula cercada de moldes de EVA"
            fill
            sizes="(min-width: 640px) 420px, 100vw"
            className="object-cover"
            priority={false}
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-white">
            15 anos de sala de aula
          </span>
        </div>

        <div className="flex flex-col justify-center p-8">
          <span className="font-display text-4xl leading-none text-mint">
            &ldquo;
          </span>
          <p className="mt-1 text-ink/75">
            Eu vivia a mesma correria que você vive.
          </p>
          <p className="mt-4 text-ink/75">
            Domingo à noite, olhando pro relógio com aquele aperto no peito:
            painel pra segunda, EVA pela metade e nenhum molde pronto.
            Desenhava tudo à mão, torto, correndo contra o tempo — e ainda
            sobrava material cortado errado, dinheiro jogado fora.
          </p>
          <p className="mt-4 text-ink/75">
            Foi cansar disso que me fez reunir tudo o que eu já tinha
            desenhado em 15 anos de sala de aula neste kit único. Hoje ele já
            passou pelas mãos de milhares de professoras e artesãs Brasil
            afora — e continua crescendo a cada mês.
          </p>

          <p className="mt-6 font-display font-bold text-ink">Tia Rosi</p>
          <p className="text-sm text-ink/50">
            Professora de Ed. Infantil · criadora do kit
          </p>
        </div>
      </div>
    </section>
  );
}
