import DoubleRule from "@/components/DoubleRule";

interface PullQuoteProps {
  text: string;
}

export default function PullQuote({ text }: PullQuoteProps) {
  return (
    <div className="my-6">
      <DoubleRule />
      <p className="font-[family-name:var(--font-crimson)] italic text-[28px] md:text-[41px] text-ink-mid text-center py-4 leading-snug">
        &ldquo;{text}&rdquo;
      </p>
      <DoubleRule />
    </div>
  );
}
