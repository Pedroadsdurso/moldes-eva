import Image from "next/image";

const PROOFS = [
  { src: "/images/provas/print-1.webp", alt: "Depoimento de cliente sobre os moldes recebidos" },
  { src: "/images/provas/print-2.webp", alt: "Depoimento de cliente sobre os moldes recebidos" },
  { src: "/images/provas/print-3.webp", alt: "Depoimento de cliente sobre os moldes recebidos" },
  { src: "/images/provas/print-4.webp", alt: "Depoimento de cliente sobre os moldes recebidos" },
  { src: "/images/provas/print-5.webp", alt: "Depoimento de cliente sobre os moldes recebidos" },
];

const LOOP = [...PROOFS, ...PROOFS];

export function TestimonialsCarousel() {
  return (
    <section
      id="depoimentos"
      className="border-t border-ink/10 bg-cream-dark/40 px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink/60 shadow-sm">
            <Image
              src="/images/icons/icon-whatsapp-real.webp"
              alt=""
              width={14}
              height={14}
              className="h-3.5 w-3.5"
            />
            Direto do WhatsApp
          </span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Educadoras e artesãs já estão transformando a rotina
          </h2>
          <p className="mt-3 text-ink/70">Quem já trocou a tesoura e o desenho à mão pelo atalho conta como ficou.</p>
        </div>

        <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
            {LOOP.map((proof, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] w-60 flex-none overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-ink/10"
              >
                <Image
                  src={proof.src}
                  alt={proof.alt}
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
