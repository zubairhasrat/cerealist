import Image from "next/image";
import ContentContainer from "@/components/ui/ContentContainer";
import CTAButton from "@/components/CTAButton";

export default function HeroSection() {
  return (
    <section className="bg-transparent">
      <ContentContainer className="md:px-12">
        <div className="grid md:grid-cols-[1fr_596px] gap-8 py-8 md:py-12">

          {/* ── Left column ─────────────────────────────────────── */}
          <div>
            {/* Headline */}
            <h1 className="font-[family-name:var(--font-crimson)] font-semibold text-[41px] md:text-[79px] leading-none tracking-[-0.02em] text-ink text-center md:text-left">
              The Morning Paper, Now on Cereal.
            </h1>

            {/* Italic subtitle */}
            <p className="font-[family-name:var(--font-crimson)] italic text-[27px] md:text-[40px] md:leading-[42px] text-ink-warm mt-4 text-center md:text-left">
              A monthly cereal for people who grew up, but never stopped liking cereal.
            </p>

            {/* Hairline rule */}
            <hr className="border-ink my-4" />

            {/* Body text */}
            <div className="font-[family-name:var(--font-crimson)] text-[20px] md:text-[35px] text-ink-mid leading-[28px] md:leading-[43px]">
              {/* Mobile: image floats left within body text */}
              <div className="md:hidden float-left mr-3 mb-2 w-[38%]">
                <Image
                  src="/images/hero-image.png"
                  alt="The Cerealist newspaper mockup, Vol. I No. 1"
                  width={596}
                  height={824}
                  className="w-full h-auto"
                />
              </div>

              {/* Desktop: drop cap "P" */}
              <span
                aria-hidden="true"
                className="hidden md:inline-block float-left font-[family-name:var(--font-crimson)] font-semibold text-[105px] leading-[0.8] tracking-[-0.02em] text-ink mr-1"
              >
                P
              </span>

              art breakfast, part cultural digest. Every box is filled with cereal, cartoons,
              commentary, and collectible front page energy that&apos;s meant to be read as
              much as it is eaten. Just like cereal always was, only now grown up. A new
              edition arrives every month, current with the headlines you woke up to. Read it
              over breakfast, then keep it. Each one is a small time capsule of the month it
              belongs to.
            </div>

            <div className="clear-both" />

            {/* Price lockup */}
            <hr className="border-ink mt-4 md:mt-6 mb-3" />
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-[family-name:var(--font-crimson)] font-bold text-[28px] md:text-[40px] text-ink">
                $19.99
              </span>
              <span className="font-[family-name:var(--font-crimson)] italic text-[20px] md:text-[31px] text-ink-warm">
                per monthly edition
              </span>
            </div>
            <hr className="border-ink mt-3 mb-4 md:mb-6" />

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <CTAButton
                href="/subscription"
                variant="hero-dark"
                size="full"
                className="text-[23px] md:text-[39px] px-8 py-3 text-center"
              >
                Get this Month&apos;s Issue
              </CTAButton>
              <CTAButton
                href="/subscription"
                variant="hero-light"
                size="full"
                className="text-[23px] md:text-[39px] px-8 py-3 text-center"
              >
                Preview Last Month&apos;s Issue
              </CTAButton>
            </div>
          </div>

          {/* ── Right column (desktop only) ──────────────────────── */}
          <div className="hidden md:flex items-start justify-center">
            <Image
              src="/images/hero-image.png"
              alt="The Cerealist newspaper mockup, Vol. I No. 1"
              width={596}
              height={800}
              priority
              className="w-full h-[824px]"
            />
          </div>

        </div>
      </ContentContainer>
    </section>
  );
}
