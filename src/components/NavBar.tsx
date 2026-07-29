import Link from "next/link";
import RuleLine from "./RuleLine";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cartoons", href: "#cartoons" },
  { label: "Contact the Desk", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav className="w-full bg-paper">
      {/* Content row — all items at same vertical center */}
      <div className="flex items-center justify-between py-[6px]">
        {/* Date — SemiBold Italic 25.7px, Figma node 6587:852 */}
        <span className="font-[family-name:var(--font-crimson)] font-semibold italic text-[26px] leading-none text-ink shrink-0">
          Wednesday, March 25, 2026
        </span>

        {/* Nav links — Regular 29px, gap-[43px] between all children, Figma node 6632:24 */}
        <div className="flex items-center gap-[43px]">
          {NAV_LINKS.map((item, i, arr) => (
            <span key={item.href} className="flex items-center gap-[43px]">
              <Link
                href={item.href}
                className="font-[family-name:var(--font-crimson)] text-[29px] leading-none text-ink hover:underline whitespace-nowrap"
              >
                {item.label}
              </Link>
              {i < arr.length - 1 && (
                <div className="w-px h-[20.5px] bg-ink shrink-0" />
              )}
            </span>
          ))}
        </div>

        {/* CTA — button-bg texture, black border, drop shadow, SemiBold 34px cream */}
        <Link
          href="/subscription"
          className="relative text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[34px] leading-none h-[39px] px-[28px] flex items-center rounded-[5px] border border-ink shadow-[1px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all whitespace-nowrap shrink-0 overflow-hidden"
          style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          SUBSCRIBE FOR $19/ MONTH
        </Link>
      </div>

      {/* Bottom rule — Figma node 6587:850 */}
      <RuleLine strokeWidth={2} height={2} />
    </nav>
  );
}
