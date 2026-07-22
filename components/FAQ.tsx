import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "É digital ou impresso?",
    a: "É 100% digital. Logo após a compra você recebe o acesso por e-mail e abre o material no celular, tablet ou computador. Todos os moldes vêm prontos pra você aplicar na tela ou imprimir quantas vezes quiser.",
  },
  {
    q: "Preciso de uma impressora especial?",
    a: "Não. Os moldes são otimizados para qualquer impressora doméstica ou gráfica, em folha A4 comum.",
  },
  {
    q: "Posso usar os moldes para vender meus trabalhos?",
    a: "Sim! Você pode usar os moldes para produzir e vender peças artesanais feitas por você. A revenda dos arquivos digitais não é permitida.",
  },
  {
    q: "Funciona em celular também?",
    a: "Sim, você pode visualizar os moldes no celular e enviar para impressão direto de lá, sem precisar de computador.",
  },
  {
    q: "E se eu não gostar do material?",
    a: "Você tem 30 dias de garantia incondicional. Se não gostar, é só solicitar o reembolso e devolvemos 100% do valor pago.",
  },
  {
    q: "Por quanto tempo tenho acesso ao kit?",
    a: "O acesso é vitalício, incluindo as atualizações com moldes novos adicionados ao longo do tempo.",
  },
];

export function FAQ({ items = FAQS }: { items?: FaqItem[] }) {
  return (
    <section
      id="faq"
      className="border-t border-ink/10 bg-cream-dark/40 px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8">
          <Accordion defaultValue={["item-0"]}>
            {items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="font-display text-base font-bold text-ink no-underline hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink/65">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
