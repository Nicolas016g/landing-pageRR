import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const pillars = [
  { title: "Peças de precisão", text: "Catálogo amplo para embaladoras envasadoras horizontais e verticais." },
  { title: "Engenharia reversa", text: "Melhoria contínua e usinagem com rastreabilidade." },
  { title: "Suporte técnico", text: "Atendimento presencial ou remoto em todo o Brasil." },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Sobre"
              title="Especialistas em embalagem flexível"
              subtitle="Empresa focada em peças e serviços para máquinas embaladoras envasadoras, com atuação séria e soluções sob medida para a indústria."
              align="left"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="highlight-box rounded-xl">
              <p className="text-sm leading-relaxed text-text-muted">
                Atendemos formatos como Stand Up Pouch, Stick Pack, Pillow Bag e Flat Bottom,
                com retrofit, treinamentos e nacionalização de componentes importados.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="border-t-2 border-primary pt-6">
                <h3 className="font-medium text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
