interface EditionPlanCardProps {
  name: string;
  price: string;
  description: string;
}

export default function EditionPlanCard({ name, price, description }: EditionPlanCardProps) {
  return (
    <div className="border border-ink p-6 cursor-pointer hover:bg-[rgba(233,219,203,0.4)] transition-colors">
      <h2 className="font-[family-name:var(--font-crimson)] font-bold text-[28px] text-ink mb-1">
        {name}
      </h2>
      <p className="font-[family-name:var(--font-crimson)] font-semibold text-[24px] text-navy mb-3">
        {price}
      </p>
      <p className="font-[family-name:var(--font-crimson)] text-[18px] text-ink-mid">
        {description}
      </p>
    </div>
  );
}
