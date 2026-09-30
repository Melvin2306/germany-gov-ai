export function FlagMark({ size = "md" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-7 w-12" : "h-[18px] w-7";
  return (
    <span className={`inline-flex ${dims} flex-col overflow-hidden rounded-[2px] shadow-sm`} aria-hidden>
      <span className="flex-1 bg-schwarz" />
      <span className="flex-1 bg-rot" />
      <span className="flex-1 bg-gold" />
    </span>
  );
}
