"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LeadForm } from "../ui/LeadForm";

const slides = [
  { src: "/images/carrossel1.webp", alt: "Máquina envasadora" },
  { src: "/images/carrossel2.png", alt: "Linha de envase" },
  { src: "/images/carrossel3.webp", alt: "Embalagem flexível" },
];

const painPoints = [
  "a produção para",
  "os custos aumentam",
  "os prazos ficam comprometidos",
];

const stats = [
  { value: "500+", label: "Peças no catálogo" },
  { value: "100%", label: "Foco industrial" },
];

function HeroVisualBlock() {
  return (
    <span className="mb-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
      Produção no Brasil
    </span>
  );
}

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.src} alt={slide.alt} fill priority={i === 0} sizes="100vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,15,15,0.93) 0%, rgba(15,15,15,0.85) 50%, rgba(0,61,166,0.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-10 md:px-6 md:pt-6 md:pb-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="order-1 lg:order-2" id="contato-form">
            <p className="text-sm font-medium text-accent">R.R Packaging Parts</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Fabricação de peças importadas para máquinas embaladoras envasadoras
            </h1>
            <div className="mt-6">
              <LeadForm
                compact
                title="Entre em contato"
                subtitle="Preencha o formulário e fale com um especialista."
              />
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <HeroVisualBlock />

            <h2 className="text-xl font-semibold leading-snug text-white md:text-2xl">
              Sua máquina depende de uma peça importada?
            </h2>
            <p className="mt-3 text-base font-medium text-accent">
              Existe uma solução mais rápida e eficiente: fabricação local.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Muitas empresas ficam reféns do lead time internacional quando um componente precisa ser
              substituído. Enquanto a peça não chega:
            </p>

            <ul className="mt-4 space-y-2">
              {painPoints.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-white/75">
              A RR Packaging desenvolve e fabrica no Brasil peças equivalentes para máquinas embaladoras e
              envasadoras FFS &amp; FS — substituindo componentes nacionais e principalmente importados com
              qualidade controlada, homologação dimensional e entrega previsível, para manter suas operações
              funcionando com mais segurança e agilidade.
            </p>

            <p className="mt-6 text-sm font-semibold text-white">
              Mais disponibilidade. Menos espera. Mais produtividade.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contato-form" className="btn-primary">
                Fale com um especialista
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#solucoes" className="btn-outline-white">
                Ver soluções
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:gap-8 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Imagem ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all ${i === active ? "w-8 bg-accent" : "w-1.5 bg-white/35"}`}
          />
        ))}
      </div>
    </section>
  );
}
