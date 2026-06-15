"use client";

import { motion } from "framer-motion";
import { Activity, Box, Package, Timer } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative hidden lg:block">
      <div className="absolute -inset-6 bg-primary/10 blur-2xl" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden border border-border bg-white shadow-[0_16px_48px_rgba(0,61,166,0.12)]"
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 bg-red-400" />
            <div className="h-2.5 w-2.5 bg-yellow-400" />
            <div className="h-2.5 w-2.5 bg-green-400" />
          </div>
          <span className="ml-2 text-xs font-semibold uppercase text-text-muted">
            R.R Packaging — Painel
          </span>
          <span className="ml-auto flex items-center gap-1 text-[10px] font-bold uppercase text-primary">
            <span className="h-1.5 w-1.5 animate-pulse bg-accent" />
            Ativo
          </span>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Peças", value: "500+", icon: Package },
              { label: "OEE", value: "94%", icon: Activity },
              { label: "Lead time", value: "48h", icon: Timer },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="bg-surface p-3"
              >
                <m.icon className="mb-2 h-4 w-4 text-primary" />
                <p className="text-lg font-bold text-dark">{m.value}</p>
                <p className="text-[10px] font-medium uppercase text-text-muted">{m.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 border border-border/60 bg-primary/5 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-dark">Produção semanal</span>
              <Box className="h-4 w-4 text-primary" />
            </div>
            <div className="flex h-16 items-end gap-1">
              {[55, 70, 60, 85, 75, 92, 88, 95, 90, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-primary to-accent"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
