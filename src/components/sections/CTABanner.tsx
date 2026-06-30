"use client";

import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-light py-14 md:py-16">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6">
        <ScrollReveal>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Entre em contato e fale com um especialista
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Orçamentos, suporte técnico e soluções para máquinas embaladoras envasadoras horizontais e verticais.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contato-form" className="btn-accent !px-8">
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+55 16 3190-4501"
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20"
          >
            <Phone className="h-4 w-4" />
            +55 16 3190-4501
          </a>
          <a
            href="https://wa.me/+55 16 3190-4501"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25d366] px-6 py-3 text-sm font-medium text-white hover:bg-[#20bd5a]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
