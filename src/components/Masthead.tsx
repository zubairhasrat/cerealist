export default function Masthead() {
  return (
    <header className="w-full border-b-2 border-[#1e1e1e] bg-[#f1e9e4]">
      {/* Top meta row */}
      <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center justify-between text-[13px] font-semibold tracking-wide text-[#1e1e1e]">
        <span>Vol. I &middot; No. 1</span>
        <span className="tracking-[2px] uppercase text-[14px]">Cereal, Grown Up.</span>
        <span>Price $19.99</span>
      </div>

      {/* Double rule */}
      <div className="border-t border-[#1e1e1e] border-b border-b-[#1e1e1e] h-[3px] bg-[#1e1e1e] opacity-10" />
      <div className="border-t-2 border-[#1e1e1e]" />

      {/* Logo */}
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-center">
        <h1 className="font-[family-name:var(--font-crimson)] font-bold text-[72px] leading-none tracking-[-1px] text-[#1e1e1e] select-none">
          The Cerealist
        </h1>
      </div>

      {/* Sub-rule row */}
      <div className="border-t border-[#1e1e1e]" />
      <div className="max-w-[1440px] mx-auto px-6 py-1 flex items-center gap-6 text-[12px]">
        <span className="border border-[#1e1e1e] px-2 py-0.5 text-[11px] font-semibold leading-tight">
          EST.<br />2026
        </span>
        <span className="flex-1" />
        <span className="border border-[#1e1e1e] px-2 py-0.5 text-[11px] font-semibold leading-tight text-center">
          MONTHLY<br />EDITION
        </span>
      </div>
      <div className="border-t-2 border-[#1e1e1e]" />
    </header>
  );
}
