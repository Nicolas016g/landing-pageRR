interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={`text-sm font-medium text-primary ${light ? "text-accent" : ""}`}>{eyebrow}</p>
      )}
      <h2 className={`section-title ${eyebrow ? "mt-2" : ""} ${light ? "text-white" : ""}`}>{title}</h2>
      <div className={`section-divider ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-3 text-base leading-relaxed ${light ? "text-white/70" : "text-text-muted"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
