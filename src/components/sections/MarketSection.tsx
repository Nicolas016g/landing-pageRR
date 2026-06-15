import {
  Building2,
  FileCheck,
  Globe,
  Headphones,
  MapPin,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const infrastructure = [
  { icon: Package, label: "Estoque Estratégico" },
  { icon: Truck, label: "Logística Nacional" },
  { icon: Shield, label: "ISO 9001" },
  { icon: FileCheck, label: "Laudos Técnicos" },
  { icon: Building2, label: "Planta em SP" },
  { icon: Headphones, label: "Suporte Técnico" },
  { icon: Globe, label: "Importação Global" },
  { icon: MapPin, label: "Atendimento BR" },
];

export function MarketSection() {
  return (
    <section id="mercado" className="section-padding bg-surface relative">
      <div className="pattern-dots absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Localização Estratégica"
            title="Próximo ao seu parque industrial"
            subtitle="Base operacional no coração industrial de São Paulo, com logística para todo o território nacional"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="card card-hover overflow-hidden rounded-xl">
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-slate-700">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }} />
                <div className="relative text-center text-white">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-2xl font-bold">Ribeirão Preto, SP</p>
                  <p className="mt-1 text-sm text-white/70">Polo industrial — atendimento nacional</p>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-medium text-dark">
                  Ribeirão Preto — São Paulo
                </h3>
                <p className="mt-1 text-sm text-text-muted">Centro de distribuição e usinagem</p>
                <div className="mt-5 rounded-xl bg-surface p-4">
                  <p className="text-sm text-text-muted">
                    <strong className="text-primary-dark">Centro de Nacionalização:</strong>
                    <br />Galpão logístico com despacho aduaneiro integrado
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold text-dark">
                Infraestrutura para a indústria
              </h3>
              <p className="mt-2 text-sm text-accent-dark">
                Peças e conformidade ao alcance da sua fábrica
              </p>
              <p className="mt-5 text-text-muted leading-relaxed">
                Posicionada no maior polo industrial do país, a RR Packaging oferece
                estoque estratégico, usinagem própria, parcerias com fabricantes
                internacionais e equipe especializada em nacionalização de componentes
                para máquinas de envase.
              </p>

              <h4 className="mt-8 font-medium text-dark">
                Estrutura ao seu alcance
              </h4>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {infrastructure.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="card card-hover flex flex-col items-center rounded-xl p-4 text-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="mt-2.5 text-[11px] font-semibold leading-tight text-text-muted">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
