import Image from "next/image";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/SectionHeader";
import DoubleRule from "@/components/DoubleRule";
import PullQuote from "@/components/ui/PullQuote";

export default function OpinionSection() {
  return (
    <section className="bg-transparent">
      <ContentContainer>

        {/* Section header: single rule / label row / single rule */}
        <SectionHeader label="OPINION" sublabel="The Editorial Side" />

        <article className="mt-6">

          {/* ── Article header (full-width, centered) ─────────────── */}
          <h2 className="font-[family-name:var(--font-crimson)] font-semibold text-[41px] md:text-[60px] xl:text-[79px] text-ink text-center leading-[0.93] tracking-[-0.02em]">
            It Was Never Just About the Cereal
          </h2>
          <p className="font-[family-name:var(--font-crimson)] italic text-[27px] md:text-[40px] text-ink-warm text-center mt-4">
            How breakfast lost its stories, and what happened next.
          </p>
          <p className="font-[family-name:var(--font-crimson)] font-bold text-[18px] md:text-[30px] uppercase tracking-[0.6px] text-ink text-center mt-3">
            BY THE EDITORIAL BOARD
          </p>

          <DoubleRule className="my-6" />

          {/* ── Two-column body ───────────────────────────────────── */}
          {/* Desktop: Figma proportions — image 58%, text 42%, image overlaps text by ~15% */}
          {/* Grid: col1=43%, col2=15% (overlap zone), col3=rest. Image spans cols 1-2, text spans cols 2-3 */}
          <div className="hidden xl:grid grid-cols-[43%_15%_1fr]">
            {/* Image: spans cols 1-2 (58% wide), drives row height */}
            <div className="col-start-1 col-end-3 row-start-1">
              <Image
                src="/images/cereal-box-bowl.png"
                alt="The Cerealist cereal box and bowl, Vol. I"
                width={1595}
                height={1592}
                className="w-full h-auto"
              />
            </div>

            {/* Text: spans cols 2-3, starts at 43%, overlaps image by 15% */}
            <div className="col-start-2 col-end-4 row-start-1 z-10 pt-4 lg:pt-6 xl:pt-[30px]">
              {/* Drop cap body paragraph */}
              <div className="font-[family-name:var(--font-crimson)] text-[20px] md:text-[22px] lg:text-[28px] xl:text-[35px] text-ink-mid leading-[1.25] max-w-full xl:max-w-[80%]">
                <span
                  aria-hidden="true"
                  className="float-left font-[family-name:var(--font-crimson)] font-semibold text-[65px] lg:text-[82px] xl:text-[105px] leading-[0.6] tracking-[-0.02em] text-ink mr-1"
                >
                  C
                </span>
                ereal used to be more than cereal. It was something you wanted to eat, and
                something you wanted to look at. Flavor, color, crunch, alongside games,
                stories, characters. It wasn&apos;t just breakfast. It was an{" "}
                <em>experience</em>.
              </div>
              <div className="clear-both" />

              {/* Pull quote */}
              <div className="max-w-full xl:max-w-[70%]">
                <PullQuote text="It wasn't just breakfast. It was an experience." />
              </div>

              {/* Continuation text — shape-outside float traces bowl silhouette so
                  text wraps naturally around the bowl that bleeds into the text column */}
              <div className="font-[family-name:var(--font-crimson)] text-[20px] md:text-[22px] lg:text-[28px] xl:text-[35px] text-ink-mid leading-[1.3] pr-2">
                {/* Invisible float: width = how far bowl extends into text column (~26% of col),
                    polygon traces bowl's right silhouette. marginTop accounts for the gap between
                    where continuation text starts and where the bowl first intrudes. */}
                <div
                  aria-hidden="true"
                  className="float-left"
                  style={{
                    width: "36%",
                    height: "7em",
                    marginTop: "1.5em",
                    shapeOutside: `polygon(
                      0% 0%,
                      0% 0%,
                      0% 18%,
                      0 33%,
                      34% 50%,
                      84% 65%,
                      68% 80%,
                      45% 100%,
                      0% 100%
                    )`,
                    shapeMargin: "8px",
                  }}
                />
                As it turns out, that&apos;s not a small thing to lose. We brought it back,
                just <em>differently</em>. The Cerealist is the adult version of what cereal
                always was, something delicious and something entertaining, only now the
                entertainment grew up too. Instead of games and mascots, it&apos;s cartoons,
                commentary, and headlines.
              </div>
              <div className="clear-both" />
            </div>

          </div>

          {/* Mobile + Tablet: stacked layout */}
          <div className="xl:hidden">
            {/* First paragraph — drop cap, full width */}
            <div className="font-[family-name:var(--font-crimson)] text-[27px] text-ink-mid leading-[34px]">
              <span
                aria-hidden="true"
                className="float-left font-[family-name:var(--font-crimson)] font-semibold text-[105px] leading-[0.6] tracking-[-0.02em] text-ink mr-1"
              >
                C
              </span>
              ereal used to be more than cereal. It was something you wanted to eat, and
              something you wanted to look at. Flavor, color, crunch, alongside games,
              stories, characters. It wasn&apos;t just breakfast. It was an{" "}
              <em>experience</em>.
            </div>
            <div className="clear-both" />
            <PullQuote text="It wasn't just breakfast. It was an experience." />
            {/* Second paragraph — image float LEFT with polygon silhouette shape-outside.
                Float is 70% wide. Polygon right edge traces: box (~83% of float = 58%
                of container) then bowl shoulder/widest (~97% of float = 68% of container).
                Text wraps close to box at top, indents past bowl, goes full-width below. */}
            <div className="font-[family-name:var(--font-crimson)] text-[24px] text-ink-mid leading-[32px]">
              <div
                className="float-left w-[70%]"
                style={{
                  shapeOutside: `polygon(
                    0% 0%,
                    65% 0%,
                    65% 70%,
                    95% 80%,
                    97% 86%,
                    87% 92%,
                    74% 96%,
                    74% 100%,
                    0% 100%
                  )`,
                  shapeMargin: "4px",
                }}
              >
                <Image
                  src="/images/cereal-box-bowl.png"
                  alt="The Cerealist cereal box and bowl, Vol. I"
                  width={1595}
                  height={1592}
                  className="w-full h-auto"
                />
              </div>
              As it turns out, that&apos;s not a small thing to lose. We brought it back,
              just <em>differently</em>. The Cerealist is the adult version of what cereal
              always was, something delicious and something entertaining, only now the
              entertainment grew up too. Instead of games and mascots, it&apos;s cartoons,
              commentary, and headlines.
            </div>
            <div className="clear-both" />
          </div>
        </article>

      </ContentContainer>
    </section>
  );
}
