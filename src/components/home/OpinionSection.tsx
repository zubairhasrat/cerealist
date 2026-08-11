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
          <div className="md:grid md:grid-cols-[5fr_6fr] md:gap-10 md:items-start">

            {/* Left: image (desktop only) */}
            <div className="hidden md:block">
              <Image
                src="/images/article-cereal-box-image.png"
                alt="The Cerealist cereal box, Vol. I"
                width={930}
                height={796}
                className="w-full h-auto"
              />
            </div>

            {/* Right: article text */}
            <div>
              {/* Drop cap body paragraph */}
              <div className="font-[family-name:var(--font-crimson)] text-[27px] md:text-[35px] text-ink-mid leading-[34px] md:leading-[43px]">
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

              {/* Pull quote */}
              <PullQuote text="It wasn't just breakfast. It was an experience." />

              {/* Continuation text with mobile float image */}
              <div className="font-[family-name:var(--font-crimson)] text-[24px] md:text-[34px] text-ink-mid leading-[32px] md:leading-[44px]">
                {/* Mobile: image floats right within continuation text */}
                <div className="md:hidden float-right ml-4 mb-2 w-[45%]">
                  <Image
                    src="/images/article-cereal-box-image.png"
                    alt="The Cerealist cereal box, Vol. I"
                    width={930}
                    height={796}
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

          </div>
        </article>

      </ContentContainer>
    </section>
  );
}
