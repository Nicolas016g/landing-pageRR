import { NextResponse } from "next/server";

const TO_EMAIL = "mkt.rrpackaging@gmail.com";
const CC_EMAILS = "renatoramalho@rrpackaging.com.br";

const INTEREST_LABELS: Record<string, string> = {
  pecas: "Peças",
  servicos: "Serviços técnicos",
  suporte: "Suporte e retrofit",
  treinamento: "Treinamentos",
};

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  _gotcha?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (body._gotcha) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const interest = body.interest?.trim();
    const message = body.message?.trim() ?? "";

    if (!name || !email || !phone || !interest) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    const interestLabel = INTEREST_LABELS[interest] ?? interest;

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Novo lead - RR Packaging (${interestLabel})`,
          from_name: name,
          email,
          phone,
          interesse: interestLabel,
          message: message || "(sem mensagem)",
        }),
      });

      const web3Data = (await web3Res.json()) as { success?: boolean; message?: string };
      if (!web3Res.ok || !web3Data.success) {
        return NextResponse.json(
          { error: web3Data.message ?? "Falha ao enviar o formulário." },
          { status: 502 },
        );
      }

      return NextResponse.json({ ok: true });
    }

    const formSubmitRes = await fetch(
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
          _cc: CC_EMAILS,
          name,
          email,
          phone,
          interesse: interestLabel,
          message: message || "(sem mensagem)",
        }),
      },
    );

    const formSubmitData = (await formSubmitRes.json()) as {
      success?: string;
      message?: string;
    };

    if (!formSubmitRes.ok || !formSubmitData.success) {
      return NextResponse.json(
        { error: formSubmitData.message ?? "Falha ao enviar o formulário." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erro interno ao enviar." }, { status: 500 });
  }
}
