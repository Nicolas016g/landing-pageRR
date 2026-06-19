"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105 hover:bg-primary-dark"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
