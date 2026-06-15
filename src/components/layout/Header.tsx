"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TopBar } from "../extras/TopBar";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Serviços", href: "#servicos" },
  { label: "Destaques", href: "#destaques" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <a href="#" className="flex items-center">
            <Image src="/images/logo-menu.svg" alt="R.R Packaging Parts" width={150} height={32} className="h-8 w-auto" priority />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+5516997818855"
              className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              <Phone className="h-4 w-4 text-accent" />
              (16) 99781-8855
            </a>
            <a href="#contato-form" className="btn-primary !rounded-lg !px-5 !py-2.5 !text-xs">
              Orçamento
            </a>
          </div>

          <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <>
            <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setOpen(false)} />
            <div className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-4 bg-dark p-8 pt-20 lg:hidden">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-white/90" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contato-form" className="btn-primary mt-4 rounded-lg text-center" onClick={() => setOpen(false)}>
                Orçamento
              </a>
            </div>
          </>
        )}
      </header>
    </>
  );
}
