import Image from "next/image";
import ContentContainer from "@/components/ui/ContentContainer";
import SectionHeader from "@/components/SectionHeader";
import RuleLine from "../RuleLine";
import PullQuote from "@/components/ui/PullQuote";
import DoubleRule from "../DoubleRule";

export default function OpinionSection() {
  return (
    <section className="bg-transparent">
      <ContentContainer>

        {/* Section header: single rule / label row / single rule */}
        <SectionHeader label="OPINION" sublabel="The Editorial Side" />

        <article className="mt-4 md:mt-9">

          {/* ── Article header (full-width, centered) ─────────────── */}
          <h2 className="font-[family-name:var(--font-crimson)] font-semibold text-[44px] phone:text-[50px] md:text-[54px] min-[900px]:text-[60px] lg:text-[64px] xl:text-[78px] text-ink text-center leading-[0.93] tracking-[-0.826px]">
            It Was Never Just About the Cereal
          </h2>
          <p className="font-[family-name:var(--font-crimson)] italic text-[22px] phone:text-[24px] md:text-[28px] min-[900px]:text-[32px] lg:text-[34px] xl:text-[40px] text-ink-warm text-center mt-2 md:mt-4 leading-[1.15]">
            How breakfast lost its stories, and what happened next.
          </p>
          <p className="font-[family-name:var(--font-crimson)] font-bold text-[14px] phone:text-[16px] md:text-[18px] min-[900px]:text-[21px] lg:text-[22px] xl:text-[30px] uppercase tracking-[0.6px] text-ink text-center mt-2 md:mt-4">
            BY THE EDITORIAL BOARD
          </p>

          <RuleLine className="mb-6 mt-2 md:hidden" />
          <DoubleRule className="hidden md:block mt-7 mb-6" />


          {/* ── Two-column body ───────────────────────────────────── */}
          {/* Desktop: Figma proportions — image 58%, text 42%, image overlaps text by ~15% */}
          {/* Grid: col1=43%, col2=15% (overlap zone), col3=rest. Image spans cols 1-2, text spans cols 2-3 */}
          <div className="hidden md:grid grid-cols-[43%_15%_1fr]">
            {/* Image: spans cols 1-2 (58% wide), drives row height */}
            <div className="col-start-1 col-end-3 row-start-1">
              <Image
                src="/images/cereal-box-bowl.png"
                alt="The Cerealist cereal box and bowl, Vol. I"
                width={1595}
                height={1592}
                className="w-full h-auto max-h-[795px]"
              />
            </div>

            {/* Text: spans cols 2-3, starts at 43%, overlaps image by 15% */}
            <div className="col-start-2 col-end-4 row-start-1 z-10 pt-3 md:pt-3 lg:pt-5 xl:pt-[30px]">
              {/* Drop cap body paragraph */}
              <div className="font-[family-name:var(--font-crimson)] text-[20px] min-[800px]:text-[22px] lg:text-[26px] xl:text-[35px] text-ink-mid leading-[1.25] max-w-full xl:max-w-[80%]">
                <span
                  aria-hidden="true"
                  className="float-left font-[family-name:var(--font-crimson)] font-semibold text-[65px] md:text-[48px] min-[900px]:text-[58px] lg:text-[65px] xl:text-[105px] leading-[0.83] tracking-[-0.02em] text-ink mr-1"
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
              <div className="font-[family-name:var(--font-crimson)] text-[20px] min-[800px]:text-[22px] lg:text-[26px] xl:text-[35px] text-ink-mid leading-[1.3] pr-2">
                {/* Invisible float: width = how far bowl extends into text column (~26% of col),
                    polygon traces bowl's right silhouette. marginTop accounts for the gap between
                    where continuation text starts and where the bowl first intrudes. */}
                <div className="xl:max-w-[70%]">
                  As it turns out, that&apos;s not a small thing to lose. We brought it back,
                  just <em>differently</em>. The Cerealist is the adult version of what
                </div>
                <div
                  aria-hidden="true"
                  className="float-left"
                  style={{
                    width: "36%",
                    height: "7em",
                    marginTop: "1.5em",
                    shapeOutside: `polygon(0% 0%, 0% 0%, 0% 0%, 0 0%, 32% 0%, 76% 32%, 78% 100%, 45% 100%, 0% 100%)`,
                    shapeMargin: "8px",
                  }}
                />
                cereal
                always was, something delicious and something entertaining, only now the
                entertainment grew up too. Instead of games and mascots, it&apos;s cartoons,
                commentary, and headlines.
              </div>
              <div className="clear-both" />
            </div>

          </div>

          {/* Mobile + Tablet: stacked layout */}
          <div className="md:hidden">
            {/* First paragraph — drop cap, full width */}
            <div className="font-[family-name:var(--font-crimson)] text-[23px] phone:text-[26px] text-ink-mid leading-7.25">
              <span
                aria-hidden="true"
                className="float-left font-[family-name:var(--font-crimson)] font-semibold text-[74px] phone:text-[80px] leading-[0.7] tracking-[-0.02em] text-ink mr-1"
              >
                C
              </span>
              ereal used to be more than cereal. It was something you wanted to eat, and
              something you wanted to look at. Flavor, color, crunch, alongside games,
              stories, characters. It wasn&apos;t just breakfast. It was an{" "}
              <em>experience</em>.
            </div>
            <div className="clear-both" />
            <PullQuote text="It wasn't just breakfast. It was an experience." classname="text-[27px] phone:text-[30px] px-6 mx-auto" />
            {/* Second paragraph — image float LEFT with polygon silhouette shape-outside.
                Float is 70% wide. Polygon right edge traces: box (~83% of float = 58%
                of container) then bowl shoulder/widest (~97% of float = 68% of container).
                Text wraps close to box at top, indents past bowl, goes full-width below. */}
            <div className="font-[family-name:var(--font-crimson)] text-[23px] phone:text-[26px] text-ink-mid leading-7.25">
              <div
                className="float-left w-[70%]"
                style={{
                  shapeOutside: `polygon(
                    0% 0%,
                    65% 0%,
                    65% 70%,
                    100% 80%,
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
