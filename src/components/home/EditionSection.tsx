import ContentContainer from "@/components/ui/ContentContainer";
import DoubleRule from "@/components/DoubleRule";

interface ArticleCardProps {
  category: string;
  headline: string;
  description: string;
  mobileOrderClass?: string;
  mobileBorderClass?: string;
  /** Extra mobile padding (right-col cards need pl-4) */
  mobilePadClass?: string;
}

function ArticleCard({
  category,
  headline,
  description,
  mobileOrderClass = "",
  mobileBorderClass = "",
  mobilePadClass = "",
}: ArticleCardProps) {
  return (
    <div
      className={[
        "md:px-6 md:py-0",
        mobileOrderClass,
        mobileBorderClass,
        mobilePadClass,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="font-[family-name:var(--font-crimson)] font-bold text-[13px] md:text-[20px] uppercase text-navy">
        {category}
      </p>
      <h3 className="font-[family-name:var(--font-crimson)] font-bold text-[22px] md:text-[35px] leading-[1.15] md:leading-[33px] text-ink mt-1">
        {headline}
      </h3>
      <p className="font-[family-name:var(--font-crimson)] text-[16px] md:text-[27px] leading-[1.3] md:leading-[29px] text-ink mt-2">
        {description}
      </p>
    </div>
  );
}

// Desktop: POLITICS | SPORTS | THE FUNNIES | OPINION
// Mobile:  POLITICS | SPORTS / OPINION | THE FUNNIES
// Left-col (1st, 3rd): no mobile px, no mobile py
// Right-col (2nd, 4th): pl-4 on mobile, no mobile py
const ARTICLES: ArticleCardProps[] = [
  {
    category: "POLITICS",
    headline: "The War Ends. The Party Starts.",
    description:
      "A cartoonist's view of parades, patriotism, and national birthday parties.",
    // left-col, top-row: bottom + right border
    mobileBorderClass: "border-b border-r border-ink md:border-b-0 md:border-r-0",
    mobilePadClass: "pb-2 md:pb-0",
  },
  {
    category: "SPORTS",
    headline: "New York Knicks Championship Win",
    description:
      "A cartoonist's take on area dad that can finally stop talking about 1973.",
    // right-col, top-row: bottom border only, left padding
    mobileBorderClass: "border-b border-ink md:border-b-0 md:border-l",
    mobilePadClass: "pl-2 pb-2 md:pb-0",
  },
  {
    // Desktop col 3, mobile row2-right (order 4)
    category: "THE FUNNIES",
    headline: "Everything is a Superfood",
    description: "A cartoonist's view of nutritional inflation.",
    mobileOrderClass: "order-4 md:order-none",
    // right-col, bottom-row: left padding + explicit desktop left border
    mobilePadClass: "pl-2 pt-2 md:pt-0",
  },
  {
    // Desktop col 4, mobile row2-left (order 3)
    category: "OPINION",
    headline: "Musk Bags a Thousand Billion",
    description:
      "A cartoonist's view of the first man to need a longer calculator.",
    mobileOrderClass: "order-3 md:order-none",
    // left-col, bottom-row: right border only, no px
    mobileBorderClass: "border-r border-ink pt-2 md:border-r-0 md:pt-0",
  },
];

export default function EditionSection() {
  return (
    <section className="bg-transparent mt-8">
      <ContentContainer>

        <DoubleRule />
        <p className="font-[family-name:var(--font-crimson)] font-semibold text-[20px] md:text-[28px] uppercase text-ink text-center py-3">
          INSIDE THIS MONTH&apos;S EDITION
        </p>
        <DoubleRule inverse />

        <div className="px-0 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-ink md:border-l md:border-ink mt-6">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.category} {...article} />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
