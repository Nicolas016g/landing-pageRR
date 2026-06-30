"use client";

import { Loader2, Lock, Send } from "lucide-react";
import { useState } from "react";

interface LeadFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export function LeadForm({
  id = "lead-form",
  title = "Solicite um orçamento",
  subtitle = "Preencha o formulário e fale com um especialista.",
  compact = false,
}: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  if (sent) {
    return (
      <div className="card-premium rounded-xl p-8 text-center" id={id}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-2xl text-primary">
          ✓
        </div>
        <p className="font-medium text-dark">Mensagem enviada</p>
        <p className="mt-1 text-sm text-text-muted">Retornaremos em até 24h úteis.</p>
      </div>
    );
  }

  return (
    <div className="card-premium relative overflow-hidden rounded-xl" id={id}>
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-light to-accent" />

      <div className="border-b border-border/60 bg-surface/80 px-6 py-5">
        <h3 className="font-semibold text-dark">{title}</h3>
        <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-6">
        <input required type="text" placeholder="Nome" className="input-field" />
        <input required type="email" placeholder="E-mail" className="input-field" />
        <input required type="tel" placeholder="Telefone / WhatsApp" className="input-field" />
        <select required className="input-field" defaultValue="">
          <option value="" disabled>Interesse</option>
          <option value="pecas">Peças</option>
          <option value="servicos">Serviços técnicos</option>
          <option value="suporte">Suporte e retrofit</option>
          <option value="treinamento">Treinamentos</option>
        </select>
        {!compact && (
          <textarea rows={3} placeholder="Mensagem (opcional)" className="input-field resize-none" />
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full rounded-lg disabled:opacity-60">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Pedir orçamento
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-text-muted">
          <Lock className="h-3 w-3" />
          Dados protegidos · Sem compromisso
        </p>
      </form>
    </div>
  );
}
