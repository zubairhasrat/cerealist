import Link from "next/link";
import ContentContainer from "./ui/ContentContainer";
import DoubleRule from "./DoubleRule";
import RuleLine from "./RuleLine";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cartoons", href: "#cartoons" },
  { label: "Contact the Desk", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav className="w-full">
      {/* ── Desktop ─────────────────────────────────────────────── */}
      <div className="hidden md:block">
        <ContentContainer className="flex items-center justify-between py-[6px] gap-2">
          {/* Left: date */}
          <span className="font-[family-name:var(--font-crimson)] font-semibold italic text-[16px] lg:text-[20px] 2xl:text-[26px] leading-none text-ink shrink-0">
            Wednesday, March 25, 2026
          </span>

          {/* Center: nav links with vertical dividers */}
          <div className="flex items-center">
            {NAV_LINKS.map((item, i) => (
              <span key={item.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-[16px] lg:mx-[28px] 2xl:mx-[43px] w-px h-[20.5px] bg-ink shrink-0 block" />
                )}
                <Link
                  href={item.href}
                  className="font-[family-name:var(--font-crimson)] text-[18px] lg:text-[23px] 2xl:text-[29px] leading-none text-ink hover:opacity-75 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Right: SUBSCRIBE button */}
          <Link
            href="/subscription"
            className="relative text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[18px] lg:text-[24px] 2xl:text-[34px] leading-none h-[30px] lg:h-[34px] 2xl:h-[39px] px-[14px] lg:px-[20px] 2xl:px-[28px] flex items-center rounded-[5px] border border-ink shadow-[1px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-px hover:translate-y-px transition-all whitespace-nowrap shrink-0 overflow-hidden"
            style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            SUBSCRIBE FOR $19/ MONTH
          </Link>
        </ContentContainer>
      </div>

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <div className="flex md:hidden">
        <ContentContainer className="flex items-center justify-between py-1 md:py-2">
          {/* Left: date */}
          <span className="font-[family-name:var(--font-crimson)] font-semibold italic text-[11px] xs:text-[13px] sm:text-[14px] leading-none text-ink shrink-0">
            Wednesday, March 25, 2026
          </span>

          {/* Right: SUBSCRIBE button */}
          <Link
            href="/subscription"
            className="relative text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[10px] xs:text-[11px] sm:text-[13px] leading-none h-[24px] xs:h-[26px] sm:h-[28px] px-[6px] xs:px-[8px] sm:px-[12px] flex items-center rounded-[4px] border border-ink shadow-[1px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-px hover:translate-y-px transition-all whitespace-nowrap shrink-0 overflow-hidden"
            style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            SUBSCRIBE FOR $19/ MONTH
          </Link>
        </ContentContainer>
      </div>

      {/* <DoubleRule thickWidth={2.96153} thinWidth={1.97435} /> */}
      <RuleLine strokeWidth={1.97435} color="var(--color-ink)" height={Math.ceil(1.97435)}  />
    </nav>
  );
}
