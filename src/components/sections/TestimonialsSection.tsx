"use client";

import { Quote, Star, TrendingUp } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Gerente de Produção, Alimentos Brasil",
    text: "Reduzimos paradas não programadas em 80% após migrar o fornecimento de peças para a RR Packaging. A nacionalização que levava 40 dias agora leva menos de 2 semanas.",
    avatar: "RM",
    result: "-80% paradas",
  },
  {
    name: "Patrícia Nogueira",
    role: "Diretora Industrial, Bebidas Premium",
    text: "A equipe técnica entende de envasadoras de verdade. Encontraram peças que três fornecedores disseram que não existiam mais. Entrega impecável.",
    avatar: "PN",
    result: "Peça em 36h",
  },
  {
    name: "Marcos Oliveira",
    role: "Manutenção, Cosmética Nacional",
    text: "O contrato de manutenção preventiva pagou-se no primeiro mês. Estoque dedicado e suporte 24h fizeram toda a diferença na nossa linha de envase.",
    avatar: "MO",
    result: "ROI em 30 dias",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-surface relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Prova Social"
            title="Indústrias que confiam na RR Packaging"
            subtitle="Resultados reais de quem não pode parar a linha de produção"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="card card-hover relative h-full overflow-hidden p-7">
                <Quote className="absolute right-4 top-4 h-10 w-10 text-primary/5" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-extrabold text-green-700">
                  <TrendingUp className="h-3 w-3" />
                  {t.result}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-white shadow-md">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-extrabold text-primary-dark">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <p className="text-sm font-bold text-primary-dark">
            ⭐ Nota média 4.8/5 baseada em +180 avaliações de clientes industriais
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
