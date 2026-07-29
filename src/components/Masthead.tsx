import Image from "next/image";
import DoubleRule from "./DoubleRule";

export default function Masthead() {
  return (
    <header className="w-full bg-paper">
      {/* Top meta row — font 26px Bold, top-[14px] in Figma */}
      <div className="pt-[14px] pb-1 flex items-center justify-between font-[family-name:var(--font-crimson)] font-bold text-[26px] leading-none text-ink">
        <span>Vol. I &middot; No. 1</span>
        <span>CEREAL, GROWN UP.</span>
        <span>PRICE $19.99</span>
      </div>

      <DoubleRule thickWidth={2.96153} thinWidth={1.97435} />

      {/* Logo + badges row */}
      {/* Logo is absolutely centered; badges sit left/right independently */}
      <div className="relative flex items-center justify-around py-[6px]">
        {/* EST. 2026 — w-[86px] h-[79px], SemiBold 27px, Figma node 6587:869 */}
        <div className="border border-ink w-[86px] h-[79px] flex flex-col items-center justify-center shrink-0">
          <span className="font-[family-name:var(--font-crimson)] font-semibold text-[27px] leading-none text-ink">
            EST.
          </span>
          <span className="font-[family-name:var(--font-crimson)] font-semibold text-[27px] leading-none text-ink">
            2026
          </span>
        </div>

        {/* Logo — absolutely centered, h-[115px], rotate-[0.46deg] from Figma */}
        <h1 className="">
          <Image
            src="/images/the-cerealist-text.png"
            alt="The Cerealist"
            width={587}
            height={115}
            priority
            className="h-[115px] w-auto"
          />
        </h1>
        {/* MONTHLY EDITION — w-[158px] h-[79px], SemiBold 28.6px, Figma node 6587:875 */}
        <div className="border border-ink w-[158px] h-[79px] flex flex-col items-center justify-center shrink-0">
          <span className="font-[family-name:var(--font-crimson)] font-semibold text-[28px] leading-none text-ink tracking-wide">
            MONTHLY
          </span>
          <span className="font-[family-name:var(--font-crimson)] font-semibold text-[28px] leading-none text-ink tracking-wide">
            EDITION
          </span>
        </div>
      </div>
      <DoubleRule thickWidth={2.96153} thinWidth={1.97435} />
    </header>
  );
}
