interface EditionCardItem {
  section: string;
  headline: string;
  blurb: string;
}

interface EditionCardProps {
  item: EditionCardItem;
  bordered?: boolean;
}

export default function EditionCard({ item, bordered = false }: EditionCardProps) {
  return (
    <div className={`px-5 ${bordered ? "border-r border-ink" : ""}`}>
      <p className="font-[family-name:var(--font-crimson)] font-bold text-[14px] tracking-[2px] text-navy uppercase mb-2">
        {item.section}
      </p>
      <h4 className="font-[family-name:var(--font-crimson)] font-bold text-[24px] leading-[1.2] text-ink mb-3">
        {item.headline}
      </h4>
      <div className="border-t border-ink mb-3" />
      <p className="font-[family-name:var(--font-crimson)] text-[18px] leading-[1.5] text-ink-mid">
        {item.blurb}
      </p>
    </div>
  );
}
