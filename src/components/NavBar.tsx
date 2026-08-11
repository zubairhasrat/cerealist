import Link from "next/link";
import ContentContainer from "./ui/ContentContainer";
import DoubleRule from "./DoubleRule";

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
        <ContentContainer className="flex items-center justify-between py-[6px]">
          {/* Left: date — SemiBold Italic 25.7px */}
          <span className="font-[family-name:var(--font-crimson)] font-semibold italic text-[26px] leading-none text-ink shrink-0">
            Wednesday, March 25, 2026
          </span>

          {/* Center: nav links with vertical dividers */}
          <div className="flex items-center">
            {NAV_LINKS.map((item, i) => (
              <span key={item.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-[43px] w-px h-[20.5px] bg-paper shrink-0 block" />
                )}
                <Link
                  href={item.href}
                  className="font-[family-name:var(--font-crimson)] text-[29px] leading-none text-ink hover:opacity-75 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Right: SUBSCRIBE button with paper texture bg */}
          <Link
            href="/subscription"
            className="relative text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[34px] leading-none h-[39px] px-[28px] flex items-center rounded-[5px] border border-ink shadow-[1px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap shrink-0 overflow-hidden"
            style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            SUBSCRIBE FOR $19/ MONTH
          </Link>
        </ContentContainer>
      </div>

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <div className="flex md:hidden bg-paper">
        <ContentContainer className="flex items-center justify-between py-3">
          {/* Left: hamburger */}
          <button
            aria-label="Open menu"
            className="flex flex-col gap-[10px] shrink-0"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-[29px] h-[3px] bg-ink rounded-[10px]"
              />
            ))}
          </button>

          {/* Center: wordmark + tagline */}
          <div className="flex flex-col items-center">
            <span className="font-[family-name:var(--font-crimson)] font-bold text-2xl leading-none text-ink">
              The Cerealist
            </span>
            <span className="font-[family-name:var(--font-crimson)] italic text-base leading-none text-ink mt-1">
              Cereal, Grown Up.
            </span>
          </div>

          {/* Right spacer — keeps center truly centered */}
          <span className="w-[29px] shrink-0" aria-hidden />
        </ContentContainer>
      </div>

      <DoubleRule thickWidth={2.96153} thinWidth={1.97435} />
    </nav>
  );
}
