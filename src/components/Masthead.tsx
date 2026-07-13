import DoubleRule from "./DoubleRule";
import RuleLine from "./RuleLine";

export default function Masthead() {
  return (
    <header className="w-full bg-paper">
      {/* Top meta row */}
      <div className="pt-2 flex items-center justify-between text-[18px] sm:text-[26px] font-bold text-black">
        <span>Vol. I &middot; No. 1</span>
        <span className="uppercase text-[13px] sm:text-[26px]">Cereal, Grown Up.</span>
        <span className="uppercase">Price $19.99</span>
      </div>

      <DoubleRule thickWidth={2.96153} thinWidth={1.97435} />

      {/* Logo */}
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-center">
        <h1 className="font-crimson font-bold text-[72px] leading-none tracking-[-1px] text-ink select-none">
          The Cerealist
        </h1>
      </div>

      {/* Sub-rule row */}
      <RuleLine strokeWidth={1} height={1} />
      <div className="max-w-[1440px] mx-auto px-6 py-1 flex items-center gap-6 text-[12px]">
        <span className="border border-ink px-2 py-0.5 text-[11px] font-semibold leading-tight">
          EST.<br />2026
        </span>
        <span className="flex-1" />
        <span className="border border-ink px-2 py-0.5 text-[11px] font-semibold leading-tight text-center">
          MONTHLY<br />EDITION
        </span>
      </div>
      <RuleLine strokeWidth={2} height={2} />
    </header>
  );
}
