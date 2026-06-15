"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LeadForm } from "../ui/LeadForm";

const slides = [
  { src: "/images/carrossel1.webp", alt: "Máquina envasadora" },
  { src: "/images/carrossel2.png", alt: "Linha de envase" },
  { src: "/images/carrossel3.webp", alt: "Embalagem flexível" },
];

const bullets = [
  "Peças de alta precisão para linhas horizontais e verticais",
  "Suporte técnico presencial ou remoto em todo o Brasil",
  "Stand Up Pouch, Stick Pack, Pillow Bag e mais",
];

const stats = [
  { value: "500+", label: "Peças no catálogo" },
  { value: "24h", label: "Resposta média" },
  { value: "BR", label: "Atendimento nacional" },
];

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          {/* Formulário em primeiro no mobile */}
          <div className="order-1 lg:order-2" id="contato-form">
            <LeadForm
              compact
              title="Entre em contato"
              subtitle="Preencha o formulário e fale com um especialista."
            />
          </div>

          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-accent">R.R Packaging Parts</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Peças e soluções para máquinas envasadoras
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              Ribeirão Preto, SP — Atendimento nacional
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contato" className="btn-primary">
                Fale com um especialista
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#solucoes" className="btn-outline-white">
                Ver soluções
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:gap-8 md:p-8">
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
