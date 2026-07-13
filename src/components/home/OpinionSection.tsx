import SectionHeader from "@/components/SectionHeader";
import DropCap from "@/components/DropCap";

export default function OpinionSection() {
  return (
    <section className="pt-6 pb-6 border-b-2 border-ink">
      <SectionHeader label="Opinion" sublabel="The Editorial Side" center />

      <div className="grid grid-cols-[1fr_1px_1fr] gap-0 pt-6">
        {/* Left editorial */}
        <div className="pr-8">
          <h3 className="font-[family-name:var(--font-crimson)] font-bold text-[52px] leading-[1.0] tracking-[-1px] text-ink mb-3">
            It Was Never Just About the Cereal
          </h3>
          <p className="font-[family-name:var(--font-crimson)] italic text-[22px] leading-[1.3] text-ink-warm mb-4">
            How breakfast lost its stories, and what happened next.
          </p>
          <div className="border-t border-ink mb-3" />
          <p className="font-[family-name:var(--font-crimson)] font-semibold text-[14px] tracking-[2px] text-ink uppercase mb-4">
            By The Editorial Board
          </p>
        </div>

        <div className="bg-ink" />

        <div className="pl-8">
          <p className="font-[family-name:var(--font-crimson)] text-[22px] leading-[1.6] text-ink-mid mb-4">
            <DropCap letter="C" size="text-[56px]" />
            ereal used to be more than cereal. It was something you wanted to eat, and something
            you wanted to look at. Flavor, color, crunch, alongside games, stories, characters.
            It wasn&apos;t just breakfast. It was an <em>experience</em>.
          </p>
          <blockquote className="border-t border-b border-ink py-3 my-4 text-center">
            <p className="font-[family-name:var(--font-crimson)] italic text-[26px] text-ink-mid">
              &ldquo;It wasn&apos;t just breakfast. It was an experience.&rdquo;
            </p>
          </blockquote>
          <p className="font-[family-name:var(--font-crimson)] text-[22px] leading-[1.6] text-ink-mid">
            As it turns out, that&apos;s not a small thing to lose. We brought it back, just{" "}
            <em>differently</em>. The Cerealist is the adult version of what cereal always was,
            something delicious and something entertaining, only now the entertainment grew up too.
            Instead of games and mascots, it&apos;s cartoons, commentary, and headlines.
          </p>
        </div>
      </div>
    </section>
  );
}
