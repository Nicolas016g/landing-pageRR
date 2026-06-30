import { ArrowRight, Cog, GraduationCap, Package } from "lucide-react";
import Image from "next/image";
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

const products = [
  {
    name: "Stand Up Pouch",
    description: "Peças e conjuntos para máquinas de fabricação de embalagens Stand Up Pouch.",
    image: "/images/produtos/RR_PROD_STANDUP.png",
  },
  {
    name: "Quatro soldas",
    description: "Soluções para equipamentos de quatro soldas em embalagens flexíveis.",
    image: "/images/produtos/RR_PROD_4SOLDAS.png",
  },
  {
    name: "Pillow Bag",
    description: "Peças para máquinas envasadoras do tipo Pillow Bag.",
    image: "/images/produtos/RR_PROD_PILLOWB.png",
  },
  {
    name: "Stick Pack",
    description: "Componentes para linhas de Stick Pack.",
    image: "/images/produtos/RR_PROD_STICK.png",
  },
  {
    name: "Flat Bottom",
    description: "Peças para embalagens Flat Bottom.",
    image: "/images/produtos/RR_PROD_FLATBOT.png",
  },
  {
    name: "Tampas",
    description: "Sistemas de tampas superiores, frontais e corners para diferentes configurações.",
    image: "/images/produtos/RR_PROD_TAMPA.png",
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
              eyebrow="Embalagens"
              title="Modelos de embalagem"
              subtitle="Conheça os formatos de pouch atendidos. Para cada um, fabricamos as peças e conjuntos que mantêm sua linha em operação."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.05}>
                <a
                  href="#contato"
                  className="card card-hover group block overflow-hidden rounded-xl"
                >
                  <div className="flex h-44 items-center justify-center bg-surface p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={160}
                      className="h-auto max-h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-dark">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{product.description}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
