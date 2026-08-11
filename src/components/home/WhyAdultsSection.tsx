import DoubleRule from "@/components/DoubleRule";
import ContentContainer from "@/components/ui/ContentContainer";

const reasons = [
  "For people who miss the childhood breakfast experience.",
  "For people who still love print culture.",
  "For people who want a morning ritual that brings back memories.",
];

export default function WhyAdultsSection() {
  return (
    <section className="mt-8">
      <ContentContainer>
        <DoubleRule />
        <p className="font-crimson font-semibold text-[28.5px] uppercase tracking-wide text-center py-3">
          WHY ADULTS LOVE THE CEREALIST
        </p>
        <DoubleRule />
        <div className="flex flex-col md:flex-row gap-[29px] mt-6">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex-1 rounded-[20px] border-[2.9px] border-rule-light bg-(--color-card) px-12 py-5 text-center"
            >
              <p className="font-crimson text-[25px] text-ink-mid leading-normal">
                {text}
              </p>
            </div>
          ))}
        </div>
        <DoubleRule className="mt-6" />
      </ContentContainer>
    </section>
  );
}
