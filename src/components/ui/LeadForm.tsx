"use client";

import { Loader2, Lock, Send } from "lucide-react";
import { useState } from "react";

interface LeadFormProps {
  id?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  _gotcha: string;
};

const TO_EMAIL = "mkt.rrpackaging@gmail.com";

const INTEREST_LABELS: Record<string, string> = {
  pecas: "Peças",
  servicos: "Serviços técnicos",
  suporte: "Suporte e retrofit",
  treinamento: "Treinamentos",
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
  _gotcha: "",
};

export function LeadForm({
  id = "lead-form",
  title = "Solicite um orçamento",
  subtitle = "Preencha o formulário e fale com um especialista.",
  compact = false,
}: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setError(null);
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.interest) {
      setError("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    const interestLabel = INTEREST_LABELS[form.interest] ?? form.interest;

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `Novo lead - RR Packaging (${interestLabel})`,
            _template: "table",
            _captcha: "false",
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            interesse: interestLabel,
            message: form.message.trim() || "(sem mensagem)",
          }),
        },
      );

      const data = (await res.json()) as { success?: string; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.message ?? "Não foi possível enviar.");
      }

      setSent(true);
      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar. Tente novamente ou use o WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="card-premium rounded-xl p-8 text-center" id={id}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-2xl text-primary">
          ✓
        </div>
        <p className="font-medium text-dark">Mensagem enviada</p>
        <p className="mt-1 text-sm text-text-muted">
          Recebemos seus dados. Retornaremos em até 24h úteis.
        </p>
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
        <input
          type="text"
          name="_gotcha"
          value={form._gotcha}
          onChange={update("_gotcha")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <input
          required
          type="text"
          name="name"
          placeholder="Nome"
          className="input-field"
          value={form.name}
          onChange={update("name")}
          autoComplete="name"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="E-mail"
          className="input-field"
          value={form.email}
          onChange={update("email")}
          autoComplete="email"
        />
        <input
          required
          type="tel"
          name="phone"
          placeholder="Telefone / WhatsApp"
          className="input-field"
          value={form.phone}
          onChange={update("phone")}
          autoComplete="tel"
        />
        <select
          required
          name="interest"
          className="input-field"
          value={form.interest}
          onChange={update("interest")}
        >
          <option value="" disabled>Interesse</option>
          <option value="pecas">Peças</option>
          <option value="servicos">Serviços técnicos</option>
          <option value="suporte">Suporte e retrofit</option>
          <option value="treinamento">Treinamentos</option>
        </select>
        {!compact && (
          <textarea
            rows={3}
            name="message"
            placeholder="Mensagem (opcional)"
            className="input-field resize-none"
            value={form.message}
            onChange={update("message")}
          />
        )}

        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full rounded-lg disabled:opacity-60"
        >
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
          Dados enviados para nossa equipe de marketing
        </p>
      </form>
    </div>
  );
}
