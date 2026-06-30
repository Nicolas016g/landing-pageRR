import Image from "next/image";

const clients = [
  { name: "Unilever", logo: "/images/clientes/unilever.svg" },
  { name: "Cargill", logo: "/images/clientes/cargill.svg" },
  { name: "Nestlé", logo: "/images/clientes/nestle.svg" },
  { name: "Fugini Alimentos", logo: "/images/clientes/fugini.png" },
  { name: "Predilecta Alimentos", logo: "/images/clientes/predilecta.png" },
  { name: "Reckitt Benckiser", logo: "/images/clientes/reckitt.svg" },
  { name: "Indústrias Reunidas Raymundo da Fonte", logo: "/images/clientes/irrf.svg" },
  { name: "Goiás Verde Alimentos", logo: "/images/clientes/goiasverde.jpg" },
  { name: "Flora Produtos de Limpeza", logo: "/images/clientes/flora.png" },
  { name: "Vigor Alimentos", logo: "/images/clientes/vigor.svg" },
];

const marqueeClients = Array.from({ length: 4 }, () => clients).flat();

export function TrustBar() {
  return (
    <section id="clientes" className="border-y border-border/60 bg-gradient-to-r from-surface via-white to-surface py-8">
      <div className="mb-6 text-center md:mb-8">
        <p className="text-xs font-medium text-primary">
          Indústrias de embalagem flexível confiam na RR Packaging Parts
        </p>
        <p className="mt-1 text-sm text-text-muted">
          Alimentos, bebidas, cosméticos, farmacêutica e química
        </p>
      </div>
      <div className="relative mt-2 overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex animate-marquee items-center whitespace-nowrap">
          {marqueeClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-8 flex h-14 w-40 shrink-0 items-center justify-center rounded-lg bg-white/80 px-3 md:mx-10 md:w-44"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={56}
                className="h-10 w-full max-w-[160px] object-contain opacity-80 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 md:h-11"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
