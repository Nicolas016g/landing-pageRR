"use client";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-gradient-to-r from-primary-dark via-primary to-primary-light py-2 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <p className="text-xs font-medium text-white/90">
          Nacionalização e reposição de peças para máquinas embaladoras envasadoras
        </p>
        <a href="#contato-form" className="text-xs font-medium text-white transition-colors hover:text-accent">
          Solicitar orçamento →
        </a>
      </div>
    </div>
  );
}
