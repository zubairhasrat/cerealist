"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentContainer from "./ui/ContentContainer";
import RuleLine from "./RuleLine";
import SubscribeButton from "./SubscribeButton";
import { useSubscriptionModal } from "@/contexts/SubscriptionModalContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Cartoons", href: "#cartoons" },
  { label: "Contact the Desk", href: "/contact" },
];

export default function NavBar() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useSubscriptionModal();

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel: when this leaves viewport, nav is stuck */}
      <div ref={sentinelRef} className="h-px" aria-hidden />

      <nav
        className={`sticky top-0 z-50 ${isStuck ? "-mx-3 md:-mx-6" : ""}`}
        style={
          isStuck
            ? {
                backgroundImage: "url('/images/paper-texture.png')",
                backgroundSize: "100% auto",
                backgroundRepeat: "repeat-y",
                backgroundColor: "var(--color-paper)",
              }
            : undefined
        }
      >
        {/* ── Desktop ─────────────────────────────────────────────── */}
        <div className={`hidden md:block ${isStuck ? "px-3 md:px-6" : ""}`}>
          <ContentContainer className="flex items-center justify-between py-[6px] gap-2">
            <span className="font-[family-name:var(--font-crimson)] font-semibold italic text-[16px] phone:text-[18px] lg:text-[20px] 2xl:text-[26px] leading-none text-ink shrink-0">
              Wednesday, March 25, 2026
            </span>

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

            <SubscribeButton
              size="desktop"
              className="relative text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[18px] lg:text-[24px] 2xl:text-[34px] leading-none h-[30px] lg:h-[34px] 2xl:h-[39px] px-[14px] lg:px-[20px] 2xl:px-[28px] flex items-center rounded-[5px] border border-ink shadow-[1px_3px_0px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all whitespace-nowrap shrink-0 overflow-hidden cursor-pointer"
              style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </ContentContainer>
        </div>

        {/* ── Mobile ──────────────────────────────────────────────── */}
        <div className={`flex md:hidden flex-col ${isStuck ? "px-3" : ""}`}>
          {/* Collapsed row: logo + hamburger/close */}
          <ContentContainer className="flex items-center justify-between py-[6px]">
            <Link href="/" aria-label="The Cerealist — Home">
              <Image
                src="/images/the-cerealist-text.png"
                alt="The Cerealist"
                width={293}
                height={57}
                className="h-[34px] phone:h-[38px] w-auto"
              />
            </Link>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="text-ink p-1"
            >
              {menuOpen ? (
                /* ✕ close icon */
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              ) : (
                /* ≡ hamburger icon */
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
                  <line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="9" x2="24" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="0" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </ContentContainer>

          {/* Expanded menu */}
          {menuOpen && (
            <ContentContainer className="pb-3 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-crimson)] text-[18px] leading-none text-ink"
              >
                Contact the Desk
              </Link>
              <button
                onClick={() => { setMenuOpen(false); open(); }}
                className="relative w-full text-cream-light font-[family-name:var(--font-crimson)] font-semibold text-[18px] leading-none h-[44px] flex items-center justify-center rounded-[5px] border border-ink shadow-[1px_3px_0px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all overflow-hidden cursor-pointer"
                style={{ backgroundImage: "url('/images/button-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
              >
                Get this Month&apos;s Issue
              </button>
            </ContentContainer>
          )}
        </div>

        <RuleLine strokeWidth={1.97435} color="var(--color-ink)" height={Math.ceil(1.97435)} />
      </nav>
    </>
  );
}
