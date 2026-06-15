import { ArrowRight, Cog, GraduationCap, Package } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const highlights = [
  {
    title: "Engenharia reversa",
    description: "Estudos para melhoria e funcionalidade da peça. Melhoria contínua em cada componente.",
    icon: Cog,
    color: "from-primary to-primary-dark",
  },
  {
    title: "Retrofit e treinamentos",
    description: "Adaptação de máquinas e capacitação para elevar a produtividade da linha.",
    icon: GraduationCap,
    color: "from-primary-light to-primary",
  },
  {
    title: "Catálogo de peças",
    description: "Centenas de peças cadastradas. Stand Up Pouch, Stick Pack, Pillow Bag e mais.",
    icon: Package,
    color: "from-slate-600 to-dark",
  },
];

export function FeaturesSection() {
  return (
    <section id="destaques" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Destaques"
            title="Soluções em foco"
            subtitle="Conheça alguns dos nossos diferenciais."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <a href="#contato" className="card card-hover group block overflow-hidden rounded-xl">
                <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${item.color}`}>
                  <item.icon className="h-14 w-14 text-white/90" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <div id="produtos" className="mt-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Produtos"
              title="Linhas em destaque"
              subtitle="Peças para os principais formatos de embalagem flexível."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {["Stand Up Pouch", "Quatro soldas", "Pillow Bag", "Stick Pack", "Flat Bottom", "Tampas"].map(
              (product, i) => (
                <ScrollReveal key={product} delay={i * 0.05}>
                  <a
                    href="#contato"
                    className="card card-hover flex min-h-[88px] items-center justify-center rounded-xl p-4 text-center"
                  >
                    <span className="text-xs font-medium text-dark">{product}</span>
                  </a>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
