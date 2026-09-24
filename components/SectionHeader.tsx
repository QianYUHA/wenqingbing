type SectionHeaderProps = { number: string; title: string; className?: string };

export function SectionHeader({ number, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-4 text-muted ${className}`}>
      <span className="meta text-ink">{number}</span>
      <div className="rule flex-1" />
      <span className="meta">{title}</span>
    </div>
  );
}
