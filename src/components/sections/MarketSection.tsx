import {
  Building2,
  FileCheck,
  Globe,
  Headphones,
  Package,
  Shield,
  Truck,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const infrastructure = [
  { icon: Package, label: "Estoque estratégico" },
  { icon: Truck, label: "Logística nacional" },
  { icon: Shield, label: "Qualidade certificada" },
  { icon: FileCheck, label: "Laudos técnicos" },
  { icon: Building2, label: "Usinagem própria" },
  { icon: Headphones, label: "Suporte técnico" },
  { icon: Globe, label: "Importação global" },
  { icon: Wrench, label: "Engenharia reversa" },
];

export function MarketSection() {
  return (
    <section id="mercado" className="section-padding relative bg-surface">
      <div className="pattern-dots absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Estrutura"
            title="Infraestrutura para a indústria"
            subtitle="Estoque, usinagem e nacionalização de componentes para máquinas de envase."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {infrastructure.map(({ icon: Icon, label }, i) => (
            <ScrollReveal key={label} delay={i * 0.05}>
              <div className="card card-hover flex flex-col items-center rounded-xl p-4 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="mt-2.5 text-[11px] font-semibold leading-tight text-text-muted">
                  {label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
