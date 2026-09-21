import Image from "next/image";
import ContentContainer from "@/components/ui/ContentContainer";
import CTAButton from "@/components/CTAButton";
import PreviewIssueButton from "@/components/home/PreviewIssueButton";

export default function HeroSection() {
  return (
    <section className="bg-transparent">
      <ContentContainer className="xl:px-12">
        <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_596px] gap-6 xl:gap-8 pt-3 pb-5 md:py-12">

          {/* ── Left column ─────────────────────────────────────── */}
          <div>
            {/* Headline */}
            <h1 className="font-[family-name:var(--font-crimson)] font-semibold text-[42px] phone:text-[46px] md:text-[52px] lg:text-[65px] xl:text-[79px] leading-[93%] tracking-[-0.826px] text-ink text-center md:text-left">
              The Morning Paper, Now on Cereal.
            </h1>

            {/* Italic subtitle */}
            <p className="font-[family-name:var(--font-crimson)] italic text-[20px] phone:text-[24px] md:text-[26px] lg:text-[33px] xl:text-[40px] leading-[105%] md:leading-[1.15] xl:leading-[42px] text-ink-warm mt-2 text-center md:text-left">
              A monthly cereal for people who grew up, but never stopped liking cereal.
            </p>

            {/* Hairline rule */}
            <hr className="border-ink border mt-[10px] mb-[2px]" />
            <hr className="border-ink border mb-4" />

            {/* ── Mobile body text: image float + shape-outside + initial-letter drop cap ── */}
            {/* initial-letter: 2 is inline content so it respects shape-outside boundary,
                unlike a float which stacks at the visual box edge. */}
            <div className="md:hidden hero-body-mobile font-[family-name:var(--font-crimson)] text-[20px] phone:text-[23px] text-ink-mid leading-[26px] tracking-[-0.226px]">
              <div
                className="float-left w-[63%]"
                style={{
                  shapeOutside: `polygon(
                    0% 0%,
                    65% 0%,
                    65% 70%,
                    100% 80%,
                    100% 86%,
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
                  alt="The Cerealist cereal box and bowl"
                  width={1595}
                  height={1592}
                  className="w-full h-auto"
                />
              </div>
              Part breakfast, part cultural digest. Every box is filled with cereal, cartoons,
              commentary, and collectible front page energy that&apos;s meant to be read as
              much as it is eaten. Just like cereal always was, only now grown up. A new
              edition arrives every month, current with the headlines you woke up to. Read it
              over breakfast, then keep it. Each one is a small time capsule of the month it
              belongs to.
            </div>

            {/* ── Desktop body text ─────────────────────────────────────── */}
            <div className="hidden md:block font-[family-name:var(--font-crimson)] text-[22px] lg:text-[28px] xl:text-[35px] text-ink-mid leading-[30px] lg:leading-[36px] xl:leading-[43px]">
              <span
                aria-hidden="true"
                className="float-left font-[family-name:var(--font-crimson)] font-semibold text-[70px] lg:text-[90px] xl:text-[105px] leading-[0.8] tracking-[-0.02em] text-ink mr-1"
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

            {/* Price lockup + CTAs */}
            <div className="block">
              <hr className="border-ink mt-[10px] md:mt-6 mb-0 md:mb-1" />
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-[family-name:var(--font-crimson)] font-bold text-[28px] lg:text-[34px] xl:text-[40px] text-ink">
                  $19.99
                </span>
                <span className="font-[family-name:var(--font-crimson)] italic text-[20px] phone:text-[22px] lg:text-[26px] xl:text-[31px] text-ink-warm">
                  per monthly edition
                </span>
              </div>
              <hr className="border-ink mt-0 md:mt-1 mb-3" />

              <div className="flex flex-col gap-3">
                <CTAButton
                  href="/subscription"
                  variant="hero-dark"
                  size="full"
                  className="text-[26px] phone:text-[28px] lg:text-[36px] xl:text-[40px] px-8 py-3 text-center"
                >
                  Get this Month&apos;s Issue
                </CTAButton>
                <PreviewIssueButton className="text-[25px] phone:text-[28px] lg:text-[36px] xl:text-[40px px-8 py-3" />
              </div>
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
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </ContentContainer>
    </section>
  );
}
