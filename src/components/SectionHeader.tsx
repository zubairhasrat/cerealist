interface SectionHeaderProps {
  label: string;
  sublabel?: string;
  center?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SectionHeader({ label, sublabel, center: _center }: SectionHeaderProps) {
  return (
    <div className="w-full">
      {/* Top rule: 4.5px */}
      <hr className="border-t-[4.5px] border-ink border-b-0" />

      {/* Label row: flanking 1.59px hairlines + centered label */}
      <div className="flex items-center gap-4 py-2">
        <hr className="flex-1 border-t-[1.59px] border-ink border-b-0" />
        <div className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-[family-name:var(--font-crimson)] font-semibold text-[24px] md:text-[38px] tracking-[1px] uppercase text-ink">
            {label}
          </span>
          {sublabel && (
            <span className="font-[family-name:var(--font-crimson)] font-semibold italic text-[18px] md:text-[30px] text-ink-mid">
              {sublabel}
            </span>
          )}
        </div>
        <hr className="flex-1 border-t-[1.59px] border-ink border-b-0" />
      </div>

      {/* Bottom rule: 2.27px */}
      <hr className="border-t-[2.27px] border-ink border-b-0" />
    </div>
  );
}
