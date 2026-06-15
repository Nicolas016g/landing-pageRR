import { ArrowDown, TrendingDown, TrendingUp } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

const comparisons = [
  { label: "Parada de linha por falta de peça", before: "72 horas", after: "4 horas", change: "-94%" },
  { label: "Custo com importação direta", before: "R$ 48.000", after: "R$ 31.200", change: "-35%" },
  { label: "Tempo de nacionalização", before: "45 dias", after: "12 dias", change: "-73%" },
  { label: "Disponibilidade de estoque", before: "62%", after: "96%", change: "+55%" },
];

export function ROISection() {
  return (
    <section id="resultados" className="section-padding bg-gradient-to-br from-primary-dark via-primary to-slate-700 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            Diferenciais Comprovados
          </span>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            O que muda na sua operação com a RR Packaging
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            Resultados médios de indústrias que migraram o fornecimento de peças e nacionalização para nossa operação
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comparisons.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/70">{item.label}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-xs text-white/50">Antes</p>
                    <p className="text-lg font-bold text-red-300 line-through">{item.before}</p>
                  </div>
                  <ArrowDown className="h-5 w-5 shrink-0 text-accent" />
                  <div className="flex-1">
                    <p className="text-xs text-white/50">Depois</p>
                    <p className="text-lg font-extrabold text-green-300">{item.after}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-1 rounded-lg bg-green-500/20 py-2">
                  {item.change.startsWith("+") ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-green-400" />
                  )}
                  <span className="text-sm font-extrabold text-green-300">{item.change}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <a href="#contato" className="btn-accent inline-flex text-base">
            Quero Reduzir Paradas na Minha Linha
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
