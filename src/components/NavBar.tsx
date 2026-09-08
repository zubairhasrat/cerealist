"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ContentContainer from "./ui/ContentContainer";
import RuleLine from "./RuleLine";
import SubscribeButton from "./SubscribeButton";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cartoons", href: "#cartoons" },
  { label: "Contact the Desk", href: "/contact" },
];

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const navHeight = navRef.current?.offsetHeight ?? 60;

      if (current < navHeight) {
        // Near top — always show
        setVisible(true);
      } else if (current < lastScrollY.current) {
        // Scrolling up — show
        setVisible(true);
      } else if (current > lastScrollY.current + 4) {
        // Scrolling down — hide
        setVisible(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full sticky top-0 z-50 bg-paper transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
          <SubscribeButton
            size="desktop"
            className="relative text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[18px] lg:text-[24px] 2xl:text-[34px] leading-none h-[30px] lg:h-[34px] 2xl:h-[39px] px-[14px] lg:px-[20px] 2xl:px-[28px] flex items-center rounded-[5px] border border-ink shadow-[1px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-px hover:translate-y-px active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all whitespace-nowrap shrink-0 overflow-hidden cursor-pointer"
            style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
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
          <SubscribeButton
            size="mobile"
            className="relative text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[10px] xs:text-[11px] sm:text-[13px] leading-none h-[24px] xs:h-[26px] sm:h-[28px] px-[6px] xs:px-[8px] sm:px-[12px] flex items-center rounded-[4px] border border-ink shadow-[1px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-px hover:translate-y-px active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all whitespace-nowrap shrink-0 overflow-hidden"
            style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </ContentContainer>
      </div>

      <RuleLine strokeWidth={1.97435} color="var(--color-ink)" height={Math.ceil(1.97435)} />
    </nav>
  );
}
