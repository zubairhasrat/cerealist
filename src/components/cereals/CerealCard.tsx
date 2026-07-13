import CTAButton from "@/components/CTAButton";

interface CerealCardProps {
  name: string;
  flavor: string;
  price: string;
}

export default function CerealCard({ name, flavor, price }: CerealCardProps) {
  return (
    <div className="border border-ink bg-paper p-5">
      <div className="aspect-square bg-gradient-to-b from-cream-fill to-cream-fill-dark border border-cream-border mb-4 flex items-center justify-center">
        <span className="font-[family-name:var(--font-crimson)] italic text-[14px] text-cream-border">
          [Image]
        </span>
      </div>
      <h3 className="font-[family-name:var(--font-crimson)] font-bold text-[24px] text-ink mb-1">
        {name}
      </h3>
      <p className="font-[family-name:var(--font-crimson)] italic text-[16px] text-ink-mid mb-3">
        {flavor}
      </p>
      <div className="border-t border-ink mb-3" />
      <div className="flex items-center justify-between mb-4">
        <span className="font-[family-name:var(--font-crimson)] font-semibold text-[22px] text-ink">
          {price}
        </span>
      </div>
      <CTAButton href="/checkout" variant="primary">
        Add to Box
      </CTAButton>
    </div>
  );
}
