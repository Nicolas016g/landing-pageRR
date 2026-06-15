const clients = [
  "PackBrasil", "EnvasePro", "RotulMax", "IndústriaFood",
  "BebidasNorte", "CosméticaPlus", "PharmaLine", "AgroPack",
  "PackBrasil", "EnvasePro", "RotulMax", "IndústriaFood",
];

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-gradient-to-r from-surface via-white to-surface py-8">
      <div className="mb-2 text-center">
        <p className="text-xs font-medium text-primary">
          Indústrias de embalagem flexível confiam na R.R Packaging Parts
        </p>
        <p className="mt-1 text-sm text-text-muted">
          Alimentos, bebidas, cosméticos, farmacêutica e química
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {clients.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-10 flex items-center gap-3 text-xl font-extrabold text-primary/25"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 shadow-sm" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
