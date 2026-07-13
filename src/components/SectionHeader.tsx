interface SectionHeaderProps {
  label: string;
  sublabel?: string;
  center?: boolean;
}

export default function SectionHeader({ label, sublabel, center }: SectionHeaderProps) {
  return (
    <div className="w-full">
      {/* Double top rule */}
      <div className="border-t-[3px] border-ink" />
      <div className="border-t border-ink mt-[3px]" />
      <div
        className={`py-1.5 flex items-baseline gap-3 ${center ? "justify-center" : ""}`}
      >
        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[18px] tracking-[2px] uppercase text-ink">
          {label}
        </span>
        {sublabel && (
          <span className="font-[family-name:var(--font-crimson)] italic text-[16px] text-ink-mid">
            {sublabel}
          </span>
        )}
      </div>
      {/* Double bottom rule */}
      <div className="border-t border-ink" />
      <div className="border-t-[3px] border-ink mt-[3px]" />
    </div>
  );
}
