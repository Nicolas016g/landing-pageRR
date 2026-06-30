import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "../ui/LeadForm";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeader } from "../ui/SectionHeader";

const contacts = [
  { icon: Phone, label: "+55 16 99781-8855", href: "tel:+5516997818855" },
  { icon: Mail, label: "contato@rrpackaging.com.br", href: "mailto:contato@rrpackaging.com.br" },
  { icon: MapPin, label: "Monte Alto, SP", href: undefined },
];

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Contato"
            title="Fale com um especialista"
            subtitle="Preencha o formulário abaixo ou utilize nossos canais diretos."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5">
              {contacts.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                    <span>{item.label}</span>
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-center gap-3 text-dark transition-colors hover:text-primary">
                    {content}
                  </a>
                ) : (
                  <p key={item.label} className="flex items-center gap-3 text-text-muted">
                    {content}
                  </p>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <LeadForm id="lead-form-contato" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
