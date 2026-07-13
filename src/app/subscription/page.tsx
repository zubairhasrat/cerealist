import PageWrapper from "@/components/PageWrapper";
import CTAButton from "@/components/CTAButton";
import EditionPlanCard from "@/components/subscription/EditionPlanCard";

const EDITIONS = [
  {
    name: "Monthly Edition",
    price: "$19.99",
    description: "One box of cereal + the month's front page, delivered monthly.",
  },
  {
    name: "Just This Issue",
    price: "$22.99",
    description: "A single issue, no commitment. Great for gifts.",
  },
];

export default function SubscriptionPage() {
  return (
    <PageWrapper className="py-12 max-w-[800px]">
      <div className="border-2 border-ink bg-paper p-10">
        <div className="border-b-2 border-ink pb-6 mb-8 text-center">
          <h1 className="font-[family-name:var(--font-crimson)] font-bold text-[48px] text-ink leading-none">
            Choose Your Edition
          </h1>
          <p className="font-[family-name:var(--font-crimson)] italic text-[22px] text-ink-mid mt-2">
            Select the plan that&apos;s right for you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {EDITIONS.map((edition) => (
            <EditionPlanCard key={edition.name} {...edition} />
          ))}
        </div>

        <div className="mt-8">
          <CTAButton href="/checkout" variant="primary">
            Subscribe Now
          </CTAButton>
        </div>
      </div>
    </PageWrapper>
  );
}
