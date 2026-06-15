"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const events = [
  { name: "Indústria Alimentícia", city: "SP", action: "solicitou orçamento de peças" },
  { name: "Bebidas Premium", city: "MG", action: "agendou suporte técnico" },
  { name: "Cosmética Nacional", city: "PR", action: "solicitou retrofit" },
  { name: "PharmaLine", city: "RJ", action: "pediu peças com urgência" },
];

export function SalesNotifications() {
  const [current, setCurrent] = useState<(typeof events)[0] | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const show = () => {
      setCurrent(events[index % events.length]);
      setIndex((i) => i + 1);
      setTimeout(() => setCurrent(null), 4500);
    };
    const initial = setTimeout(show, 12000);
    const interval = setInterval(show, 20000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [index]);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-24 left-4 z-50 max-w-xs border border-border bg-white p-4 shadow-xl md:left-6"
        >
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-dark">
                {current.name} <span className="font-normal text-text-muted">· {current.city}</span>
              </p>
              <p className="text-xs text-text-muted">{current.action}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
