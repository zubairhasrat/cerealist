import Image from "next/image";
import ContentContainer from "./ui/ContentContainer";
import DoubleRule from "./DoubleRule";

export default function Masthead() {
  return (
    <header className="w-full">
      <ContentContainer>
        {/* Row 1: Vol. I · No. 1 | CEREAL, GROWN UP. | PRICE $19.99 */}
        <div className="pt-[10px] md:pt-[14px] pb-1 flex items-center justify-between font-[family-name:var(--font-crimson)] font-bold text-[11px] md:text-[26px] leading-none text-ink">
          <span>Vol. I &middot; No. 1</span>
          <span>CEREAL, GROWN UP.</span>
          <span>PRICE $19.99</span>
        </div>
      </ContentContainer>

      <DoubleRule thickWidth={2.96153} thinWidth={1.97435} />

      <ContentContainer>
        {/* Row 2: EST. 2026 badge | wordmark | MONTHLY EDITION badge */}
        <div className="flex items-center justify-between py-[4px] md:py-[6px]">
          {/* EST. 2026 */}
          <div className="border border-ink w-[44px] h-[40px] md:w-[86px] md:h-[79px] flex flex-col items-center justify-center shrink-0">
            <span className="font-[family-name:var(--font-crimson)] font-semibold text-[13px] md:text-[27px] leading-none text-ink">
              EST.
            </span>
            <span className="font-[family-name:var(--font-crimson)] font-semibold text-[13px] md:text-[27px] leading-none text-ink">
              2026
            </span>
          </div>

          {/* Wordmark */}
          <h1 className="flex justify-center flex-1 px-2">
            <Image
              src="/images/the-cerealist-text.png"
              alt="The Cerealist"
              width={587}
              height={115}
              priority
              className="h-[58px] md:h-[115px] w-auto"
            />
          </h1>

          {/* MONTHLY EDITION */}
          <div className="border border-ink w-[60px] h-[40px] md:w-[158px] md:h-[79px] flex flex-col items-center justify-center shrink-0">
            <span className="font-[family-name:var(--font-crimson)] font-semibold text-[10px] md:text-[28px] leading-none text-ink tracking-wide">
              MONTHLY
            </span>
            <span className="font-[family-name:var(--font-crimson)] font-semibold text-[10px] md:text-[28px] leading-none text-ink tracking-wide">
              EDITION
            </span>
          </div>
        </div>
      </ContentContainer>

      <DoubleRule thickWidth={2.96153} thinWidth={1.97435} />
    </header>
  );
}
