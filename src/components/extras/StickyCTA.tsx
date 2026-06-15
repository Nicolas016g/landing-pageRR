"use client";

import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-primary/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(30,58,95,0.1)] backdrop-blur-md md:p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="hidden text-sm font-bold text-primary-dark sm:block">
          Precisa de uma peça ou nacionalizar um importado? Fale com nossos especialistas
        </p>
        <a href="#contato" className="btn-primary flex-1 text-sm sm:flex-none">
          Fale com um Especialista
          <ArrowRight className="h-4 w-4" />
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 rounded-lg p-2 text-text-muted hover:bg-surface"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
