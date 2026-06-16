"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TopBar } from "../extras/TopBar";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Serviços", href: "#servicos" },
  { label: "Destaques", href: "#destaques" },
  { label: "Contato", href: "#contato" },
];

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return createPortal(
    <div className="mobile-nav-root lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <button type="button" className="mobile-nav-backdrop" onClick={onClose} aria-label="Fechar menu" />

      <aside className="mobile-nav-panel">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="text-sm font-medium text-white">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="shrink-0 border-t border-white/10 p-5">
          <a
            href="tel:+5516997818855"
            className="mb-3 flex items-center gap-2 text-sm text-white/80"
            onClick={onClose}
          >
            <Phone className="h-4 w-4 text-accent" />
            (16) 99781-8855
          </a>
          <a href="#contato-form" className="btn-primary w-full rounded-lg text-center" onClick={onClose}>
            Solicitar orçamento
          </a>
        </div>
      </aside>
    </div>,
    document.body
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      document.body.style.overflow = "hidden";
      root.classList.add("mobile-nav-open");
    } else {
      document.body.style.overflow = "";
      root.classList.remove("mobile-nav-open");
    }
    return () => {
      document.body.style.overflow = "";
      root.classList.remove("mobile-nav-open");
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <a href="#" className="flex shrink-0 items-center">
            <Image
              src="/images/logo-menu.svg"
              alt="R.R Packaging Parts"
              width={150}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
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

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mounted && <MobileNav open={open} onClose={closeMenu} />}
    </>
  );
}
