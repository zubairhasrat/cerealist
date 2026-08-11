import ContentContainer from "@/components/ui/ContentContainer";
import DoubleRule from "@/components/DoubleRule";

interface ArticleCardProps {
  category: string;
  headline: string;
  description: string;
  /** Tailwind order class for mobile reordering, e.g. "order-3" */
  mobileOrderClass?: string;
  /** Add bottom border (mobile row separator) */
  mobileRowBorder?: boolean;
}

function ArticleCard({
  category,
  headline,
  description,
  mobileOrderClass = "",
  mobileRowBorder = false,
}: ArticleCardProps) {
  return (
    <div
      className={[
        "px-4 md:px-6 py-4 md:py-0",
        mobileOrderClass,
        mobileRowBorder ? "border-b border-ink pb-6 mb-0 md:border-b-0 md:pb-0" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="font-[family-name:var(--font-crimson)] font-bold text-[13px] md:text-[20px] uppercase text-navy">
        {category}
      </p>
      <h3 className="font-[family-name:var(--font-crimson)] font-bold text-[20px] md:text-[35px] leading-[1.1] md:leading-[33px] text-ink mt-1">
        {headline}
      </h3>
      <p className="font-[family-name:var(--font-crimson)] text-[15px] md:text-[27px] leading-[1.2] md:leading-[29px] text-ink mt-2">
        {description}
      </p>
    </div>
  );
}

// Desktop column order: POLITICS, SPORTS, THE FUNNIES, OPINION
// Mobile grid order:    POLITICS, SPORTS, OPINION, THE FUNNIES
// → swap THE FUNNIES (md col 3 → mobile row2-right) and OPINION (md col 4 → mobile row2-left)
const ARTICLES: ArticleCardProps[] = [
  {
    category: "POLITICS",
    headline: "The War Ends. The Party Starts.",
    description:
      "A cartoonist's view of parades, patriotism, and national birthday parties.",
    mobileRowBorder: true,
  },
  {
    category: "SPORTS",
    headline: "New York Knicks Championship Win",
    description:
      "A cartoonist's take on area dad that can finally stop talking about 1973.",
    mobileRowBorder: true,
  },
  {
    // Desktop col 3, mobile row2-right (order 4)
    category: "THE FUNNIES",
    headline: "Everything is a Superfood",
    description: "A cartoonist's view of nutritional inflation.",
    mobileOrderClass: "order-4 md:order-none",
  },
  {
    // Desktop col 4, mobile row2-left (order 3)
    category: "OPINION",
    headline: "Musk Bags a Thousand Billion",
    description:
      "A cartoonist's view of the first man to need a longer calculator.",
    mobileOrderClass: "order-3 md:order-none",
  },
];

export default function EditionSection() {
  return (
    <section className="bg-transparent mt-8">
      <ContentContainer>

        {/* Section header: double rule / centered label / double rule */}
        <DoubleRule />
        <p className="font-[family-name:var(--font-crimson)] font-semibold text-[18px] md:text-[28px] uppercase text-ink text-center py-3">
          INSIDE THIS MONTH&apos;S EDITION
        </p>
        <DoubleRule />

        <div className="px-6">
          {/* Grid: 2-col mobile / 4-col desktop, vertical dividers via divide-x */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink border-l border-ink mt-6">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.category} {...article} />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
