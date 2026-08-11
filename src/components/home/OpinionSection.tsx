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
          <h2 className="font-[family-name:var(--font-crimson)] font-semibold text-[41px] md:text-[79px] text-ink text-center leading-[0.93] tracking-[-0.02em]">
            It Was Never Just About the Cereal
          </h2>
          <p className="font-[family-name:var(--font-crimson)] italic text-[27px] md:text-[40px] text-ink-warm text-center mt-4">
            How breakfast lost its stories, and what happened next.
          </p>
          <p className="font-[family-name:var(--font-crimson)] font-bold text-[18px] md:text-[30px] uppercase tracking-[0.6px] text-ink text-left md:text-center mt-3">
            BY THE EDITORIAL BOARD
          </p>

          <DoubleRule className="my-6" />

          {/* ── Two-column body ───────────────────────────────────── */}
          {/* Desktop: Figma proportions — image 58%, text 42%, image overlaps text by ~15% */}
          <div className="relative hidden md:block">
            {/* Image: IN FLOW at 58% — drives container height */}
            <div className="w-[58%]">
              <Image
                src="/images/cereal-box-bowl.png"
                alt="The Cerealist cereal box and bowl, Vol. I"
                width={1595}
                height={1592}
                className="w-full h-auto"
              />
            </div>

            {/* Text: absolute, starts at 43% from left, overlaps image by 15% */}
            <div className="absolute top-[30px] left-[43%] right-0 z-10">
              {/* Drop cap body paragraph */}
              <div className="font-[family-name:var(--font-crimson)] text-[35px] text-ink-mid leading-[43px] max-w-[80%]">
                <span
                  aria-hidden="true"
                  className="float-left font-[family-name:var(--font-crimson)] font-semibold text-[105px] leading-[0.8] tracking-[-0.02em] text-ink mr-1"
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
              <div className="max-w-[70%]">
                <PullQuote text="It wasn't just breakfast. It was an experience." />
              </div>

              {/* Continuation text — 4 nodes matching Figma stagger */}
              <div className="font-[family-name:var(--font-crimson)] text-[34px] text-ink-mid leading-[44px]">
                {/* Figma 6643:213 — full width */}
                <span className="block max-w-[70%]">
                  As it turns out, that&apos;s not a small thing to lose. We brought it back,
                  just <em>differently</em>.
                </span>
                {/* Figma 6643:212 — full width */}
                <span className="block">
                  The Cerealist is the adult version of what
                </span>
                {/* Figma 6643:208 — indent 20% (x=786, col starts 630, col width 780) */}
                <span className="block pl-[20%]">
                  cereal always was, something delicious and
                </span>
                {/* Figma 6643:215 — indent 32% (x=882, col starts 630, col width 780) */}
                <span className="block pl-[32%]">
                  something entertaining, only now the entertainment grew up too.
                  Instead of games and mascots, it&apos;s cartoons, commentary, and headlines.
                </span>
              </div>
            </div>

          </div>

          {/* Mobile: stacked layout */}
          <div className="md:hidden">
            <div className="font-[family-name:var(--font-crimson)] text-[27px] text-ink-mid leading-[34px]">
              <div className="float-right ml-4 mb-2 w-[45%]">
                <Image
                  src="/images/cereal-box-bowl.png"
                  alt="The Cerealist cereal box and bowl, Vol. I"
                  width={1595}
                  height={1592}
                  className="w-full h-auto"
                />
              </div>
              <span
                aria-hidden="true"
                className="float-left font-[family-name:var(--font-crimson)] font-semibold text-[105px] leading-none tracking-[-0.02em] text-ink mr-1"
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
            <div className="font-[family-name:var(--font-crimson)] text-[24px] text-ink-mid leading-[32px]">
              As it turns out, that&apos;s not a small thing to lose. We brought it back,
              just <em>differently</em>. The Cerealist is the adult version of what cereal
              always was, something delicious and something entertaining, only now the
              entertainment grew up too. Instead of games and mascots, it&apos;s cartoons,
              commentary, and headlines.
            </div>
          </div>
        </article>

      </ContentContainer>
    </section>
  );
}
