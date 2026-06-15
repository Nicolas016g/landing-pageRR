import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const plans = [
  { name: "Peças avulsas", desc: "Reposição pontual com entrega ágil para sua linha de produção." },
  { name: "Contrato técnico", desc: "Manutenção preventiva e suporte dedicado à sua operação." },
  { name: "Projetos especiais", desc: "Engenharia reversa, retrofit e treinamentos sob medida." },
];

export function PricingSection() {
  return (
    <section id="servicos" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Serviços"
            title="Modalidades de atendimento"
            subtitle="Proposta personalizada conforme a necessidade da sua linha."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.08}>
              <div className="card card-hover flex h-full flex-col rounded-xl p-8">
                <h3 className="font-medium text-dark">{plan.name}</h3>
                <p className="mt-2 flex-1 text-sm text-text-muted">{plan.desc}</p>
                <a href="#contato-form" className="btn-outline mt-6 w-full text-center">
                  Solicitar proposta
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
