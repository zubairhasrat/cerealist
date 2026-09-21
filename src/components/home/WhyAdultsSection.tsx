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
        <p className="font-crimson font-semibold text-[15px] phone:text-[18px] lg:text-[28.5px] uppercase text-center py-1 lg:py-3">
          WHY ADULTS LOVE THE CEREALIST
        </p>
        <DoubleRule inverse />
        <div className="flex flex-col lg:flex-row gap-3 xl:gap-7.25 mt-3.5 lg:mt-6">
          {reasons.map((text) => (
            <div
              key={text}
              className="flex-1 rounded-[20px] border-[2.9px] border-rule-light bg-(--color-card) px-7 lg:px-12 py-4 text-center"
            >
              <p className="font-crimson text-[22px] phone:text-[26px] lg:text-[27px] text-ink-mid leading-normal">
                {text}
              </p>
            </div>
          ))}
        </div>
        <DoubleRule className="mt-3 xl:mt-6" inverse />
      </ContentContainer>
    </section>
  );
}
