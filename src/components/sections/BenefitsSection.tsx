import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const differentials = [
  {
    title: "Especialista em envasadoras",
    description:
      "Peças e serviços para máquinas horizontais e verticais. Atendemos clientes em todo o mercado.",
  },
  {
    title: "Catálogo em crescimento",
    description:
      "Centenas de peças cadastradas, com engenharia reversa e melhoria contínua de cada componente.",
  },
  {
    title: "Múltiplos tipos de embalagem",
    description:
      "Stand Up Pouch, Pillow Bag, Stick Pack, Flat Bottom e tampas superiores, frontais e corners.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Diferenciais"
            title="Por que escolher a RR Packaging Parts"
            subtitle="Soluções personalizadas para quem precisa de peças e serviços para máquinas embaladoras e envasadoras."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {differentials.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card card-hover h-full rounded-xl p-6 text-center">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
