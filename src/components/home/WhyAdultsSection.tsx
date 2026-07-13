import SectionHeader from "@/components/SectionHeader";

const WHY_ADULTS = [
  "For people who miss the childhood breakfast experience.",
  "For people who still love print culture.",
  "For people who want a morning ritual that brings back memories.",
];

export default function WhyAdultsSection() {
  return (
    <section className="pt-6 pb-6 border-b-2 border-ink">
      <SectionHeader label="Why Adults Love The Cerealist" center />

      <div className="flex items-center justify-center gap-6 pt-6">
        {WHY_ADULTS.map((text) => (
          <div
            key={text}
            className="bg-[rgba(233,219,203,0.3)] border border-rule-light rounded-[18px] px-8 py-5 flex-1 max-w-[320px] text-center"
          >
            <p className="font-[family-name:var(--font-crimson)] text-[18px] leading-[1.4] text-ink-mid">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
