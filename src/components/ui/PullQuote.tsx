import DoubleRule from "@/components/DoubleRule";
import RuleLine from "../RuleLine";

interface PullQuoteProps {
  text: string;
  classname?: string
}

export default function PullQuote({ text, classname }: PullQuoteProps) {
  return (
    <div className="my-2">
      <RuleLine color="#6A6661" strokeWidth={1.5} />
      <RuleLine color="#6A6661" strokeWidth={1.5} />
      <p className={`font-[family-name:var(--font-crimson)] italic text-[24px] min-[800px]:text-[26px] lg:text-[33px] xl:text-[41px] text-ink-mid text-center py-2 leading-[1.2] ${classname}`}>
        &ldquo;{text}&rdquo;
      </p>
      <RuleLine color="#6A6661" strokeWidth={1.5} />
      <RuleLine color="#6A6661" strokeWidth={1.5} />
    </div>
  );
}
