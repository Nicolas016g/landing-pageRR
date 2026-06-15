import { ArrowRight, Cog, GraduationCap, Package, Wrench } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const solutions = [
  {
    name: "Peças",
    desc: "Catálogo de peças para máquinas envasadoras. Stand Up Pouch, Stick Pack, Pillow Bag e mais.",
    icon: Package,
  },
  {
    name: "Serviços",
    desc: "Técnico especializado, mecatrônica, programação e retrofits.",
    icon: Wrench,
  },
  {
    name: "Suporte técnico",
    desc: "Diagnóstico, soluções sob medida e atendimento presencial ou remoto.",
    icon: Cog,
  },
  {
    name: "Treinamentos",
    desc: "Capacitação e retrofit para modernização de equipamentos.",
    icon: GraduationCap,
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Soluções"
            title="O que oferecemos"
            subtitle="Portfólio de peças e serviços para envasadoras horizontais e verticais."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.06}>
              <a href="#contato" className="card card-hover group block h-full overflow-hidden rounded-xl">
                <div className="flex h-28 items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
                  <item.icon className="h-10 w-10 text-white/90" strokeWidth={1.5} />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-dark">{item.name}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Contato <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
