import CTAButton from "@/components/CTAButton";
import DropCap from "@/components/DropCap";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-[1fr_1px_480px] gap-0 pt-8 pb-6 border-b-2 border-ink">
      {/* Left: text */}
      <div className="pr-8">
        <h2 className="font-[family-name:var(--font-crimson)] font-bold text-[64px] leading-[1.0] tracking-[-1px] text-ink mb-4">
          The Morning Paper, Now on Cereal.
        </h2>
        <p className="font-[family-name:var(--font-crimson)] italic text-[28px] leading-[1.3] text-ink-warm mb-4">
          A monthly cereal for people who grew up, but never stopped liking cereal.
        </p>
        <div className="border-t border-ink mb-4" />
        <p className="font-[family-name:var(--font-crimson)] text-[22px] leading-[1.5] text-ink-mid mb-4">
          <DropCap letter="P" />
          art breakfast, part cultural digest. Every box is filled with cereal, cartoons
          commentary, and collectible front page energy that&apos;s meant to be read as
          much as it is eaten. Just like cereal always was, only now grown up. A new edition
          arrives every month, current with the headlines you woke up to. Read it over
          breakfast, then keep it. Each one is a small time capsule of the month it belongs to.
        </p>
        <div className="flex items-baseline gap-3 mb-5">
          <span className="font-[family-name:var(--font-crimson)] font-bold text-[32px] text-ink">$19.99</span>
          <span className="font-[family-name:var(--font-crimson)] italic text-[22px] text-ink-warm">per monthly edition</span>
        </div>
        <div className="border-t border-ink mb-5" />
        <div className="flex flex-col gap-3 max-w-[400px]">
          <CTAButton href="/subscription" variant="primary">
            Get this Month&apos;s Issue
          </CTAButton>
          <CTAButton href="/subscription" variant="secondary">
            Preview Last Month&apos;s Issue
          </CTAButton>
        </div>
      </div>

      {/* Column rule */}
      <div className="bg-ink" />

      {/* Right: cereal box placeholder */}
      <div className="pl-8 flex items-center justify-center">
        <div className="w-full aspect-[3/4] bg-gradient-to-b from-cream-fill to-cream-fill-dark border border-cream-border rounded-lg flex flex-col items-center justify-center gap-4 p-6">
          <div className="text-center">
            <p className="font-[family-name:var(--font-crimson)] font-bold text-[24px] text-ink">The Cerealist</p>
            <p className="font-[family-name:var(--font-crimson)] italic text-[16px] text-ink-mid">FOX Kicks Carbon to the Curb</p>
          </div>
          <div className="w-full h-px bg-cream-border" />
          <p className="font-[family-name:var(--font-crimson)] text-[14px] text-ink-mid text-center italic">
            [Cereal Box Image]
          </p>
          <div className="w-full h-px bg-cream-border" />
          <p className="font-[family-name:var(--font-crimson)] text-[13px] text-ink-mid text-center">
            Climate Policy Power Play<br />Turns &amp; So-Ons
          </p>
        </div>
      </div>
    </section>
  );
}
