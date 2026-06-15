"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center">
        <Image src="/images/logo-menu.svg" alt="R.R Packaging" width={130} height={32} className="h-8 w-auto" />
        <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-8">
          <a href="tel:+5516997818855" className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" />
            +55 (16) 99781-8855
          </a>
          <a href="mailto:contato@rrpackaging.com.br" className="hover:text-white">
            contato@rrpackaging.com.br
          </a>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © 2026 R.R Packaging Parts
      </p>
    </footer>
  );
}
